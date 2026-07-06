/** Intro section image rows — vraies photos d'ambiance 2025. */

export type IntroImage = { src: string; alt: string };

export const topImages: IntroImage[] = [
  {
    src: '/assets/images/amb-equipe.jpg',
    alt: 'Une équipe en plein brainstorm autour des post-it',
  },
  { src: '/assets/images/amb-pitch.jpg', alt: 'Un participant pitche sur scène' },
];

export const bottomImages: IntroImage[] = [
  { src: '/assets/images/amb-foule.jpg', alt: 'La salle pendant les pitchs' },
  { src: '/assets/images/amb-oratrice.jpg', alt: 'Prise de parole au micro' },
];
