import fontsCss from '../styles/fonts.css?raw';
import breakpointsCss from '../styles/breakpoints.css?raw';
import framerCss from '../styles/framer.css?raw';

const framerEditorScript = `try{if(localStorage.get("__framer_force_showing_editorbar_since")){const n=document.createElement("link");n.rel = "modulepreload";n.href="https://framer.com/edit/init.js";document.head.appendChild(n)}}catch(e){}`;

const gtmScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NQ2DKKPD');`;

const ga4Script = `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-377KFTGYHV');
`;

export default function Head() {
  return (
    <>
      <meta charSet="utf-8" />
      <script dangerouslySetInnerHTML={{ __html: framerEditorScript }} />
      <script dangerouslySetInnerHTML={{ __html: gtmScript }} />
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-377KFTGYHV"></script>
      <script dangerouslySetInnerHTML={{ __html: ga4Script }} />
      <meta name="viewport" content="width=device-width" />
      <meta name="generator" content="Framer 569b461" />
      <title>Startup Weekend Nantes - 2025 Edition</title>
      <meta
        name="description"
        content="Venez vivre les montagnes russes de la création d'entreprises lors de la 15ème édition du Startup Weekend Nantes du 15 au 17 Novembre 2024"
      />
      <meta
        name="framer-search-index"
        content="https://framerusercontent.com/sites/4j5IUmqlG0NJYI5bf6diVa/searchIndex-j1Oqmu6mftsc.json"
      />
      <meta
        name="framer-search-index-fallback"
        content="https://framerusercontent.com/sites/4j5IUmqlG0NJYI5bf6diVa/searchIndex-rkYIAs6anlUh.json"
      />
      <link
        href="/assets/images/Wc6sLIVANgNEjBXRMEJoqt2bXWg.jpg"
        rel="icon"
        media="(prefers-color-scheme: light)"
      />
      <link
        href="/assets/images/Wc6sLIVANgNEjBXRMEJoqt2bXWg.jpg"
        rel="icon"
        media="(prefers-color-scheme: dark)"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Startup Weekend Nantes - 2025 Edition" />
      <meta
        property="og:description"
        content="Venez vivre les montagnes russes de la création d'entreprises lors de la 15ème édition du Startup Weekend Nantes du 15 au 17 Novembre 2024"
      />
      <meta
        property="og:image"
        content="https://framerusercontent.com/assets/c1me6IM5lirqPCFF4alL6dKEnf0.jpg"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Startup Weekend Nantes - 2025 Edition" />
      <meta
        name="twitter:description"
        content="Venez vivre les montagnes russes de la création d'entreprises lors de la 15ème édition du Startup Weekend Nantes du 15 au 17 Novembre 2024"
      />
      <meta
        name="twitter:image"
        content="https://framerusercontent.com/assets/c1me6IM5lirqPCFF4alL6dKEnf0.jpg"
      />
      <style data-framer-font-css="" dangerouslySetInnerHTML={{ __html: fontsCss }} />
      <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="" />
      <meta name="robots" content="max-image-preview:large" />
      <link rel="canonical" href="https://startupweekendnantes.fr/" />
      <meta property="og:url" content="https://startupweekendnantes.fr/" />
      <style data-framer-breakpoint-css="" dangerouslySetInnerHTML={{ __html: breakpointsCss }} />
      <style
        data-framer-css-ssr-minified=""
        data-framer-components="framer-lib-cursors-host framer-RnFxZ PropertyOverrides framer-7jqQq framer-iTjFn framer-QyLmM framer-ESM0B"
        dangerouslySetInnerHTML={{ __html: framerCss }}
      />
    </>
  );
}
