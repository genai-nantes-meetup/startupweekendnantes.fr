import './Pricing.css';
import { tiers } from '../data/edition_pricing';

export default function Pricing() {
  return (
    <div className="pricing-outer">
      <section id="pricing" className="pricing-section">
        <div className="pricing-container">
          <img
            src="/assets/images/pricing/pricing-star.svg"
            alt=""
            aria-hidden="true"
            className="pricing-star"
          />
          <h2>Participer</h2>
          <p className="pricing-subtitle">
            <em>On est impatients de voir si vous aurez le cran de nous rejoindre</em>
          </p>
          <div className="pricing-grid">
            {tiers.map((t) => (
              <div
                key={t.label}
                className={`pricing-card ${t.badge ? 'pricing-card--featured' : ''}`}
                style={{ '--border': t.borderColor, '--bg': t.bgColor } as React.CSSProperties}
              >
                {t.badge && <span className="badge">{t.badge}</span>}
                <div className="card-body">
                  <p className="card-label">{t.label}</p>
                  <div className="card-price-row">
                    {t.pricePrefix && <span className="price-prefix">{t.pricePrefix}</span>}
                    <span className="card-price">{t.price}</span>
                  </div>
                  <div className="card-divider" />
                  <p className="card-desc">{t.description}</p>
                  <ul className="card-features">
                    {t.features.map((f) => (
                      <li key={f}>
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M4 9L7.5 12.5L14 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <a href={t.href} target="_blank" rel="noopener noreferrer" className="card-cta">
                  {t.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
