import React from 'react';

const Home = () => {
  return (
    <section id="home" className="py-20 section-bg-light">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 heading-gradient">
          Benvenuti nel sito de La Scompagnia
        </h2>
        <p className="text-xl md:text-2xl mb-8 text-text-secondary">
          Experience the magic of Italian theatre in the heart of Brussels
        </p>
        <a
          href="#booking"
          className="glow-button"
        >
          Book Now
        </a>
      </div>
    </section>
  );
};

export default Home;