import './Intro.css';
import { topImages, bottomImages } from '../data/intro';
import Asterisk from './ui/Asterisk';
import RisoIllu from './ui/RisoIllu';

const photos = [...topImages, ...bottomImages];

export default function Intro() {
  return (
    <section id="intro" className="section intro-section">
      <div className="container intro-grid">
        <div className="intro-content">
          <p className="kicker">✳ Le concept · bascule 2026</p>
          <h2 className="t-display intro-title">
            Cette année,
            <br />
            on pitche un <span className="hl">problème</span>.
          </h2>
          <p className="t-body intro-lead">
            Plus de porteurs d'idées : des <strong>porteurs de problèmes</strong>. On ne part plus
            d'une solution toute faite, mais d'un <strong>vrai problème</strong> : pour une vraie
            cible, vérifié sur le terrain.
          </p>
          <p className="t-body">
            54 heures non-stop, 12 équipes, 12 missions. La solution, on la trouve ensemble. Pas
            d'idée en poche ? Tant mieux : des problèmes, tu en as sûrement plein.
          </p>
          <p className="t-body">
            Au programme : des conférences, des coachs et des mentors pour t'épauler. Et le samedi
            soir, DJ set et Gin To, parce qu'on n'est pas là que pour bosser.
          </p>
          <div className="intro-tags">
            <span className="pill pill--prune">Porteur de problème</span>
            <span className="pill pill--bleu">User validated ✓</span>
          </div>
        </div>

        <div className="intro-gallery">
          <Asterisk size={64} className="intro-aster" aria-hidden="true" />
          <RisoIllu
            subject="moon"
            surface="light"
            glow="bleu"
            alt="Une lune dont les cratères dessinent un point d'interrogation — le problème à résoudre"
            className="intro-moon"
          />
          {photos.map((img, i) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              className={`intro-photo intro-photo-${i + 1}`}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
