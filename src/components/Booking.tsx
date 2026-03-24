import ResponsiveImage from './ResponsiveImage';

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
                <ResponsiveImage
                  srcBase="images/optimized/locandina-coppia-aperta"
                  alt="Coppia aperta quasi spalancata - Locandina"
                  width={1131}
                  height={1600}
                  widths={[480, 960, 1440, 1600]}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="w-full bw-hover transition-all duration-300"
                  loading="lazy"
                />
                <div className="stamp-mark stamp-mini absolute top-4 left-4">
                  Sold out
                </div>
              </div>
            </div>

            <div className="md:w-1/2 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl md:text-4xl font-black uppercase mb-2 text-pitch-black leading-none">
                  Coppia aperta<br /><span className="text-neon-pink">quasi spalancata</span>
                </h3>
                <p className="font-mono text-gray-700 mb-6 uppercase tracking-[0.3em] text-sm border-b-2 border-pitch-black/20 pb-4">
                  Testo di Dario Fo e Franca Rame
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
                  <div className="space-y-2 font-mono text-sm mb-3 text-pitch-black">
                    <div className="flex items-center justify-between gap-3 border-b border-dashed border-pitch-black/20 pb-2">
                      <span>21 Marzo 2026 - ore 20:30</span>
                      <span className="stamp-mark stamp-mini">Sold out</span>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <span>22 Marzo 2026 - ore 19:00</span>
                      <span className="stamp-mark stamp-mini">Sold out</span>
                    </div>
                  </div>
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
                <div className="w-full border-2 border-pitch-black bg-pitch-black text-off-white text-center block text-lg font-mono font-bold uppercase tracking-[0.2em] px-6 py-4">
                  Biglietti esauriti
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
