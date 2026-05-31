const faqItems = [
  { cls: 'framer-57fhfm-container', q: 'Puis-je pitcher une idée dont le projet a déjà débuté ?' },
  { cls: 'framer-44r2ig-container', q: 'Dois-je avoir constitué mon équipe en amont du weekend ?' },
  { cls: 'framer-1odtv4a-container', q: "J'ai combien de temps pour présenter mon idée ?" },
  { cls: 'framer-1ltqgcu-container', q: 'Est-ce que je peux pitcher 2 idées ?' },
  { cls: 'framer-uqoh2r-container', q: 'Est-ce que je peux prévoir des objets ou des slides ?' },
  { cls: 'framer-aa0z94-container', q: 'Combien de projets sont sélectionnés ?' },
  { cls: 'framer-eii2y4-container', q: "Que faire si mon idée n'est pas choisie ?" },
  { cls: 'framer-qp2ujp-container', q: "Qu'est-ce que je dois emmener ?" },
  { cls: 'framer-158ynbn-container', q: 'Comment me rendre sur place ?' },
  { cls: 'framer-1bemvjy-container', q: 'Est-ce que je peux rester dormir ?' },
  { cls: 'framer-yuwy4n-container', q: 'Est-ce que je dois prévoir à manger ?' },
];

export default function FAQ() {
  return (
    <div
      className="framer-198hgnw"
      data-framer-name="Container"
      style={{
        willChange: 'transform',
        opacity: '0',
        transform: 'perspective(1200px) translateY(300px)',
      }}
    >
      <div
        className="framer-11biefp"
        data-framer-component-type="RichTextContainer"
        style={{ transform: 'none' }}
      >
        <h2
          className="framer-text framer-styles-preset-s1qxc7"
          data-styles-preset="GP3w7rUvI"
          style={{ '--framer-text-alignment': 'left' }}
        >
          FAQ
        </h2>
      </div>
      <div className="framer-ct80oi-container">
        <div
          className="framer-QyLmM framer-wih7s8 framer-v-wih7s8"
          data-framer-name="Variant 1"
          style={{ width: '100%' }}
        >
          {faqItems.map(({ cls, q }) => (
            <div key={cls} className={cls}>
              <div
                className="framer-ESM0B framer-O44aa framer-s124vb framer-v-s124vb"
                data-framer-name="Closed"
                data-highlight="true"
                tabIndex={0}
                style={{ width: '100%' }}
              >
                <div className="framer-1ae8lit-container">
                  <div style={{ display: 'contents' }}></div>
                </div>
                <div
                  className="framer-1hc8808"
                  data-framer-component-type="RichTextContainer"
                  style={{
                    '--extracted-1w1cjl5': 'rgb(255, 255, 255)',
                    '--framer-link-text-color': 'rgb(0, 153, 255)',
                    '--framer-link-text-decoration': 'underline',
                    transform: 'none',
                  }}
                >
                  <h6
                    className="framer-text"
                    style={{
                      '--font-selector': 'Q1VTVE9NO0hlbHZldGljYSBCb2xk',
                      '--framer-font-family': '&quot',
                      '--framer-font-size': '20px',
                      '--framer-line-height': '1.5em',
                      '--framer-text-color': 'var(--extracted-1w1cjl5, rgb(255, 255, 255))',
                    }}
                  >
                    {q}
                  </h6>
                </div>
                <div
                  className="framer-123uex6"
                  style={{ backgroundColor: 'rgb(77, 66, 76)' }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
