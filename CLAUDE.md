# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Static site for Startup Weekend Nantes, exported from Framer and deployed on Vercel. No build step — the site is pure HTML/CSS/JS with all assets inlined or bundled at export time.

## Local development

```bash
docker run -it --rm -p 80:80 --name nginx -v $(pwd)/legacy:/usr/share/nginx/html nginx
```

The site is then available at `http://localhost`.

## Structure

- `legacy/` — the deployable static site (Framer export). This is the root served by Vercel and nginx.
  - `index.html` — monolithic HTML file (~600 KB), contains all markup, styles, and JS inlined by Framer.
  - `assets/` — fonts, images, and bundled JS chunks referenced by index.html.
  - `sw.js` — service worker that rewrites SVG URLs with encoded `?` to clean paths to fix MIME type issues.
  - `vercel.json` — enables `cleanUrls` and disables `trailingSlash`.
- `startupweekendnantes.fr/` — React rewrite of the site (not yet deployed). Mirrors the Framer export structure with clean, maintainable components.
  - `src/components/` — one TSX file per section (Hero, Team, FAQ, Agenda, …).
  - `src/styles/` — `framer.css` (Framer global styles), `breakpoints.css` (responsive utilities), `fonts.css`.
  - `src/App.tsx` / `src/Main.tsx` — root component and layout wrapper.

## Deployment

Vercel deploys from the `legacy/` directory. The `vercel.json` config is co-located there. No CI pipeline; pushes to `main` trigger automatic deploys.

## Editing the site

The canonical editing path is via Framer (the HTML is generated). Direct edits to `legacy/index.html` are possible but will be overwritten on the next Framer export. Prefer editing in Framer and re-exporting, unless the change is a targeted hotfix (e.g. GTM ID, meta tags, sw.js).

## Analytics

GTM container `GTM-NQ2DKKPD` and GA4 property `G-377KFTGYHV` are injected in the `<head>` of `index.html`.

## React components (`startupweekendnantes.fr/`)

The `startupweekendnantes.fr/` directory contains a React rewrite of the site (not yet deployed). Components mirror the Framer export structure.

### Data over repetition

When a component renders the same HTML block multiple times with different data (team members, FAQ items, sponsors, agenda rows…), extract the data into an array and render with a loop. Never repeat JSX blocks — put the data at the top, loop once.

```tsx
// ❌ repeated blocks
<div className="framer-kupskb">
  <figure ...><img src="thomas.jpg" /></figure>
  <h6>Thomas Matthieu</h6>
  <p>CEO @ Guest Suite</p>
</div>
<div className="framer-jvcfrj">
  <figure ...><img src="claire.jpg" /></figure>
  <h6>Claire Bretton</h6>
  <p>CEO @ Underdog</p>
</div>

// ✅ data + loop
const members = [
  { containerClass: 'framer-kupskb', name: 'Thomas Matthieu', role: 'CEO @ Guest Suite', img: '...' },
  { containerClass: 'framer-jvcfrj', name: 'Claire Bretton',  role: 'CEO @ Underdog',   img: '...' },
];
members.map(m => <MemberCard key={m.containerClass} {...m} />)
```

### Responsive approach: CSS over SSR variants

**Never use Framer's `ssr-variant hidden-*` pattern.** Framer generates duplicate HTML for each breakpoint and hides 2 of 3 with CSS classes. Use native CSS instead.

Breakpoints (defined in `src/styles/breakpoints.css`):
- Mobile: `max-width: 767.98px`
- Tablet: `min-width: 768px and max-width: 1239.98px`
- Desktop: `min-width: 1240px`

**Images**: use a single `<img>` with `sizes` + `srcset`. The browser picks the right source natively. Drop `data-framer-original-sizes` (Framer metadata, not used by browsers).

**Text alignment / font size**: Framer controls these via CSS custom properties (`--framer-text-alignment`, `--framer-font-size`) consumed by `framer.css`. Override them with media queries using utility classes from `src/styles/breakpoints.css`:

```tsx
// ❌ Framer pattern — duplicate HTML
<div className="ssr-variant hidden-1or7vws">
  <h2>Title</h2>
</div>
<div className="ssr-variant hidden-1eym36j hidden-72rtr7">
  <h2 style={{ '--framer-text-alignment': 'center' }}>Title</h2>
</div>

// ✅ CSS approach — single element
<h2 className="center-mobile">Title</h2>
```

Available utility classes (add to `src/styles/breakpoints.css` as needed):
- `.center-mobile` — `--framer-text-alignment: center` on mobile only
- `.center-nondesktop` — `--framer-text-alignment: center` on tablet + mobile
- `.font-sm-nondesktop` — `--framer-font-size: 15px` on tablet + mobile (vs 18px desktop)
