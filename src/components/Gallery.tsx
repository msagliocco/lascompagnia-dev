import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      id: 1,
      type: 'photo',
      url: 'images/gallery/La Tesi di Ernesto collage La Scompagnia.jpg',
    },
    {
      id: 2,
      type: 'photo',
      url: 'images/gallery/77328431_134499161301190_8024187601256710144_n.jpg',
    },
    {
      id: 3,
      type: 'photo',
      url: 'images/gallery/79003044_134499571301149_8659359551474106368_n.jpg',
    },
    {
      id: 4,
      type: 'photo',
      url: 'images/gallery/79449961_135515351199571_3332786667693015040_n.jpg',
    },
    {
      id: 5,
      type: 'photo',
      url: 'images/gallery/79692414_137400397677733_902456492421021696_n (1).jpg',
    },
    {
      id: 6,
      type: 'photo',
      url: 'images/gallery/80002972_137699140981192_1167939755405475840_n.jpg',
    },
  ];

  const openSlideshow = (index: number) => {
    setSelectedImage(index);
  };

  const closeSlideshow = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const nextImage = () => {
    setSelectedImage((prev) =>
      prev === null ? null : (prev + 1) % images.length
    );
  };

  const prevImage = () => {
    setSelectedImage((prev) =>
      prev === null ? null : (prev - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeSlideshow();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeSlideshow]);

  return (
    <section id="gallery" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center heading-gradient">
          Galleria
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((item, index) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition duration-300"
              onClick={() => openSlideshow(index)}
            >
              <img
                src={item.url}
                alt={`Gallery item ${item.id}`}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-rich-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <span className="text-selective-yellow text-lg font-semibold">
                  Ingrandisci
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div className="fixed inset-0 bg-rich-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full">
            <img
              src={images[selectedImage].url}
              alt={`Slideshow image ${selectedImage + 1}`}
              className="w-full h-auto"
            />
            <button
              onClick={closeSlideshow}
              className="absolute top-4 right-4 text-selective-yellow hover:text-engineering-orange transition-colors duration-300 bg-rich-black bg-opacity-50 p-2 rounded-full"
            >
              <X size={24} />
            </button>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-selective-yellow hover:text-engineering-orange transition-colors duration-300 bg-rich-black bg-opacity-50 p-2 rounded-full"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-selective-yellow hover:text-engineering-orange transition-colors duration-300 bg-rich-black bg-opacity-50 p-2 rounded-full"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
