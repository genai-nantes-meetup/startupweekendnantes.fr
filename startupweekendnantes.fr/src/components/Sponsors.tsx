import './Sponsors.css';
import type { CSSProperties } from 'react';
import { sponsorTiers, logoBox, type Sponsor } from '../data/edition_partners';

function SponsorCell({ sponsor, size }: { sponsor: Sponsor; size: number }) {
  const { width, height } = logoBox(sponsor.ratio, size);
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
        <h2 className="t-title sponsors-title">Ils nous soutiennent</h2>
        {/* un rang par niveau de contribution, du plus gros au plus petit */}
        {sponsorTiers.map((t) => (
          <div
            key={t.id}
            className={`sponsors-grid sponsors-tier--${t.id}`}
            style={{ '--tier-size': `${t.size}px` } as CSSProperties}
          >
            {t.sponsors.map((s) => (
              <SponsorCell sponsor={s} size={t.size} key={s.name} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
