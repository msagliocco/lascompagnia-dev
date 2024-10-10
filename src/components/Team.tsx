import React from 'react'

const Team = () => {
  const members = [
    { id: 1, name: "Maria Rossi", role: "Director", image: "https://picsum.photos/seed/director/400/400" },
    { id: 2, name: "Luca Bianchi", role: "Lead Actor", image: "https://picsum.photos/seed/actor/400/400" },
    { id: 3, name: "Giulia Verdi", role: "Lead Actress", image: "https://picsum.photos/seed/actress/400/400" },
    { id: 4, name: "Marco Neri", role: "Set Designer", image: "https://picsum.photos/seed/designer/400/400" },
  ]

  return (
    <section id="team" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center heading-gradient">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member) => (
            <div key={member.id} className="bg-chocolate-cosmos p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition duration-300">
              <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-xl font-semibold mb-2 text-selective-yellow">{member.name}</h3>
              <p className="text-text-primary">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team