import './Footer.css';
import { EDITION } from '../data/edition';
import Asterisk from './ui/Asterisk';

type Item = string | { label: string; href: string };

const cols: { title: string; items: Item[] }[] = [
  { title: 'Liens', items: ['Le concept', 'Programme', 'Tarifs', 'FAQ'] },
  { title: 'Contact', items: ['Nous écrire', 'Devenir partenaire', 'Presse'] },
  {
    title: 'Réseaux',
    items: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/startup-weekend-nantes/?viewAsMember=true' },
      { label: 'Instagram', href: 'https://www.instagram.com/startupweekend.nnts/' },
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
            {EDITION.durationHours}h pour trouver le bon problème. {EDITION.dateRangeLong} {EDITION.year} ·
            Le Palace, Nantes.
          </p>
          <div className="t-mono footer-hashtag">#SWNA{EDITION.year}</div>
        </div>
        {cols.map((c) => (
          <nav key={c.title} className="footer-col" aria-label={c.title}>
            <div className="t-mono footer-col-title">{c.title}</div>
            <ul>
              {c.items.map((it) => {
                const label = typeof it === 'string' ? it : it.label;
                return (
                  <li key={label}>
                    {typeof it === 'string' ? (
                      label
                    ) : (
                      <a href={it.href} target="_blank" rel="noopener noreferrer">
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
