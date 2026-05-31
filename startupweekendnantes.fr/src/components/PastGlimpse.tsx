type GlimpseImage = {
  figureClass: string;
  src: string;
  srcSet: string;
  sizes: string;
  alt: string;
  objectPosition?: string;
};

const SIZES_SMALL =
  '(min-width: 1240px) calc((min(100vw, 1920px) - 40px) * 0.22), (min-width: 768px) and (max-width: 1239.98px) calc((min(100vw, 1920px) - 40px) * 0.22), (max-width: 767.98px) calc(min(100vw, 1920px) - 40px)';

const SIZES_LARGE =
  '(min-width: 1240px) max(420px, calc((min(100vw, 1920px) - 40px) * 0.22)), (max-width: 767.98px) max(calc(min(100vw, 1600px) - 40px), calc(min(100vw, 1920px) - 40px)), (min-width: 768px) and (max-width: 1239.98px) max(320px, calc((min(100vw, 1920px) - 40px) * 0.22))';

const SIZES_WIDE =
  '(min-width: 1240px) max((min(100vw, 1920px) - 40px) * 0.56 - 20px, 1px), (min-width: 768px) and (max-width: 1239.98px) max((min(100vw, 1920px) - 40px) * 0.56 - 20px, 1px), (max-width: 767.98px) calc(min(100vw, 1920px) - 40px)';

const row1: GlimpseImage[] = [
  {
    figureClass: 'framer-1pnk810',
    src: '/assets/images/cq8ZzypnQ3B7cnq3vSe9YqtKZkc.jpeg?width=515&height=540',
    srcSet: '/assets/images/cq8ZzypnQ3B7cnq3vSe9YqtKZkc.jpeg?width=515&height=540 515w',
    sizes: SIZES_SMALL,
    alt: 'Speaker',
  },
  {
    figureClass: 'framer-nxbs50',
    src: '/assets/images/1MilzwluR4WPySgY1Nc71NA7z10.jpg?width=2732&height=2732',
    srcSet:
      '/assets/images/1MilzwluR4WPySgY1Nc71NA7z10.jpg?scale-down-to=512&width=2732&height=2732 512w,/assets/images/1MilzwluR4WPySgY1Nc71NA7z10.jpg?scale-down-to=1024&width=2732&height=2732 1024w,/assets/images/1MilzwluR4WPySgY1Nc71NA7z10.jpg?scale-down-to=2048&width=2732&height=2732 2048w,/assets/images/1MilzwluR4WPySgY1Nc71NA7z10.jpg?width=2732&height=2732 2732w',
    sizes: SIZES_SMALL,
    alt: 'Comference',
  },
  {
    figureClass: 'framer-1yolfwo',
    src: '/assets/images/FS3ISXEUHf4xNgOzHz1v79bPNPo.jpg?width=6048&height=4024',
    srcSet:
      '/assets/images/FS3ISXEUHf4xNgOzHz1v79bPNPo.jpg?scale-down-to=512&width=6048&height=4024 512w,/assets/images/FS3ISXEUHf4xNgOzHz1v79bPNPo.jpg?scale-down-to=1024&width=6048&height=4024 1024w,/assets/images/FS3ISXEUHf4xNgOzHz1v79bPNPo.jpg?scale-down-to=2048&width=6048&height=4024 2048w,/assets/images/FS3ISXEUHf4xNgOzHz1v79bPNPo.jpg?scale-down-to=4096&width=6048&height=4024 4096w,/assets/images/FS3ISXEUHf4xNgOzHz1v79bPNPo.jpg?width=6048&height=4024 6048w',
    sizes: SIZES_LARGE,
    alt: 'Speaker',
  },
  {
    figureClass: 'framer-98otom',
    src: '/assets/images/LB31XkKlru3wRHoN0ROFW1Y1BE.jpeg?width=864&height=540',
    srcSet:
      '/assets/images/LB31XkKlru3wRHoN0ROFW1Y1BE.jpeg?scale-down-to=512&width=864&height=540 512w,/assets/images/LB31XkKlru3wRHoN0ROFW1Y1BE.jpeg?width=864&height=540 864w',
    sizes: SIZES_SMALL,
    alt: 'Stage',
  },
];

