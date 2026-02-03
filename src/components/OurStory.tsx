import React from 'react';

const OurStory = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black mb-16 text-center uppercase tracking-tighter text-off-white drop-shadow-[4px_4px_0_#ccff00]">
          La Nostra Storia
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 relative group">
            <div className="absolute inset-0 bg-neon-pink transform translate-x-4 translate-y-4 border-2 border-off-white"></div>
            <img
              src="images/La Scompagnia collage sito.png"
              alt="LasCompagnia Teatro"
              className="relative z-10 w-full border-2 border-off-white grayscale group-hover:grayscale-0 transition-all duration-300"
            />
          </div>

          <div className="md:w-1/2">
            <div className="brutal-card bg-gray-900 text-off-white">
              <h3 className="text-2xl font-black uppercase mb-6 text-neon-lime">
                Chi Siamo
              </h3>
              <p className="font-mono text-base md:text-lg leading-relaxed mb-4">
                La Scompagnia è una compagnia teatrale amatoriale nata dalla
                passione di un gruppo di amici nel 2018.
              </p>
              <p className="font-mono text-base md:text-lg leading-relaxed mb-4">
                Fin dall'inizio, abbiamo portato sul palco storie che facciano riflettere e divertire.
                Dopo il nostro primo spettacolo, siamo tornati con <span className="font-bold text-neon-cyan">"Il Dio del Massacro"</span> di Yasmina Reza.
              </p>
              <div className="mt-6 border-l-4 border-neon-pink pl-4 italic font-bold">
                "Pur essendo una compagnia amatoriale, ci impegniamo a creare esperienze teatrali intense e coinvivolgenti."
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
