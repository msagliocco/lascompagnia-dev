import { useState } from 'react';
import ResponsiveImage from './ResponsiveImage';

type GalleryImage = {
  id: number;
  thumbBase: string;
  fullBase: string;
  span: string;
  alt: string;
  width: number;
  height: number;
};

type GalleryProps = {
  canLoadMedia: boolean;
  onEnableMedia: () => void;
};

const Gallery = ({ canLoadMedia, onEnableMedia }: GalleryProps) => {
  const images: GalleryImage[] = [
    // Il Dio del Massacro photos
    {
      id: 1,
      thumbBase: 'images/optimized/gallery-dio-7187',
      fullBase: 'images/optimized/gallery-dio-7187',
      span: 'row-span-2',
      alt: 'Scena da Il Dio del Massacro (1)',
      width: 4898,
      height: 3265,
    },
    {
      id: 2,
      thumbBase: 'images/optimized/gallery-dio-7174',
      fullBase: 'images/optimized/gallery-dio-7174',
      span: 'row-span-1',
      alt: 'Scena da Il Dio del Massacro (2)',
      width: 4898,
      height: 3265,
    },
    {
      id: 3,
      thumbBase: 'images/optimized/gallery-dio-7107',
      fullBase: 'images/optimized/gallery-dio-7107',
      span: 'row-span-2',
      alt: 'Scena da Il Dio del Massacro (3)',
      width: 4898,
      height: 3265,
    },
    {
      id: 4,
      thumbBase: 'images/optimized/gallery-dio-7101',
      fullBase: 'images/optimized/gallery-dio-7101',
      span: 'row-span-1',
      alt: 'Scena da Il Dio del Massacro (4)',
      width: 4898,
      height: 3265,
    },
    {
      id: 5,
      thumbBase: 'images/optimized/gallery-dio-7077',
      fullBase: 'images/optimized/gallery-dio-7077',
      span: 'row-span-2',
      alt: 'Scena da Il Dio del Massacro (5)',
      width: 4898,
      height: 3265,
    },
    {
      id: 6,
      thumbBase: 'images/optimized/gallery-dio-6954',
      fullBase: 'images/optimized/gallery-dio-6954',
      span: 'row-span-1',
      alt: 'Scena da Il Dio del Massacro (6)',
      width: 4898,
      height: 3265,
    },
    // Other gallery photos
    {
      id: 7,
      thumbBase: 'images/optimized/gallery-tesi-collage',
      fullBase: 'images/optimized/gallery-tesi-collage',
      span: 'row-span-2',
      alt: 'La Tesi di Ernesto - collage',
      width: 720,
      height: 720,
    },
    {
      id: 8,
      thumbBase: 'images/optimized/gallery-77328431',
      fullBase: 'images/optimized/gallery-77328431',
      span: 'row-span-1',
      alt: 'Foto di scena La Scompagnia (1)',
      width: 1824,
      height: 1368,
    },
    {
      id: 9,
      thumbBase: 'images/optimized/gallery-79003044',
      fullBase: 'images/optimized/gallery-79003044',
      span: 'row-span-2',
      alt: 'Foto di scena La Scompagnia (2)',
      width: 1314,
      height: 1753,
    },
    {
      id: 10,
      thumbBase: 'images/optimized/gallery-79449961',
      fullBase: 'images/optimized/gallery-79449961',
      span: 'row-span-2',
      alt: 'Foto di scena La Scompagnia (3)',
      width: 1509,
      height: 1937,
    },
    {
      id: 11,
      thumbBase: 'images/optimized/gallery-79692414',
      fullBase: 'images/optimized/gallery-79692414',
      span: 'row-span-2',
      alt: 'Foto di scena La Scompagnia (4)',
      width: 1440,
      height: 1439,
    },
    {
      id: 12,
      thumbBase: 'images/optimized/gallery-80002972',
      fullBase: 'images/optimized/gallery-80002972',
      span: 'row-span-1',
      alt: 'Foto di scena La Scompagnia (5)',
      width: 1824,
      height: 1368,
    },
    {
      id: 13,
      thumbBase: 'images/optimized/gallery-dio-6982',
      fullBase: 'images/optimized/gallery-dio-6982',
      span: 'row-span-1',
      alt: 'Scena da Il Dio del Massacro (7)',
      width: 4898,
      height: 3265,
    },
  ];

  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section id="gallery" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black mb-16 text-center uppercase tracking-tight text-pitch-black">
          Galleria
        </h2>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((image) => (
            <div
              key={image.id}
              className={`group bw-hover-group relative ${image.span} cursor-pointer hover:shadow-brutal transition-all duration-200`}
              onClick={() => setSelectedImage(image)}
            >
              <div className="team-photo team-photo--light w-full h-full border-2 border-pitch-black bg-off-white">
                <ResponsiveImage
                  srcBase={image.thumbBase}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  widths={[320, 640, 960]}
                  sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  pictureClassName="absolute inset-0"
                  className="absolute inset-0 w-full h-full object-cover bw-hover transition-all duration-300"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-neon-lime transition-all duration-200 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-pitch-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-[90vw] max-h-[90vh] border-2 border-pitch-black p-2 bg-off-white shadow-brutal flex flex-col w-auto h-auto">
              <ResponsiveImage
                srcBase={selectedImage.fullBase}
                alt={selectedImage.alt}
                width={selectedImage.width}
                height={selectedImage.height}
                widths={[640, 960, 1440, 2000]}
                sizes="90vw"
                pictureClassName="block w-full"
                className="max-w-full max-h-[85vh] object-contain w-auto h-auto"
                loading="eager"
                fetchPriority="high"
              />
              <button
                className="stamp-mark w-10 h-10 text-lg absolute top-4 right-4 cursor-pointer transition-transform hover:-translate-y-0.5 z-10 flex items-center justify-center bg-white border-2 border-pitch-black shadow-md"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                X
              </button>
            </div>
          </div>
        )}

        {/* Video Section */}
        <div className="mt-24">
          <h3 className="text-3xl font-black mb-12 text-center uppercase text-pitch-black">
            <span className="stamp-mark stamp-featured">Video</span> in Evidenza
          </h3>
          <div className="space-y-12">
            <div className="aspect-w-16 aspect-h-9 mx-auto border-2 border-pitch-black shadow-brutal">
              {canLoadMedia ? (
                <iframe
                  className="w-full h-full"
                  src="https://player.clevercast.com?autoplay=false&amp;autoload=off&amp;captions_default=nl&amp;captions_default_show=true&amp;chromecast=true&amp;account_id=WXv1JD&amp;item_id=A6zJdD&amp;comm_url=&amp;comm_url_prefetch=false"
                  title="Clevercast Video"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              ) : (
                <div className="w-full h-full bg-off-white flex items-center justify-center">
                  <div className="text-center px-6">
                    <p className="font-mono text-xs uppercase tracking-[0.3em] text-gray-700 mb-3">
                      Video disattivato
                    </p>
                    <p className="text-2xl font-black uppercase text-pitch-black mb-4">
                      Abilita contenuti
                    </p>
                    <button onClick={onEnableMedia} className="brutal-btn brutal-btn-sm">
                      Abilita video
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="aspect-w-16 aspect-h-9 mx-auto border-2 border-pitch-black shadow-brutal">
              {canLoadMedia ? (
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/qWC4zvh1T5c?si=Z4TxVZzNiq76D8dh"
                  title="La Tesi di Ernesto - La Scompagnia - Video in evidenza"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              ) : (
                <div className="w-full h-full bg-off-white flex items-center justify-center">
                  <div className="text-center px-6">
                    <p className="font-mono text-xs uppercase tracking-[0.3em] text-gray-700 mb-3">
                      Video disattivato
                    </p>
                    <p className="text-2xl font-black uppercase text-pitch-black mb-4">
                      Abilita contenuti
                    </p>
                    <button onClick={onEnableMedia} className="brutal-btn brutal-btn-sm">
                      Abilita video
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
