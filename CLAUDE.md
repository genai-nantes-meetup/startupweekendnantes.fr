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

GTM container `GTM-NQ2DKKPD` and GA4 `G-377KFTGYHV` injected in `<head>` (both legacy and Astro).

## Convention

Except if asked by the user, only update `shift-hackathon.com/`. Other directories are archives of previous years.
