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
              src="images/La Scompagnia - Locandina coppia aperta quasi spalancata.jpeg"
              alt="Coppia aperta quasi spalancata - Locandina"
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-selective-yellow">
              Coppia aperta quasi spalancata
            </h3>
            <p className="text-lg mb-4 text-princeton-orange italic">
              Una commedia di Dario Fo e Franca Rame
            </p>
            <p className="text-lg mb-6 text-text-secondary">
              Una coppia sposata affronta le sfide della fedeltà e della libertà in una relazione "aperta". Tra situazioni comiche e momenti di riflessione, lo spettacolo esplora con ironia le dinamiche di coppia.
            </p>
            <p className="text-lg mb-6 text-text-secondary">
              Un classico del teatro italiano firmato da Dario Fo e Franca Rame, che mette in scena le contraddizioni dell'amore moderno con intelligenza e umorismo.
            </p>
            <p className="text-lg mb-6 text-text-secondary">
              Con: Antonella Picarella, Antonio Santangelo<br />
              Regia: Antonio Santangelo
            </p>
            <p className="text-lg mb-6 text-text-secondary">
              <strong>Date:</strong><br />
              21 Marzo 2026 - ore 20:30<br />
              22 Marzo 2026 - ore 19:00<br /><br />
              <strong>Luogo:</strong> Théâtre L'Improviste<br />
              Rue de Fierlant, 120 - Bruxelles
            </p>
            <p className="text-sm mb-6 text-text-secondary italic">
              Parte del ricavato sarà destinata a sostenere l'Istituto di Ricerca sul Cancro "Gustave Roussy"
            </p>
            <p className="text-lg font-semibold text-selective-yellow mb-6">
              Prenota i tuoi posti ora e preparati per una serata indimenticabile di teatro italiano a Bruxelles!
            </p>
            <a
              href="https://www.ticketsource.com/la-scompagnia/una-coppia-aperta-anzi-spalancata/e-rbxdgz"
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