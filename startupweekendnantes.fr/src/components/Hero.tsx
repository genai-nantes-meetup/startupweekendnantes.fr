import { useEffect, useState } from 'react';
import './Hero.css';
import { EDITION } from '../data/edition';
import Asterisk from './ui/Asterisk';

const TARGET = new Date(EDITION.startISO).getTime();
const pad = (n: number) => String(n).padStart(2, '0');

/** Compte à rebours vivant jusqu'au décollage — segments j / h / m / s. */
function useCountdown() {
  const [ms, setMs] = useState<number | null>(null);
  useEffect(() => {
    const tick = () => setMs(Math.max(0, TARGET - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  if (ms === null) return null;
  return {
    d: pad(Math.floor(ms / 86_400_000)),
    h: pad(Math.floor(ms / 3_600_000) % 24),
    m: pad(Math.floor(ms / 60_000) % 60),
    s: pad(Math.floor(ms / 1_000) % 60),
    live: ms === 0,
  };
}

export default function Hero() {
  const cd = useCountdown();
  const segs: [string, string][] = [
    ['j', cd?.d ?? '--'],
    ['h', cd?.h ?? '--'],
    ['m', cd?.m ?? '--'],
    ['s', cd?.s ?? '--'],
  ];

  return (
    <section id="hero" className="hero-section tex">
      <div className="hud-grid" aria-hidden="true"></div>
      <div className="hero-scan" aria-hidden="true"></div>

      <div className="hero-container container">
        <div className="hero-text">
          <div className="hero-flags">
            <span className="pill pill--jaune hero-brand">★ Startup Weekend {EDITION.year}</span>
            <span className="t-mono hero-edition">{EDITION.dateRangeMono}</span>
          </div>

          <h1 className="t-display hero-title">
            Houston,
            <br />
            we have a <span className="hl">problem</span>
          </h1>

          <p className="t-body hero-sub">
            On ne pitche pas des idées. On pitche des <strong>problèmes</strong>.{' '}
            {EDITION.durationHours}h à Nantes, {EDITION.teamsCount} équipes, et autant de solutions
            à trouver !
          </p>

          <div className="hero-cta">
            <a
              href={EDITION.ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
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
            src="/assets/images/illus-riso/riso-briefing-on-dark.webp"
            alt="Trois porteurs de problèmes en briefing autour d'une table de mission, une lune en mire"
            className="hero-riso"
            width={1000}
            height={965}
            loading="eager"
          />
          <div className="hero-telemetry t-mono">
            <div className="hero-tel-clock-row">
              <span className="hero-tel-label">T-minus</span>
              <div className="hero-countdown" role="timer" aria-live="off">
                {segs.map(([unit, val], i) => (
                  <span className="hero-cd-seg" key={unit}>
                    <b>{val}</b>
                    <i>{unit}</i>
                    {i < segs.length - 1 && <s aria-hidden="true">:</s>}
                  </span>
                ))}
              </div>
            </div>
            <div className="hero-tel-stats">
              <span>{EDITION.teamsCount} missions</span>
              <span>{EDITION.participantsCount} équipiers</span>
              <span className="hero-ok">
                {cd?.live ? '● en direct' : `● décollage ${EDITION.launchStamp}`}
              </span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
