/**
 * The organising team shown in the "La team orga de choc" section.
 * Order in this array = display order on the page.
 */

export type Organiser = { name: string; role: string; img: string };

export const orgs: Organiser[] = [
  {
    name: 'Florence POYVRE',
    role: 'Co-Founder @Fly The Nest',
    img: '/assets/images/team/florence.webp',
  },
  {
    name: 'Robin GOUTARD',
    role: 'Ingénieur partenariat @Université Gustave Eiffel',
    img: '/assets/images/team/robin.webp',
  },
  {
    name: 'Florian HERVÉOU',
    role: 'Head of Startup Programs @Startup Palace',
    img: '/assets/images/team/florian.webp',
  },
  {
    name: 'Guillaume PARTHENAY',
    role: 'Responsable commercial & marketing @Jujotte',
    img: '/assets/images/team/guillaume.webp',
  },
  {
    name: 'Louis AMMONIQUE',
    role: 'Growth @Clever Cloud',
    img: '/assets/images/team/louis.webp',
  },
  {
    name: 'Clara GARNIER',
    role: 'Fondatrice @Kidefeel',
    img: '/assets/images/team/clara.webp',
  },
  { name: 'Ana PASCAUD', role: 'Fondatrice @SAWA', img: '/assets/images/team/anna.webp' },
  {
    name: 'Grégory THIBORD',
    role: 'CEO @_icilundi',
    img: '/assets/images/team/gregory.webp',
  },
];
