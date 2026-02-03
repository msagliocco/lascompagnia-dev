const Home = () => {
  return (
    <section
      id="home"
      className="mx-auto max-w-7xl py-24 lg:py-32 flex flex-col items-center"
    >
      <div className="mb-12 font-mono text-sm sm:text-base">
        <div className="brutal-card inline-block transform -rotate-2 hover:rotate-0 transition-transform bg-gray-900 border-2 border-neon-pink text-off-white">
          <span className="font-bold mr-2 text-neon-pink">NEWS:</span>
          Il Dio del Massacro è su BRUZZ!{' '}
          <a
            href="https://www.bruzz.be/en/videoreeks/bruzz-international-op-zondag/video-amateur-theatre-company-la-scompagnia-i-missed"
            className="underline hover:no-underline font-bold text-neon-pink hover:text-white"
          >
            GUARDA IL VIDEO →
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 text-center">
        <h2 className="text-6xl md:text-8xl font-black mb-8 uppercase leading-none tracking-tighter text-off-white drop-shadow-[4px_4px_0_#ccff00]">
          TEATRO<br />
          <span className="text-neon-lime">ITALIANO</span><br />
          BRUXELLES
        </h2>

        <div className="bg-gray-900 border-2 border-off-white p-6 max-w-3xl mx-auto shadow-brutal mb-12">
          <p className="font-mono text-lg md:text-xl leading-relaxed text-off-white">
            Portiamo in scena storie appassionanti e coinvolgenti, con un tocco
            amatoriale ma autentico. Scopri la forza delle parole, l'emozione
            delle interpretazioni e la magia del teatro in lingua italiana.
          </p>
        </div>

        <div className="flex justify-center">
          <a href="#booking" className="brutal-btn text-xl">
            Prenota Ora
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;