import './Hero.css';
import { EDITION } from '../data/edition';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg">
        <img
          src="/assets/images/hero/hero-background.png"
          alt=""
          aria-hidden="true"
          className="hero-bg-img"
        />
      </div>

      <div className="hero-container">
        <div className="hero-text">
          <h1>
            Startup Weekend
            <br />
            Nantes {EDITION.year} 🎊
          </h1>
          <p>
            <strong>{EDITION.dateRangeShort}</strong> : L'événement pour monter un projet et vivre
            en accéléré la création d'une startup, à Nantes.
          </p>
          <a
            href={EDITION.ticketUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Je m'inscris maintenant
          </a>
        </div>

        <img
          src="/assets/images/hero/hero-dots.svg"
          alt=""
          aria-hidden="true"
          className="hero-dots"
        />

        <figure className="hero-image">
          <img
            src="/assets/images/hero/hero-participants.png"
            alt="Participants au Startup Weekend Nantes"
            width="538"
            height="629"
            fetchPriority="high"
          />
          <img
            src="/assets/images/hero/hero-circle.svg"
            alt=""
            aria-hidden="true"
            className="hero-circle"
          />
        </figure>
      </div>
    </section>
  );
}
