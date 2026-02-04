import ResponsiveImage from './ResponsiveImage';

const OurStory = () => {
  return (
    <section id="about" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black mb-16 text-center uppercase tracking-tight text-pitch-black">
          La Nostra Storia
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 relative group">
            <div className="absolute inset-0 bg-neon-pink transform translate-x-3 translate-y-3 border-2 border-pitch-black"></div>
            <ResponsiveImage
              srcBase="images/optimized/la-scompagnia-collage-sito"
              alt="LasCompagnia Teatro"
              width={2000}
              height={1600}
              widths={[480, 960, 1440, 1600]}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="relative z-10 w-full border-2 border-pitch-black transition-all duration-300 bg-off-white group-hover:scale-[1.03]"
              loading="lazy"
            />
          </div>

          <div className="md:w-1/2">
            <div className="poster-card">
              <h3 className="text-2xl font-black uppercase mb-6 text-pitch-black">
                Chi Siamo
              </h3>
              <p className="text-base md:text-lg leading-relaxed mb-4">
                La Scompagnia è una compagnia teatrale amatoriale nata dalla
                passione di un gruppo di amici nel 2018.
              </p>
              <p className="text-base md:text-lg leading-relaxed mb-4">
                Fin dall'inizio, abbiamo portato sul palco storie che facciano riflettere e divertire.
                Dopo il successo de <span className="font-bold text-neon-lime">"Il Dio del Massacro"</span> di Yasmina Reza, torniamo sul palco con l'ironia di Dario Fo e Franca Rame in <span className="font-bold text-neon-lime">"Coppia aperta quasi spalancata"</span>.
              </p>
              <div className="note-card mt-6 italic font-semibold">
                "Pur essendo una compagnia amatoriale, ci impegniamo a creare esperienze teatrali intense e coinvolgenti."
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
