import React from 'react'

const Shows = () => {
  const shows = [
    {
      id: 1,
      title: "Il Dio del Massacro",
      dates: ["30/11/2024", "01/12/2024"],
      status: "upcoming",
      image: "https://picsum.photos/seed/massacre/400/600",
      description: "A gripping drama that explores the thin veneer of civility as two couples meet to discuss a playground altercation between their children."
    },
    {
      id: 2,
      title: "La Tesi di Ernesto",
      dates: ["15/07/2019"],
      status: "past",
      image: "https://picsum.photos/seed/thesis/400/600",
      description: "A hilarious comedy about a student's desperate attempt to complete his thesis while navigating through absurd academic obstacles."
    },
  ]

  return (
    <section id="shows" className="py-20 section-bg-light backdrop-blur-md">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center heading-gradient">Our Shows</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {shows.map((show) => (
            <div key={show.id} className="flex flex-col rounded-lg overflow-hidden shadow-lg border-2 border-selective-yellow bg-chocolate-cosmos/50">
              <img src={show.image} alt={show.title} className="w-full h-64 object-cover" />
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-semibold mb-2 text-selective-yellow">{show.title}</h3>
                <p className="mb-2 text-text-primary">
                  {show.dates.map((date, index) => (
                    <span key={index}>
                      {date}
                      {index < show.dates.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </p>
                <p className="mb-4 text-text-secondary flex-grow">{show.description}</p>
                <div className="flex justify-between items-center">
                  <p className="capitalize font-semibold text-princeton-orange">
                    {show.status === 'upcoming' ? 'Upcoming' : 'Past Show'}
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
          <h3 className="text-2xl font-bold mb-4 text-selective-yellow">Stay Updated</h3>
          <p className="text-lg mb-6 text-text-secondary">Subscribe to our newsletter for the latest updates on upcoming shows and exclusive news!</p>
          <a
            href="https://mailchi.mp/your-mailchimp-signup-url"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-button"
          >
            Subscribe to Newsletter
          </a>
        </div>
      </div>
    </section>
  )
}

export default Shows