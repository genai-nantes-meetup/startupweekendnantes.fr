import './Hero.css';
import { EDITION } from '../data/edition';
import Asterisk from './ui/Asterisk';

export default function Hero() {
  return (
    <section id="hero" className="hero-section tex">
      <div className="hud-grid" aria-hidden="true"></div>
      <div className="hero-scan" aria-hidden="true"></div>

      <div className="hero-container container">
        <div className="hero-text">
          <div className="hero-flags">
            <span className="pill pill--ghost hero-alert">⚠ Problem detected</span>
            <span className="t-mono hero-edition">
              Édition {EDITION.year} // {EDITION.dateRangeMono}
            </span>
          </div>

          <h1 className="t-display hero-title">
            Houston,
            <br />
            we have a <span className="hl">problem</span>
          </h1>

          <p className="t-body hero-sub">
            On ne pitche pas des idées. On pitche des <strong>problèmes</strong>. {EDITION.durationHours}h
            pour trouver le bon, et le résoudre à douze.
          </p>

          <div className="hero-cta">
            <a href={EDITION.ticketUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
              Je prends ma place →
            </a>
            <a href="#intro" className="btn btn--ghost">
              Découvrir le concept
            </a>
          </div>
        </div>

        <aside className="hero-visual" aria-label="Briefing de mission">
          <div className="hero-visual-glow" aria-hidden="true"></div>
          <Asterisk size={34} className="hero-visual-aster" />
          <img
            src="/images/illus-riso/riso-briefing-on-dark.webp"
            alt="Trois porteurs de problèmes en briefing autour d'une table de mission, une lune en mire"
            className="hero-riso"
            width={1000}
            height={965}
            loading="eager"
          />
          <div className="hero-telemetry t-mono">
            <div className="hero-tel-clock-row">
              <span className="hero-tel-label">T-minus</span>
              <span className="hero-tel-clock">
                00:{EDITION.durationHours}:00<span className="hero-cursor">_</span>
              </span>
            </div>
            <div className="hero-tel-stats">
              <span>{EDITION.teamsCount} missions</span>
              <span>{EDITION.participantsCount} équipiers</span>
              <span className="hero-ok">● nominal</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
