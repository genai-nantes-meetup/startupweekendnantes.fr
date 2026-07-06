import './Agenda.css';
import { days } from '../data/agenda';
import { EDITION } from '../data/edition';

const KEY_RE = /pitch|vote|cérémonie|remise|formation des équipes|fin de startup/i;
const shortDate = (date: string) => date.replace(` ${EDITION.year}`, '');

export default function Agenda() {
  return (
    <section id="agenda" className="section agenda-section surface-dark">
      <div className="container">
        <p className="kicker kicker--on-dark">✳ Mission log · briefing du week-end</p>
        <h2 className="t-title agenda-title">{EDITION.durationHours} heures, minute par minute</h2>

        <div className="agenda-files">
          {days.map((d, i) => (
            <article className="dossier" key={d.label}>
              <header className="dossier-head">
                <span className="t-mono dossier-code">
                  Jour {String(i + 1).padStart(2, '0')} · SWNA-{EDITION.year}
                </span>
                <span className="t-mono dossier-date">
                  {d.day} {shortDate(d.date)}
                </span>
              </header>

              <h3 className="t-heading dossier-title">« {d.narrative} »</h3>

              <ol className="dossier-rows">
                {d.rows.map((r, j) => {
                  const key = KEY_RE.test(r.title);
                  return (
                    <li className={`dossier-row${key ? ' is-key' : ''}`} key={j}>
                      <span className="t-mono dossier-time">{r.time}</span>
                      <div className="dossier-event">
                        <span className="dossier-event-title">
                          {key && <span className="dossier-star" aria-hidden="true">★ </span>}
                          {r.title}
                        </span>
                        {r.desc && <span className="dossier-event-desc">{r.desc}</span>}
                        {(r.speaker || r.speakers) && (
                          <span className="t-mono dossier-soon">
                            <span className="dossier-soon-dot" aria-hidden="true"></span>
                            En attente
                          </span>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ol>

              <footer className="t-mono dossier-foot">
                {d.rows.length} créneaux · {shortDate(d.date)}
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
