import { useState, useEffect, useRef } from 'react';

function Events() {
  const [registeredEvent, setRegisteredEvent] = useState(null);
  const [showForm, setShowForm] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isVisible, setIsVisible] = useState({});
  const pastEventsRef = useRef(null);
  const statsRef = useRef(null);

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

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.2 }
    );

    if (pastEventsRef.current) observer.observe(pastEventsRef.current);
    if (statsRef.current) observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Header with Background Image - Same as Home Page */}
      <div className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <img 
          src="/images/hero/hero-bg.jpg" 
          alt="Events" 
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => e.target.style.display = 'none'}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">Events</h1>
          <p className="text-xl max-w-2xl mx-auto animate-slide-up-delay">Join our upcoming events and celebrate our past successes</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Upcoming Event */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-4">Upcoming Event</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="h-64 md:h-full overflow-hidden">
                <img 
                  src={upcomingEvent.image} 
                  alt={upcomingEvent.title}
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-110"
                  onError={(e) => e.target.src = 'https://placehold.co/600x400/e2e8f0/3b82f6?text=Event'}
                />
              </div>
              <div className="p-8 text-white">
                <div className="inline-block bg-yellow-500 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold mb-4 animate-pulse">
                  Register Now
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{upcomingEvent.title}</h3>
                <div className="space-y-2 mb-4">
                  <p className="flex items-center gap-2 text-sm">
                    <span className="text-yellow-300">📅</span> {upcomingEvent.date}
                  </p>
                  <p className="flex items-center gap-2 text-sm">
                    <span className="text-yellow-300">⏰</span> {upcomingEvent.time}
                  </p>
                  <p className="flex items-center gap-2 text-sm">
                    <span className="text-yellow-300">📍</span> {upcomingEvent.location}
                  </p>
                  <p className="flex items-center gap-2 text-sm">
                    <span className="text-yellow-300">🎟️</span> {upcomingEvent.spots} spots available
                  </p>
                </div>
                <p className="text-sm text-blue-100 mb-6 leading-relaxed">{upcomingEvent.description}</p>
                <button
                  onClick={handleRegister}
                  className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Past Events with Scroll Animation */}
        <div 
          ref={pastEventsRef}
          id="pastEvents"
          className={`transition-all duration-1000 ease-out transform ${
            isVisible.pastEvents ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-3xl font-bold text-center mb-4">Past Events</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-center text-gray-600 mb-12">Celebrating our successful events and generous supporters</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <div 
                key={event.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    onError={(e) => e.target.src = 'https://placehold.co/600x300/e2e8f0/3b82f6?text=Event+Photo'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </div>
                <div className="p-5">
                  <div className="text-xs text-blue-600 font-semibold mb-1">{event.date}</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">{event.title}</h3>
                  <p className="text-gray-500 text-xs mb-2">{event.location}</p>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">{event.description}</p>
                  <div className="flex justify-between items-center border-t pt-3 mt-2">
                    <span className="text-xs text-gray-500">👥 {event.attendees}+ attendees</span>
                    {event.raised && (
                      <span className="text-xs text-green-600 font-semibold bg-green-50 px-2 py-1 rounded-full">
                        💰 {event.raised}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Summary with Scroll Animation */}
        <div 
          ref={statsRef}
          id="stats"
          className={`mt-20 transition-all duration-1000 ease-out delay-300 transform ${
            isVisible.stats ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="transform transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-blue-600">6+</div>
                <div className="text-gray-600 mt-1">Events Completed</div>
              </div>
              <div className="transform transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-blue-600">1,500+</div>
                <div className="text-gray-600 mt-1">Total Attendees</div>
              </div>
              <div className="transform transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-blue-600">KES 425K+</div>
                <div className="text-gray-600 mt-1">Funds Raised</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Registration Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-lg max-w-md w-full p-6 transform animate-scale-in">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Register for Event</h3>
              <button onClick={() => setShowForm(null)} className="text-gray-500 hover:text-gray-700 text-2xl transition-colors">
                ✕
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Full Name *"
                required
                className="w-full px-4 py-2 border rounded-lg mb-3 focus:outline-none focus:border-blue-600 transition-colors"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <input
                type="email"
                placeholder="Email *"
                required
                className="w-full px-4 py-2 border rounded-lg mb-3 focus:outline-none focus:border-blue-600 transition-colors"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:border-blue-600 transition-colors"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
              <div className="flex gap-3">
                <button type="submit" className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                  Submit
                </button>
                <button type="button" onClick={() => setShowForm(null)} className="flex-1 bg-gray-300 py-2 rounded-lg hover:bg-gray-400 transition-all duration-300">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Success Notification */}
      {registeredEvent && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-5 py-3 rounded-lg shadow-lg z-50 text-sm animate-slide-in-right">
          ✓ Registration successful! We'll contact you soon.
        </div>
      )}

      {/* CSS Animations */}
      <style>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-up-delay {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
        }
        
        .animate-slide-up-delay {
          animation: slide-up 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1) 0.2s forwards;
          opacity: 0;
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scale-in 0.2s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.4s ease-out forwards;
        }
        
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default Events;