function DonorsPartners() {
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

  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Partners & Donors</h1>
          <p className="text-xl max-w-2xl mx-auto">Together, we transform young lives through generosity and partnership</p>
        </div>
      </div>

      {/* Partners Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Partners</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <img 
                src={partner.image} 
                alt={partner.name}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.target.src = 'https://placehold.co/600x400/e2e8f0/3b82f6?text=' + partner.name;
                }}
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{partner.name}</h3>
                <p className="text-blue-600 font-semibold text-sm mb-2">{partner.role}</p>
                <p className="text-gray-600 text-sm mb-3">{partner.description}</p>
                <div className="bg-blue-50 rounded-lg p-2 text-center">
                  <p className="text-xs text-blue-700 font-semibold">Impact: {partner.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Donors Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Supporters & Donors</h2>
          <p className="text-center text-gray-600 mb-8">Thank you to everyone who makes our work possible</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {donors.map((donor, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border-l-4 border-blue-600 shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-gray-800">{donor.name}</h4>
                    <p className="text-xs text-gray-500">{donor.type}</p>
                  </div>
                  <p className="text-blue-600 font-semibold text-sm">{donor.contribution}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-6">
            <p className="text-gray-500 text-sm">Want to be featured? Contact us to discuss partnership opportunities.</p>
          </div>
        </div>
      </div>

      {/* Become a Partner */}
      <div className="bg-blue-600 text-white py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-3">Become a Partner</h2>
          <p className="text-md mb-4">
            Join us in making a difference in the lives of vulnerable children in Kajiado.
          </p>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default DonorsPartners;