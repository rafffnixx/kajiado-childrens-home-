import { useState } from 'react';

function Events() {
  const [registeredEvent, setRegisteredEvent] = useState(null);
  const [showForm, setShowForm] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  // One upcoming event
  const upcomingEvent = {
    id: 1,
    title: "Annual Fundraising Gala 2025",
    date: "December 15, 2025",
    time: "6:00 PM - 10:00 PM",
    location: "Kajiado Sports Club",
    description: "Join us for an evening of dinner, music, and auctions to support our children's education fund.",
    spots: 150,
    image: "/images/events/gala.jpg"
  };

  // Past events with images
  const pastEvents = [
    {
      id: 2,
      title: "Children's Sports Day 2024",
      date: "January 20, 2024",
      location: "Kajiado Children's Home Grounds",
      description: "A fun-filled day of sports, games, and activities for the children.",
      image: "/images/events/sports-day.jpg",
      attendees: 120,
      raised: null
    },
    {
      id: 3,
      title: "Charity Walk & Run 2024",
      date: "February 10, 2024",
      location: "Kajiado Town Center",
      description: "5km walk/run to raise awareness and funds for children's healthcare.",
      image: "/images/events/charity-walk.jpg",
      attendees: 300,
      raised: "KES 250,000"
    },
    {
      id: 4,
      title: "Graduation Ceremony 2024",
      date: "March 25, 2024",
      location: "Kajiado Children's Home Hall",
      description: "Celebrating our students moving to secondary school and vocational training.",
      image: "/images/events/graduation.jpg",
      attendees: 200,
      raised: null
    },
    {
      id: 5,
      title: "Family Fun Day 2024",
      date: "June 15, 2024",
      location: "Kajiado Children's Home",
      description: "A day of games, food, and entertainment for children and families.",
      image: "/images/events/family-day.jpg",
      attendees: 350,
      raised: "KES 100,000"
    },
    {
      id: 6,
      title: "Christmas Party 2024",
      date: "December 20, 2024",
      location: "Kajiado Children's Home Hall",
      description: "Annual Christmas celebration with gifts, food, and entertainment for all children.",
      image: "/images/events/christmas.jpg",
      attendees: 250,
      raised: "KES 75,000"
    }
  ];

  const handleRegister = () => {
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRegisteredEvent(true);
    setShowForm(false);
    setFormData({ name: '', email: '', phone: '' });
    setTimeout(() => setRegisteredEvent(null), 3000);
  };

  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Events</h1>
          <p className="text-xl max-w-2xl mx-auto">Join our upcoming events and celebrate our past successes</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Upcoming Event */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Upcoming Event</h2>
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg overflow-hidden shadow-lg">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="h-64 md:h-full">
                <img 
                  src={upcomingEvent.image} 
                  alt={upcomingEvent.title}
                  className="w-full h-full object-cover"
                  onError={(e) => e.target.src = 'https://placehold.co/600x400/e2e8f0/3b82f6?text=Event'}
                />
              </div>
              <div className="p-6 text-white">
                <div className="inline-block bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                  Register Now
                </div>
                <h3 className="text-2xl font-bold mb-3">{upcomingEvent.title}</h3>
                <div className="space-y-1 mb-3 text-sm">
                  <p>📅 {upcomingEvent.date}</p>
                  <p>⏰ {upcomingEvent.time}</p>
                  <p>📍 {upcomingEvent.location}</p>
                  <p>🎟️ {upcomingEvent.spots} spots available</p>
                </div>
                <p className="text-sm text-blue-100 mb-4">{upcomingEvent.description}</p>
                <button
                  onClick={handleRegister}
                  className="bg-white text-blue-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
                >
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Past Events with Images */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8">Past Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                <div className="h-40 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                    onError={(e) => e.target.src = 'https://placehold.co/600x300/e2e8f0/3b82f6?text=Event+Photo'}
                  />
                </div>
                <div className="p-4">
                  <div className="text-xs text-blue-600 font-semibold mb-1">{event.date}</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{event.title}</h3>
                  <p className="text-gray-500 text-xs mb-2">{event.location}</p>
                  <p className="text-gray-600 text-xs mb-3">{event.description}</p>
                  <div className="flex justify-between items-center border-t pt-2 mt-1">
                    <span className="text-xs text-gray-500">👥 {event.attendees}+ attendees</span>
                    {event.raised && <span className="text-xs text-green-600 font-semibold">💰 {event.raised}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Summary */}
        <div className="mt-16 bg-blue-50 rounded-lg p-6">
          <div className="grid grid-cols-3 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600">6+</div>
              <div className="text-xs text-gray-600">Events</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">1,500+</div>
              <div className="text-xs text-gray-600">Attendees</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">KES 425K+</div>
              <div className="text-xs text-gray-600">Raised</div>
            </div>
          </div>
        </div>
      </div>

      {/* Registration Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-xl font-bold mb-4">Register for Event</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Full Name *"
                required
                className="w-full px-3 py-2 border rounded-lg mb-3 focus:outline-none focus:border-blue-600"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <input
                type="email"
                placeholder="Email *"
                required
                className="w-full px-3 py-2 border rounded-lg mb-3 focus:outline-none focus:border-blue-600"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-3 py-2 border rounded-lg mb-4 focus:outline-none focus:border-blue-600"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
              <div className="flex gap-3">
                <button type="submit" className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                  Submit
                </button>
                <button type="button" onClick={() => setShowForm(null)} className="flex-1 bg-gray-300 py-2 rounded-lg hover:bg-gray-400 transition">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Success Notification */}
      {registeredEvent && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 text-sm">
          ✓ Registration successful!
        </div>
      )}
    </div>
  );
}

export default Events;