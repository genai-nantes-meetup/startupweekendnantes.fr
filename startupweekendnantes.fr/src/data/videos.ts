/**
 * YouTube videos shown in the "Revivez les moments forts" section.
 * `embedUrl` uses youtube-nocookie.com (YouTube's privacy-enhanced domain) so the
 * iframe doesn't set YouTube tracking cookies until the visitor actually plays it.
 */

import { EDITION } from './edition';

export type PastVideo = { label: string; title: string; embedUrl: string };

export const pastVideos: PastVideo[] = [
  {
    label: "L'aftermovie",
    title: `Aftermovie Startup Weekend Nantes ${EDITION.pastYear}`,
    embedUrl: 'https://www.youtube-nocookie.com/embed/ol4yYOPwQF0',
  },
  {
    label: 'Les réactions',
    title: `Réactions Startup Weekend Nantes ${EDITION.pastYear}`,
    embedUrl: 'https://www.youtube-nocookie.com/embed/ZuHqOfZbAvg',
  },
];
