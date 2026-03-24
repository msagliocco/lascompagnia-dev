import { useState } from 'react';
import ResponsiveImage from './ResponsiveImage';

type SceneImage = {
  id: number;
  srcBase: string;
  alt: string;
  width: number;
  height: number;
  layoutClass: string;
  imageClassName?: string;
};

const sceneImages: SceneImage[] = [
  {
    id: 2,
    srcBase: 'images/optimized/coppia-aperta-scena-finestra',
    alt: 'Coppia aperta quasi spalancata - scena alla finestra',
    width: 2278,
    height: 1708,
    layoutClass: 'md:col-span-2 lg:col-span-3 xl:col-span-6 xl:row-span-3',
    imageClassName: 'object-[52%_42%]',
  },
  {
    id: 3,
    srcBase: 'images/optimized/coppia-aperta-scena-carte',
    alt: 'Coppia aperta quasi spalancata - scena con le carte',
    width: 2055,
    height: 1541,
    layoutClass: 'md:col-span-2 lg:col-span-3 xl:col-span-6 xl:row-span-3',
    imageClassName: 'object-[44%_38%]',
  },
  {
    id: 1,
    srcBase: 'images/optimized/coppia-aperta-scena-pistola-1',
    alt: 'Coppia aperta quasi spalancata - scena del confronto con la pistola',
    width: 1850,
    height: 2469,
    layoutClass: 'md:row-span-2 lg:col-span-1 xl:col-span-4 xl:row-span-5',
    imageClassName: 'object-[48%_40%]',
  },
  {
    id: 4,
    srcBase: 'images/optimized/coppia-aperta-scena-pistola-2',
    alt: 'Coppia aperta quasi spalancata - secondo momento del confronto',
    width: 1934,
    height: 2579,
    layoutClass: 'md:row-span-2 lg:col-span-1 xl:col-span-4 xl:row-span-5',
    imageClassName: 'object-[52%_42%]',
  },
  {
    id: 5,
    srcBase: 'images/optimized/coppia-aperta-scena-accappatoio',
    alt: 'Coppia aperta quasi spalancata - scena in accappatoio',
    width: 2512,
    height: 3350,
    layoutClass: 'md:col-span-2 md:row-span-2 lg:col-span-1 xl:col-span-4 xl:row-span-5',
    imageClassName: 'object-[58%_45%]',
  },
];

const soldOutDates = ['21 marzo 2026', '22 marzo 2026'];

