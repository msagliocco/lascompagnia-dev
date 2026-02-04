type ResponsiveImageProps = {
  srcBase: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  className?: string;
  pictureClassName?: string;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'auto' | 'sync';
  fetchPriority?: 'high' | 'low' | 'auto';
  widths?: number[];
  draggable?: boolean;
};

const defaultWidths = [320, 480, 640, 960, 1440, 1600, 2000];

const normalizeWidths = (widths: number[], maxWidth: number) => {
  const filtered = widths.filter((width) => width <= maxWidth);
  const unique = Array.from(new Set(filtered));
  if (unique.length === 0) {
    return [maxWidth];
  }
  return unique.sort((a, b) => a - b);
};

const buildSrcSet = (srcBase: string, widths: number[], ext: string) =>
  widths.map((width) => `${srcBase}-${width}.${ext} ${width}w`).join(', ');

const ResponsiveImage = ({
  srcBase,
  alt,
  width,
  height,
  sizes,
  className,
  pictureClassName,
  loading = 'lazy',
  decoding = 'async',
  fetchPriority,
  widths = defaultWidths,
  draggable,
}: ResponsiveImageProps) => {
  const normalizedWidths = normalizeWidths(widths, width);
  const fallbackWidth = normalizedWidths[normalizedWidths.length - 1];

  return (
    <picture className={pictureClassName ?? 'block'}>
      <source
        type="image/webp"
        srcSet={buildSrcSet(srcBase, normalizedWidths, 'webp')}
        sizes={sizes}
      />
      <source
        type="image/jpeg"
        srcSet={buildSrcSet(srcBase, normalizedWidths, 'jpg')}
        sizes={sizes}
      />
      <img
        src={`${srcBase}-${fallbackWidth}.jpg`}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchPriority}
        className={className}
        draggable={draggable}
      />
    </picture>
  );
};

export default ResponsiveImage;
