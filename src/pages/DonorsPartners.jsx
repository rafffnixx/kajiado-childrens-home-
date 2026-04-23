import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function DonorsPartners() {
  const [isVisible, setIsVisible] = useState({});
  const partnersRef = useRef(null);
  const donorsRef = useRef(null);

  const partners = [
    {
      name: "Hope for Kajiado",
      role: "Fundraising & Support Partner",
      description: "Helps sustain Kajiado Children's Home through fundraising, child sponsorship, and operational support.",
      impact: "Sustaining KCH operations",
      image: "/images/partners/hope4kajiado.jpg"
    },
    {
      name: "Kajiado Valley School",
      role: "Education Partner",
      description: "Our young children learn here. Open to outside students who pay fees, creating a sustainable model that helps support our home's operations.",
      impact: "50+ children educated daily",
      image: "/images/partners/valley-school.jpg"
    },
    {
      name: "Bright Horizons Project",
      role: "Mentorship & Career Partner",
      description: "Provides mentorship, career readiness training, digital skills, and guidance for older students transitioning to adulthood.",
      impact: "15+ students in higher education",
      image: "/images/partners/bright-horizons.jpg"
    },
    {
      name: "Namanga Hope Centre",
      role: "Community Outreach Partner",
      description: "Provides nutritious meals for children and the elderly, clothing distribution, mentorship and life skills training to vulnerable communities.",
      impact: "100+ people served monthly",
      image: "/images/partners/namanga.jpg"
    }
  ];

  const donors = [
    { name: "John M. & Family", contribution: "KES 500,000", type: "Individual" },
    { name: "Kajiado County Government", contribution: "Infrastructure Support", type: "Government" },
    { name: "Rotary Club of Kajiado", contribution: "Water Project", type: "Organization" },
    { name: "Sarah Wanjiku Foundation", contribution: "Monthly Food Program", type: "Foundation" },
    { name: "TechForGood Kenya", contribution: "Computers & IT Lab", type: "Corporate" },
  ];

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

    if (partnersRef.current) observer.observe(partnersRef.current);
    if (donorsRef.current) observer.observe(donorsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Header with Background Image - Same as Home Page */}
      <div className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <img 
          src="/images/hero/hero-bg.jpg" 
          alt="Partners and Donors" 
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => e.target.style.display = 'none'}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Partners & Donors</h1>
          <p className="text-xl max-w-2xl mx-auto">Together, we transform young lives through generosity and partnership</p>
        </div>
      </div>

      {/* Partners Section with Scroll Animation */}
      <div 
        ref={partnersRef}
        id="partners"
        className={`max-w-7xl mx-auto px-4 py-16 transition-all duration-1000 ease-out transform ${
          isVisible.partners ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <h2 className="text-3xl font-bold text-center mb-4">Our Partners</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
        <div className="grid md:grid-cols-2 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={partner.image} 
                  alt={partner.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = 'https://placehold.co/600x400/e2e8f0/3b82f6?text=' + partner.name;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">{partner.name}</h3>
                <p className="text-blue-600 font-semibold text-sm mb-3">{partner.role}</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{partner.description}</p>
                <div className="bg-blue-50 rounded-lg p-3 text-center transform transition-all duration-300 group-hover:bg-blue-100">
                  <p className="text-sm text-blue-700 font-semibold">Impact: {partner.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Donors Section with Scroll Animation */}
      <div 
        ref={donorsRef}
        id="donors"
        className={`bg-gray-50 py-16 transition-all duration-1000 ease-out delay-300 transform ${
          isVisible.donors ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Supporters & Donors</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-center text-gray-600 mb-12">Thank you to everyone who makes our work possible</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {donors.map((donor, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-5 border-l-4 border-blue-600 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{donor.name}</h4>
                    <p className="text-xs text-gray-500 mt-1">{donor.type}</p>
                  </div>
                  <div className="bg-blue-100 rounded-full px-3 py-1">
                    <p className="text-blue-600 font-semibold text-sm">{donor.contribution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <p className="text-gray-500 text-sm">Want to be featured? Contact us to discuss partnership opportunities.</p>
            <Link to="/contact" className="inline-block mt-3 text-blue-600 font-semibold hover:text-blue-700 transition-all duration-300">
              Contact Us Today →
            </Link>
          </div>
        </div>
      </div>

      {/* Become a Partner CTA */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Become a Partner</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Join us in making a difference in the lives of vulnerable children in Kajiado.
            Your partnership, whether big or small, creates lasting impact.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Contact Us to Partner
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DonorsPartners;