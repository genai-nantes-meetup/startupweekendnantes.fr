/**
 * Programme of the weekend (3 days × N rows).
 *
 * Day headers (date, label, day) come from EDITION.agendaDays so they roll over
 * automatically with the year. Only the row content needs to be edited here.
 *
 * Source : « Déroulé du weekend » (Notion, run of show de l'orga).
 */

import { EDITION } from './edition';

export type Row = {
  time: string;
  title: string;
  desc: string;
  /** Intervenant·e pas encore annoncé·e — affiche le badge « En attente ». */
  tba?: boolean;
};
export type Day = {
  date: string;
  label: string;
  day: string;
  color: string;
  narrative: string;
  rows: Row[];
};

const dayColors = ['rgb(249, 211, 211)', 'rgb(211, 249, 216)', 'rgb(255, 249, 196)'];

// Narration de chaque jour (cadrage orga).
const dayNarratives = [
  'On se jette dans le bain',
  'On abat le boulot (et petite fiesta)',
  'On affine et on pitche',
];

const dayRows: Row[][] = [
  // JOUR 1 — Vendredi
  [
    {
      time: `${EDITION.startTimeLabel}`,
      title: 'Accueil',
      desc: 'Enregistrement des participants et networking.',
    },
    {
      time: '19h',
      title: "Cérémonie d'ouverture",
      desc: "Bienvenue, règles du jeu et lancement de l'édition.",
    },
    {
      time: '20h',
      title: 'Pitchs des problèmes',
      desc: 'Chaque porteur de problème présente son problème en 60 secondes — pas de solution.',
    },
    {
      time: '20h30',
      title: 'Dîner & votes',
      desc: "On mange ensemble et on vote pour les problèmes qu'on veut attaquer.",
    },
    { time: '21h', title: 'REX entrepreneur', desc: '', tba: true },
    {
      time: '21h30',
      title: 'Annonce des projets & formation des équipes',
      desc: 'Les projets retenus sont dévoilés, chacun rejoint une équipe.',
    },
    {
      time: '22h',
      title: 'Travail en équipe',
      desc: 'Les équipes découvrent leur espace de travail et démarrent le projet.',
    },
    {
      time: '1h',
      title: 'Fermeture des bureaux',
      desc: 'Les participants sont invités à rentrer chez eux pour ne pas se cramer.',
    },
  ],
  // JOUR 2 — Samedi
  [
    {
      time: '8h30',
      title: 'Petit déjeuner & lancement de la journée',
      desc: 'Agenda et grandes étapes de la journée.',
    },
    { time: '9h', title: 'Atelier IA', desc: '', tba: true },
    {
      time: '9h45',
      title: 'Travail en équipe & user interviews',
      desc: 'Les équipes sortent confronter leur problème à de vrais utilisateurs.',
    },
    { time: '12h30', title: 'Déjeuner en deux services', desc: '' },
    { time: '13h45', title: 'Conférences Pitch & User Tests', desc: '', tba: true },
    { time: '14h30', title: 'Travail en équipe', desc: 'Les coachs passent dans les équipes.' },
    {
      time: '19h',
      title: "Session d'entraide",
      desc: 'Chaque équipe expose ses blocages, les autres donnent un coup de main.',
    },
    { time: '19h20', title: 'Jeu', desc: '' },
    { time: '19h45', title: 'Dîner', desc: '' },
    { time: '20h30', title: 'Travail en équipe', desc: '' },
    { time: '23h', title: 'DJ set & cocktails', desc: 'La petite fiesta du samedi soir.' },
  ],
  // JOUR 3 — Dimanche
  [
    {
      time: '8h30',
      title: 'Petit déjeuner & lancement de la journée',
      desc: 'Agenda et grandes étapes de la journée.',
    },
    { time: '9h', title: 'Travail en équipe', desc: '' },
    {
      time: '11h',
      title: 'User tests',
      desc: 'Les équipes confrontent leur produit à de vrais utilisateurs.',
    },
    { time: '12h30', title: 'Déjeuner', desc: 'Sur place ou à emporter.' },
    {
      time: '13h45',
      title: 'Pitchs blancs & travail en équipe',
      desc: '5 minutes de pitch et 5 minutes de questions par équipe, en alternance avec le travail dans les bureaux.',
    },
    { time: '16h30', title: 'Rangement des bureaux', desc: '' },
    {
      time: '17h',
      title: 'Cérémonie de clôture & pitchs',
      desc: 'Chaque équipe présente son projet devant le jury.',
    },
    {
      time: '19h45',
      title: "REX de l'équipe gagnante 2025",
      desc: 'Pendant la délibération du jury.',
    },
    {
      time: '20h15',
      title: 'Remise des prix',
      desc: `Le jury annonce les gagnants de l'édition ${EDITION.year}.`,
    },
    {
      time: '20h45',
      title: 'Cocktail',
      desc: 'On trinque à la fin du week-end.',
    },
  ],
];

export const days: Day[] = EDITION.agendaDays.map((d, i) => ({
  ...d,
  color: dayColors[i],
  narrative: dayNarratives[i],
  rows: dayRows[i],
}));
