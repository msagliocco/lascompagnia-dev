import React from 'react';

const Home = () => {
  return (
    <section id="home" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-primary">
          Benvenuti nel sito de La Scompagnia
        </h2>
        <p className="text-xl md:text-2xl mb-8 text-text-secondary">
          Experience the magic of Italian theatre in the heart of Brussels
        </p>
        <a
          href="#booking"
          className="bg-curtain-red text-text-primary px-6 py-3 rounded-full text-lg font-semibold hover:bg-spotlight hover:text-dark-bg transition duration-300 inline-block"
        >
          Book Now
        </a>
      </div>
    </section>
  );
};

export default Home;