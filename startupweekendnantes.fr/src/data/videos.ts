/**
 * Past editions' recap videos, shown on the homepage ("Revivez les moments forts").
 *
 * FROZEN history — unlike `edition.ts` (the current edition), entries here never
 * change and must NOT derive from EDITION. Videos are keyed by edition year;
 * PastGlimpse renders the videos of the edition matching `EDITION.pastYear`.
 */

export type PastVideo = { label: string; title: string; embedUrl: string };

export type EditionVideos = { year: number; videos: PastVideo[] };

export const pastEditions: EditionVideos[] = [
  {
    year: 2024,
    videos: [
      {
        label: "L'aftermovie",
        title: 'Aftermovie Startup Weekend Nantes 2024',
        embedUrl: 'https://www.youtube.com/embed/ol4yYOPwQF0',
      },
      {
        label: 'Les réactions',
        title: 'Réactions Startup Weekend Nantes 2024',
        embedUrl: 'https://www.youtube.com/embed/ZuHqOfZbAvg',
      },
    ],
  },
];
