import React from 'react';

const Shows = () => {
  const shows = [
    {
      id: 1,
      title: 'Il Dio del Massacro',
      subtitle: "Dall'acclamato testo di Yasmina Reza",
      dates: ['30/11/2024', '01/12/2024', '28/02/2025'],
      status: 'Prossima replica 28 febbraio 2025',
      image:
        'images/Il Dio del Massacro - La Scompagnia Bruxelles - locandina semplificata.jpg',
      description: [
        'Due coppie si incontrano per discutere un banale litigio tra i figli, ma presto si ritrovano in un gioco al massacro, dove emergono tensioni profonde tra sé stessi, gli altri e persino la natura.',
        'Lo spettacolo esplora con ironia i modelli contemporanei di uomini e donne, esponendo estremi che convivono dentro ciascuno di noi: uomini indolenti ed inquieti, donne impeccabili e vitali, che si alternano tra la civiltà e la bestialità.',
        'Lo spettacolo ci ricorda che "il Dio del massacro" è sempre presente, tra e dentro di noi.',
      ],
    },
    {
      id: 2,
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
    <section id="shows" className="py-20 section-bg-light backdrop-blur-md">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center heading-gradient">
          Spettacoli
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {shows.map((show) => (
            <div
              key={show.id}
              className="flex flex-col rounded-lg overflow-hidden shadow-lg bg-chocolate-cosmos/90 hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={show.image}
                alt={show.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-semibold mb-1 text-selective-yellow">
                  {show.title}
                </h3>
                <p className="text-sm italic mb-3 text-princeton-orange">
                  {show.subtitle}
                </p>
                <p className="mb-4 text-text-primary font-medium">
                  {show.dates.map((date, index) => (
                    <span key={index}>
                      {date}
                      {index < show.dates.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </p>
                <div className="mb-4 text-text-secondary flex-grow space-y-4">
                  {show.description.map((paragraph, index) => (
                    <p key={index} className={index === show.description.length - 1 ? 'italic text-selective-yellow font-medium' : ''}>
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-princeton-orange/20">
                  <p className="capitalize font-semibold text-princeton-orange">
                    {show.status}
                  </p>
                  {show.status.toLowerCase().includes('prossim') && (
                    <a href="#booking" className="glow-button text-sm">
                      Prenota ora!
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold mb-4 text-selective-yellow">
            Resta aggiornato
          </h3>

          <p className="text-lg mb-6 text-text-secondary">
            Iscriviti alla nostra newsletter per ricevere aggiornamenti sugli
            spettacoli, offerte e news in anteprima!
          </p>
          <a
            href="https://2bc6204c.sibforms.com/serve/MUIFAAdp42exZq-2IxRY-VoqtlkKnBibUpWXTPoh1FUuIvyMZWzod0KfjIQR9I3JXDDgTPYCaQICEzO1EOzGUfFIMwsAwFJgq1DIQ0wNyO1n3g_GDeFP9MsFNs2K9tSM5XAYgQEmox7DNhFN9mQOnqICMJmYkw1CBDdFS4Yhhc7H3wGgR77o89N0ZHVR_UyIHuukfP7ov4Hg76KR"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-button"
          >
            Iscriviti alla newsletter
          </a>
        </div>
      </div>
    </section>
  );
};

export default Shows;
