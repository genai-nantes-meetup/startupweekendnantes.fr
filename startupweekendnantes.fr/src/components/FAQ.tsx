import './FAQ.css';
import { useState } from 'react';
import { questions } from '../data/faq';
import { capture } from '../lib/analytics';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section faq-section">
      <div className="container faq-container">
        <p className="kicker">✳ Questions fréquentes</p>
        <h2 className="t-title faq-title">Briefing</h2>
        <div className="faq-list">
          {questions.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="faq-item">
                <button
                  className="faq-question"
                  id={`faq-question-${i}`}
                  onClick={() => {
                    const next = isOpen ? null : i;
                    setOpen(next);
                    if (next !== null) capture('faq_item_opened', { question: item.q });
                  }}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className="t-mono faq-num">PB-{String(i + 1).padStart(2, '0')}</span>
                  <span className={`t-heading faq-q${isOpen ? ' is-open' : ''}`}>{item.q}</span>
                  <span className="faq-icon" aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {/* Always rendered (hidden when closed) so the answer text ships in the
                    static HTML — crawlable & citable by search/AI engines, not just the
                    FAQPage JSON-LD, and matches what the `speakable` selector targets. */}
                <div
                  className="faq-answer"
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  hidden={!isOpen}
                >
                  <p className="t-body">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
