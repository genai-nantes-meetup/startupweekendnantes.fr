import './Contact.css';
import { EDITION } from '../data/edition';
import RisoIllu from './ui/RisoIllu';

export default function Contact() {
  return (
    <section id="contact" className="section contact-section surface-dark">
      <div className="hud-grid" aria-hidden="true"></div>
      <div className="contact-container">
        <RisoIllu
          subject="console"
          surface="dark"
          glow="none"
          round
          alt="Un opérateur de mission à sa console, casque sur les oreilles"
          className="contact-console"
        />
        <p className="kicker kicker--on-dark">✳ Transmission</p>
        <h2 className="t-title contact-heading">Une question ? Contacte la base.</h2>
        <p className="t-body contact-text">
          Partenariat, presse ou simple curiosité : on lit tout, on répond vite.
        </p>
        <a href={`mailto:${EDITION.contactEmail}`} className="contact-mail-card">
          <span className="t-mono contact-mail-label">Canal direct</span>
          <span className="contact-mail-address">{EDITION.contactEmail}</span>
          <span className="t-mono contact-mail-cta">Ouvrir la transmission →</span>
        </a>
      </div>
    </section>
  );
}
