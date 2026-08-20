import './Contact.css';
import { EDITION } from '../data/edition';
import RisoIllu from './ui/RisoIllu';

export default function Contact() {
  return (
    <section id="contact" className="section contact-section surface-dark tex">
      <div className="hud-grid" aria-hidden="true"></div>

      <div className="contact-container container">
        <div className="contact-panel">
          {/* coins de visée façon cadre de ciblage HUD */}
          <span className="contact-corner tl" aria-hidden="true"></span>
          <span className="contact-corner tr" aria-hidden="true"></span>
          <span className="contact-corner bl" aria-hidden="true"></span>
          <span className="contact-corner br" aria-hidden="true"></span>

          {/* barre de titre façon terminal de comms */}
          <header className="contact-bar t-mono">
            <span className="contact-bar-id">✳ Transmission</span>
            <span className="contact-bar-coord">47.21°N · 01.55°W</span>
            <span className="contact-bar-live">
              <span className="contact-live-dot" aria-hidden="true"></span>
              Canal ouvert
            </span>
          </header>

          <div className="contact-body">
            <div className="contact-visual">
              <RisoIllu
                subject="console"
                surface="dark"
                glow="bleu"
                round
                alt="Un opérateur de mission à sa console, casque sur les oreilles"
                className="contact-console"
              />
              <div className="contact-wave" aria-hidden="true">
                {Array.from({ length: 9 }).map((_, i) => (
                  <span key={i}></span>
                ))}
              </div>
            </div>

            <div className="contact-copy">
              <h2 className="t-title contact-heading">
                Une question&nbsp;?
                <br />
                Contacte la base.
              </h2>
              <p className="t-body contact-text">
                Partenariat, presse ou simple curiosité : on lit tout, on répond vite.
              </p>

              <a
                href={`mailto:${EDITION.contactEmail}`}
                className="contact-mail-card"
                data-analytics-event="contact_email_clicked"
                data-analytics-prop-location="contact"
                data-analytics-prop-topic="contact"
              >
                <span className="contact-mail-meta">
                  <span className="t-mono contact-mail-label">Canal direct</span>
                  <span className="contact-mail-address">{EDITION.contactEmail}</span>
                </span>
                <span className="contact-mail-cta" aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
