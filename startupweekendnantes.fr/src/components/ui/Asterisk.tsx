/** Astérisque ✳ — motif "signal" de la DA (asset "Union" de Guillaume, redessiné en SVG). */
type Props = { size?: number; color?: string; className?: string; style?: React.CSSProperties };

export default function Asterisk({ size = 24, color = '#ABDCFF', className, style }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-50 -50 100 100"
      className={className}
      style={{ flex: 'none', ...style }}
      aria-hidden="true"
      focusable="false"
    >
      <g fill={color}>
        <rect x="-7.5" y="-50" width="15" height="100" />
        <rect x="-7.5" y="-50" width="15" height="100" transform="rotate(45)" />
        <rect x="-7.5" y="-50" width="15" height="100" transform="rotate(90)" />
        <rect x="-7.5" y="-50" width="15" height="100" transform="rotate(135)" />
      </g>
    </svg>
  );
}
