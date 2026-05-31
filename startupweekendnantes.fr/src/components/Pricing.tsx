import './Pricing.css';

type Tier = {
  label: string;
  price: string;
  pricePrefix: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  badge: string | null;
  borderColor: string;
  bgColor: string;
};

const tiers: Tier[] = [
  {
    label: 'Dimanche soir',
    price: '5€',
    pricePrefix: '',
    description: 'Pour venir encourager les copains',
    features: ['Accès aux pitchs du dimanche soir', 'Accès au cocktail et networking'],
    cta: 'Je prends ma place',
    href: 'https://www.billetweb.fr/startup-weekend-nantes-2025',
    badge: null,
    borderColor: '#e8d44d',
    bgColor: '#fff9c4',
  },
  {
    label: 'Weekend',
    price: '59,5€',
    pricePrefix: '',
    description: "Pour profiter en intégralité de l'expérience",
    features: [
      "Accès à l'expérience complète",
      'Échanges avec les coachs, speakers et jurys professionnels',
      '7 repas traiteurs inclus',
      'Boissons à volonté',
      'Un T-Shirt Exclusif',
      'Networking, fun & rock & roll 🤘',
    ],
    cta: 'Je prends ma place',
    href: 'https://www.billetweb.fr/startup-weekend-nantes-2025',
    badge: 'MAKERS',
    borderColor: '#4caf50',
    bgColor: '#b2f2bb',
  },
  {
    label: 'Partenaire',
    price: '500€',
    pricePrefix: 'A partir de',
    description: 'Pour soutenir une initiative géniale et suivre de près les dernières innovations',
    features: [
      "Une visibilité auprès des entrepreneurs d'aujourd'hui et de demain",
      "L'occasion parfaite de sourcer de futurs talents",
      "Un coup de pouce très apprécié à l'écosystème startup nantais",
    ],
    cta: 'Nous contacter',
    href: 'mailto:maxime.pitussi@gmail.com',
    badge: null,
    borderColor: '#7dd3fc',
    bgColor: '#ede9fe',
  },
];

export default function Pricing() {
  return (
    <div className="pricing-outer">
    <section id="pricing" className="pricing-section">
      <div className="pricing-container">
        <img
          src="https://framerusercontent.com/images/qG7RWN4HUTjhIeg3Ut5ZCldlv4.svg"
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
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                        <path d="M4 9L7.5 12.5L14 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
