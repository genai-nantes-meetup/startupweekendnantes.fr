type GridMember = {
  containerClass: string;
  imgDivClass: string;
  img: {
    src: string;
    srcSet?: string;
    sizes?: string;
    width: number;
    height: number;
    objectPosition?: string;
    desktopSizes?: string;
    mobileSizes?: string;
  };
  contentClass: string;
  nameClass: string;
  name: string;
  nameBold?: boolean;
  roleClass: string;
  role: string;
};

const members: GridMember[] = [
  {
    containerClass: 'framer-1je0smj',
    imgDivClass: 'framer-9snwfz',
    img: {
      src: '/assets/images/CPPiPrmwNlBDD16ZjEsEp7jSOYQ.png?width=512&height=512',
      width: 512,
      height: 512,
    },
    contentClass: 'framer-mf8h2o',
    nameClass: 'framer-j7xngz',
    name: 'Florence POYVRE',
    roleClass: 'framer-2dwkc7',
    role: 'Co-Founder @Fly The Nest',
  },
  {
    containerClass: 'framer-uwstye',
    imgDivClass: 'framer-1q3ps0a',
    img: {
      src: '/assets/images/29nftr9xwtYw2wzRwUXbsYBA8Lw.png?scale-down-to=512&width=800&height=800',
      srcSet:
        '/assets/images/29nftr9xwtYw2wzRwUXbsYBA8Lw.png?scale-down-to=512&width=800&height=800 512w,/assets/images/29nftr9xwtYw2wzRwUXbsYBA8Lw.png?width=800&height=800 800w',
      sizes:
        '(min-width: 1240px) max((min(100vw - 200px, 1000px) - 120px) / 3, 200px), (min-width: 768px) and (max-width: 1239.98px) max((min(100vw - 200px, 1000px) - 120px) / 3, 200px), (max-width: 767.98px) max(min(100vw - 200px, 1000px), 200px)',
      width: 800,
      height: 800,
      desktopSizes: 'max((min(100vw - 200px, 1000px) - 120px) / 3, 200px)',
      mobileSizes: 'max(min(100vw - 200px, 1000px), 200px)',
    },
    contentClass: 'framer-d1r7jt',
    nameClass: 'framer-9y06vw',
    name: 'Robin GOUTARD',
    roleClass: 'framer-d8llo8',
    role: 'Consultant innovation @In Extenso',
  },
  {
    containerClass: 'framer-106e50l',
    imgDivClass: 'framer-1l30qbd',
    img: {
      src: '/assets/images/vDdpuf0bvfUg1jOKqSriwoI8As.jpeg?scale-down-to=512&width=584&height=584',
      srcSet:
        '/assets/images/vDdpuf0bvfUg1jOKqSriwoI8As.jpeg?scale-down-to=512&width=584&height=584 512w,/assets/images/vDdpuf0bvfUg1jOKqSriwoI8As.jpeg?width=584&height=584 584w',
      sizes:
        '(min-width: 1240px) max(375px, 50px, max((min(100vw - 200px, 1000px) - 120px) / 3, 200px)), (max-width: 767.98px) max(350px, 50px, max(min(100vw - 200px, 1000px), 200px)), (min-width: 768px) and (max-width: 1239.98px) max(350px, 50px, max((min(100vw - 200px, 1000px) - 120px) / 3, 200px))',
      width: 584,
      height: 584,
      desktopSizes: 'max((min(100vw - 200px, 1000px) - 120px) / 3, 200px)',
      mobileSizes: 'max(min(100vw - 200px, 1000px), 200px)',
    },
    contentClass: 'framer-1jidpd8',
    nameClass: 'framer-hmcw70',
    name: 'Florian HERVÉOU',
    nameBold: true,
    roleClass: 'framer-17epvpn',
    role: 'Head of Startup Programs @Startup Palace',
  },
  {
    containerClass: 'framer-1snxyfc',
    imgDivClass: 'framer-1jsvdng',
    img: {
      src: '/assets/images/9yaN44IumqxW2zGrUItm4iU18.png?width=512&height=512',
      width: 512,
      height: 512,
    },
    contentClass: 'framer-mqq5te',
    nameClass: 'framer-1afy9co',
    name: 'Guillaume PARTHENAY',
    nameBold: true,
    roleClass: 'framer-13m1xdk',
    role: 'Responsable commercial & marketing @Jujotte',
  },
  {
    containerClass: 'framer-p46eu0',
    imgDivClass: 'framer-13ucxep',
    img: {
      src: '/assets/images/cjfdmDrvGd9wKFVkjxVAYft8Yg.png?width=1080&height=1080',
      srcSet:
        '/assets/images/cjfdmDrvGd9wKFVkjxVAYft8Yg.png?scale-down-to=512&width=1080&height=1080 512w,/assets/images/cjfdmDrvGd9wKFVkjxVAYft8Yg.png?scale-down-to=1024&width=1080&height=1080 1024w,/assets/images/cjfdmDrvGd9wKFVkjxVAYft8Yg.png?width=1080&height=1080 1080w',
      sizes:
        '(min-width: 1240px) max((min(100vw - 200px, 1000px) - 120px) / 3, 200px), (min-width: 768px) and (max-width: 1239.98px) max((min(100vw - 200px, 1000px) - 120px) / 3, 200px), (max-width: 767.98px) max(min(100vw - 200px, 1000px), 200px)',
      width: 1080,
      height: 1080,
      objectPosition: 'left top',
      desktopSizes: 'max((min(100vw - 200px, 1000px) - 120px) / 3, 200px)',
      mobileSizes: 'max(min(100vw - 200px, 1000px), 200px)',
    },
    contentClass: 'framer-1931osx',
    nameClass: 'framer-uynhf8',
    name: 'Louis AMMONIQUE',
    roleClass: 'framer-17zytkq',
    role: 'Growth Manager @kelvin',
  },
  {
    containerClass: 'framer-tk5nw8',
    imgDivClass: 'framer-trvlu7',
    img: {
      src: '/assets/images/kprcfjkwgOzbgcID4jUNV5YNis.png?width=800&height=800',
      srcSet:
        '/assets/images/kprcfjkwgOzbgcID4jUNV5YNis.png?scale-down-to=512&width=800&height=800 512w,/assets/images/kprcfjkwgOzbgcID4jUNV5YNis.png?width=800&height=800 800w',
      sizes:
        '(min-width: 1240px) max((min(100vw - 200px, 1000px) - 120px) / 3, 200px), (min-width: 768px) and (max-width: 1239.98px) max((min(100vw - 200px, 1000px) - 120px) / 3, 200px), (max-width: 767.98px) max(min(100vw - 200px, 1000px), 200px)',
      width: 800,
      height: 800,
      desktopSizes: 'max((min(100vw - 200px, 1000px) - 120px) / 3, 200px)',
      mobileSizes: 'max(min(100vw - 200px, 1000px), 200px)',
    },
    contentClass: 'framer-lyke1',
    nameClass: 'framer-d4jq55',
    name: 'Clara GARNIER',
    roleClass: 'framer-4kis41',
    role: 'Fondatrice @Kidefeel',
  },
  {
    containerClass: 'framer-1a0b9iz',
    imgDivClass: 'framer-5blzig',
    img: {
      src: '/assets/images/eRSRmPp4xOQQD6xgxPzGxkwZ4.png?width=512&height=512',
      width: 512,
      height: 512,
    },
    contentClass: 'framer-3gpnwg',
    nameClass: 'framer-12sp0ed',
    name: 'Romain PERRAUT',
    roleClass: 'framer-sc5hjy',
    role: 'Head of Sales @_icilundi',
  },
  {
    containerClass: 'framer-vdjxdr',
    imgDivClass: 'framer-1wazjrt',
    img: {
      src: '/assets/images/zrnozkkMGZmZ62YKvXWpLSdBMfE.png?scale-down-to=1024&width=1280&height=1707',
      srcSet:
        '/assets/images/zrnozkkMGZmZ62YKvXWpLSdBMfE.png?scale-down-to=1024&width=1280&height=1707 767w,/assets/images/zrnozkkMGZmZ62YKvXWpLSdBMfE.png?width=1280&height=1707 1280w',
      sizes:
        '(min-width: 1240px) max((min(100vw - 200px, 1000px) - 120px) / 3, 200px), (min-width: 768px) and (max-width: 1239.98px) max((min(100vw - 200px, 1000px) - 120px) / 3, 200px), (max-width: 767.98px) max(min(100vw - 200px, 1000px), 200px)',
      width: 1280,
      height: 1707,
      desktopSizes: 'max((min(100vw - 200px, 1000px) - 120px) / 3, 200px)',
      mobileSizes: 'max(min(100vw - 200px, 1000px), 200px)',
    },
    contentClass: 'framer-kcx0nn',
    nameClass: 'framer-1tkbhsz',
    name: 'Ana PASCAUD',
    roleClass: 'framer-yznfwn',
    role: 'Fondatrice @SAWA',
  },
  {
    containerClass: 'framer-1njbvf4',
    imgDivClass: 'framer-1rqrhnn',
    img: {
      src: '/assets/images/afjyIBAmXZ8DGW3gvaIVbNIIoU.jpeg?width=800&height=800',
      srcSet:
        '/assets/images/afjyIBAmXZ8DGW3gvaIVbNIIoU.jpeg?scale-down-to=512&width=800&height=800 512w,/assets/images/afjyIBAmXZ8DGW3gvaIVbNIIoU.jpeg?width=800&height=800 800w',
      sizes:
        '(min-width: 1240px) max((min(100vw - 200px, 1000px) - 120px) / 3, 200px), (min-width: 768px) and (max-width: 1239.98px) max((min(100vw - 200px, 1000px) - 120px) / 3, 200px), (max-width: 767.98px) max(min(100vw - 200px, 1000px), 200px)',
      width: 800,
      height: 800,
      desktopSizes: 'max((min(100vw - 200px, 1000px) - 120px) / 3, 200px)',
      mobileSizes: 'max(min(100vw - 200px, 1000px), 200px)',
    },
    contentClass: 'framer-1xf35t',
    nameClass: 'framer-dd0a5o',
    name: 'Grégory THIBORD',
    roleClass: 'framer-m1wrnn',
    role: 'CEO @_icilundi',
  },
];

