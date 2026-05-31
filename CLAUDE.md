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
- `startupweekendnantes.fr/` — empty placeholder directory (not deployed).

## Deployment

Vercel deploys from the `legacy/` directory. The `vercel.json` config is co-located there. No CI pipeline; pushes to `main` trigger automatic deploys.

## Editing the site

The canonical editing path is via Framer (the HTML is generated). Direct edits to `legacy/index.html` are possible but will be overwritten on the next Framer export. Prefer editing in Framer and re-exporting, unless the change is a targeted hotfix (e.g. GTM ID, meta tags, sw.js).

## Analytics

GTM container `GTM-NQ2DKKPD` and GA4 property `G-377KFTGYHV` are injected in the `<head>` of `index.html`.
