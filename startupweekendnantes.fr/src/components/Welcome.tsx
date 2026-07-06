import './Welcome.css';
import { EDITION } from '../data/edition';
import Asterisk from './ui/Asterisk';

type Crew = { code: string; title: string; desc: string };

const crew: Crew[] = [
  {
    code: 'R-01',
    title: 'Entrepreneurs en herbe',
    desc: 'Une intuition, un problème qui te trotte dans la tête ? Viens le confronter au réel.',
  },
  {
    code: 'R-02',
    title: 'Designers · devs · marketeurs · PM',
    desc: 'Tu sais construire ? Mets ton savoir-faire au service d’une équipe.',
  },
  {
    code: 'R-03',
    title: 'Experts finance · com · droit · compta',
    desc: 'Ton expertise débloque les équipes sur le terrain.',
  },
  {
    code: 'R-04',
    title: 'Le joker ultime',
    desc: 'Tu ne te reconnais pas dans les profils ci-dessus ? Ta présence est obligatoire !',
  },
];

export default function Welcome() {
  return (
    <section id="welcome" className="section welcome-section">
      <div className="container">
        <div className="welcome-head">
          <div>
            <p className="kicker">✳ Recrutement · tous profils</p>
            <h2 className="t-title welcome-title">Tout le monde est le bienvenu !</h2>
          </div>
          <span className="t-mono welcome-sub">Aucun profil type. Aucune expérience requise.</span>
        </div>

        <div className="welcome-manifest">
          <div className="welcome-manifest-head t-mono">
            <span className="welcome-manifest-label">
              <Asterisk size={13} className="welcome-manifest-aster" /> Plan d’équipage
            </span>
            <span>{EDITION.teamsCount} missions // Postes ouverts</span>
          </div>

          <ul className="welcome-roster">
            {crew.map((c) => (
              <li className="crew-row" key={c.code}>
                <span className="t-mono crew-code">{c.code}</span>
                <div className="crew-body">
                  <h3 className="t-heading crew-title">{c.title}</h3>
                  <p className="t-body crew-desc">{c.desc}</p>
                </div>
                <span className="t-mono crew-status">● slot ouvert</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
