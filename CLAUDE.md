# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Static site for Startup Weekend Nantes. Three versions live side-by-side:

- `2025/` — legacy production site (Framer export).
- `startupweekendnantes.fr/` — Astro + React rewrite (not yet deployed).

## `2025/`

Pure HTML/CSS/JS exported from Framer. No build step.

Local preview:
```bash
docker run -it --rm -p 80:80 --name nginx -v $(pwd)/2025:/usr/share/nginx/html nginx
```

## startupweekendnantes.fr

`startupweekendnantes.fr/` is currently deployed via Vercel (auto-deploys on push to `main`). The Astro rewrite is not yet wired to deployment.

## Analytics

GTM container `GTM-NQ2DKKPD` and GA4 `G-377KFTGYHV` injected in `<head>` (both legacy and Astro).

## Convention

Except if asked by the user, only update `shift-hackathon.com/`. Other directories are archives of previous years.
