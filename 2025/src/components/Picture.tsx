import { imageManifest } from '../data/image-manifest';

type PictureProps = {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
};

const swap = (src: string, ext: string) => src.replace(/\.(jpe?g|png)$/i, ext);

/**
 * <img> with auto avif/webp <source>s pulled from the generated manifest
 * (src/data/image-manifest.ts → run scripts/optimize-images.mjs). The <picture>
 * uses `display: contents` so it adds no box — existing CSS that targets the
 * inner <img> keeps working unchanged.
 *
 * avif/webp sources are emitted only when the manifest says that variant exists
 * (the optimiser drops variants that compress worse than the fallback).
 */
export default function Picture({
  src,
  alt,
  className,
  loading = 'lazy',
  decoding = 'async',
}: PictureProps) {
  const m = imageManifest[src];
  return (
    <picture className="picture-contents">
      {m?.avif && <source srcSet={swap(src, '.avif')} type="image/avif" />}
      {m?.webp && <source srcSet={swap(src, '.webp')} type="image/webp" />}
      <img src={src} alt={alt} className={className} loading={loading} decoding={decoding} />
    </picture>
  );
}
