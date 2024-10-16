import React from 'react';

const Booking = () => {
  return (
    <section id="booking" className="py-20 section-bg-light">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center heading-gradient">
          Prenota ora
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
          <div className="md:w-1/2">
            <img
              src="images/Il Dio del Massacro - La Scompagnia Bruxelles - locandina semplificata.jpg"
              alt="Il Dio del Massacro - Locandina"
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-selective-yellow">
              Il Dio del Massacro
            </h3>
            <p className="text-lg mb-6 text-text-secondary">
              Non perdere l'occasione di assistere a "Il Dio del Massacro", una commedia tagliente di Yasmina Reza. Questo spettacolo esplora con ironia e ferocia le contraddizioni e le tensioni latenti che caratterizzano le interazioni umane. Preparati a ridere e riflettere mentre due coppie si scontrano in un crescendo di assurdità e rivelazioni.
            </p>
            <p className="text-lg mb-6 text-text-secondary">
              Date: 30 Novembre e 1 Dicembre 2024<br />
              Luogo: Théâtre L'Improviste, Forest<br />
              Durata: Circa 90 minuti
            </p>
            <p className="text-lg font-semibold text-selective-yellow mb-6">
              Prenota i tuoi posti ora e preparati per una serata indimenticabile di teatro italiano a Bruxelles!
            </p>
            <a
              href="https://www.ticketsource.eu/lascompagnia"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-button inline-block"
            >
              Riserva i tuoi biglietti
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;