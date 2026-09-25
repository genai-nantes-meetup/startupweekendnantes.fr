/**
 * Sponsors shown in the "Nos fervents partenaires" section.
 * `sponsorRows` is a 2D grid (rows of 3 logos each), ordered by contribution.
 * `bannerRow` is the wider banner row at the bottom (in-kind partners — the
 * venue). Its cells share the row equally, whatever their number.
 *
 * Source : base Notion « Sponsors » (vue SWNA 2026) — only partners with an
 * amount in the SWNA-2026 column or an in-kind contribution are listed.
 *
 * `ratio` is the width/height of the cropped file, printed by
 * scripts/normalize-sponsor-logos.mjs. `logoHeight()` uses it so a stubby
 * square logo and a long wordmark end up with comparable optical weight —
 * sizing everything by height alone made the wide ones dwarf the rest.
 */

export type Sponsor = { name: string; img: string; ratio: number };

const BASE = '/assets/images/sponsors/';
/**
 * Cache-buster appended to every logo URL. /assets/* is served `immutable` for a
 * year, so a logo whose file changes under the same name stays stale in returning
 * visitors' browsers. Bump it whenever a logo file is replaced in place.
 */
const V = '?v=2026-09';

/** Reference height (px) of a logo whose cropped ratio is 1:1. */
const BASE_HEIGHT = 64;
/** How hard wide logos get pulled back: 0 = size by height only, 1 = equal area. */
const COMPENSATION = 0.3;
const MIN_HEIGHT = 40;
const MAX_HEIGHT = 62;

/** Display box for a logo, damping the ratio so no logo dominates the wall. */
export function logoBox(ratio: number): { width: number; height: number } {
  const raw = BASE_HEIGHT / Math.pow(ratio, COMPENSATION);
  const height = Math.round(Math.min(MAX_HEIGHT, Math.max(MIN_HEIGHT, raw)));
  return { width: Math.round(height * ratio), height };
}

export const sponsorRows: Sponsor[][] = [
  [
    { name: 'Nantes Métropole', img: `${BASE}sponsor-nantes-metropole.png${V}`, ratio: 3.19 },
    { name: 'Kiliogene', img: `${BASE}sponsor-kiliogene.png${V}`, ratio: 1.46 },
    {
      name: 'Ordre des Experts-Comptables Pays de la Loire',
      img: `${BASE}sponsor-ordre-experts-comptables.png${V}`,
      ratio: 4.86,
    },
  ],
  [
    { name: 'Clever Cloud', img: `${BASE}sponsor-clever-cloud.png${V}`, ratio: 4.01 },
    { name: 'Crisp', img: `${BASE}sponsor-crisp.png${V}`, ratio: 3.6 },
    { name: 'Lucca', img: `${BASE}sponsor-lucca.svg${V}`, ratio: 3.05 },
  ],
  [
    { name: 'Guest Suite', img: `${BASE}sponsor-guest-suite.png${V}`, ratio: 0.93 },
    {
      name: 'Kivo, incubateur Centrale Nantes, Audencia, Nantes Université',
      img: `${BASE}sponsor-kivo.svg${V}`,
      ratio: 4.82,
    },
    {
      name: 'Pépite Pays de la Loire',
      img: `${BASE}sponsor-pepite-pays-de-la-loire.png${V}`,
      ratio: 2.42,
    },
  ],
];

export const bannerRow: Sponsor[] = [
  { name: '_icilundi', img: `${BASE}sponsor-icilundi.png${V}`, ratio: 4.85 },
];
