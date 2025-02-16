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
              src="images/Locandina Il Dio Del Massacro 28 febbraio - La Scompagnia.png"
              alt="Il Dio del Massacro - Locandina"
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-selective-yellow">
            Torna in scena a Bruxelles Il Dio del Massacro
            </h3>
            <p className="text-lg mb-6 text-text-secondary">
           
Siamo felici di annunciare una nuova data per il nostro spettacolo: venerdì 28 febbraio 2025! <br/>

Dopo il successo delle precedenti repliche del 30 novembre e del 1 dicembre 2024, siamo pronti a riportare sul palco questa commedia tagliente e feroce, tratta dall'opera originale di Yasmina Reza, “Le Dieu du Carnage”. </p>


<p className="text-lg mb-6 text-text-secondary">Questa nuova replica sarà resa ancora più speciale grazie ai sottotitoli in francese, che permettono ad un pubblico più ampio di godere dello spettacolo. </p>

<p className="text-lg mb-6 text-text-secondary">Con:
Antonella Picarella, Chiara Cosentino, Giulio Mancini, Marco Sagliocco<br/>
Regia: Antonio Santangelo<br/>
  </p>
            <p className="text-lg mb-6 text-text-secondary">
              Prossima replica: 28 Febbraio 2025<br />
              Luogo: Théâtre L'Improviste, Forest<br />
              Durata: Circa 90 minuti<br />
              Subtitles: FR - EN
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