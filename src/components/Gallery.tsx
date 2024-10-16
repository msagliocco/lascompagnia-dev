import React from 'react';

const Gallery = () => {
  const images = [
    { id: 1, url: 'images/gallery/La Tesi di Ernesto collage La Scompagnia.jpg' },
    { id: 2, url: 'images/gallery/77328431_134499161301190_8024187601256710144_n.jpg' },
    { id: 3, url: 'images/gallery/79003044_134499571301149_8659359551474106368_n.jpg' },
    { id: 4, url: 'images/gallery/79449961_135515351199571_3332786667693015040_n.jpg' },
    { id: 5, url: 'images/gallery/79692414_137400397677733_902456492421021696_n (1).jpg' },
    { id: 6, url: 'images/gallery/80002972_137699140981192_1167939755405475840_n.jpg' },
    { id: 7, url: 'images/gallery/83945786_163643595053413_3500340535980195840_n.jpg' },
    { id: 8, url: 'images/gallery/IMG-20191208-WA0092.jpg' },
    { id: 9, url: 'images/gallery/IMG-20191208-WA0052.jpg' },
    { id: 10, url: 'images/gallery/IMG-20191208-WA0026.jpg' },
    { id: 11, url: 'images/gallery/IMG-20191208-WA0055.jpg' },
    { id: 11, url: 'images/gallery/IMG-20191208-WA0022.jpg' },
  ];

  return (
    <section id="gallery" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center heading-gradient">
          Galleria
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src={images[0].url}
                alt="gallery-photo"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src={images[1].url}
                alt="gallery-photo"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src={images[2].url}
                alt="gallery-photo"
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src={images[3].url}
                alt="gallery-photo"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src={images[4].url}
                alt="gallery-photo"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src={images[5].url}
                alt="gallery-photo"
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src={images[6].url}
                alt="gallery-photo"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src={images[7].url}
                alt="gallery-photo"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src={images[8].url}
                alt="gallery-photo"
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src={images[9].url}
                alt="gallery-photo"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src={images[10].url}
                alt="gallery-photo"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src={images[11].url}
                alt="gallery-photo"
              />
            </div>
            
            
          </div>
        </div>


        <div className="mt-16">
          <h3 className="text-3xl font-bold mb-8 text-center heading-gradient">
            Video in evidenza
          </h3>
          <div className="aspect-w-16 aspect-h-9">
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
    </section>
  );
};

export default Gallery;