import './Hero.css';
import { EDITION } from '../data/edition';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg">
        <img
          src="/images/wMWsWm7njm6vmBfMVwkVaW4.png"
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
            {EDITION.year} 🎊
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
          src="/images/Zs0OyquSGNwZhNIZqYL3KdgW8Rs.svg"
          alt=""
          aria-hidden="true"
          className="hero-dots"
        />

        <figure className="hero-image" aria-hidden="true">
          <img
            src="/images/oRq8HnnCP8CkxrvFeQvMp4tBA.png"
            alt="Participants au Startup Weekend"
            width="538"
            height="629"
          />
          <img
            src="/images/QRQRAXnHu5ilXCmjG8WsfC9XA.svg"
            alt=""
            aria-hidden="true"
            className="hero-circle"
          />
        </figure>
      </div>
    </section>
  );
}
