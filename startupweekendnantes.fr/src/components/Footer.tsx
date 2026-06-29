import './Footer.css';
import { EDITION } from '../data/edition';
import { SITE } from '../data/site';

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
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="footer-link">
            LinkedIn
          </a>
          {SITE.pastEditions.map((edition) => (
            <a
              key={edition.year}
              href={edition.url}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Édition {edition.year}
            </a>
          ))}
        </nav>
        <p className="footer-copy">
          © {EDITION.year} Startup Weekend Nantes — Tous droits réservés
        </p>
      </div>
    </footer>
  );
}
