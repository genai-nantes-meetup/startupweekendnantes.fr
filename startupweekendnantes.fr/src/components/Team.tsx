type TeamMember = {
  containerClass: string;
  figureClass: string;
  figureStyle?: React.CSSProperties;
  img: {
    src: string;
    srcSet?: string;
    sizes?: string;
    width: number;
    height: number;
    alt: string;
    objectPosition?: string;
  };
  nameClass: string;
  name: string;
  roleClass: string;
  role: string;
};

const members: TeamMember[] = [
  {
    containerClass: 'framer-kupskb',
    figureClass: 'framer-3uw18m',
    figureStyle: { transform: 'perspective(1200px)' },
    img: {
      src: '/assets/images/hXxw44XRfD7QExm9wAo9ESWFyI.jpeg?width=452&height=452',
      width: 452,
      height: 452,
      alt: 'Brad Johnson',
    },
    nameClass: 'framer-s8n4c2',
    name: 'Thomas Matthieu',
    roleClass: 'framer-hqsfsj',
    role: 'CEO @ Guest Suite',
  },
  {
    containerClass: 'framer-jvcfrj',
    figureClass: 'framer-t1t7n4',
    img: {
      src: '/assets/images/8JSXibl4A4aZTwJgXOWiMm5Yio.jpeg?width=800&height=800',
      srcSet:
        '/assets/images/8JSXibl4A4aZTwJgXOWiMm5Yio.jpeg?scale-down-to=512&width=800&height=800 512w,/assets/images/8JSXibl4A4aZTwJgXOWiMm5Yio.jpeg?width=800&height=800 800w',
      sizes:
        '(min-width: 1240px) max(375px, 50px), (max-width: 767.98px) max(350px, 50px), (min-width: 768px) and (max-width: 1239.98px) max(350px, 50px)',
      width: 800,
      height: 800,
      alt: 'Korie Watson',
      objectPosition: 'center top',
    },
    nameClass: 'framer-dkn8yn',
    name: 'Claire Bretton',
    roleClass: 'framer-105r8q4',
    role: 'CEO @ Underdog',
  },
  {
    containerClass: 'framer-rl5von',
    figureClass: 'framer-1oq2pnj',
    img: {
      src: '/assets/images/sfniMLAtv98tHDMYDkETbcpvfak.jpeg?scale-down-to=512&width=800&height=800',
      srcSet:
        '/assets/images/sfniMLAtv98tHDMYDkETbcpvfak.jpeg?scale-down-to=512&width=800&height=800 512w,/assets/images/sfniMLAtv98tHDMYDkETbcpvfak.jpeg?width=800&height=800 800w',
      sizes:
        '(min-width: 1240px) 375px, (max-width: 767.98px) 350px, (min-width: 768px) and (max-width: 1239.98px) 350px',
      width: 800,
      height: 800,
      alt: 'John Doe',
    },
    nameClass: 'framer-y4ro1u',
    name: 'Nicolas Laurent',
    roleClass: 'framer-17c6sxu',
    role: 'Co-Directeur @ TiCO',
  },
  {
    containerClass: 'framer-8bumq2',
    figureClass: 'framer-qy6m26',
    img: {
      src: '/assets/images/QsZVf7HgM2bFcnXMjnoZj9lfudY.jpeg?width=800&height=800',
      srcSet:
        '/assets/images/QsZVf7HgM2bFcnXMjnoZj9lfudY.jpeg?scale-down-to=512&width=800&height=800 512w,/assets/images/QsZVf7HgM2bFcnXMjnoZj9lfudY.jpeg?width=800&height=800 800w',
      sizes:
        '(min-width: 1240px) 375px, (max-width: 767.98px) 350px, (min-width: 768px) and (max-width: 1239.98px) 350px',
      width: 800,
      height: 800,
      alt: 'Nikie Mellons',
    },
    nameClass: 'framer-nt00sn',
    name: 'Johan Ricaut',
    roleClass: 'framer-1es5i5v',
    role: 'CEO @ Shopopop',
  },
  {
    containerClass: 'framer-mtn7ks',
    figureClass: 'framer-1dssa3i',
    img: {
      src: '/assets/images/vidXeHjc3C1LSKcrMy2PAH2oxCQ.jpeg?width=800&height=800',
      srcSet:
        '/assets/images/vidXeHjc3C1LSKcrMy2PAH2oxCQ.jpeg?scale-down-to=512&width=800&height=800 512w,/assets/images/vidXeHjc3C1LSKcrMy2PAH2oxCQ.jpeg?width=800&height=800 800w',
      sizes:
        '(min-width: 1240px) 375px, (max-width: 767.98px) 350px, (min-width: 768px) and (max-width: 1239.98px) 350px',
      width: 800,
      height: 800,
      alt: 'Nick Borison',
      objectPosition: 'center bottom',
    },
    nameClass: 'framer-d0611c',
    name: 'Eric Lebrette',
    roleClass: 'framer-nuf5h7',
    role: 'Co-founder @ Direxter',
  },
  {
    containerClass: 'framer-f5bmj8',
    figureClass: 'framer-k8lpto',
    img: {
      src: '/assets/images/Kb9qe3sHcAJx3Q5JAgWzIINlkI.jpeg?width=800&height=800',
      srcSet:
        '/assets/images/Kb9qe3sHcAJx3Q5JAgWzIINlkI.jpeg?scale-down-to=512&width=800&height=800 512w,/assets/images/Kb9qe3sHcAJx3Q5JAgWzIINlkI.jpeg?width=800&height=800 800w',
      sizes:
        '(min-width: 1240px) 375px, (max-width: 767.98px) 350px, (min-width: 768px) and (max-width: 1239.98px) 350px',
      width: 800,
      height: 800,
      alt: 'Nikie Mellons',
    },
    nameClass: 'framer-tz9pn8',
    name: 'Benjamin Communier',
    roleClass: 'framer-19vdp5k',
    role: 'Program Manager @ Centrale-Audencia-Ensa',
  },
  {
    containerClass: 'framer-xfvuex',
    figureClass: 'framer-92tnqe',
    img: {
      src: '/assets/images/O46nYIHhimV9ETWDlqrcx971ZiM.jpeg?width=800&height=800',
      srcSet:
        '/assets/images/O46nYIHhimV9ETWDlqrcx971ZiM.jpeg?scale-down-to=512&width=800&height=800 512w,/assets/images/O46nYIHhimV9ETWDlqrcx971ZiM.jpeg?width=800&height=800 800w',
      sizes:
        '(min-width: 1240px) 375px, (max-width: 767.98px) 350px, (min-width: 768px) and (max-width: 1239.98px) 350px',
      width: 800,
      height: 800,
      alt: 'Nikie Mellons',
    },
    nameClass: 'framer-1fnctsx',
    name: 'Vincent Roux',
    roleClass: 'framer-1u6p3i',
    role: 'CEO @ GOUD Santé',
  },
  {
    containerClass: 'framer-ay5903',
    figureClass: 'framer-1kl7mkb',
    img: {
      src: '/assets/images/lyIwOv1puBWIqCuDn2zoYOXI9BY.jpeg?width=800&height=800',
      srcSet:
        '/assets/images/lyIwOv1puBWIqCuDn2zoYOXI9BY.jpeg?scale-down-to=512&width=800&height=800 512w,/assets/images/lyIwOv1puBWIqCuDn2zoYOXI9BY.jpeg?width=800&height=800 800w',
      sizes:
        '(min-width: 1240px) max(375px, 50px), (max-width: 767.98px) max(350px, 50px), (min-width: 768px) and (max-width: 1239.98px) max(350px, 50px)',
      width: 800,
      height: 800,
      alt: 'Nikie Mellons',
    },
    nameClass: 'framer-15opikg',
    name: 'Pauline Corriou',
    roleClass: 'framer-1bieujj',
    role: 'Lead User Researcher @Imagination Machine',
  },
  {
    containerClass: 'framer-obn2eq',
    figureClass: 'framer-hx8jjc',
    img: {
      src: '/assets/images/vDdpuf0bvfUg1jOKqSriwoI8As.jpeg?width=584&height=584',
      srcSet:
        '/assets/images/vDdpuf0bvfUg1jOKqSriwoI8As.jpeg?scale-down-to=512&width=584&height=584 512w,/assets/images/vDdpuf0bvfUg1jOKqSriwoI8As.jpeg?width=584&height=584 584w',
      sizes:
        '(min-width: 1240px) max(375px, 50px, max((min(100vw - 200px, 1000px) - 120px) / 3, 200px)), (max-width: 767.98px) max(350px, 50px, max(min(100vw - 200px, 1000px), 200px)), (min-width: 768px) and (max-width: 1239.98px) max(350px, 50px, max((min(100vw - 200px, 1000px) - 120px) / 3, 200px))',
      width: 584,
      height: 584,
      alt: 'Nikie Mellons',
    },
    nameClass: 'framer-hd1h1b',
    name: 'Florian Hervéou',
    roleClass: 'framer-19di67a',
    role: 'Co-fondateur @ Startup Palace',
  },
  {
    containerClass: 'framer-asizgj',
    figureClass: 'framer-k776s1',
    img: {
      src: '/assets/images/VQm4I4LuWNHC0UemB1sslF3p8.jpeg?width=800&height=800',
      srcSet:
        '/assets/images/VQm4I4LuWNHC0UemB1sslF3p8.jpeg?scale-down-to=512&width=800&height=800 512w,/assets/images/VQm4I4LuWNHC0UemB1sslF3p8.jpeg?width=800&height=800 800w',
      sizes:
        '(min-width: 1240px) max(375px, 50px), (max-width: 767.98px) max(350px, 50px), (min-width: 768px) and (max-width: 1239.98px) max(350px, 50px)',
      width: 800,
      height: 800,
      alt: 'Janita Wilson',
    },
    nameClass: 'framer-1tcohq',
    name: 'Simon Timssale',
    roleClass: 'framer-aawosn',
    role: 'Consultant en IA générative',
  },
  {
    containerClass: 'framer-763b8v',
    figureClass: 'framer-1x656jw',
    img: {
      src: '/assets/images/U5a4MBIv6ReTsrawoDNaPwK7cbc.png?width=422&height=630',
      srcSet: '/assets/images/U5a4MBIv6ReTsrawoDNaPwK7cbc.png?width=422&height=630 422w',
      sizes:
        '(min-width: 1240px) 375px, (max-width: 767.98px) 350px, (min-width: 768px) and (max-width: 1239.98px) 350px',
      width: 422,
      height: 630,
      alt: 'Nikie Mellons',
    },
    nameClass: 'framer-v77fqp',
    name: 'Benjamin Guillet',
    roleClass: 'framer-v50cp6',
    role: 'CSM @ TGS France',
  },
  {
    containerClass: 'framer-rtja3j',
    figureClass: 'framer-1033dcn',
    img: {
      src: '/assets/images/2o7PKySlJfnTfrnUJMjqKSpqHA.jpeg?width=800&height=800',
      srcSet:
        '/assets/images/2o7PKySlJfnTfrnUJMjqKSpqHA.jpeg?scale-down-to=512&width=800&height=800 512w,/assets/images/2o7PKySlJfnTfrnUJMjqKSpqHA.jpeg?width=800&height=800 800w',
      sizes:
        '(min-width: 1240px) 375px, (max-width: 767.98px) 350px, (min-width: 768px) and (max-width: 1239.98px) 350px',
      width: 800,
      height: 800,
      alt: 'Nikie Mellons',
    },
    nameClass: 'framer-1ym3f0b',
    name: 'Samuel Berthe',
    roleClass: 'framer-1ghrchc',
    role: 'CTO',
  },
  {
    containerClass: 'framer-1093ab',
    figureClass: 'framer-n6kdmj',
    img: {
      src: '/assets/images/X4BtJgPPmF3pmQX6HxtFctIg.jpeg?width=800&height=800',
      srcSet:
        '/assets/images/X4BtJgPPmF3pmQX6HxtFctIg.jpeg?scale-down-to=512&width=800&height=800 512w,/assets/images/X4BtJgPPmF3pmQX6HxtFctIg.jpeg?width=800&height=800 800w',
      sizes:
        '(min-width: 1240px) 375px, (max-width: 767.98px) 350px, (min-width: 768px) and (max-width: 1239.98px) 350px',
      width: 800,
      height: 800,
      alt: 'Nikie Mellons',
    },
    nameClass: 'framer-34srcz',
    name: 'Mathilde Bermond',
    roleClass: 'framer-1axu8jp',
    role: 'Partenariats Entreprises @ Ecole de design',
  },
  {
    containerClass: 'framer-862lmi',
    figureClass: 'framer-1nnb1k1',
    img: {
      src: '/assets/images/QbK87ttZH4QcYXv2gmEfA19gJM.jpeg?width=461&height=461',
      width: 461,
      height: 461,
      alt: 'Nikie Mellons',
    },
    nameClass: 'framer-sejtzy',
    name: 'Lucie Valette',
    roleClass: 'framer-11al55p',
    role: 'Coach en prise de parole en public',
  },
];

