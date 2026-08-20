# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Static site for Startup Weekend Nantes. Three versions live side-by-side:

- `2025-framer/` — legacy production site (Framer export).
- `2025/` — Astro + React rewrite.
- `startupweekendnantes.fr/` — Current edition.

Before creating a new website for a new event, please backup the legacy directory in a new `202x/` directory.

## `2025-framer/`

Pure HTML/CSS/JS exported from Framer. No build step.

Local preview:
```bash
docker run -it --rm -p 80:80 --name nginx -v $(pwd)/2025:/usr/share/nginx/html nginx
```

## `2025/`

Astro website.

## `startupweekendnantes.fr`

Astro website.

`startupweekendnantes.fr/` is currently deployed via Vercel (auto-deploys on push to `main`). 

## Analytics

GTM container `GTM-NQ2DKKPD` is injected in `<head>` on both the legacy (`2025-framer/`) and current (`startupweekendnantes.fr/`) sites. GA4 (`G-377KFTGYHV`) is only wired directly in `2025-framer/`; the current Astro site has no direct GA4 tag (only whatever's configured inside the GTM container).

`startupweekendnantes.fr/` also runs PostHog (product analytics, prod-only, proxied same-origin via `/ingest`) — see the "Analytics" section in `startupweekendnantes.fr/CLAUDE.md` for the full setup.

## Convention

Except if asked by the user, only update `startupweekendnantes.fr/`. Other directories are archives of previous years.

Use the `motion` library to create cool animations.
