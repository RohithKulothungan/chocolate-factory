# Frost Bomb

Pre-order interest site for the **Frost Bomb** one-day chocolate stall at Posh Fair 2026. Visitors log which flavours they want; orders are saved to **GitHub** so you can track demand by flavour.

## Features

- Pre-order form (name, contact, flavour, quantity, notes)
- **Live flavour counts** pulled from GitHub Issues (or `data/pre-orders.json`)
- Each submission creates a GitHub Issue labelled `pre-order` + `flavour:orange` etc.
- Fallback: opens a pre-filled GitHub issue if no API token is configured
- Full formula-style menu for all six products

## Setup GitHub logging (recommended)

1. Create a [fine-grained GitHub token](https://github.com/settings/tokens?type=beta) with:
   - **Issues:** Read and write
   - **Contents:** Read and write (optional — backs up to `data/pre-orders.json`)
   - Repository access: `chocolate-factory` only

2. Add the token to `public/frost-bomb-config.js`:
   ```javascript
   window.FROST_BOMB_CONFIG = {
     githubToken: 'github_pat_...',
     githubOwner: 'RohithKulothungan',
     githubRepo: 'chocolate-factory',
   };
   ```

3. View pre-orders:
   - **Issues:** https://github.com/RohithKulothungan/chocolate-factory/issues?q=label%3Apre-order
   - **JSON backup:** `data/pre-orders.json` in the repo

> Without a token, the form opens a pre-filled GitHub issue in a new tab — visitors must click Submit on GitHub.

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Tech Stack

- Pure HTML, CSS, and vanilla JavaScript
- GitHub Issues API + optional JSON file backup
- [Vite 8](https://vite.dev/) for dev server and production build
