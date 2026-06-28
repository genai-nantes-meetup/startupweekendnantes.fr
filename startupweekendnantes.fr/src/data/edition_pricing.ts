/** Ticket tiers shown in the "Participer" section. */

import { EDITION } from './edition';

export type Tier = {
  label: string;
  price: string;
  pricePrefix: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  badge: string | null;
  borderColor: string;
  bgColor: string;
};

export const tiers: Tier[] = [
  {
    label: 'Dimanche soir',
    price: '5€',
    pricePrefix: '',
    description: 'Pour venir encourager les copains',
    features: ['Accès aux pitchs du dimanche soir', 'Accès au cocktail et networking'],
    cta: 'Je prends ma place',
    href: EDITION.ticketUrl,
    badge: null,
    borderColor: '#e8d44d',
    bgColor: '#fff9c4',
  },
  {
    label: 'Weekend',
    price: '59,5€',
    pricePrefix: '',
    description: "Pour profiter en intégralité de l'expérience",
    features: [
      "Accès à l'expérience complète",
      'Échanges avec les coachs, speakers et jurys professionnels',
      '7 repas traiteurs inclus',
      'Boissons à volonté',
      'Un T-Shirt Exclusif',
      'Networking, fun & rock & roll 🤘',
    ],
    cta: 'Je prends ma place',
    href: EDITION.ticketUrl,
    badge: 'MAKERS',
    borderColor: '#4caf50',
    bgColor: '#b2f2bb',
  },
  {
    label: 'Partenaire',
    price: '500€',
    pricePrefix: 'A partir de',
    description: 'Pour soutenir une initiative géniale et suivre de près les dernières innovations',
    features: [
      "Une visibilité auprès des entrepreneurs d'aujourd'hui et de demain",
      "L'occasion parfaite de sourcer de futurs talents",
      "Un coup de pouce très apprécié à l'écosystème startup nantais",
    ],
    cta: 'Nous contacter',
    href: `mailto:${EDITION.contactEmail}`,
    badge: null,
    borderColor: '#7dd3fc',
    bgColor: '#ede9fe',
  },
];
