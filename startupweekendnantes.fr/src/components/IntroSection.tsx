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

export default function IntroSection() {
  return (
    <div className="framer-11nvrxr" data-framer-name="Intro Section">
      <figure as="figure" className="framer-120bzka" style={APPEAR_STYLE}>
        <div
          style={{ position: 'absolute', borderRadius: 'inherit', top: '0', right: '0', bottom: '0', left: '0' }}
          data-framer-background-image-wrapper="true"
        >
          <img
            decoding="async"
            loading="lazy"
            width="6048"
            height="4024"
            sizes={SIZES_PORTRAIT}
            srcSet={srcset('3icxBJ1CcHn6M34eovnFgccTZR0')}
            src={src('3icxBJ1CcHn6M34eovnFgccTZR0')}
            alt="Speaker session"
            style={{ display: 'block', width: '100%', height: '100%', borderRadius: 'inherit', objectPosition: 'center', objectFit: 'cover' }}
          />
        </div>
      </figure>
      <figure as="figure" className="framer-1mhhz3n" style={APPEAR_STYLE}>
        <div
          style={{ position: 'absolute', borderRadius: 'inherit', top: '0', right: '0', bottom: '0', left: '0' }}
          data-framer-background-image-wrapper="true"
        >
          <img
            decoding="async"
            loading="lazy"
            width="6048"
            height="4024"
            sizes={SIZES_LANDSCAPE}
            srcSet={srcset('FS3ISXEUHf4xNgOzHz1v79bPNPo')}
            src={src('FS3ISXEUHf4xNgOzHz1v79bPNPo')}
            alt="Group discussion"
            style={{ display: 'block', width: '100%', height: '100%', borderRadius: 'inherit', objectPosition: 'center', objectFit: 'cover' }}
          />
        </div>
      </figure>
      <figure as="figure" className="framer-w6nuro" style={APPEAR_STYLE}>
        <div
          style={{ position: 'absolute', borderRadius: 'inherit', top: '0', right: '0', bottom: '0', left: '0' }}
          data-framer-background-image-wrapper="true"
        >
          <img
            decoding="async"
            loading="lazy"
            width="6048"
            height="4024"
            sizes={SIZES_PORTRAIT}
            srcSet={srcset('cCa01Jr6KZUDGU8OkU8loM1z0')}
            src={src('cCa01Jr6KZUDGU8OkU8loM1z0')}
            alt="Speaker"
            style={{ display: 'block', width: '100%', height: '100%', borderRadius: 'inherit', objectPosition: 'center', objectFit: 'cover' }}
          />
        </div>
      </figure>
      <figure as="figure" className="framer-1mka6qx" style={APPEAR_STYLE}>
        <div
          style={{ position: 'absolute', borderRadius: 'inherit', top: '0', right: '0', bottom: '0', left: '0' }}
          data-framer-background-image-wrapper="true"
        >
          <img
            decoding="async"
            loading="lazy"
            width="6048"
            height="4024"
            sizes={SIZES_PORTRAIT}
            srcSet={srcset('24WMO9KZT30jBPFpwrgWt8rkSs')}
            src={src('24WMO9KZT30jBPFpwrgWt8rkSs')}
            alt="Meeting"
            style={{ display: 'block', width: '100%', height: '100%', borderRadius: 'inherit', objectPosition: 'center', objectFit: 'cover' }}
          />
        </div>
      </figure>
      <div
        className="framer-1k7tuj"
        data-framer-name="Inspiring experience"
        style={APPEAR_STYLE}
      >
        <div
          className="framer-y5s9sh"
          data-framer-component-type="RichTextContainer"
          style={{ transform: 'none' }}
        >
          <h2
            className="framer-text framer-styles-preset-s1qxc7"
            data-styles-preset="GP3w7rUvI"
            style={{ '--framer-text-alignment': 'center' }}
          >
            54 heures pour transformer ton idée en réalité ! 🚀
          </h2>
        </div>
        <div
          className="framer-hqpyoi"
          data-framer-component-type="RichTextContainer"
          style={{ transform: 'none' }}
        >
          <p
            className="framer-text framer-styles-preset-1pwt84p"
            data-styles-preset="A8o4HivZV"
            style={{ '--framer-text-alignment': 'center' }}
          >
            Bienvenue au Startup Weekend Nantes, où les idées les plus folles deviennent des
            startups en un week-end.
          </p>
          <p
            className="framer-text framer-styles-preset-1pwt84p"
            data-styles-preset="A8o4HivZV"
            style={{ '--framer-text-alignment': 'center' }}
          >
            Pendant 54 heures non-stop, tu vas vivre à 100 à l'heure, entouré de talents créatifs,
            d'experts et de passionnés, prêts à révolutionner le monde avec toi. Développeurs,
            designers, marketeurs, entrepreneurs : c'est l'endroit où tout peut arriver.
          </p>
          <p
            className="framer-text framer-styles-preset-1pwt84p"
            data-styles-preset="A8o4HivZV"
            style={{ '--framer-text-alignment': 'center' }}
          >
            <strong className="framer-text">Tu as une idée ?</strong> Viens la tester.
          </p>
          <p
            className="framer-text framer-styles-preset-1pwt84p"
            data-styles-preset="A8o4HivZV"
            style={{ '--framer-text-alignment': 'center' }}
          >
            <strong className="framer-text">Pas d'idée, mais envie de créer ?</strong> Rejoins une
            équipe et participe à une aventure inoubliable.
          </p>
          <p
            className="framer-text framer-styles-preset-1pwt84p"
            data-styles-preset="A8o4HivZV"
            style={{ '--framer-text-alignment': 'center' }}
          >
            Pas de demi-mesure : ça va être <strong className="framer-text">légendaire</strong> !
            😎
          </p>
        </div>
      </div>
    </div>
  );
}
