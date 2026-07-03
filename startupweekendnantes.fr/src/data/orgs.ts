/**
 * The organising team shown in the "La team orga de choc" section.
 * Order in this array = display order on the page.
 */

export type Organiser = { name: string; role: string; img: string };

export const orgs: Organiser[] = [
  {
    name: 'Florence POYVRE',
    role: 'Co-Founder @Fly The Nest',
    img: '/images/team/florence.webp',
  },
  {
    name: 'Robin GOUTARD',
    role: 'Ingénieur partenariat @Université Gustave Eiffel',
    img: '/images/team/robin.webp',
  },
  {
    name: 'Florian HERVÉOU',
    role: 'Head of Startup Programs @Startup Palace',
    img: '/images/team/florian.webp',
  },
  {
    name: 'Guillaume PARTHENAY',
    role: 'Responsable commercial & marketing @Jujotte',
    img: '/images/team/guillaume.webp',
  },
  {
    name: 'Louis AMMONIQUE',
    role: 'Growth @Clever Cloud',
    img: '/images/team/louis.webp',
  },
  {
    name: 'Clara GARNIER',
    role: 'Fondatrice @Kidefeel',
    img: '/images/team/clara.webp',
  },
  { name: 'Ana PASCAUD', role: 'Fondatrice @SAWA', img: '/images/team/anna.webp' },
  {
    name: 'Grégory THIBORD',
    role: 'CEO @_icilundi',
    img: '/images/team/gregory.webp',
  },
];
