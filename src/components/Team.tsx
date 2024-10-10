import React from 'react'

const Team = () => {
  const members = [
    { id: 1, name: "Maria Rossi", role: "Director", image: "https://picsum.photos/seed/director/500/500" },
    { id: 2, name: "Luca Bianchi", role: "Lead Actor", image: "https://picsum.photos/seed/actor/500/500" },
    { id: 3, name: "Giulia Verdi", role: "Lead Actress", image: "https://picsum.photos/seed/actress/500/500" },
    { id: 4, name: "Marco Neri", role: "Set Designer", image: "https://picsum.photos/seed/designer/500/500" },
    { id: 5, name: "Sofia Russo", role: "Costume Designer", image: "https://picsum.photos/seed/costume/500/500" },
    { id: 6, name: "Alessandro Moretti", role: "Sound Engineer", image: "https://picsum.photos/seed/sound/500/500" },
  ]

  return (
    <section id="team" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center heading-gradient">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member) => (
            <div key={member.id} className="group relative overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-80 object-cover transition duration-300 filter saturate-50 blur-0 group-hover:saturate-100 group-hover:blur-none"
              />
              <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-rich-black/90 to-transparent">
                <div className="text-center w-full">
                  <h3 className="text-2xl font-semibold mb-2 text-selective-yellow">{member.name}</h3>
                  <p className="text-lg text-text-primary">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team