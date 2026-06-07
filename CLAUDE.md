# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Static site for Startup Weekend Nantes. Two versions live side-by-side:

- `legacy/` — current production site (Framer export, deployed on Vercel).
- `startupweekendnantes.fr/` — Astro + React rewrite (not yet deployed). All assets self-hosted, no Framer runtime dependency.

## Structure

### `legacy/` (deployed)

Pure HTML/CSS/JS exported from Framer. No build step.

- `index.html` — monolithic HTML (~600 KB), inlined styles + JS.
- `assets/` — fonts, images, bundled JS chunks.
- `sw.js` — service worker that fixes SVG MIME types via URL rewriting.
- `vercel.json` — `cleanUrls` + no `trailingSlash`.

Local preview:
```bash
docker run -it --rm -p 80:80 --name nginx -v $(pwd)/legacy:/usr/share/nginx/html nginx
```

### `startupweekendnantes.fr/` (rewrite)

Astro 5 + React 19 + TypeScript. Static output (no SSR). All assets local — `framerusercontent.com` URLs are forbidden.

- `src/pages/index.astro` — single page, imports and assembles all section components.
- `src/layouts/Layout.astro` — head/meta/GTM/fonts + motion animations (via `motion` package).
- `src/components/*.tsx` — one component per section, paired with `<Component>.css`.
- `src/styles/global.css` — base styles, CSS custom properties, font imports.
- `public/images/` — all images (downloaded from Framer, served at `/images/<hash>.<ext>`).
- `public/*.woff2` — font files.
- `tests/visual.spec.ts` — Playwright visual regression (legacy vs astro, all sections).
- `vercel.json` — build config for Vercel.

Local dev:
```bash
cd startupweekendnantes.fr
npm install
npm run dev   # port 4323
```

## Deployment

`legacy/` is currently deployed via Vercel (auto-deploys on push to `main`). The Astro rewrite is not yet wired to deployment.

## Analytics

GTM container `GTM-NQ2DKKPD` and GA4 `G-377KFTGYHV` injected in `<head>` (both legacy and Astro).

## Coding conventions (Astro rewrite)

### Data over repetition

When a component renders the same HTML block multiple times with different data (team members, FAQ items, sponsors, agenda rows…), extract the data into an array and render with a loop. Never repeat JSX blocks — put the data at the top, loop once.

```tsx
const members = [
  { name: 'Thomas Matthieu', role: 'CEO @ Guest Suite', img: '/images/...' },
  { name: 'Claire Bretton',  role: 'CEO @ Underdog',   img: '/images/...' },
];

members.map(m => (
  <div key={m.name} className="member-card">
    <img src={m.img} alt={m.name} />
    <h6>{m.name}</h6>
    <p>{m.role}</p>
  </div>
));
```

### Styling: CSS per component

No Tailwind, no CSS-in-JS. Each component has its own `<Component>.css` file (e.g. `Hero.tsx` ↔ `Hero.css`). Shared variables and base styles live in `src/styles/global.css`.

Inline `style={...}` only for values that come from runtime data (e.g. dynamic colors from a data array). Static styles always go in `.css`.

### Assets

All images served from `/images/`. To add a new image:
1. Drop the file in `public/images/`.
2. Reference as `/images/<filename>`.

Never link to `framerusercontent.com` or any external CDN.

### Hydration

Components are static by default. Use `client:load` / `client:visible` on Astro side only for components with state or interactivity (currently only `<FAQ client:load />`).
