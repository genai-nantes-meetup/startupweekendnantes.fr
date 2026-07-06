import './FAQ.css';
import { useState } from 'react';
import { questions } from '../data/faq';

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
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="t-mono faq-num">PB-{String(i + 1).padStart(2, '0')}</span>
                  <span className={`t-heading faq-q${isOpen ? ' is-open' : ''}`}>{item.q}</span>
                  <span className="faq-icon" aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div className="faq-answer">
                    <p className="t-body">{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
