import React from 'react';

const OurStory = () => {
  return (
    <section id="about" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center heading-gradient">
          Su di noi
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <img
              src="images/La Scompagnia collage sito.png"
              alt="LasCompagnia Teatro"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg mb-4 text-text-secondary">
              La Scompagnia è una compagnia teatrale amatoriale nata dalla
              passione di un gruppo di amici nel 2018. Fin dall'inizio, abbiamo
              portato sul palco storie che facciano riflettere e divertire. Dopo
              il nostro primo spettacolo, siamo pronti per una nuova avventura:
              Il Dio del Massacro di Yasmina Reza. Pur essendo una compagnia
              amatoriale, ci impegniamo a creare esperienze teatrali intense e
              coinvolgenti, unite dall'amore per il teatro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
