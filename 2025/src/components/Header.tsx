import './Header.css';
import { EDITION } from '../data/edition';

export default function Header() {
  return (
    <header className="site-header">
      <a href="/" aria-label="Startup Weekend Nantes">
        <img
          src="/assets/images/brand/logo-startup-weekend-nantes.png"
          alt="Techstars Startup Weekend Nantes"
          width="147"
          height="47"
          className="site-header-logo"
        />
      </a>
      <nav className="site-header-nav" aria-label="Navigation principale">
        <a href="#agenda">Programme</a>
        <a href="#pricing">Tarifs</a>
        <a href="#venue">Lieu</a>
        <a href="#faq">FAQ</a>
      </nav>
      <a
        href={EDITION.ticketUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary site-header-cta"
      >
        Billetterie
      </a>
    </header>
  );
}
