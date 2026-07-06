/**
 * The organising team shown in the "La team orga de choc" section.
 * Order in this array = display order on the page.
 */

export type Organiser = { name: string; role: string; img: string };

export const orgs: Organiser[] = [
  {
    name: 'Florence POYVRE',
    role: 'Co-Founder @Fly The Nest',
    img: '/assets/images/orga/florence-poyvre.png',
  },
  {
    name: 'Robin GOUTARD',
    role: 'Consultant innovation @In Extenso',
    img: '/assets/images/orga/robin-goutard.png',
  },
  {
    name: 'Florian HERVÉOU',
    role: 'Head of Startup Programs @Startup Palace',
    img: '/assets/images/speakers/florian-herveou.jpeg',
  },
  {
    name: 'Guillaume PARTHENAY',
    role: 'Responsable commercial & marketing @Jujotte',
    img: '/assets/images/orga/guillaume-parthenay.png',
  },
  {
    name: 'Louis AMMONIQUE',
    role: 'Growth Manager @kelvin',
    img: '/assets/images/orga/louis-ammonique.png',
  },
  {
    name: 'Clara GARNIER',
    role: 'Fondatrice @Kidefeel',
    img: '/assets/images/orga/clara-garnier.png',
  },
  {
    name: 'Romain PERRAUT',
    role: 'Head of Sales @_icilundi',
    img: '/assets/images/orga/romain-perraut.png',
  },
  { name: 'Ana PASCAUD', role: 'Fondatrice @SAWA', img: '/assets/images/orga/ana-pascaud.png' },
  {
    name: 'Grégory THIBORD',
    role: 'CEO @_icilundi',
    img: '/assets/images/orga/gregory-thibord.jpeg',
  },
];
