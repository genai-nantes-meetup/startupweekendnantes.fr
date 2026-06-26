/** Intro section image rows (above and below the welcome paragraph). */

export type IntroImage = { src: string; alt: string };

export const topImages: IntroImage[] = [
  {
    src: '/assets/images/intro/intro-tshirt-bad-ideas-good-stories.jpg',
    alt: 'Bad Ideas Good Stories t-shirt',
  },
  { src: '/assets/images/intro/event-pitch-speaker.jpg', alt: 'Speaker au pitch' },
];

export const bottomImages: IntroImage[] = [
  { src: '/assets/images/intro/intro-team-brainstorming.jpg', alt: 'Brainstorming en équipe' },
  { src: '/assets/images/intro/intro-group-photo.jpg', alt: 'Photo de groupe' },
];