export default function Grid() {
  return (
    <div
      className="framer-oger3s"
      data-framer-name="Grid 1"
      style={{
        willChange: 'transform',
        opacity: '0',
        transform: 'perspective(1200px) translateY(150px)',
      }}
    >
      <div className="framer-17806vr">
        {members.map(
          ({ containerClass, imgDivClass, img, contentClass, nameClass, name, nameBold, roleClass, role }) => (
            <div key={containerClass} className={containerClass}>
              <div className="ssr-variant hidden-1or7vws">
                <div className={imgDivClass} data-framer-name="Image">
                  <div
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
                      alt=""
                      style={{
                        display: 'block',
                        width: '100%',
                        height: '100%',
                        borderRadius: 'inherit',
                        objectPosition: img.objectPosition ?? 'center',
                        objectFit: 'cover',
                      }}
                      {...(img.desktopSizes && {
                        'data-framer-original-sizes': img.desktopSizes,
                      })}
                    />
                  </div>
                </div>
              </div>
              <div className="ssr-variant hidden-1eym36j hidden-72rtr7">
                <div className={imgDivClass} data-framer-name="Image">
                  <div
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
                      alt=""
                      style={{
                        display: 'block',
                        width: '100%',
                        height: '100%',
                        borderRadius: 'inherit',
                        objectPosition: img.objectPosition ?? 'center',
                        objectFit: 'cover',
                      }}
                      {...(img.mobileSizes && {
                        'data-framer-original-sizes': img.mobileSizes,
                      })}
                    />
                  </div>
                </div>
              </div>
              <div className={contentClass} data-framer-name="Content">
                <div
                  className={nameClass}
                  data-framer-component-type="RichTextContainer"
                >
                  <h3
                    className="framer-text framer-styles-preset-1xb2uvs"
                    data-styles-preset="FE5b7pE4K"
                  >
                    {nameBold ? <strong className="framer-text">{name}</strong> : name}
                  </h3>
                </div>
                <div
                  className={roleClass}
                  data-framer-component-type="RichTextContainer"
                >
                  <p
                    className="framer-text framer-styles-preset-1pwt84p"
                    data-styles-preset="A8o4HivZV"
                  >
                    {role}
                  </p>
                </div>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
