import express from 'express';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT) || 4173;
const IS_PROD = process.env.NODE_ENV === 'production';
const STATIC_DIR = IS_PROD ? path.join(__dirname, 'dist') : __dirname;
const POLL_FILE = path.join(__dirname, 'data', 'interest-poll.json');
const GITHUB_OWNER = process.env.GITHUB_OWNER || 'RohithKulothungan';
const GITHUB_REPO = process.env.GITHUB_REPO || 'chocolate-factory';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || '';
const POLL_PATH = 'data/interest-poll.json';

const FLAVOURS = ['orange', 'mixed-nuts', 'peanut-butter', 'milk-mini', 'jam', 'pineapple'];

const DEFAULT_POLL = {
  counts: Object.fromEntries(FLAVOURS.map((id) => [id, 0])),
  totalVotes: 0,
  updatedAt: null,
};

function normalizePoll(raw) {
  const counts = { ...DEFAULT_POLL.counts, ...(raw?.counts || {}) };
  FLAVOURS.forEach((id) => {
    counts[id] = Math.max(0, Number(counts[id]) || 0);
  });
  const totalVotes = FLAVOURS.reduce((sum, id) => sum + counts[id], 0);
  return {
    counts,
    totalVotes,
    updatedAt: raw?.updatedAt || null,
  };
}

function readPollLocal() {
  if (!existsSync(POLL_FILE)) {
    return { poll: normalizePoll(DEFAULT_POLL), sha: null };
  }
  return { poll: normalizePoll(JSON.parse(readFileSync(POLL_FILE, 'utf8'))), sha: null };
}

function writePollLocal(poll) {
  mkdirSync(path.dirname(POLL_FILE), { recursive: true });
  writeFileSync(POLL_FILE, `${JSON.stringify(poll, null, 2)}\n`);
}

async function readPollFromGitHub() {
  const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${POLL_PATH}`;
  const response = await fetch(url, {
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });
  if (!response.ok) throw new Error(`GitHub read failed (${response.status})`);
  const payload = await response.json();
  const poll = normalizePoll(JSON.parse(Buffer.from(payload.content, 'base64').toString('utf8')));
  return { poll, sha: payload.sha };
}

async function writePollToGitHub(poll, sha) {
  const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${POLL_PATH}`;
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
      'X-GitHub-Api-Version': '2022-11-28',
    },
    body: JSON.stringify({
      message: `Interest poll update (${poll.totalVotes} total)`,
      content: Buffer.from(`${JSON.stringify(poll, null, 2)}\n`).toString('base64'),
      sha,
    }),
  });
  if (!response.ok) throw new Error(`GitHub write failed (${response.status})`);
}

async function loadPoll() {
  if (GITHUB_TOKEN) {
    try {
      return await readPollFromGitHub();
    } catch (error) {
      console.warn('Falling back to local poll file:', error.message);
    }
  }
  return readPollLocal();
}

async function savePoll(poll, sha) {
  poll.updatedAt = new Date().toISOString();
  if (GITHUB_TOKEN && sha) {
    await writePollToGitHub(poll, sha);
    return;
  }
  writePollLocal(poll);
}

const app = express();
app.use(express.json());

app.get('/api/poll', async (_req, res) => {
  try {
    const { poll } = await loadPoll();
    res.json(poll);
  } catch (error) {
    res.status(500).json({ error: 'Could not load poll results.' });
  }
});

app.post('/api/poll', async (req, res) => {
  const flavour = req.body?.flavour;
  if (!FLAVOURS.includes(flavour)) {
    res.status(400).json({ error: 'Unknown flavour.' });
    return;
  }

  try {
    const { poll, sha } = await loadPoll();
    poll.counts[flavour] += 1;
    poll.totalVotes = FLAVOURS.reduce((sum, id) => sum + poll.counts[id], 0);
    await savePoll(poll, sha);
    res.json(poll);
  } catch (error) {
    console.error('Poll vote failed:', error);
    res.status(500).json({ error: 'Could not save your interest right now.' });
  }
});

app.use(express.static(STATIC_DIR, { index: 'index.html' }));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Frost Bomb server listening on ${PORT} (${IS_PROD ? 'production' : 'development'})`);
});
