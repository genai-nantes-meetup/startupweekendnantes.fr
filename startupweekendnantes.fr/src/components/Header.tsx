import './Header.css';
import { EDITION } from '../data/edition';
import Asterisk from './ui/Asterisk';

const NAV = [
  { label: 'Le concept', href: '#intro' },
  { label: 'Programme', href: '#agenda' },
  { label: 'Tarifs', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header-inner container">
        <a href="/" className="site-header-brand" aria-label="Startup Weekend Nantes — accueil">
          <Asterisk size={24} />
          <span>Startup Weekend Nantes</span>
        </a>
        <nav className="site-header-nav" aria-label="Navigation principale">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="t-mono site-header-link"
              data-analytics-event="nav_link_clicked"
              data-analytics-prop-target={n.href}
            >
              {n.label}
            </a>
          ))}
          <a
            href={EDITION.ticketUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pill pill--jaune site-header-cta"
            data-analytics-event="ticket_cta_clicked"
            data-analytics-prop-location="header"
          >
            Billet →
          </a>
        </nav>
      </div>
    </header>
  );
}
