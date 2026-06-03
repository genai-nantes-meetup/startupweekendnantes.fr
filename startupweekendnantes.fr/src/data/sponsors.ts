/**
 * Sponsors shown in the "Nos fervents partenaires" section.
 * `sponsorRows` is a 2D grid (rows of 3 logos each).
 * `bannerRow` is the wider banner row at the bottom.
 */

export type Sponsor = { name: string; img: string };

const BASE = '/images/';

export const sponsorRows: Sponsor[][] = [
  [
    { name: 'Nantes Métropole', img: `${BASE}hEoUoeabKge2WBaQJP62xwnrEEQ.png` },
    { name: 'allovoisins', img: `${BASE}mowMp6Vf0kSPXZHQB9N5E.png` },
    { name: 'Ordre des Experts-Comptables', img: `${BASE}iTUR9jaNQ4EbeYEHbPH5vUWxRQ.svg` },
  ],
  [
    { name: 'crisp', img: `${BASE}xgqZP9NFB8rOgqvLhHUkyDYRJYU.png` },
    { name: 'clever cloud', img: `${BASE}C7lvJXp3dybbCUCltGehqzDyw4.png` },
    { name: 'Guest Suite', img: `${BASE}f4AyPqq1hjMZxQxCR0mkLhZ7Q.png` },
  ],
  [
    { name: 'kiliogene', img: `${BASE}2OyxeqKFVJBlpaZYbucB087OteU.png` },
    { name: 'Réseau Entreprendre Atlantique', img: `${BASE}44iQIZPqRkD7728oDk6fVdVgQ.png` },
    { name: 'Finalli', img: `${BASE}Q7FknPV2hRB0NaQJVTxDxhqy1ok.png` },
  ],
];

export const bannerRow: Sponsor[] = [
  { name: 'icilundi', img: `${BASE}xbrzvOd572A3buGabxbYYWHMDTA.png` },
  { name: 'pépite Pays de la Loire', img: `${BASE}zql7stHN2Rthx6uOdsagCNhv2M.png` },
  { name: 'Arzel', img: `${BASE}0WtTlUnGSMQLo0YDGvoTdjyhMEc.png` },
];
