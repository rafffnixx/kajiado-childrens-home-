import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <img 
          src="/images/hero/hero-bg.jpg" 
          alt="Kajiado Children's Home" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Kajiado Children's Home
          </h1>
          <p className="text-xl md:text-2xl mb-4">
            Providing hope for the vulnerable, one child at a time
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Transforming lives through love, education, and faith since 1997
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition">
              Donate Now
            </Link>
            <Link to="/get-involved" className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition">
              Sponsor a Child
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600">1997</div>
            <div className="text-gray-600">Year Founded</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600">100%</div>
            <div className="text-gray-600">Donations to Programs</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600">Hundreds</div>
            <div className="text-gray-600">Children Supported</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600">27+</div>
            <div className="text-gray-600">Years of Service</div>
          </div>
        </div>
      </div>

      {/* Every Child Deserves */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Every Child Deserves</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="text-3xl mb-2">❤️</div>
              <p className="font-semibold">Love</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="text-3xl mb-2">🍲</div>
              <p className="font-semibold">Full Stomach</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="text-3xl mb-2">📚</div>
              <p className="font-semibold">Quality Education</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="text-3xl mb-2">🙏</div>
              <p className="font-semibold">Spiritual Nourishment</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="text-3xl mb-2">⭐</div>
              <p className="font-semibold">Hope for Future</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Four Programs */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Our Four Programs</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Helping children from their villages through education, mentorship, and community outreach
        </p>
        <div className="grid md:grid-cols-4 gap-6">
          {/* Program 1: Hope for Kajiado */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition hover:-translate-y-1">
            <div className="text-5xl mb-4">🌟</div>
            <h3 className="font-bold text-xl mb-2">Hope for Kajiado</h3>
            <p className="text-blue-600 text-sm font-semibold mb-2">Sustaining KCH</p>
            <p className="text-gray-600 text-sm">Fundraising, child sponsorship, and operational support to sustain Kajiado Children's Home</p>
          </div>

          {/* Program 2: Valley School of Excellence */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition hover:-translate-y-1">
            <div className="text-5xl mb-4">📚</div>
            <h3 className="font-bold text-xl mb-2">Valley School of Excellence</h3>
            <p className="text-blue-600 text-sm font-semibold mb-2">Quality Education</p>
            <p className="text-gray-600 text-sm">Modern classrooms, computer labs, library, music & art for KCH and community children</p>
          </div>

          {/* Program 3: Bright Horizons Project */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition hover:-translate-y-1">
            <div className="text-5xl mb-4">🎓</div>
            <h3 className="font-bold text-xl mb-2">Bright Horizons</h3>
            <p className="text-blue-600 text-sm font-semibold mb-2">Mentorship Program</p>
            <p className="text-gray-600 text-sm">Career training, digital skills, and guidance for older students transitioning to adulthood</p>
          </div>

          {/* Program 4: Namanga Hope Center */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition hover:-translate-y-1">
            <div className="text-5xl mb-4">🍲</div>
            <h3 className="font-bold text-xl mb-2">Namanga Hope Center</h3>
            <p className="text-blue-600 text-sm font-semibold mb-2">Community Outreach</p>
            <p className="text-gray-600 text-sm">Meals, clothing, and mentorship for vulnerable children and elderly in their villages</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link to="/programs" className="text-blue-600 font-semibold hover:text-blue-700 transition">
            Learn More About Our Programs →
          </Link>
        </div>
      </div>

      {/* Why Support Us */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Why Support Us</h2>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">✓ 100% of donations go directly to supporting children and programs</li>
                <li className="flex items-center gap-2">✓ Operational costs covered by a small group of dedicated donors</li>
                <li className="flex items-center gap-2">✓ Dedicated volunteer board of directors</li>
                <li className="flex items-center gap-2">✓ Proven impact: children grow, succeed, and return to mentor others</li>
              </ul>
              <Link to="/get-involved" className="inline-block mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                Get Involved Today →
              </Link>
            </div>
            <div>
              <img 
                src="/images/children/happy-children.jpg" 
                alt="Happy Children at KCH" 
                className="rounded-lg shadow-lg w-full h-80 object-cover"
                onError={(e) => e.target.src = 'https://placehold.co/500x400/e2e8f0/3b82f6?text=Happy+Children'}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Programs Impact */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Programs Impact</h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="text-3xl font-bold text-blue-600">150+</div>
            <div className="text-gray-600">Children at KCH</div>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="text-3xl font-bold text-blue-600">50+</div>
            <div className="text-gray-600">Students at Valley School</div>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="text-3xl font-bold text-blue-600">15+</div>
            <div className="text-gray-600">Students in Bright Horizons</div>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="text-3xl font-bold text-blue-600">100+</div>
            <div className="text-gray-600">Served by Namanga Center</div>
          </div>
        </div>
      </div>

      {/* Testimonial */}


      {/* CTA */}

    </div>
  );
}

export default Home;