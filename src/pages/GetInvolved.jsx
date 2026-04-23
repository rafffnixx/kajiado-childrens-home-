import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function GetInvolved() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', interest: '' });
  const [showVolunteerForm, setShowVolunteerForm] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  const waysRef = useRef(null);
  const statsRef = useRef(null);
  const wishlistRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', interest: '' });
    setShowVolunteerForm(false);
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

    if (waysRef.current) observer.observe(waysRef.current);
    if (statsRef.current) observer.observe(statsRef.current);
    if (wishlistRef.current) observer.observe(wishlistRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Same as Home Page */}
      <div className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <img 
          src="/images/hero/hero-bg.jpg" 
          alt="Support Kajiado Children's Home" 
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => e.target.style.display = 'none'}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-slide-up">Make a Donation Today</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-slide-up-delay">Your contribution directly impacts a child's future</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link to="/donate" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Donate Now
            </Link>
            <Link to="/get-involved" className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Sponsor a Child
            </Link>
          </div>
        </div>
      </div>

      {/* Ways to Help with Scroll Animation */}
      <div 
        ref={waysRef}
        id="ways"
        className={`max-w-7xl mx-auto px-4 py-16 transition-all duration-1000 ease-out transform ${
          isVisible.ways ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <h2 className="text-3xl font-bold text-center mb-4">Ways You Can Help</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group">
            <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-blue-200 group-hover:scale-110">
              <span className="text-2xl font-bold text-blue-600">$</span>
            </div>
            <h3 className="text-xl font-bold mb-2">One-Time Donation</h3>
            <p className="text-gray-600 text-sm mb-4">Any amount helps provide food, clothing, and medical care.</p>
            <Link to="/donate" className="text-blue-600 font-semibold hover:text-blue-700 transition-all duration-300 inline-flex items-center gap-1 group-hover:gap-2">
              Donate Now →
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group">
            <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-blue-200 group-hover:scale-110">
              <span className="text-2xl font-bold text-blue-600">👤</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Monthly Sponsorship</h3>
            <p className="text-gray-600 text-sm mb-4">KES 2,500/month covers education, meals, and care.</p>
            <Link to="/donate" className="text-blue-600 font-semibold hover:text-blue-700 transition-all duration-300 inline-flex items-center gap-1 group-hover:gap-2">
              Sponsor a Child →
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group">
            <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-blue-200 group-hover:scale-110">
              <span className="text-2xl font-bold text-blue-600">✋</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Volunteer</h3>
            <p className="text-gray-600 text-sm mb-4">Share your skills in teaching, mentoring, or administration.</p>
            <button 
              onClick={() => setShowVolunteerForm(true)}
              className="text-blue-600 font-semibold hover:text-blue-700 transition-all duration-300 inline-flex items-center gap-1 group-hover:gap-2"
            >
              Apply to Volunteer →
            </button>
          </div>
        </div>
      </div>

      {/* Impact Stats with Scroll Animation */}
      <div 
        ref={statsRef}
        id="stats"
        className={`bg-blue-50 py-16 transition-all duration-1000 ease-out delay-300 transform ${
          isVisible.stats ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Impact</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-lg p-6 shadow-md transform transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-blue-600">150+</div>
              <div className="text-gray-600 mt-2">Children Supported</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md transform transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-blue-600">50+</div>
              <div className="text-gray-600 mt-2">Active Volunteers</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md transform transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-blue-600">20+</div>
              <div className="text-gray-600 mt-2">Partner Orgs</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md transform transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-blue-600">27+</div>
              <div className="text-gray-600 mt-2">Years of Service</div>
            </div>
          </div>
        </div>
      </div>

      {/* Wishlist Section with Scroll Animation */}
      <div 
        ref={wishlistRef}
        id="wishlist"
        className={`max-w-7xl mx-auto px-4 py-16 transition-all duration-1000 ease-out delay-600 transform ${
          isVisible.wishlist ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <h2 className="text-3xl font-bold text-center mb-4">Current Needs</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
        <p className="text-center text-gray-600 mb-12">Your in-kind donations make a direct impact</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-600 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
            <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">School Uniforms</h4>
            <p className="text-gray-600 text-sm mt-1">50 needed - KES 2,500 each</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-600 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
            <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">Textbooks & Stationery</h4>
            <p className="text-gray-600 text-sm mt-1">For 150 children</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-600 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
            <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">Blankets & Bedding</h4>
            <p className="text-gray-600 text-sm mt-1">Winter supplies needed</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-600 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
            <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">Food Supplies</h4>
            <p className="text-gray-600 text-sm mt-1">Maize, beans, cooking oil</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-600 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
            <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">Sports Equipment</h4>
            <p className="text-gray-600 text-sm mt-1">Balls, nets, uniforms</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-600 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
            <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">Computers</h4>
            <p className="text-gray-600 text-sm mt-1">For the learning center</p>
          </div>
        </div>
      </div>

      {/* Bank Details */}
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Bank Transfer Details</h3>
          <p className="mb-2">Bank: Equity Bank</p>
          <p className="mb-2">Account Name: Kajiado Children's Home</p>
          <p className="mb-2">Account Number: 1234567890</p>
          <p>Branch: Kajiado Town</p>
        </div>
      </div>

      {/* Volunteer Form Modal */}
      {showVolunteerForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-lg max-w-md w-full p-6 transform animate-scale-in">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold">Volunteer Registration</h3>
              <button onClick={() => setShowVolunteerForm(false)} className="text-gray-500 hover:text-gray-700 text-2xl transition-colors">
                ✕
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Area of Interest *</label>
                <select
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                  value={formData.interest}
                  onChange={(e) => setFormData({...formData, interest: e.target.value})}
                >
                  <option value="">Select an option</option>
                  <option>Teaching/Tutoring</option>
                  <option>Sports & Recreation</option>
                  <option>Medical/Healthcare</option>
                  <option>Administration</option>
                  <option>Fundraising</option>
                  <option>Construction/Maintenance</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                Submit Application
              </button>
            </form>
          </div>
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
        
        .animate-slide-up {
          animation: slide-up 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
        }
        
        .animate-slide-up-delay {
          animation: slide-up 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1) 0.2s forwards;
          opacity: 0;
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }
        
        .animate-scale-in {
          animation: scale-in 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default GetInvolved;