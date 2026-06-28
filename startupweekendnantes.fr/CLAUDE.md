# CLAUDE.md — `startupweekendnantes.fr/` (Astro rewrite)

Astro 5 + React 19 + TypeScript. Static output (no SSR). All assets local — `framerusercontent.com` and any external CDN URLs are forbidden.

Don't use worktrees for this directory.

## Structure

- `src/pages/index.astro` — single page, imports and assembles all section components.
- `src/pages/404.astro` — not-found page.
- `src/layouts/Layout.astro` — head/meta/GTM/fonts + motion animations (via `motion` package).
- `src/components/*.tsx` — one component per section, paired with `<Component>.css`.
- `src/data/*.ts` — all content data (see "Data lives in `src/data/`" below).
- `src/styles/global.css` — base styles, CSS custom properties, font imports.
- `public/assets/images/` — all images, sorted into per-section folders (`speakers/`, `orga/`, `sponsors/`, `venue/`, `intro/`, `hero/`, `welcome/`, `pricing/`, `brand/`). Profile pictures are named after the person (e.g. `speakers/thomas-matthieu.jpeg`). Served at `/assets/images/<folder>/<name>`.
- `public/*.woff2` — font files.
- `tests/visual.spec.ts`, `tests/compare.spec.ts` — Playwright visual regression (legacy vs astro, all sections).
- `astro.config.mjs` — `site`, dev port `4323`, React + sitemap integrations, React dedupe (forces a single React copy so `motion` doesn't bundle its own).
- `vercel.json` — build config for Vercel.

## Commands

```bash
cd startupweekendnantes.fr
npm install
npm run dev          # dev server on port 4323
npm run build        # static build to dist/
npm run lint         # eslint src   (lint:fix to autofix)
npm run typecheck    # astro check
npm run check        # lint + typecheck + build (run before pushing)
npm run test:visual  # Playwright visual regression
```

## Coding conventions

### Data lives in `src/data/`

Content data is **never** inlined in components — it lives in dedicated modules under `src/data/`, typed and exported, then imported by the matching component. When a component renders the same HTML block multiple times with different data (team, FAQ, sponsors, agenda rows…), the data array goes in `src/data/`, the component imports it and loops once. Never repeat JSX blocks.

```tsx
// src/data/edition_speakers.ts
export type Speaker = { name: string; role: string; img: string };
export const speakers: Speaker[] = [
  { name: 'Thomas Matthieu', role: 'CEO @ Guest Suite', img: '/assets/images/speakers/thomas-matthieu.jpeg' },
];

// src/components/Team.tsx
import { speakers } from '../data/edition_speakers';
speakers.map(s => (
  <div key={s.name} className="member-card">
    <img src={s.img} alt={s.name} />
    <h6>{s.name}</h6>
    <p>{s.role}</p>
  </div>
));
```

Modules whose content changes every year carry the `edition_` prefix (`edition.ts`, `edition_speakers.ts`, `edition_partners.ts`, `edition_pricing.ts`, `edition_schedule.ts`); stable data does not (`faq.ts`, `team.ts`, `venue.ts`, `videos.ts`).

### `edition.ts` is the single source of truth

`src/data/edition.ts` exports `EDITION` — year, dates, ticket URL, contact email, derived date strings and pre-built agenda day headers. Hero `<h1>`, Footer ©, Agenda labels, SEO meta and the ticket link are all derived from it. **To roll the site over to a new year, edit `edition.ts` (and the other `edition_*` data files) only** — never hardcode a date or year in a component.

### Styling: CSS per component

No Tailwind, no CSS-in-JS. Each component has its own `<Component>.css` file (e.g. `Hero.tsx` ↔ `Hero.css`). Shared variables and base styles live in `src/styles/global.css`.

Inline `style={...}` only for values that come from runtime data (e.g. dynamic colors from a data array). Static styles always go in `.css`.

### Assets

All images served from `/assets/images/`, organised into per-section folders
(`speakers/`, `orga/`, `sponsors/`, `venue/`, `intro/`, `hero/`, `welcome/`,
`pricing/`, `brand/`). Profile pictures are named after the person. To add a new image:
1. Drop the file in the relevant `public/assets/images/<section>/` folder.
2. Reference as `/assets/images/<section>/<filename>`.

Never link to `framerusercontent.com` or any external CDN.

### Hydration

Components are static by default. Use `client:load` / `client:visible` on Astro side only for components with state or interactivity (currently only `<FAQ client:load />`).