const CoppiaApertaSection = () => {
  const [selectedImage, setSelectedImage] = useState<SceneImage | null>(null);

  return (
    <section id="coppia-aperta" className="py-16 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="poster-card border-4 p-0 overflow-hidden">
          <div className="grid lg:grid-cols-[minmax(300px,0.78fr)_minmax(0,1.22fr)]">
            <div className="relative min-h-[340px] border-b-4 lg:border-b-0 lg:border-r-4 border-pitch-black bg-pitch-black">
              <div className="absolute top-5 left-5 z-10">
                <div className="stamp-mark px-3 py-1 text-sm rotate-[-5deg]">Sold out</div>
              </div>
              <ResponsiveImage
                srcBase="images/optimized/locandina-coppia-aperta"
                alt="Locandina di Coppia aperta quasi spalancata"
                width={1131}
                height={1600}
                widths={[480, 960, 1440, 1600]}
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="w-full h-full min-h-[340px] object-cover object-top"
                loading="lazy"
              />
            </div>

            <div className="bg-off-white p-6 md:p-8 lg:p-10">
              <div className="flex h-full flex-col gap-8">
                <div className="flex flex-wrap items-start justify-between gap-5 border-b-2 border-dashed border-pitch-black/20 pb-6">
                  <div className="max-w-2xl">
                    <p className="font-mono text-xs uppercase tracking-[0.35em] text-gray-700 mb-3">
                      Focus sullo spettacolo
                    </p>
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-pitch-black leading-none">
                      Coppia aperta
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-neon-pink leading-none mt-1">
                      quasi spalancata
                    </h3>
                  </div>

                  <div className="note-card w-full sm:max-w-[310px] xl:max-w-[340px] shrink-0">
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-gray-700 mb-3">
                      Tutto esaurito
                    </p>
                    <div className="space-y-2">
                      {soldOutDates.map((date) => (
                        <div
                          key={date}
                          className="flex items-center justify-between gap-3 border-b border-dashed border-pitch-black/25 pb-2 last:border-b-0 last:pb-0"
                        >
                          <span className="font-mono text-xs uppercase tracking-[0.16em] text-pitch-black">
                            {date}
                          </span>
                          <span className="stamp-mark stamp-mini">Sold out</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid xl:grid-cols-[minmax(0,1.35fr)_minmax(250px,0.8fr)] gap-6 lg:gap-8 items-start">
                  <div className="max-w-2xl space-y-4 text-sm md:text-base leading-relaxed text-pitch-black">
                    <p>
                      Le repliche del <strong>21 marzo 2026</strong> e del <strong>22 marzo 2026</strong> hanno registrato il tutto esaurito.
                      La nuova produzione de <strong>La Scompagnia</strong> affronta il testo di <strong>Dario Fo</strong> e
                      <strong> Franca Rame</strong> come un duello continuo fra desiderio di libertà, gelosia, ironia e disordine
                      sentimentale.
                    </p>
                    <p>
                      Con <strong>Antonella Picarella</strong> e <strong>Antonio Santangelo</strong>, lo spettacolo alterna leggerezza e
                      tensione, passando dalla comicità più tagliente a momenti di fragilità che restano addosso.
                    </p>
                    <p className="font-mono text-xs uppercase tracking-[0.24em] text-gray-700 pt-2">
                      Una selezione di scatti dalle ultime repliche sold out.
                    </p>
                  </div>

                  <div className="brutal-card bg-wall self-start">
                    <p className="font-mono text-xs uppercase tracking-[0.3em] text-gray-700 mb-4">Scheda</p>
                    <div className="space-y-3 text-sm leading-relaxed">
                      <p><strong>Titolo:</strong> Coppia aperta quasi spalancata</p>
                      <p><strong>Autori:</strong> Dario Fo, Franca Rame</p>
                      <p><strong>Interpreti:</strong> Antonella Picarella, Antonio Santangelo</p>
                      <p><strong>Regia:</strong> Antonio Santangelo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 border-t-4 border-pitch-black bg-off-white px-6 py-6 md:px-8 md:py-8 lg:px-10">
              <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.32em] text-gray-700 mb-2">
                    Fotografie di scena
                  </p>
                  <h3 className="text-3xl md:text-4xl font-black uppercase text-pitch-black">
                    Galleria di scena
                  </h3>
                </div>
                <p className="font-mono text-[0.72rem] uppercase tracking-[0.24em] text-gray-700">
                  Clicca per ingrandire
                </p>
              </div>

              <div className="grid grid-cols-1 auto-rows-[200px] gap-4 md:grid-cols-2 md:auto-rows-[240px] lg:grid-cols-3 lg:auto-rows-[220px] xl:grid-cols-12 xl:auto-rows-[92px]">
                {sceneImages.map((image) => (
                  <button
                    key={image.id}
                    type="button"
                    className={`group bw-hover-group relative cursor-pointer overflow-hidden text-left transition-all duration-200 hover:shadow-brutal ${image.layoutClass}`}
                    onClick={() => setSelectedImage(image)}
                  >
                    <div className="gallery-photo h-full w-full border-2 border-pitch-black bg-off-white">
                      <ResponsiveImage
                        srcBase={image.srcBase}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        widths={[320, 640, 960, 1440, 2000]}
                        sizes="(min-width: 1280px) 33vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        pictureClassName="absolute inset-0 z-0"
                        className={`bw-hover absolute inset-0 z-0 h-full w-full object-cover transition-all duration-300 ${image.imageClassName ?? ''}`}
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 border-4 border-transparent group-hover:border-neon-lime transition-all duration-200 pointer-events-none"></div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-pitch-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-[90vw] max-h-[90vh] border-2 border-pitch-black p-2 bg-off-white shadow-brutal flex flex-col w-auto h-auto">
              <ResponsiveImage
                srcBase={selectedImage.srcBase}
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
                type="button"
                className="stamp-mark w-10 h-10 text-lg absolute top-4 right-4 cursor-pointer transition-transform hover:-translate-y-0.5 z-10 flex items-center justify-center bg-white border-2 border-pitch-black shadow-md"
                onClick={(event) => {
                  event.stopPropagation();
                  setSelectedImage(null);
                }}
                aria-label="Chiudi immagine"
              >
                X
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CoppiaApertaSection;
