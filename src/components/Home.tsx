const Home = () => {
  return (
    <section id="home" className="mx-auto max-w-7xl pt-4 pb-16 lg:pt-6 lg:pb-20">
      <div className="mb-10 px-4">
        <div className="note-card inline-flex flex-wrap items-center gap-3 font-mono text-xs tracking-[0.3em]">
          <span className="stamp-mark stamp-mini">News</span>
          <span className="text-pitch-black font-semibold tracking-normal">
            Il Dio del Massacro è su BRUZZ!
          </span>
          <a
            href="https://www.bruzz.be/en/videoreeks/bruzz-international-op-zondag/video-amateur-theatre-company-la-scompagnia-i-missed"
            className="underline hover:no-underline font-bold text-pitch-black"
          >
            Guarda il video →
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-[1.3fr_0.7fr] gap-10 items-end">
        <div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 uppercase leading-none tracking-tight text-pitch-black">
            TEATRO<br />
            <span className="text-neon-lime">ITALIANO</span><br />
            A BRUXELLES
          </h1>

          <div className="poster-card max-w-2xl">
            <p className="text-lg md:text-xl leading-relaxed">
              Portiamo in scena storie appassionanti e coinvolgenti, con un tocco
              amatoriale ma autentico. Scopri la forza delle parole, l'emozione
              delle interpretazioni e la magia del teatro in lingua italiana.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:items-start">
          <div className="poster-card">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-gray-700">
              Prossimo spettacolo
            </p>
            <p className="text-2xl font-black uppercase mt-3">
              Coppia aperta<br />
              quasi spalancata
            </p>
            <p className="font-mono text-sm mt-4">
              21–22 Marzo 2026
            </p>
          </div>

          <a href="#booking" className="brutal-btn text-lg w-fit">
            Prenota Ora
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
