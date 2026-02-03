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
    <section id="team" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black mb-16 text-center uppercase tracking-tighter text-off-white drop-shadow-[4px_4px_0_#ccff00]">
          Il Nostro Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member) => (
            <div
              key={member.id}
              className="group relative border-2 border-off-white bg-gray-900 overflow-hidden shadow-brutal hover:shadow-brutal-hover transition-all duration-200"
            >
              <div className="relative aspect-w-4 aspect-h-5 border-b-2 border-off-white">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>

              <div className="p-4 bg-gray-900 relative">
                <h3 className="text-xl font-bold uppercase text-off-white group-hover:text-neon-pink transition-colors">
                  {member.name}
                </h3>
                <p className="font-mono text-xs text-neon-lime mt-2 uppercase tracking-wide border-t border-gray-700 pt-2">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
