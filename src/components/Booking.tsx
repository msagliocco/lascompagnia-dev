import React from 'react';

const Booking = () => {
  return (
    <section id="booking" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black mb-16 text-center uppercase tracking-tighter text-off-white drop-shadow-[4px_4px_0_#ccff00]">
          Biglietti
        </h2>

        <div className="brutal-card border-none p-0 bg-transparent shadow-none border-l-0 border-r-0 border-t-0 border-b-0">
          <div className="flex flex-col md:flex-row gap-12 border-2 border-off-white bg-gray-900 p-8 shadow-brutal">
            <div className="md:w-1/2">
              <div className="relative border-4 border-pitch-black p-2 bg-off-white transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <img
                  src="images/La Scompagnia - Locandina coppia aperta quasi spalancata.jpeg"
                  alt="Coppia aperta quasi spalancata - Locandina"
                  className="w-full grayscale hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute top-4 left-4 bg-neon-lime text-pitch-black font-black uppercase px-4 py-2 border-2 border-pitch-black">
                  Prossimo Spettacolo
                </div>
              </div>
            </div>

            <div className="md:w-1/2 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl md:text-4xl font-black uppercase mb-2 text-off-white leading-none">
                  Coppia aperta<br /><span className="text-neon-pink">quasi spalancata</span>
                </h3>
                <p className="font-mono text-neon-cyan mb-6 uppercase tracking-wider text-sm border-b-2 border-gray-700 pb-4">
                  Una commedia di Dario Fo e Franca Rame
                </p>

                <div className="space-y-4 mb-8 font-mono text-sm leading-relaxed text-gray-300">
                  <p>
                    Una coppia sposata affronta le sfide della fedeltà e della libertà in una relazione "aperta". Tra situazioni comiche e momenti di riflessione, lo spettacolo esplora con ironia le dinamiche di coppia.
                  </p>
                  <p>
                    <strong>Con:</strong> Antonella Picarella, Antonio Santangelo<br />
                    <strong>Regia:</strong> Antonio Santangelo
                  </p>
                </div>

                <div className="bg-gray-800 border-l-4 border-neon-lime p-4 mb-8">
                  <h4 className="font-bold uppercase text-neon-lime mb-2">Quando & Dove:</h4>
                  <p className="font-mono text-sm mb-2">
                    21 Marzo 2026 - ore 20:30<br />
                    22 Marzo 2026 - ore 19:00
                  </p>
                  <p className="font-mono text-sm">
                    <strong>Théâtre L'Improviste</strong><br />
                    Rue de Fierlant, 120 - Bruxelles
                  </p>
                </div>
              </div>

              <div>
                <p className="text-xs font-mono text-gray-400 mb-4 italic">
                  * Parte del ricavato sarà destinata a sostenere l'Istituto di Ricerca sul Cancro "Gustave Roussy"
                </p>
                <a
                  href="https://www.ticketsource.com/la-scompagnia/una-coppia-aperta-anzi-spalancata/e-rbxdgz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutal-btn w-full text-center block text-lg bg-neon-lime text-pitch-black hover:bg-off-white hover:text-pitch-black"
                >
                  Acquista Biglietti
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;