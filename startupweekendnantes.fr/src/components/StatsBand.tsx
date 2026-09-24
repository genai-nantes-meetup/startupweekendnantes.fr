import './StatsBand.css';
import { EDITION } from '../data/edition';
import { weekendTier } from '../data/edition_pricing';

const stats = [
  { n: `${EDITION.durationHours}h`, l: 'non-stop, vendredi → dimanche', accent: 'var(--bleu)' },
  {
    n: `${EDITION.teamsCount}`,
    l: `missions · ${EDITION.teamsCount} équipes`,
    accent: 'var(--jaune)',
  },
  { n: `${EDITION.participantsCount}`, l: 'équipiers attendus', accent: 'var(--bleu)' },
  { n: weekendTier.price, l: 'tout compris · 7 repas', accent: 'var(--jaune)' },
];

export default function StatsBand() {
  return (
    <section className="section--tight stats-band surface-prune tex">
      <div className="container stats-grid">
        {stats.map((s) => (
          <div className="stat-cell" key={s.l} style={{ borderColor: s.accent }}>
            <div className="t-stat stat-num" style={{ color: s.accent }}>
              {s.n}
            </div>
            <div className="t-mono stat-label">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
