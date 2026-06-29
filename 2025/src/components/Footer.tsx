import './Footer.css';
import { EDITION } from '../data/edition';
import { SITE } from '../data/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
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
        <div className="footer-contact">
          <h2 className="footer-contact-heading">Nous contacter</h2>
          <p className="footer-contact-subtitle">
            Une question ? Écris-nous directement, on te répond vite.
          </p>
          <a href={`mailto:${EDITION.contactEmail}`} className="footer-mailto">
            {EDITION.contactEmail}
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link footer-link-linkedin"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
