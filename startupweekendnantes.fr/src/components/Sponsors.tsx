import './Sponsors.css';
import { sponsorRows, bannerRow } from '../data/sponsors';

export default function Sponsors() {
  return (
    <section id="sponsors" className="section sponsors-section surface-prune tex">
      <div className="container sponsors-inner">
        <p className="kicker kicker--on-dark">✳ Nos fervents partenaires</p>
        <h2 className="t-title sponsors-title">Ils soutiennent la mission</h2>
        <div className="sponsors-grid">
          {sponsorRows.flat().map((s) => (
            <div className="sponsor-cell" key={s.name}>
              <img src={s.img} alt={s.name} loading="lazy" className="sponsor-logo" />
            </div>
          ))}
        </div>
        <div className="sponsors-grid sponsors-grid--banner">
          {bannerRow.map((s) => (
            <div className="sponsor-cell" key={s.name}>
              <img src={s.img} alt={s.name} loading="lazy" className="sponsor-logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
