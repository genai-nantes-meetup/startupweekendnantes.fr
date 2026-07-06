/**
 * Sponsors shown in the "Nos fervents partenaires" section.
 * `sponsorRows` is a 2D grid (rows of 3 logos each).
 * `bannerRow` is the wider banner row at the bottom.
 */

export type Sponsor = { name: string; img: string };

const BASE = '/assets/images/sponsors/';

export const sponsorRows: Sponsor[][] = [
  [
    { name: 'Nantes Métropole', img: `${BASE}sponsor-nantes-metropole.png` },
    { name: 'allovoisins', img: `${BASE}sponsor-allovoisins.png` },
    { name: 'Ordre des Experts-Comptables', img: `${BASE}sponsor-ordre-experts-comptables.svg` },
  ],
  [
    { name: 'crisp', img: `${BASE}sponsor-crisp.png` },
    { name: 'clever cloud', img: `${BASE}sponsor-clever-cloud.png` },
    { name: 'Guest Suite', img: `${BASE}sponsor-guest-suite.png` },
  ],
  [
    { name: 'kiliogene', img: `${BASE}sponsor-kiliogene.png` },
    {
      name: 'Réseau Entreprendre Atlantique',
      img: `${BASE}sponsor-reseau-entreprendre-atlantique.png`,
    },
    { name: 'Finalli', img: `${BASE}sponsor-finalli.png` },
  ],
];

export const bannerRow: Sponsor[] = [
  { name: 'icilundi', img: `${BASE}sponsor-icilundi.png` },
  { name: 'pépite Pays de la Loire', img: `${BASE}sponsor-pepite-pays-de-la-loire.png` },
  { name: 'Arzel', img: `${BASE}sponsor-arzel.png` },
];