const row2: GlimpseImage[] = [
  {
    figureClass: 'framer-i1602r',
    src: '/assets/images/8y7OL16jlkcxqLPypsoox88cM8.jpg?width=3728&height=2725',
    srcSet:
      '/assets/images/8y7OL16jlkcxqLPypsoox88cM8.jpg?scale-down-to=512&width=3728&height=2725 512w,/assets/images/8y7OL16jlkcxqLPypsoox88cM8.jpg?scale-down-to=1024&width=3728&height=2725 1024w,/assets/images/8y7OL16jlkcxqLPypsoox88cM8.jpg?scale-down-to=2048&width=3728&height=2725 2048w,/assets/images/8y7OL16jlkcxqLPypsoox88cM8.jpg?width=3728&height=2725 3728w',
    sizes: SIZES_SMALL,
    alt: 'Speaker',
  },
  {
    figureClass: 'framer-96r9v2',
    src: '/assets/images/cQsYNI5NzBkgWVy7WotaBRZ21X8.jpg?width=3676&height=2725',
    srcSet:
      '/assets/images/cQsYNI5NzBkgWVy7WotaBRZ21X8.jpg?scale-down-to=512&width=3676&height=2725 512w,/assets/images/cQsYNI5NzBkgWVy7WotaBRZ21X8.jpg?scale-down-to=1024&width=3676&height=2725 1024w,/assets/images/cQsYNI5NzBkgWVy7WotaBRZ21X8.jpg?scale-down-to=2048&width=3676&height=2725 2048w,/assets/images/cQsYNI5NzBkgWVy7WotaBRZ21X8.jpg?width=3676&height=2725 3676w',
    sizes: SIZES_SMALL,
    alt: 'Live session',
    objectPosition: 'right center',
  },
  {
    figureClass: 'framer-1ahd8js',
    src: '/assets/images/FeaVRWV08CQHZHnzXhBakRt95o.jpg?width=3720&height=3720',
    srcSet:
      '/assets/images/FeaVRWV08CQHZHnzXhBakRt95o.jpg?scale-down-to=512&width=3720&height=3720 512w,/assets/images/FeaVRWV08CQHZHnzXhBakRt95o.jpg?scale-down-to=1024&width=3720&height=3720 1024w,/assets/images/FeaVRWV08CQHZHnzXhBakRt95o.jpg?scale-down-to=2048&width=3720&height=3720 2048w,/assets/images/FeaVRWV08CQHZHnzXhBakRt95o.jpg?width=3720&height=3720 3720w',
    sizes: SIZES_WIDE,
    alt: 'Group photo',
  },
];

function GlimpseImg({ figureClass, src, srcSet, sizes, alt, objectPosition }: GlimpseImage) {
  return (
    <figure as="figure" className={figureClass}>
      <div data-framer-background-image-wrapper="true">
        <img
          decoding="async"
          loading="lazy"
          sizes={sizes}
          srcSet={srcSet}
          src={src}
          alt={alt}
          {...(objectPosition && { style: { objectPosition } })}
        />
      </div>
    </figure>
  );
}

const IMAGES_APPEAR_STYLE = {
  willChange: 'transform',
  opacity: '0',
  transform: 'perspective(1200px) translateY(150px)',
} as React.CSSProperties;

export default function PastGlimpse() {
  return (
    <div className="framer-70g4r4" data-framer-name="Past Glimpse">
      <div
        className="framer-1ulr66t"
        data-border="true"
        data-framer-name="Title"
        style={{
          willChange: 'transform',
          opacity: '0',
          transform: 'perspective(1200px) scale(0.5)',
        }}
      >
        <div
          className="framer-14wdi02"
          data-framer-component-type="RichTextContainer"
        >
          {/* Mobile shows shorter title without "Nantes" */}
          <h2
            className="framer-text framer-styles-preset-s1qxc7 hidden-1or7vws"
            data-styles-preset="GP3w7rUvI"
            style={{ '--framer-text-color': 'rgb(255, 255, 255)' }}
          >
            Le Lieu - Le Palace, Nantes
          </h2>
          <h2
            className="framer-text framer-styles-preset-s1qxc7 hidden-1eym36j hidden-72rtr7"
            data-styles-preset="GP3w7rUvI"
            style={{ '--framer-text-color': 'rgb(255, 255, 255)' }}
          >
            Le Lieu - Le Palace
          </h2>
        </div>
      </div>
      <div className="framer-1jqwtil" data-framer-name="Images" style={IMAGES_APPEAR_STYLE}>
        {row1.map((img) => (
          <GlimpseImg key={img.figureClass} {...img} />
        ))}
      </div>
      <div className="framer-pide0q" data-framer-name="Images" style={IMAGES_APPEAR_STYLE}>
        {row2.map((img) => (
          <GlimpseImg key={img.figureClass} {...img} />
        ))}
      </div>
    </div>
  );
}
