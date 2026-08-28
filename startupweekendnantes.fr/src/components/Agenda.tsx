import './Agenda.css';
import Picture from './Picture';
import { days } from '../data/edition_schedule';
import { speakers } from '../data/edition_speakers';
import { EDITION } from '../data/edition';

const KEY_RE = /pitch|vote|cérémonie|remise|formation des équipes/i;
const shortDate = (date: string) => date.replace(` ${EDITION.year}`, '');

/** Résout les noms d'un créneau en profils — la photo et le rôle vivent dans edition_speakers.ts. */
const resolve = (names?: string[]) =>
  names?.map((n) => speakers.find((s) => s.name === n)).filter((s) => s !== undefined) ?? [];

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
                  const people = resolve(r.speakers);
                  return (
                    <li className={`dossier-row${key ? ' is-key' : ''}`} key={j}>
                      <span className="t-mono dossier-time">{r.time}</span>
                      <div className="dossier-event">
                        <span className="dossier-event-title">
                          {key && (
                            <span className="dossier-star" aria-hidden="true">
                              ★{' '}
                            </span>
                          )}
                          {r.title}
                        </span>
                        {r.desc && <span className="dossier-event-desc">{r.desc}</span>}
                        {people.length > 0 ? (
                          <span className="dossier-speakers">
                            {people.map((s) => (
                              <Picture
                                key={s.name}
                                src={s.img}
                                alt={`${s.name} — ${s.role}`}
                                className="dossier-avatar"
                              />
                            ))}
                          </span>
                        ) : (
                          r.tba && (
                            <span className="t-mono dossier-soon">
                              <span className="dossier-soon-dot" aria-hidden="true"></span>
                              En attente
                            </span>
                          )
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
