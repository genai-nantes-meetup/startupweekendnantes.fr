import './FAQ.css';
import { useState } from 'react';
import { questions } from '../data/faq';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <h2>FAQ</h2>
        <div className="faq-list">
          {questions.map((item, i) => (
            <div key={i} className="faq-item">
              <button
                className="faq-question"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{item.q}</span>
                <span
                  className={`faq-icon ${open === i ? 'faq-icon--open' : ''}`}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
