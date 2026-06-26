/**
 * Coachs, speakers and jury members shown in the "Ils seront de la partie" section.
 * Order in this array = display order on the page.
 */

export type Member = { name: string; role: string; img: string };

export const members: Member[] = [
  {
    name: 'Thomas Matthieu',
    role: 'CEO @ Guest Suite',
    img: '/assets/images/speakers/thomas-matthieu.jpeg',
  },
  {
    name: 'Claire Bretton',
    role: 'CEO @ Underdog',
    img: '/assets/images/speakers/claire-bretton.jpeg',
  },
  {
    name: 'Nicolas Laurent',
    role: 'Co-Directeur @ TiCO',
    img: '/assets/images/speakers/nicolas-laurent.jpeg',
  },
  { name: 'Johan Ricaut', role: 'CEO @ Shopopop', img: '/assets/images/speakers/johan-ricaut.jpeg' },
  {
    name: 'Eric Lebrette',
    role: 'Co-founder @ Direxter',
    img: '/assets/images/speakers/eric-lebrette.jpeg',
  },
  {
    name: 'Benjamin Communier',
    role: 'Program Manager @ Centrale-Audencia-Ensa',
    img: '/assets/images/speakers/benjamin-communier.jpeg',
  },
  {
    name: 'Vincent Roux',
    role: 'CEO @ GOUD Santé',
    img: '/assets/images/speakers/vincent-roux.jpeg',
  },
  {
    name: 'Pauline Corriou',
    role: 'Lead User Researcher @ Imagination Machine',
    img: '/assets/images/speakers/pauline-corriou.jpeg',
  },
  {
    name: 'Florian Hervéou',
    role: 'Co-fondateur @ Startup Palace',
    img: '/assets/images/speakers/florian-herveou.jpeg',
  },
  {
    name: 'Simon Timssale',
    role: 'Consultant en IA générative',
    img: '/assets/images/speakers/simon-timssale.jpeg',
  },
  {
    name: 'Benjamin Guillet',
    role: 'CSM @ TGS France',
    img: '/assets/images/speakers/benjamin-guillet.png',
  },
  { name: 'Samuel Berthe', role: 'CTO', img: '/assets/images/speakers/samuel-berthe.jpeg' },
  {
    name: 'Mathilde Bermond',
    role: 'Partenariats Entreprises @ Ecole de design',
    img: '/assets/images/speakers/mathilde-bermond.jpeg',
  },
  {
    name: 'Lucie Valette',
    role: 'Coach en prise de parole en public',
    img: '/assets/images/speakers/lucie-valette.jpeg',
  },
];
