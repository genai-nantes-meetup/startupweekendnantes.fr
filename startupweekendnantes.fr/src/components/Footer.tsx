import './Footer.css';
import { EDITION } from '../data/edition';
import { SITE } from '../data/site';
import { venue } from '../data/venue';
import Asterisk from './ui/Asterisk';
import type { AnalyticsEvent } from '../lib/analytics';

type Item =
  | string
  | {
      label: string;
      href: string;
      external?: boolean;
      analytics?: { event: AnalyticsEvent; props: Record<string, string> };
    };

const mailto = (subject: string) =>
  `mailto:${EDITION.contactEmail}?subject=${encodeURIComponent(subject)}`;

const cols: { title: string; items: Item[] }[] = [
  { title: 'Liens', items: ['Le concept', 'Programme', 'Tarifs', 'FAQ'] },
  {
    title: 'Contact',
    items: [
      {
        label: 'Nous écrire',
        href: mailto(`Startup Weekend Nantes ${EDITION.year} — Contact`),
        analytics: {
          event: 'contact_email_clicked',
          props: { location: 'footer', topic: 'contact' },
        },
      },
      {
        label: 'Devenir partenaire',
        href: mailto(`Startup Weekend Nantes ${EDITION.year} — Partenariat`),
        analytics: {
          event: 'contact_email_clicked',
          props: { location: 'footer', topic: 'partnership' },
        },
      },
      {
        label: 'Presse',
        href: mailto(`Startup Weekend Nantes ${EDITION.year} — Presse`),
        analytics: {
          event: 'contact_email_clicked',
          props: { location: 'footer', topic: 'press' },
        },
      },
    ],
  },
  {
    title: 'Réseaux',
    items: [
      {
        label: 'LinkedIn',
        href: `${SITE.linkedin}/?viewAsMember=true`,
        external: true,
        analytics: { event: 'social_link_clicked', props: { network: 'linkedin' } },
      },
      {
        label: 'Instagram',
        href: SITE.instagram,
        external: true,
        analytics: { event: 'social_link_clicked', props: { network: 'instagram' } },
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer surface-dark tex">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <Asterisk size={26} />
            <span className="t-title">Startup Weekend Nantes</span>
          </div>
          <p className="t-body footer-tagline">
            {EDITION.durationHours}h pour trouver le bon problème. {EDITION.dateRangeLong}{' '}
            {EDITION.year} · {venue.name}, {venue.addressLocality}.
          </p>
          <div className="t-mono footer-hashtag">#SWNA{EDITION.year}</div>
        </div>
        {cols.map((c) => (
          <nav key={c.title} className="footer-col" aria-label={c.title}>
            <div className="t-mono footer-col-title">{c.title}</div>
            <ul>
              {c.items.map((it) => {
                const label = typeof it === 'string' ? it : it.label;
                const analyticsAttrs =
                  typeof it !== 'string' && it.analytics
                    ? {
                        'data-analytics-event': it.analytics.event,
                        ...Object.fromEntries(
                          Object.entries(it.analytics.props).map(([k, v]) => [
                            `data-analytics-prop-${k}`,
                            v,
                          ])
                        ),
                      }
                    : {};
                return (
                  <li key={label}>
                    {typeof it === 'string' ? (
                      label
                    ) : (
                      <a
                        href={it.href}
                        {...(it.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        {...analyticsAttrs}
                      >
                        {label}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        ))}
      </div>
      <div className="hazard footer-hazard"></div>
      <div className="container footer-legal t-mono">
        © {EDITION.year} Startup Weekend Nantes — Édition {EDITION.year} · startupweekendnantes.fr
      </div>
    </footer>
  );
}
