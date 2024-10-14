import React from 'react';

const Shows = () => {
  const shows = [
    {
      id: 1,
      title: 'Il Dio del Massacro',
      dates: ['30/11/2024', '01/12/2024'],
      status: 'Prossimamente',
      image:
        'images/Il Dio del Massacro - La Scompagnia Bruxelles - locandina semplificata.jpg',
      description:
        "Il Dio del Massacro è una commedia tagliente tratta dall'opera originale di Yasmina Reza. Lo spettacolo esplora, con ironia e ferocia, le contraddizioni e le tensioni latenti che caratterizzano le interazioni umane. Due coppie si incontrano per discutere di un banale litigio tra i figli, ma la situazione precipita rapidamente, svelando il lato più brutale e primordiale della nostra società.",
    },
    {
      id: 2,
      title: 'La Tesi di Ernesto',
      dates: ['08/12/2019'],
      status: 'Conclusi',
      image:
        'images/La-Tesi-di-Ernesto-2019-La-Scompagnia-Locandina-completa.jpg',
      description:
        'La Tesi di Ernesto è una commedia brillante e surreale che segue Arianna nelle sue ultime sedute di terapia con il suo analista decisamente poco convenzionale, Ernesto. I due intraprendono un viaggio tra flashback, immagini oniriche e incontri con personaggi bizzarri, nel tentativo di comprendere le radici del terremoto emotivo che ha travolto il matrimonio di Arianna con suo marito Andrea. Attraverso ricordi di una vita quotidiana fatta di apatia e momenti assurdi, Ernesto arriva a formulare la sua tesi: per ricostruire un amore, prima bisogna distruggere le illusioni che lo sostengono. Un racconto ironico e riflessivo che esplora la complessità delle relazioni e la necessità di un cambiamento profondo.',
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
              className="flex flex-col rounded-lg overflow-hidden shadow-lg bg-chocolate-cosmos/90"
            >
              <img
                src={show.image}
                alt={show.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-semibold mb-2 text-selective-yellow">
                  {show.title}
                </h3>
                <p className="mb-2 text-text-primary">
                  {show.dates.map((date, index) => (
                    <span key={index}>
                      {date}
                      {index < show.dates.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </p>
                <p className="mb-4 text-text-secondary flex-grow">
                  {show.description}
                </p>
                <div className="flex justify-between items-center">
                  <p className="capitalize font-semibold text-princeton-orange">
                    {show.status === 'Prossimamente'
                      ? 'Prossimamente'
                      : 'Conclusi'}
                  </p>
                  {show.status === 'upcoming' && (
                    <a href="#booking" className="glow-button text-sm">
                      Book Now
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
            spettacoli, offerte e news in anteprima! and exclusive news!
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
