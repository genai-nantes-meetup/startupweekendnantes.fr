/**
 * Single source of truth for the current edition.
 *
 * To roll the site over to a new year, edit ONLY this file (and the data/ files
 * for people/sponsors/etc.). Everything else — Hero h1, Footer ©, Agenda day
 * labels, SEO meta, ticket URL — is derived from these constants.
 *
 * The agenda assumes a Friday→Sunday weekend; if a future edition starts on a
 * different day, update `agendaDays` accordingly.
 */

export const EDITION = {
  year: 2025,
  pastYear: 2024,
  editionNumber: 16,
  startDay: 21,
  endDay: 23,
  month: 'Novembre',
  /** "Du 21/11 au 23/11" */
  dateRangeShort: `Du 21/11 au 23/11`,
  /** "Du 21 au 23 novembre" */
  dateRangeLong: `Du 21 au 23 novembre`,
  /** ISO 8601 start — vendredi 18h (accueil, cf. edition_schedule). Consommé par le schema Event. */
  startISO: `2025-11-21T18:00:00+01:00`,
  /** ISO 8601 end — dimanche soir (pitchs finaux + cocktail). Consommé par le schema Event. */
  endISO: `2025-11-23T21:00:00+01:00`,
  /** Used by Agenda.tsx — pre-built day headers, one per day. */
  agendaDays: [
    {
      date: `21 novembre 2025`,
      label: `JOUR 1`,
      day: 'VENDREDI',
    },
    {
      date: `22 novembre 2025`,
      label: `JOUR 2`,
      day: 'SAMEDI',
    },
    {
      date: `23 novembre 2025`,
      label: `JOUR 3`,
      day: 'DIMANCHE',
    },
  ],

  ticketUrl: `https://www.billetweb.fr/startup-weekend-nantes-2025`,

  contactEmail: 'maxime.pitussi@gmail.com',
} as const;
