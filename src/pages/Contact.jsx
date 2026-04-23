import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1000);
  };

  return (
    <div>
      {/* Header with Background Image */}
      <div className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <img 
          src="/images/hero/hero-bg.jpg" 
          alt="Contact Us" 
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          onError={(e) => e.target.style.display = 'none'}
        />
        <div className="relative max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">We'd love to hear from you</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            
            {submitStatus === 'success' && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                Thank you for your message! We will respond within 2-3 business days.
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2 font-semibold">Full Name *</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-semibold">Email Address *</label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-semibold">Subject</label>
                <input
                  type="text"
                  placeholder="What is this regarding?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-semibold">Message *</label>
                <textarea
                  rows="5"
                  placeholder="Tell us how we can help..."
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold w-full md:w-auto ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:shadow-md transition">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-blue-600">📍</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Address</h3>
                  <p className="text-gray-600">Kajiado Children's Home<br />Kajiado Town, Kajiado County<br />Kenya</p>
                </div>
              </div>
              
              {/* Phone */}
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:shadow-md transition">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-blue-600">📞</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Phone</h3>
                  <p className="text-gray-600">+254 700 123 456</p>
                  <p className="text-gray-600">+254 722 123 456</p>
                </div>
              </div>
              
              {/* Email */}
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:shadow-md transition">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-blue-600">✉️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Email</h3>
                  <p className="text-gray-600">info@kajiadochildrenhome.org</p>
                  <p className="text-gray-600">sponsorship@kajiadochildrenhome.org</p>
                </div>
              </div>
              
              {/* Hours */}
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:shadow-md transition">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-blue-600">🕒</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Visiting Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                  <p className="text-gray-600 text-red-500">Sunday: Closed (By appointment)</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-lg mb-4 text-gray-800">Follow Us</h3>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-700 transition hover:scale-110"
                  aria-label="Facebook"
                >
                  f
                </a>
                <a 
                  href="#" 
                  className="bg-blue-400 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-500 transition hover:scale-110"
                  aria-label="Twitter"
                >
                  t
                </a>
                <a 
                  href="#" 
                  className="bg-pink-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-pink-700 transition hover:scale-110"
                  aria-label="Instagram"
                >
                  ig
                </a>
                <a 
                  href="#" 
                  className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-green-700 transition hover:scale-110"
                  aria-label="WhatsApp"
                >
                  wa
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-12">
          <h3 className="text-xl font-bold mb-4">Find Us Here</h3>
          <div className="bg-gray-200 rounded-lg h-96 overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35870276116!2d36.70730895!3d-2.5156245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f2e4e0d5d5d5d%3A0x5d5d5d5d5d5d5d5d!2sKajiado!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Kajiado Children's Home Location"
            ></iframe>
          </div>
          <p className="text-gray-500 text-sm text-center mt-2">Kajiado Town, Kajiado County, Kenya</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;