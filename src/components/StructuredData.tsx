const EVENT_DESCRIPTION =
  'La nuova produzione de La Scompagnia affronta il testo di Dario Fo e Franca Rame come un duello continuo fra desiderio di liberta, gelosia, ironia e disordine sentimentale. Con Antonella Picarella e Antonio Santangelo. Regia di Antonio Santangelo.';

const EVENT_IMAGE = 'https://lascompagnia.it/images/optimized/locandina-coppia-aperta-960.jpg';

const EVENT_LOCATION = {
  '@type': 'Place',
  name: "Théâtre L'Improviste",
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rue de Fierlant, 120',
    addressLocality: 'Bruxelles',
    addressCountry: 'BE',
  },
};

const EVENT_PERFORMER = {
  '@type': 'TheaterGroup',
  name: 'La Scompagnia',
  url: 'https://lascompagnia.it/',
};

const EVENT_ORGANIZER = {
  '@type': 'Organization',
  name: 'La Scompagnia',
  url: 'https://lascompagnia.it/',
  logo: 'https://lascompagnia.it/images/La_Scompagnia_logo_mennekenbe_small.png',
};

const EVENT_DATES = ['2026-03-21T20:30:00+01:00', '2026-03-22T19:00:00+01:00'];

const StructuredData = () => {
  const structuredData = EVENT_DATES.map((startDate) => ({
    '@context': 'https://schema.org',
    '@type': 'TheaterEvent',
    name: 'Coppia aperta quasi spalancata',
    startDate,
    eventStatus: 'https://schema.org/EventCompleted',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    image: EVENT_IMAGE,
    location: EVENT_LOCATION,
    organizer: EVENT_ORGANIZER,
    performer: EVENT_PERFORMER,
    description: EVENT_DESCRIPTION,
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;
