import React from 'react';

const Team = () => {
  const members = [
    {
      id: 1,
      name: 'Antonella Picarella',
      role: 'Attrice',
      image: 'images/cast/antonella.jpg',
    },
    {
      id: 2,
      name: 'Antonio Santangelo',
      role: 'Regista',
      image: 'images/cast/antonio.jpg',
    },
    {
      id: 3,
      name: 'Chiara Cosentino',
      role: 'Attrice - Regista',
      image: 'images/cast/chiara.jpg',
    },
    {
      id: 4,
      name: 'Daniele Corini',
      role: 'Attore',
      image: 'images/cast/daniele.jpg',
    },
    {
      id: 5,
      name: 'Giulio Mancini',
      role: 'Attore',
      image: 'images/cast/giulio.jpg',
    },
    {
      id: 6,
      name: 'Marco Sagliocco',
      role: 'Attore - Musiche',
      image: 'images/cast/marco.jpg',
    },
    {
      id: 7,
      name: 'Valeria Garzia',
      role: 'Attrice - Jolly',
      image: 'images/cast/valeria.jpg',
    },
  ];

  return (
    <section id="team" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center heading-gradient">
          Il nostro team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member) => (
            <div
              key={member.id}
              className="group relative overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover transition duration-300 filter saturate-50 blur-0 group-hover:saturate-100 group-hover:blur-none"
              />
              <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-rich-black/90 to-transparent">
                <div className="text-center w-full">
                  <h3 className="text-2xl font-semibold mb-2 text-selective-yellow">
                    {member.name}
                  </h3>
                  <p className="text-lg text-text-primary">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
