/**
 * Archive of past Startup Weekend Nantes editions.
 *
 * This is FROZEN history — unlike `edition.ts` (the current edition), entries here
 * never change and must NOT derive from EDITION. Each entry drives one static page
 * at /editions/<slug> plus the /editions/ index, targeting "startup weekend nantes
 * <year>" queries and giving AI answer engines a citable per-year record.
 *
 * To add a past edition: prepend a new entry (newest first). Only add an edition
 * once it has genuinely useful content (videos, recap) — avoid thin pages.
 */

export type ArchivedVideo = { label: string; title: string; embedUrl: string };

export type ArchivedEdition = {
  /** Calendar year of the edition. */
  year: number;
  /** URL slug under /editions/ (e.g. "2024"). */
  slug: string;
  /** Sequential edition number. */
  editionNumber: number;
  /** Human date label (kept loose when exact days aren't recorded). */
  dateLabel: string;
  /** Short factual recap shown on the page and used as the Event description. */
  recap: string;
  /** YouTube recap videos for this edition. */
  videos: ArchivedVideo[];
};

export const pastEditions: ArchivedEdition[] = [
  {
    year: 2024,
    slug: '2024',
    editionNumber: 15,
    dateLabel: 'Novembre 2024',
    recap:
      "La 15ᵉ édition du Startup Weekend Nantes s'est tenue en novembre 2024, au cœur de Nantes : 54 heures pour transformer une idée en startup, entouré de coachs, de mentors et d'entrepreneurs de l'écosystème nantais. Pitchs, formation des équipes, prototypage et présentation finale devant un jury — revivez les moments forts en vidéo.",
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
