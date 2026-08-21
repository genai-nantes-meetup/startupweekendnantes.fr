import './CtaBand.css';
import { EDITION } from '../data/edition';
import { weekendTier } from '../data/pricing';
import WantedBadge from './ui/WantedBadge';

export default function CtaBand() {
  return (
    <section className="cta-band">
      <div className="hazard"></div>
      <div className="container cta-inner">
        <div className="cta-text">
          <p className="t-mono cta-meta">
            T-00:{EDITION.durationHours}:00 · Billets {weekendTier.price} tout compris
          </p>
          <h2 className="t-display cta-title">Porteurs de problèmes recherchés.</h2>
          <a
            href={EDITION.ticketUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--invert cta-btn"
            data-analytics-event="ticket_cta_clicked"
            data-analytics-prop-location="cta_band"
          >
            Je prends ma place →
          </a>
        </div>
        <WantedBadge className="cta-wanted" />
      </div>
      <div className="hazard"></div>
    </section>
  );
}
