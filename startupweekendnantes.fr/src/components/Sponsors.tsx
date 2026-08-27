import './Sponsors.css';
import type { CSSProperties } from 'react';
import { sponsorRows, bannerRow, logoBox, type Sponsor } from '../data/sponsors';

function SponsorCell({ sponsor }: { sponsor: Sponsor }) {
  const { width, height } = logoBox(sponsor.ratio);
  return (
    <div className="sponsor-cell">
      <img
        src={sponsor.img}
        alt={sponsor.name}
        loading="lazy"
        className="sponsor-logo"
        width={width}
        height={height}
        style={{ '--logo-w': `${width}px` } as CSSProperties}
      />
    </div>
  );
}

export default function Sponsors() {
  return (
    <section id="sponsors" className="section sponsors-section surface-prune tex">
      <div className="container sponsors-inner">
        <p className="kicker kicker--on-dark">✳ Nos fervents partenaires</p>
        <h2 className="t-title sponsors-title">Ils nous ont soutenus</h2>
        <div className="sponsors-grid">
          {sponsorRows.flat().map((s) => (
            <SponsorCell sponsor={s} key={s.name} />
          ))}
        </div>
        <div className="sponsors-grid sponsors-grid--banner">
          {bannerRow.map((s) => (
            <SponsorCell sponsor={s} key={s.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
