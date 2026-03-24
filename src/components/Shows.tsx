import ResponsiveImage from './ResponsiveImage';

const Shows = () => {
  const shows = [
    {
      id: 1,
      title: 'Coppia aperta quasi spalancata',
      subtitle: 'Una commedia di Dario Fo e Franca Rame',
      dates: ['21/03/2026', '22/03/2026'],
      status: 'Conclusi - Sold out',
      imageBase: 'images/optimized/locandina-coppia-aperta',
      imageWidth: 1131,
      imageHeight: 1600,
      description: [
        'Una coppia sposata affronta le sfide della fedeltà e della libertà in una relazione "aperta". Tra situazioni comiche e momenti di riflessione, lo spettacolo esplora con ironia le dinamiche di coppia.',
        'Un classico del teatro italiano firmato da Dario Fo e Franca Rame, che mette in scena le contraddizioni dell\'amore moderno con intelligenza e umorismo.',
        'Le repliche del 21 e 22 marzo 2026 hanno registrato il tutto esaurito. Con Antonella Picarella e Antonio Santangelo. Regia di Antonio Santangelo.',
      ],
      focusHref: '#coppia-aperta',
    },
    {
      id: 2,
      title: 'Il Dio del Massacro',
      subtitle: "Dall'acclamato testo di Yasmina Reza",
      dates: ['30/11/2024', '01/12/2024', '28/02/2025'],
      status: 'Conclusi - Sold out',
      imageBase: 'images/optimized/locandina-dio-massacro',
      imageWidth: 707,
      imageHeight: 1000,
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
      status: 'Conclusi - Sold out',
      imageBase: 'images/optimized/locandina-tesi-ernesto',
      imageWidth: 666,
      imageHeight: 1000,
      description: [
        'Arianna affronta le sue ultime sedute di terapia con il suo analista decisamente poco convenzionale, Ernesto. I due intraprendono un viaggio tra flashback, immagini oniriche e incontri con personaggi bizzarri.',
        'Nel tentativo di comprendere le radici del terremoto emotivo che ha travolto il matrimonio di Arianna con suo marito Andrea, attraverso ricordi di una vita quotidiana fatta di apatia e momenti assurdi, Ernesto arriva a formulare la sua tesi:',
        '"Per ricostruire un amore, prima bisogna distruggere le illusioni che lo sostengono."'
      ],
    },
  ];

  return (
    <section id="shows" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black mb-12 text-center uppercase tracking-tight text-pitch-black">
          Spettacoli
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {shows.map((show) => (
            <div
              key={show.id}
              className="poster-card flex flex-col p-4"
            >
              <div className="relative border-b-2 border-pitch-black mb-4 pb-4 bw-hover-group">
                <ResponsiveImage
                  srcBase={show.imageBase}
                  alt={show.title}
                  width={show.imageWidth}
                  height={show.imageHeight}
                  widths={[480, 960, 1440, 1600]}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="w-full h-80 object-cover bw-hover transition-all duration-300"
                  loading="lazy"
                />
                <div className="stamp-mark stamp-mini absolute top-0 right-0 translate-x-2 -translate-y-2">
                  #{show.id}
                </div>
              </div>

              <div className="flex-grow flex flex-col">
                <h3 className="text-3xl font-black mb-2 uppercase text-neon-pink leading-none">
                  {show.title}
                </h3>
                <p className="text-xs font-mono text-gray-700 mb-4 uppercase tracking-[0.3em]">
                  {show.subtitle}
                </p>

                <div className="note-card mb-6 font-mono text-xs uppercase tracking-[0.2em]">
                  {show.dates.map((date, index) => (
                    <span key={index} className="block mb-1 text-pitch-black">
                      {date}
                    </span>
                  ))}
                </div>

                <div className="mb-6 text-pitch-black space-y-4 text-sm leading-relaxed">
                  {show.description.map((paragraph, index) => (
                    <p key={index} className={index === show.description.length - 1 ? 'text-neon-lime font-bold' : ''}>
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-auto pt-4 border-t-2 border-dashed border-pitch-black/20">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-xs uppercase text-gray-700">
                      STATUS: {show.status}
                    </span>
                    {show.focusHref && (
                      <a href={show.focusHref} className="brutal-btn brutal-btn-sm">
                        Focus
                      </a>
                    )}
                    {!show.focusHref && show.status.toLowerCase().includes('prossim') && (
                      <a href="#booking" className="brutal-btn brutal-btn-sm">
                        PRENOTA
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div >
    </section >
  );
};

export default Shows;
