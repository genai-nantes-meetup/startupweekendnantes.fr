# CLAUDE.md — `startupweekendnantes.fr/` (Astro rewrite)

Astro 5 + React 19 + TypeScript. Static output (no SSR). All assets local — `framerusercontent.com` and any external CDN URLs are forbidden.

Don't use worktrees for this directory.

## Structure

- `src/pages/index.astro` — single page, imports and assembles all section components.
- `src/layouts/Layout.astro` — head/meta/GTM/fonts + motion animations (via `motion` package).
- `src/components/*.tsx` — one component per section, paired with `<Component>.css`.
- `src/styles/global.css` — base styles, CSS custom properties, font imports.
- `public/assets/images/` — all images, sorted into per-section folders (`speakers/`, `orga/`, `sponsors/`, `venue/`, `intro/`, `hero/`, `welcome/`, `pricing/`, `brand/`). Profile pictures are named after the person (e.g. `speakers/thomas-matthieu.jpeg`). Served at `/assets/images/<folder>/<name>`.
- `public/*.woff2` — font files.
- `tests/visual.spec.ts` — Playwright visual regression (legacy vs astro, all sections).
- `vercel.json` — build config for Vercel.

Local dev:
```bash
cd startupweekendnantes.fr
npm install
npm run dev   # port 4323
```

## Coding conventions

### Data over repetition

When a component renders the same HTML block multiple times with different data (team members, FAQ items, sponsors, agenda rows…), extract the data into an array and render with a loop. Never repeat JSX blocks — put the data at the top, loop once.

```tsx
const members = [
  { name: 'Thomas Matthieu', role: 'CEO @ Guest Suite', img: '/assets/images/speakers/thomas-matthieu.jpeg' },
  { name: 'Claire Bretton',  role: 'CEO @ Underdog',   img: '/assets/images/speakers/claire-bretton.jpeg' },
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

All images served from `/assets/images/`, organised into per-section folders
(`speakers/`, `orga/`, `sponsors/`, `venue/`, `intro/`, `hero/`, `welcome/`,
`pricing/`, `brand/`). Profile pictures are named after the person. To add a new image:
1. Drop the file in the relevant `public/assets/images/<section>/` folder.
2. Reference as `/assets/images/<section>/<filename>`.

Never link to `framerusercontent.com` or any external CDN.

### Hydration

Components are static by default. Use `client:load` / `client:visible` on Astro side only for components with state or interactivity (currently only `<FAQ client:load />`).
