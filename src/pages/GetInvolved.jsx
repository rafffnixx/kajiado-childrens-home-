import { useState } from 'react';
import { Link } from 'react-router-dom';

function GetInvolved() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', interest: '' });
  const [showVolunteerForm, setShowVolunteerForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', interest: '' });
    setShowVolunteerForm(false);
  };

  return (
    <div>
      {/* Donation Section - Hero with Background Image */}
      <div className="relative bg-gradient-to-r from-yellow-500 to-orange-500">
        <img 
          src="/images/hero/hero-bg.jpg" 
          alt="Support Kajiado Children's Home" 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          onError={(e) => e.target.style.display = 'none'}
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32 text-center text-white z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Make a Donation Today</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">Your contribution directly impacts a child's future</p>
          <Link to="/donate" className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block text-lg">
            Donate Now
          </Link>
        </div>
      </div>

      {/* Ways to Help */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Ways You Can Help</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-5 text-center hover:shadow-lg transition">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
              <span className="text-xl font-bold text-blue-600">$</span>
            </div>
            <h3 className="text-lg font-bold mb-2">One-Time Donation</h3>
            <p className="text-gray-600 text-sm mb-3">Any amount helps provide food, clothing, and medical care.</p>
            <Link to="/donate" className="text-blue-600 text-sm font-semibold hover:text-blue-700">Donate Now →</Link>
          </div>
          <div className="bg-white rounded-lg shadow-md p-5 text-center hover:shadow-lg transition">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
              <span className="text-xl font-bold text-blue-600">👤</span>
            </div>
            <h3 className="text-lg font-bold mb-2">Monthly Sponsorship</h3>
            <p className="text-gray-600 text-sm mb-3">KES 2,500/month covers education, meals, and care.</p>
            <Link to="/donate" className="text-blue-600 text-sm font-semibold hover:text-blue-700">Sponsor a Child →</Link>
          </div>
          <div className="bg-white rounded-lg shadow-md p-5 text-center hover:shadow-lg transition">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
              <span className="text-xl font-bold text-blue-600">✋</span>
            </div>
            <h3 className="text-lg font-bold mb-2">Volunteer</h3>
            <p className="text-gray-600 text-sm mb-3">Share your skills in teaching, mentoring, or administration.</p>
            <button 
              onClick={() => setShowVolunteerForm(true)}
              className="text-blue-600 text-sm font-semibold hover:text-blue-700"
            >
              Apply to Volunteer →
            </button>
          </div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="bg-blue-50 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600">150+</div>
              <div className="text-sm text-gray-600">Children</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">50+</div>
              <div className="text-sm text-gray-600">Volunteers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">20+</div>
              <div className="text-sm text-gray-600">Partners</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">27+</div>
              <div className="text-sm text-gray-600">Years</div>
            </div>
          </div>
        </div>
      </div>

      {/* Wishlist Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-center mb-6">Current Needs</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="bg-gray-50 rounded-lg p-3 border-l-4 border-blue-600">
            <h4 className="font-semibold text-gray-800 text-sm">School Uniforms</h4>
            <p className="text-gray-600 text-xs">50 needed</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 border-l-4 border-blue-600">
            <h4 className="font-semibold text-gray-800 text-sm">Textbooks & Stationery</h4>
            <p className="text-gray-600 text-xs">For 150 children</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 border-l-4 border-blue-600">
            <h4 className="font-semibold text-gray-800 text-sm">Blankets & Bedding</h4>
            <p className="text-gray-600 text-xs">Winter supplies needed</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 border-l-4 border-blue-600">
            <h4 className="font-semibold text-gray-800 text-sm">Food Supplies</h4>
            <p className="text-gray-600 text-xs">Maize, beans, cooking oil</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 border-l-4 border-blue-600">
            <h4 className="font-semibold text-gray-800 text-sm">Sports Equipment</h4>
            <p className="text-gray-600 text-xs">Balls, nets, uniforms</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 border-l-4 border-blue-600">
            <h4 className="font-semibold text-gray-800 text-sm">Computers</h4>
            <p className="text-gray-600 text-xs">For learning center</p>
          </div>
        </div>
      </div>

      {/* Bank Details */}
      <div className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-xl font-bold mb-3">Bank Transfer Details</h3>
          <p className="text-sm">Bank: Equity Bank | Account: Kajiado Children's Home</p>
          <p className="text-sm">Account Number: 1234567890 | Branch: Kajiado Town</p>
        </div>
      </div>

      {/* Volunteer Form Modal */}
      {showVolunteerForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-5">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Volunteer Registration</h3>
              <button onClick={() => setShowVolunteerForm(false)} className="text-gray-500 hover:text-gray-700 text-xl">✕</button>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Full Name *"
                required
                className="w-full px-3 py-2 border rounded-lg mb-3 focus:outline-none focus:border-blue-600 text-sm"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <input
                type="email"
                placeholder="Email *"
                required
                className="w-full px-3 py-2 border rounded-lg mb-3 focus:outline-none focus:border-blue-600 text-sm"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-3 py-2 border rounded-lg mb-3 focus:outline-none focus:border-blue-600 text-sm"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
              <select
                required
                className="w-full px-3 py-2 border rounded-lg mb-4 focus:outline-none focus:border-blue-600 text-sm"
                value={formData.interest}
                onChange={(e) => setFormData({...formData, interest: e.target.value})}
              >
                <option value="">Select Area of Interest</option>
                <option>Teaching/Tutoring</option>
                <option>Sports & Recreation</option>
                <option>Medical/Healthcare</option>
                <option>Administration</option>
                <option>Fundraising</option>
                <option>Construction/Maintenance</option>
              </select>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition text-sm font-semibold">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default GetInvolved;