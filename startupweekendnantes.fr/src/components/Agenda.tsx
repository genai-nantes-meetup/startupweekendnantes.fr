import './Agenda.css';
import { days } from '../data/edition_schedule';

export default function Agenda() {
  return (
    <section id="agenda" className="agenda-section">
      <div className="agenda-container">
        <h2>Agenda</h2>
        {days.map((day) => (
          <div key={day.label} className="agenda-day">
            <div className="day-header">
              <div className="day-meta">
                <span className="day-date">{day.date}</span>
                <strong className="day-label">{day.label}</strong>
              </div>
              <span className="day-name">{day.day}</span>
            </div>
            <table className="agenda-table">
              <thead>
                <tr style={{ background: day.color }}>
                  <th>Heure</th>
                  <th>Programme</th>
                  <th>Speakers</th>
                </tr>
              </thead>
              <tbody>
                {day.rows.map((row, j) => (
                  <tr key={j}>
                    <td className="time-cell">{row.time}</td>
                    <td className="prog-cell">
                      {row.title && <strong>{row.title}</strong>}
                      {row.desc && <span>{row.desc}</span>}
                    </td>
                    <td className="speaker-cell">
                      {row.speaker && (
                        <img
                          src={row.speaker.img}
                          alt={row.speaker.name}
                          className="speaker-avatar"
                          loading="lazy"
                        />
                      )}
                      {row.speakers?.map((s) => (
                        <img
                          key={s}
                          src={s}
                          alt="Speaker"
                          className="speaker-avatar"
                          loading="lazy"
                        />
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </section>
  );
}
