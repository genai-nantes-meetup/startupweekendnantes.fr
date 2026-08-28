/**
 * Sponsors shown in the "Nos fervents partenaires" section.
 * `sponsorRows` is a 2D grid (rows of 3 logos each).
 * `bannerRow` is the wider banner row at the bottom.
 *
 * `ratio` is the width/height of the cropped file, printed by
 * scripts/normalize-sponsor-logos.mjs. `logoHeight()` uses it so a stubby
 * square logo and a long wordmark end up with comparable optical weight —
 * sizing everything by height alone made the wide ones dwarf the rest.
 */

export type Sponsor = { name: string; img: string; ratio: number };

const BASE = '/assets/images/sponsors/';

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
    { name: 'Nantes Métropole', img: `${BASE}sponsor-nantes-metropole.png`, ratio: 3.19 },
    { name: 'allovoisins', img: `${BASE}sponsor-allovoisins.svg`, ratio: 5.77 },
    {
      name: 'Ordre des Experts-Comptables Pays de la Loire',
      img: `${BASE}sponsor-ordre-experts-comptables.png`,
      ratio: 4.86,
    },
  ],
  [
    { name: 'crisp', img: `${BASE}sponsor-crisp.png`, ratio: 4.01 },
    { name: 'clever cloud', img: `${BASE}sponsor-clever-cloud.png`, ratio: 0.93 },
    { name: 'Guest Suite', img: `${BASE}sponsor-guest-suite.png`, ratio: 3.6 },
  ],
  [
    { name: 'kiliogene', img: `${BASE}sponsor-kiliogene.png`, ratio: 4.02 },
    {
      name: 'Réseau Entreprendre Atlantique',
      img: `${BASE}sponsor-reseau-entreprendre-atlantique.png`,
      ratio: 1.24,
    },
    { name: 'Finalli', img: `${BASE}sponsor-finalli.png`, ratio: 1.46 },
  ],
];

export const bannerRow: Sponsor[] = [
  { name: 'icilundi', img: `${BASE}sponsor-icilundi.png`, ratio: 2.42 },
  {
    name: 'pépite Pays de la Loire',
    img: `${BASE}sponsor-pepite-pays-de-la-loire.png`,
    ratio: 1.04,
  },
  { name: 'Arzel', img: `${BASE}sponsor-arzel.png`, ratio: 4.85 },
];
