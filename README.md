# Frost Bomb

Promotional preview site for the **Frost Bomb** one-day chocolate stall at **Posh Fair 2026**.

This is **not a shop** — there is no cart, checkout, or online payment. Visitors can preview the menu, interact with the crack animation, and learn what to expect at the stall on fair day.

## Features

- Interactive **crack animation** — tap to preview what's inside each flavour
- Formula-style **menu** for all six Frost Bomb products
- Stall-day info, gift-friendly picks, and the Secret Bite Challenge
- Live **interest poll** — shared counts for all six flavours (not an order)
- Frost Bomb theme: orange/cream/chocolate palette, Bebas Neue + Outfit typography

## Interest poll

Visitors tap any flavour to log interest. Counts are shared live via `/api/poll`.

- Storage: `data/interest-poll.json` in this repo
- **Railway:** set `GITHUB_TOKEN` (fine-grained token with **Contents: Read and write** on this repo) so votes persist for everyone across deploys

```bash
GITHUB_OWNER=RohithKulothungan
GITHUB_REPO=chocolate-factory
GITHUB_TOKEN=github_pat_...
```

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:4173

## Build & Deploy

```bash
npm run build
npm start
```

## Tech Stack

- Pure HTML, CSS, and vanilla JavaScript
- [Express](https://expressjs.com/) API for live interest counts
- [Vite 8](https://vite.dev/) for production build
