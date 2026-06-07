/** YouTube videos shown in the "Revivez les moments forts" section. */

import { EDITION } from './edition';

export type PastVideo = { label: string; title: string; embedUrl: string };

export const pastVideos: PastVideo[] = [
  {
    label: "L'aftermovie",
    title: `Aftermovie Startup Weekend Nantes ${EDITION.pastYear}`,
    embedUrl: 'https://www.youtube.com/embed/ol4yYOPwQF0',
  },
  {
    label: 'Les réactions',
    title: `Réactions Startup Weekend Nantes ${EDITION.pastYear}`,
    embedUrl: 'https://www.youtube.com/embed/ZuHqOfZbAvg',
  },
];
