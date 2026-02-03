import { useState } from 'react';

const Gallery = () => {
  const images = [
    // Il Dio del Massacro photos
    { id: 1, url: 'images/gallery/il-dio-del-massacro/IMG_7187.jpg', span: 'row-span-2' },
    { id: 2, url: 'images/gallery/il-dio-del-massacro/IMG_7174.jpg', span: 'row-span-1' },
    { id: 3, url: 'images/gallery/il-dio-del-massacro/IMG_7107.jpg', span: 'row-span-2' },
    { id: 4, url: 'images/gallery/il-dio-del-massacro/IMG_7101.jpg', span: 'row-span-1' },
    { id: 5, url: 'images/gallery/il-dio-del-massacro/IMG_7077.jpg', span: 'row-span-2' },
    { id: 6, url: 'images/gallery/il-dio-del-massacro/IMG_6954.jpg', span: 'row-span-1' },
    // Other gallery photos
    { id: 7, url: 'images/gallery/La Tesi di Ernesto collage La Scompagnia.jpg', span: 'row-span-2' },
    { id: 8, url: 'images/gallery/77328431_134499161301190_8024187601256710144_n.jpg', span: 'row-span-1' },
    { id: 9, url: 'images/gallery/79003044_134499571301149_8659359551474106368_n.jpg', span: 'row-span-2' },
    { id: 10, url: 'images/gallery/79449961_135515351199571_3332786667693015040_n.jpg', span: 'row-span-2' },
    { id: 11, url: 'images/gallery/79692414_137400397677733_902456492421021696_n (1).jpg', span: 'row-span-2' },
    { id: 12, url: 'images/gallery/80002972_137699140981192_1167939755405475840_n.jpg', span: 'row-span-1' },
    { id: 13, url: 'images/gallery/il-dio-del-massacro/IMG_6982.jpg', span: 'row-span-1' },
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black mb-16 text-center uppercase tracking-tighter text-off-white drop-shadow-[4px_4px_0_#ccff00]">
          Galleria
        </h2>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((image) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden border-2 border-off-white bg-gray-900 ${image.span} cursor-pointer hover:shadow-brutal transition-all duration-200`}
              onClick={() => setSelectedImage(image.url)}
            >
              <img
                src={image.url}
                alt={`Gallery photo ${image.id}`}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110"
              />
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
            <div className="relative max-w-7xl w-full max-h-[90vh] border-2 border-off-white p-2 bg-gray-900 shadow-brutal">
              <img
                src={selectedImage}
                alt="Selected gallery photo"
                className="w-full h-full object-contain"
              />
              <button
                className="absolute -top-6 -right-6 bg-neon-pink text-pitch-black font-black w-12 h-12 flex items-center justify-center border-2 border-off-white hover:bg-off-white hover:text-pitch-black transition-colors text-xl shadow-brutal"
                onClick={() => setSelectedImage(null)}
              >
                X
              </button>
            </div>
          </div>
        )}

        {/* Video Section */}
        <div className="mt-24">
          <h3 className="text-3xl font-black mb-12 text-center uppercase text-off-white">
            <span className="bg-neon-lime text-pitch-black px-4 py-1">Video</span> in Evidenza
          </h3>
          <div className="space-y-12">
            <div className="aspect-w-16 aspect-h-9 mx-auto border-4 border-gray-800 shadow-brutal">
              <iframe
                className="w-full h-full"
                src="https://player.clevercast.com?autoplay=false&amp;autoload=off&amp;captions_default=nl&amp;captions_default_show=true&amp;chromecast=true&amp;account_id=WXv1JD&amp;item_id=A6zJdD&amp;comm_url=&amp;comm_url_prefetch=false"
                title="Clevercast Video"
                allow="autoplay; fullscreen"
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-w-16 aspect-h-9 mx-auto border-4 border-gray-800 shadow-brutal">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/qWC4zvh1T5c?si=Z4TxVZzNiq76D8dh"
                title="La Tesi di Ernesto - La Scompagnia - Video in evidenza"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;