import './Pricing.css';
import { tiers } from '../data/pricing';

const variants = ['bleu', 'prune', 'lav'];

export default function Pricing() {
  return (
    <section id="pricing" className="section pricing-section">
      <div className="container">
        <div className="pricing-head">
          <p className="kicker">✳ Participer</p>
          <h2 className="t-title pricing-title">Choisis ta mission</h2>
          <p className="t-body pricing-subtitle">
            On est impatients de voir si tu auras le cran de nous rejoindre.
          </p>
        </div>
        <div className="pricing-grid">
          {tiers.map((t, i) => {
            const featured = Boolean(t.badge);
            // The "Partenaire" tier links to a mailto:, the others to the ticket shop.
            const isContact = t.href.startsWith('mailto:');
            return (
              <div
                key={t.label}
                className={`pricing-card pricing-card--${variants[i]} ${featured ? 'pricing-card--featured tex' : ''}`}
              >
                <div className="pricing-card-head">
                  <span className="t-mono card-label">{t.label}</span>
                  {t.badge && <span className="pill pill--jaune card-badge">{t.badge}</span>}
                </div>
                <div className="card-price-row">
                  {t.pricePrefix && <span className="t-mono price-prefix">{t.pricePrefix}</span>}
                  <span className="t-title card-price">{t.price}</span>
                </div>
                <p className="t-body card-desc">{t.description}</p>
                <ul className="card-features">
                  {t.features.map((f) => (
                    <li key={f}>
                      <span className="t-mono card-tick" aria-hidden="true">
                        ✓
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={t.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn card-cta"
                  data-analytics-event={isContact ? 'contact_email_clicked' : 'ticket_cta_clicked'}
                  data-analytics-prop-location="pricing"
                  {...(isContact
                    ? { 'data-analytics-prop-topic': 'partnership' }
                    : { 'data-analytics-prop-tier': t.label })}
                >
                  {t.cta} →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
