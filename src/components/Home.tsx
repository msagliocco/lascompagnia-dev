import React from 'react';

const Home = () => {
  return (
    <section
      id="home"
      className="mx-auto max-w-6xl py-32 sm:py-48 lg:py-56 backdrop-blur-sm"
    >
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white-600 ring-1 ring-orange-web hover:ring-white-900">
          #salvateculetto Smarrito Criceto a Bruxelles!{' '}
          <a href="#" className="font-semibold text-princeton-orange">
            <span aria-hidden="true" className="absolute inset-0"></span>Scopri di
            pi&ugrave; <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 heading-gradient">
          Vivi il teatro in italiano con noi a Bruxelles
        </h2>
        <p className="mx-auto text-text-secondary mt-6 text-lg max-w-2xl text-center">
          Portiamo in scena storie appassionanti e coinvolgenti, con un tocco
          amatoriale ma autentico. Scopri la forza delle parole, l'emozione
          delle interpretazioni e la magia del teatro in lingua italiana, nel
          cuore di Bruxelles.
        </p>
        <div className="gap-x-6 pt-10">
          <a href="#booking" className="glow-button">
            Prenota ora
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;