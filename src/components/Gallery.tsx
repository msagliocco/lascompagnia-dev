import React, { useState } from 'react'
import { X } from 'lucide-react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    { id: 1, type: 'photo', url: 'https://source.unsplash.com/800x600/?theater,stage' },
    { id: 2, type: 'photo', url: 'https://source.unsplash.com/800x600/?acting,performance' },
    { id: 3, type: 'photo', url: 'https://source.unsplash.com/800x600/?drama,costume' },
    { id: 4, type: 'photo', url: 'https://source.unsplash.com/800x600/?theater,audience' },
    { id: 5, type: 'photo', url: 'https://source.unsplash.com/800x600/?stage,lights' },
    { id: 6, type: 'photo', url: 'https://source.unsplash.com/800x600/?theater,rehearsal' },
  ]

  const openSlideshow = (index: number) => {
    setSelectedImage(index)
  }

  const closeSlideshow = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    setSelectedImage((prev) => (prev === null ? null : (prev + 1) % images.length))
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev === null ? null : (prev - 1 + images.length) % images.length))
  }

  return (
    <section id="gallery" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text-primary">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((item, index) => (
            <div 
              key={item.id} 
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition duration-300"
              onClick={() => openSlideshow(index)}
            >
              <img src={item.url} alt={`Gallery item ${item.id}`} className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-dark-bg bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <span className="text-spotlight text-lg font-semibold">View Larger</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div className="fixed inset-0 bg-dark-bg bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full">
            <img 
              src={images[selectedImage].url} 
              alt={`Slideshow image ${selectedImage + 1}`} 
              className="w-full h-auto"
            />
            <button 
              onClick={closeSlideshow}
              className="absolute top-4 right-4 text-spotlight hover:text-curtain-red transition-colors duration-300"
            >
              <X size={24} />
            </button>
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-spotlight hover:text-curtain-red transition-colors duration-300"
            >
              &lt;
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-spotlight hover:text-curtain-red transition-colors duration-300"
            >
              &gt;
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery