import './Footer.css';
import { EDITION } from '../data/edition';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <a href="/" className="footer-logo">
          <img
            src="/assets/images/brand/logo-startup-weekend-nantes.png"
            alt="Techstars Startup Weekend Nantes"
            width="180"
            height="58"
            className="footer-logo-img"
          />
        </a>
        <nav className="footer-nav" aria-label="Liens de pied de page">
          <a href="/editions" className="footer-link">
            Éditions passées
          </a>
          <a
            href="https://2025.startupweekendnantes.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Édition 2025
          </a>
        </nav>
        <p className="footer-copy">
          © {EDITION.year} Startup Weekend Nantes — Tous droits réservés
        </p>
      </div>
    </footer>
  );
}
