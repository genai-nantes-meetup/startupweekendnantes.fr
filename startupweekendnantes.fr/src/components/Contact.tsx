export default function Contact() {
  return (
    <div className="framer-jqt50v" data-framer-name="Contact">
      <div className="framer-layjq2">
        <div className="framer-g9zdhz">
          <div className="framer-1tuhjfm" data-framer-name="SHIFT">
            <div
              style={{
                position: 'absolute',
                borderRadius: 'inherit',
                top: '0',
                right: '0',
                bottom: '0',
                left: '0',
              }}
              data-framer-background-image-wrapper="true"
            >
              <img
                decoding="async"
                loading="lazy"
                width="1080"
                height="348"
                sizes="(min-width: 1240px) 405px, (max-width: 767.98px) 405px, (min-width: 768px) and (max-width: 1239.98px) 293px"
                srcSet="/assets/images/Sui4DlSTZNdOVRO72bthhdem8.png?scale-down-to=512&width=1080&height=348 512w,/assets/images/Sui4DlSTZNdOVRO72bthhdem8.png?scale-down-to=1024&width=1080&height=348 1024w,/assets/images/Sui4DlSTZNdOVRO72bthhdem8.png?width=1080&height=348 1080w"
                src="/assets/images/Sui4DlSTZNdOVRO72bthhdem8.png?scale-down-to=512&width=1080&height=348"
                alt=""
                style={{
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  borderRadius: 'inherit',
                  objectPosition: 'left center',
                  objectFit: 'contain',
                }}
              />
            </div>
          </div>
          <div
            className="framer-1edes3m"
            data-framer-component-type="RichTextContainer"
            style={{ transform: 'none' }}
          >
            <p style={{ '--framer-text-color': 'rgb(255, 255, 255)' }} className="framer-text">
              © 2025 Startup Weekend Nantes
              <br className="framer-text" />
              Tous droits réservés
            </p>
          </div>
        </div>
        <div className="framer-198hxyo">
          <div
            className="framer-16t7wce"
            data-framer-component-type="RichTextContainer"
            style={{ transform: 'none' }}
          >
            <h6 className="framer-text framer-styles-preset-yn2put" data-styles-preset="RhgdL2JJh">
              Nous Contacter
            </h6>
          </div>
          <div
            className="framer-16l19yk"
            data-framer-component-type="RichTextContainer"
            style={{ transform: 'none' }}
          >
            <p className="framer-text framer-styles-preset-1pwt84p" data-styles-preset="A8o4HivZV">
              Une question ? N'hésite pas à nous contacter
            </p>
          </div>
          <div className="framer-15j60xu-container">
            <div
              style={{
                height: '100%',
                width: '100%',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                '--framer-formspark-placeholder-color': 'rgba(0, 0, 0, 0.5)',
              }}
            >
              <form
                style={{
                  display: 'grid',
                  gridTemplateRows: 'max-content 1fr max-content',
                  gridTemplateColumns: '1fr',
                  gap: '15px',
                  width: '100%',
                  height: '100%',
                }}
                method="POST"
              >
                <div
                  style={{ width: '100%', display: 'grid', gridAutoFlow: 'column', gap: '15px' }}
                >
                  <input
                    className="framer-formspark-input"
                    type="text"
                    name="name"
                    placeholder="Prénom"
                    style={{
                      WebkitAppearance: 'none',
                      display: 'inline-block',
                      width: '100%',
                      lineHeight: '1.4em',
                      outline: 'none',
                      border: 'none',
                      padding: '15px',
                      borderRadius: '8px',
                      fontFamily: '&quot',
                      fontWeight: '500',
                      fontSize: '16px',
                      background: 'rgb(242, 242, 242)',
                      color: 'rgb(0, 0, 0)',
                      boxShadow: 'inset 0 0 0 1px transparent',
                    }}
                    value=""
                  />
                  <input
                    className="framer-formspark-input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    style={{
                      WebkitAppearance: 'none',
                      display: 'inline-block',
                      width: '100%',
                      lineHeight: '1.4em',
                      outline: 'none',
                      border: 'none',
                      padding: '15px',
                      borderRadius: '8px',
                      fontFamily: '&quot',
                      fontWeight: '500',
                      fontSize: '16px',
                      background: 'rgb(242, 242, 242)',
                      color: 'rgb(0, 0, 0)',
                      boxShadow: 'inset 0 0 0 1px transparent',
                    }}
                    value=""
                  />
                </div>
                <textarea
                  className="framer-formspark-input"
                  placeholder="Message"
                  name="message"
                  style={{
                    WebkitAppearance: 'none',
                    display: 'inline-block',
                    width: '100%',
                    lineHeight: '1.4em',
                    outline: 'none',
                    border: 'none',
                    minHeight: '0',
                    padding: '15px',
                    resize: 'vertical',
                    borderRadius: '8px',
                    background: 'rgb(242, 242, 242)',
                    fontFamily: '&quot',
                    fontWeight: '500',
                    fontSize: '16px',
                    color: 'rgb(0, 0, 0)',
                    boxShadow: 'inset 0 0 0 1px transparent',
                  }}
                ></textarea>
                <div>
                  <input
                    type="submit"
                    style={{
                      WebkitAppearance: 'none',
                      display: 'inline-block',
                      width: '100%',
                      lineHeight: '1.4em',
                      outline: 'none',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '15px',
                      fontFamily: '&quot',
                      fontWeight: '600',
                      fontSize: '16px',
                      background: 'rgb(34, 34, 34)',
                      cursor: 'pointer',
                      color: 'rgb(255, 255, 255)',
                      zIndex: '1',
                    }}
                    value="Send"
                  />
                </div>
              </form>
            </div>
            {/* /$ */}
          </div>
        </div>
      </div>
    </div>
  );
}
