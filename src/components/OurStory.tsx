import React from 'react';

const OurStory = () => {
  return (
    <section id="about" className="py-20 bg-dark-surface">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center gradient-text-secondary">
          Our Story
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <img
              src="https://source.unsplash.com/800x600/?theater,stage"
              alt="LaCompagnia Theater"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg mb-4 text-text-secondary">
              LaCompagnia was born from a passion for Italian theater and a
              desire to bring the rich cultural heritage of Italy to the heart
              of Brussels. Founded in 2010 by a group of enthusiastic actors and
              directors, our journey began with small performances in local
              cafes and community centers.
            </p>
            <p className="text-lg mb-4 text-text-secondary">
              Over the years, we've grown into a respected theater company,
              known for our innovative interpretations of classic Italian plays
              and our commitment to nurturing new talent. Our productions range
              from timeless comedies to thought-provoking dramas, always aiming
              to captivate and inspire our audience.
            </p>
            <p className="text-lg text-text-secondary">
              Today, LaCompagnia is more than just a theater group - we're a
              family united by our love for the arts and our mission to create
              unforgettable theatrical experiences. Join us on this exciting
              journey as we continue to bring the magic of Italian theater to
              Brussels and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;