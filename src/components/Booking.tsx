import React, { useState } from 'react'

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    show: '',
    date: '',
    tickets: 1,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Booking submitted:', formData)
    alert('Booking submitted successfully!')
  }

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="container mx-auto max-w-md px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-warm-brown">Book a Show</h2>
        <form onSubmit={handleSubmit} className="space-y-4 bg-warm-yellow p-6 rounded-lg shadow-lg">
          <div>
            <label htmlFor="name" className="block mb-1 text-warm-brown">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-warm-orange"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 text-warm-brown">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-warm-orange"
            />
          </div>
          <div>
            <label htmlFor="show" className="block mb-1 text-warm-brown">Show</label>
            <select
              id="show"
              name="show"
              value={formData.show}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-warm-orange"
            >
              <option value="">Select a show</option>
              <option value="La Tesi di Ernesto">La Tesi di Ernesto</option>
              <option value="Il Dio del Massacro">Il Dio del Massacro</option>
            </select>
          </div>
          <div>
            <label htmlFor="date" className="block mb-1 text-warm-brown">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-warm-orange"
            />
          </div>
          <div>
            <label htmlFor="tickets" className="block mb-1 text-warm-brown">Number of Tickets</label>
            <input
              type="number"
              id="tickets"
              name="tickets"
              value={formData.tickets}
              onChange={handleChange}
              min="1"
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-warm-orange"
            />
          </div>
          <button type="submit" className="w-full bg-warm-red text-white px-4 py-2 rounded-md hover:bg-warm-orange transition duration-300">
            Book Now
          </button>
        </form>
      </div>
    </section>
  )
}

export default Booking