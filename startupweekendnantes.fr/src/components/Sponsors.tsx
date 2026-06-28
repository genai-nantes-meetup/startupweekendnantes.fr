import './Sponsors.css';
import { sponsorRows, bannerRow } from '../data/edition_partners';

export default function Sponsors() {
  return (
    <section id="sponsors" className="sponsors-section">
      <div className="sponsors-container">
        <h2>Nos fervents partenaires</h2>
        <div className="sponsors-grid">
          {sponsorRows.map((row, i) => (
            <div key={i} className="sponsors-row">
              {row.map((s) => (
                <img
                  key={s.name}
                  src={s.img}
                  alt={s.name}
                  loading="lazy"
                  className="sponsor-logo"
                />
              ))}
            </div>
          ))}
          <div className="sponsors-row sponsors-row-banner">
            {bannerRow.map((s) => (
              <img
                key={s.name}
                src={s.img}
                alt={s.name}
                loading="lazy"
                className="sponsor-logo sponsor-logo-banner"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
