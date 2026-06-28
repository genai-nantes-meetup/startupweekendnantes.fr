# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Static site for Startup Weekend Nantes. Three versions live side-by-side:

- `2025/` — current production site (Framer export, deployed on Vercel).
- `startupweekendnantes.fr/` — Astro + React rewrite (not yet deployed). See its own `CLAUDE.md`.

## `2025/`

Pure HTML/CSS/JS exported from Framer. No build step.

- `index.html` — monolithic HTML (~600 KB), inlined styles + JS.
- `assets/` — fonts, images, bundled JS chunks.
- `sw.js` — service worker that fixes SVG MIME types via URL rewriting.
- `vercel.json` — `cleanUrls` + no `trailingSlash`.

Local preview:
```bash
docker run -it --rm -p 80:80 --name nginx -v $(pwd)/2025:/usr/share/nginx/html nginx
```

## startupweekendnantes.fr

`startupweekendnantes.fr/` is currently deployed via Vercel (auto-deploys on push to `main`). The Astro rewrite is not yet wired to deployment.

## Analytics

GTM container `GTM-NQ2DKKPD` and GA4 `G-377KFTGYHV` injected in `<head>` (both legacy and Astro).
