const PHOTO_SRCSET =
  '/assets/images/{id}.jpg?scale-down-to=512&width=6048&height=4024 512w,/assets/images/{id}.jpg?scale-down-to=1024&width=6048&height=4024 1024w,/assets/images/{id}.jpg?scale-down-to=2048&width=6048&height=4024 2048w,/assets/images/{id}.jpg?scale-down-to=4096&width=6048&height=4024 4096w,/assets/images/{id}.jpg?width=6048&height=4024 6048w';

const SIZES_PORTRAIT =
  '(min-width: 1240px) 420px, (max-width: 767.98px) calc(min(100vw, 1600px) - 40px), (min-width: 768px) and (max-width: 1239.98px) 320px';

const SIZES_LANDSCAPE =
  '(min-width: 1240px) max(420px, calc((min(100vw, 1920px) - 40px) * 0.22)), (max-width: 767.98px) max(calc(min(100vw, 1600px) - 40px), calc(min(100vw, 1920px) - 40px)), (min-width: 768px) and (max-width: 1239.98px) max(320px, calc((min(100vw, 1920px) - 40px) * 0.22))';

function srcset(id: string) {
  return PHOTO_SRCSET.replaceAll('{id}', id);
}

function src(id: string) {
  return `/assets/images/${id}.jpg?width=6048&height=4024`;
}

const APPEAR_STYLE = {
  willChange: 'transform',
  opacity: '0',
  transform: 'perspective(1200px) scale(0)',
} as React.CSSProperties;

function IntroPhoto({ className, sizes, id, alt }: { className: string; sizes: string; id: string; alt: string }) {
  return (
    <figure as="figure" className={className} style={APPEAR_STYLE}>
      <div data-framer-background-image-wrapper="true">
        <img
          decoding="async"
          loading="lazy"
          width="6048"
          height="4024"
          sizes={sizes}
          srcSet={srcset(id)}
          src={src(id)}
          alt={alt}
        />
      </div>
    </figure>
  );
}

export default function IntroSection() {
  return (
    <div className="framer-11nvrxr" data-framer-name="Intro Section">
      <IntroPhoto className="framer-120bzka" sizes={SIZES_PORTRAIT} id="3icxBJ1CcHn6M34eovnFgccTZR0" alt="Speaker session" />
      <IntroPhoto className="framer-1mhhz3n" sizes={SIZES_LANDSCAPE} id="FS3ISXEUHf4xNgOzHz1v79bPNPo" alt="Group discussion" />
      <IntroPhoto className="framer-w6nuro" sizes={SIZES_PORTRAIT} id="cCa01Jr6KZUDGU8OkU8loM1z0" alt="Speaker" />
      <IntroPhoto className="framer-1mka6qx" sizes={SIZES_PORTRAIT} id="24WMO9KZT30jBPFpwrgWt8rkSs" alt="Meeting" />
      <div className="framer-1k7tuj text-center" data-framer-name="Inspiring experience" style={APPEAR_STYLE}>
        <div className="framer-y5s9sh" data-framer-component-type="RichTextContainer">
          <h2 className="framer-text framer-styles-preset-s1qxc7" data-styles-preset="GP3w7rUvI">
            54 heures pour transformer ton idée en réalité ! 🚀
          </h2>
        </div>
        <div className="framer-hqpyoi" data-framer-component-type="RichTextContainer">
          <p className="framer-text framer-styles-preset-1pwt84p" data-styles-preset="A8o4HivZV">
            Bienvenue au Startup Weekend Nantes, où les idées les plus folles deviennent des
            startups en un week-end.
          </p>
          <p className="framer-text framer-styles-preset-1pwt84p" data-styles-preset="A8o4HivZV">
            Pendant 54 heures non-stop, tu vas vivre à 100 à l'heure, entouré de talents créatifs,
            d'experts et de passionnés, prêts à révolutionner le monde avec toi. Développeurs,
            designers, marketeurs, entrepreneurs : c'est l'endroit où tout peut arriver.
          </p>
          <p className="framer-text framer-styles-preset-1pwt84p" data-styles-preset="A8o4HivZV">
            <strong className="framer-text">Tu as une idée ?</strong> Viens la tester.
          </p>
          <p className="framer-text framer-styles-preset-1pwt84p" data-styles-preset="A8o4HivZV">
            <strong className="framer-text">Pas d'idée, mais envie de créer ?</strong> Rejoins une
            équipe et participe à une aventure inoubliable.
          </p>
          <p className="framer-text framer-styles-preset-1pwt84p" data-styles-preset="A8o4HivZV">
            Pas de demi-mesure : ça va être <strong className="framer-text">légendaire</strong> !
            😎
          </p>
        </div>
      </div>
    </div>
  );
}
