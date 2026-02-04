const Booking = () => {
  return (
    <section id="booking" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black mb-16 text-center uppercase tracking-tight text-pitch-black">
          Biglietti
        </h2>

        <div className="poster-card poster-card-flush overflow-hidden">
          <div className="flex flex-col md:flex-row gap-12 p-8">
            <div className="md:w-1/2">
              <div className="relative border-2 border-pitch-black p-2 bg-off-white bw-hover-group">
                <img
                  src="images/La Scompagnia - Locandina coppia aperta quasi spalancata.jpeg"
                  alt="Coppia aperta quasi spalancata - Locandina"
                  className="w-full bw-hover transition-all duration-300"
                />
                <div className="stamp-mark stamp-mini absolute top-4 left-4">
                  Prossimo Spettacolo
                </div>
              </div>
            </div>

            <div className="md:w-1/2 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl md:text-4xl font-black uppercase mb-2 text-pitch-black leading-none">
                  Coppia aperta<br /><span className="text-neon-pink">quasi spalancata</span>
                </h3>
                <p className="font-mono text-gray-700 mb-6 uppercase tracking-[0.3em] text-sm border-b-2 border-pitch-black/20 pb-4">
                  Una commedia di Dario Fo e Franca Rame
                </p>

                <div className="space-y-4 mb-8 text-sm leading-relaxed text-pitch-black">
                  <p>
                    Una coppia sposata affronta le sfide della fedeltà e della libertà in una relazione "aperta". Tra situazioni comiche e momenti di riflessione, lo spettacolo esplora con ironia le dinamiche di coppia.
                  </p>
                  <p>
                    <strong>Con:</strong> Antonella Picarella, Antonio Santangelo<br />
                    <strong>Regia:</strong> Antonio Santangelo
                  </p>
                </div>

                <div className="note-card mb-8">
                  <h4 className="font-bold uppercase text-pitch-black mb-2">Quando & Dove:</h4>
                  <p className="font-mono text-sm mb-2 text-pitch-black">
                    21 Marzo 2026 - ore 20:30<br />
                    22 Marzo 2026 - ore 19:00
                  </p>
                  <p className="font-mono text-sm text-pitch-black">
                    <strong>Théâtre L'Improviste</strong><br />
                    Rue de Fierlant, 120 - Bruxelles
                  </p>
                </div>
              </div>

              <div>
                <p className="text-xs font-mono text-gray-700 mb-4 italic">
                  * Parte del ricavato sarà destinata a sostenere l'Istituto di Ricerca sul Cancro "Gustave Roussy"
                </p>
                <a
                  href="https://www.ticketsource.com/la-scompagnia/una-coppia-aperta-anzi-spalancata/e-rbxdgz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutal-btn w-full text-center block text-lg"
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