export default function Team() {
  return (
    <div className="framer-5v8bsc" data-framer-name="Team">
      <div className="framer-1v5ca87" data-framer-name="Container">
        <div
          className="framer-q9t2ay"
          data-framer-name="Title"
          style={{
            willChange: 'transform',
            opacity: '0',
            transform: 'perspective(1200px) translateY(300px)',
          }}
        >
          <div className="framer-lm9w4t">
            <div
              className="framer-ee21g2"
              data-framer-component-type="RichTextContainer"
              style={{ transform: 'none' }}
            >
              <h2
                className="framer-text framer-styles-preset-s1qxc7 center-mobile"
                data-styles-preset="GP3w7rUvI"
              >
                Ils seront de la partie
              </h2>
            </div>
          </div>
          <div className="framer-1w5s1td">
            <div
              className="framer-vc5uhs"
              data-framer-component-type="RichTextContainer"
              style={{ transform: 'none' }}
            >
              <p
                className="framer-text framer-styles-preset-1pwt84p center-mobile"
                data-styles-preset="A8o4HivZV"
              >
                Coachs, speakers ou jury, ils seront présents lors de l'événement
              </p>
            </div>
          </div>
        </div>
        <div
          className="framer-4tklsg"
          data-framer-name="Team Details"
          style={{
            willChange: 'transform',
            opacity: '0',
            transform: 'perspective(1200px) translateY(300px)',
          }}
        >
          {members.map(({ containerClass, figureClass, figureStyle, img, nameClass, name, roleClass, role }) => (
            <div key={containerClass} className={containerClass}>
              <figure as="figure" className={figureClass} style={figureStyle}>
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
                    width={img.width}
                    height={img.height}
                    {...(img.sizes && { sizes: img.sizes })}
                    {...(img.srcSet && { srcSet: img.srcSet })}
                    src={img.src}
                    alt={img.alt}
                    style={{
                      display: 'block',
                      width: '100%',
                      height: '100%',
                      borderRadius: 'inherit',
                      objectPosition: img.objectPosition ?? 'center',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </figure>
              <div
                className={nameClass}
                data-framer-component-type="RichTextContainer"
                style={{ transform: 'none' }}
              >
                <h6
                  style={{
                    '--font-selector': 'R0Y7RGVsYSBHb3RoaWMgT25lLXJlZ3VsYXI=',
                    '--framer-font-family': '&quot',
                    '--framer-font-size': '24px',
                    '--framer-text-color': 'rgb(255, 255, 255)',
                  }}
                  className="framer-text"
                >
                  {name}
                </h6>
              </div>
              <div
                className={roleClass}
                data-framer-component-type="RichTextContainer"
                style={{ transform: 'none' }}
              >
                <p
                  className="framer-text framer-styles-preset-1pwt84p"
                  data-styles-preset="A8o4HivZV"
                  style={{ '--framer-text-color': 'rgb(255, 255, 255)' }}
                >
                  {role}
                </p>
              </div>
            </div>
          ))}
        </div>
        <a className="framer-15fn3n5 framer-lux5qc" data-framer-name="Button" href="./"></a>
        {/* /$ */}
      </div>
    </div>
  );
}
