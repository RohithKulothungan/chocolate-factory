# Frost Bomb

A creatively animated **preview** marketing website for the **Frost Bomb** one-day chocolate stall at Posh Fair 2026 — built from a single HTML file with no backend or checkout.

## Features

- Clear **preview-only** messaging — no false promises about ordering, delivery, or pre-orders
- Interactive **crack-the-chocolate** hero to preview flavours before fair day
- Full **formula-style menu** for all six stall products
- **On the day** section explaining in-person-only sales
- Playful preview poll (not a real vote or reservation)
- Fully responsive with `prefers-reduced-motion` support

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
npm run preview
```

The built site is a static `index.html` — deploy the `dist/` folder to any static host.

## Tech Stack

- Pure HTML, CSS, and vanilla JavaScript
- [Vite 8](https://vite.dev/) for dev server and production build
