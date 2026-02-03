import React from 'react';

const Shows = () => {
  const shows = [
    {
      id: 1,
      title: 'Coppia aperta quasi spalancata',
      subtitle: 'Una commedia di Dario Fo e Franca Rame',
      dates: ['21/03/2026', '22/03/2026'],
      status: 'Prossime repliche 21 e 22 marzo 2026',
      image:
        'images/La Scompagnia - Locandina coppia aperta quasi spalancata.jpeg',
      description: [
        'Una coppia sposata affronta le sfide della fedeltà e della libertà in una relazione "aperta". Tra situazioni comiche e momenti di riflessione, lo spettacolo esplora con ironia le dinamiche di coppia.',
        'Un classico del teatro italiano firmato da Dario Fo e Franca Rame, che mette in scena le contraddizioni dell\'amore moderno con intelligenza e umorismo.',
        'Con Antonella Picarella e Antonio Santangelo. Regia di Antonio Santangelo.',
      ],
    },
    {
      id: 2,
      title: 'Il Dio del Massacro',
      subtitle: "Dall'acclamato testo di Yasmina Reza",
      dates: ['30/11/2024', '01/12/2024', '28/02/2025'],
      status: 'Conclusi',
      image:
        'images/Il Dio del Massacro - La Scompagnia Bruxelles - locandina semplificata.jpg',
      description: [
        'Due coppie si incontrano per discutere un banale litigio tra i figli, ma presto si ritrovano in un gioco al massacro, dove emergono tensioni profonde tra sé stessi, gli altri e persino la natura.',
        'Lo spettacolo esplora con ironia i modelli contemporanei di uomini e donne, esponendo estremi che convivono dentro ciascuno di noi: uomini indolenti ed inquieti, donne impeccabili e vitali, che si alternano tra la civiltà e la bestialità.',
        'Lo spettacolo ci ricorda che "il Dio del massacro" è sempre presente, tra e dentro di noi.',
      ],
    },
    {
      id: 3,
      title: 'La Tesi di Ernesto',
      subtitle: 'Una commedia brillante e surreale',
      dates: ['08/12/2019'],
      status: 'Conclusi',
      image:
        'images/La-Tesi-di-Ernesto-2019-La-Scompagnia-Locandina-completa.jpg',
      description: [
        'Arianna affronta le sue ultime sedute di terapia con il suo analista decisamente poco convenzionale, Ernesto. I due intraprendono un viaggio tra flashback, immagini oniriche e incontri con personaggi bizzarri.',
        'Nel tentativo di comprendere le radici del terremoto emotivo che ha travolto il matrimonio di Arianna con suo marito Andrea, attraverso ricordi di una vita quotidiana fatta di apatia e momenti assurdi, Ernesto arriva a formulare la sua tesi:',
        '"Per ricostruire un amore, prima bisogna distruggere le illusioni che lo sostengono."'
      ],
    },
  ];

  return (
    <section id="shows" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black mb-12 text-center uppercase tracking-tighter text-off-white drop-shadow-[4px_4px_0_#ccff00]">
          Spettacoli
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {shows.map((show) => (
            <div
              key={show.id}
              className="brutal-card flex flex-col p-4 bg-gray-900 border-2 border-off-white"
            >
              <div className="relative border-b-2 border-off-white mb-4 pb-4">
                <img
                  src={show.image}
                  alt={show.title}
                  className="w-full h-80 object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute top-0 right-0 bg-neon-lime text-pitch-black font-mono font-bold px-3 py-1 border-2 border-pitch-black transform translate-x-2 -translate-y-2">
                  #{show.id}
                </div>
              </div>

              <div className="flex-grow flex flex-col">
                <h3 className="text-3xl font-black mb-2 uppercase text-off-white leading-none">
                  {show.title}
                </h3>
                <p className="text-sm font-mono text-neon-cyan mb-4 uppercase tracking-wider">
                  {show.subtitle}
                </p>

                <div className="mb-6 font-mono text-xs border-l-2 border-neon-pink pl-4">
                  {show.dates.map((date, index) => (
                    <span key={index} className="block mb-1">
                      {date}
                    </span>
                  ))}
                </div>

                <div className="mb-6 text-off-white space-y-4 font-mono text-sm leading-relaxed">
                  {show.description.map((paragraph, index) => (
                    <p key={index} className={index === show.description.length - 1 ? 'text-neon-lime font-bold' : ''}>
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-auto pt-4 border-t-2 border-dashed border-gray-700">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-xs uppercase text-gray-400">
                      STATUS: {show.status}
                    </span>
                    {show.status.toLowerCase().includes('prossim') && (
                      <a href="#booking" className="brutal-btn text-sm py-2 px-4">
                        PRENOTA
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20 border-2 border-off-white p-8 bg-neon-cyan text-pitch-black shadow-brutal max-w-2xl mx-auto transform rotate-1 hover:rotate-0 transition-transform">
          <h3 className="text-3xl font-black mb-4 uppercase">
            Resta Aggiornato
          </h3>

          <p className="font-mono font-bold mb-6 text-lg">
            Non perdere le novità, iscriviti alla newsletter!
          </p>

          <a
            href="https://2bc6204c.sibforms.com/serve/MUIFAAdp42exZq-2IxRY-VoqtlkKnBibUpWXTPoh1FUuIvyMZWzod0KfjIQR9I3JXDDgTPYCaQICEzO1EOzGUfFIMwsAwFJgq1DIQ0wNyO1n3g_GDeFP9MsFNs2K9tSM5XAYgQEmox7DNhFN9mQOnqICMJmYkw1CBDdFS4Yhhc7H3wGgR77o89N0ZHVR_UyIHuukfP7ov4Hg76KR"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-pitch-black text-neon-cyan font-bold font-mono uppercase px-8 py-3 border-2 border-pitch-black hover:bg-off-white hover:text-pitch-black transition-all shadow-[4px_4px_0px_0px_#000]"
          >
            Iscriviti Subito
          </a>
        </div>
      </div>
    </section>
  );
};

export default Shows;
