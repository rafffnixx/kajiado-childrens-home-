function About() {
  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Kajiado Children's Home</h1>
          <p className="text-xl max-w-2xl mx-auto">Transforming young lives in Kajiado since 1997</p>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
            <div className="w-16 h-1 bg-blue-600 mb-6"></div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Kajiado Children's Home (KCH) provides a safe and loving environment for abused, abandoned, and orphaned children who have no place to go. Since <span className="font-bold text-blue-600">1997</span>, KCH has supported hundreds of children by offering shelter, care, and opportunities for a better future.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              What started as a small initiative has grown into a thriving community that currently cares for over 150 children, providing them with love, education, healthcare, and hope for a brighter future.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We work closely with Kenya Child Services to support children lacking parental care and basic needs, whether for short-term or long-term care. Our approach focuses on holistic development, ensuring every child receives not just basic needs but also emotional support, quality education, and skills for life.
            </p>
          </div>
          <div>
            <img 
              src="/images/about/founder.jpg" 
              alt="Kajiado Children's Home" 
              className="w-full h-auto rounded-lg shadow-lg object-cover"
              onError={(e) => e.target.src = 'https://placehold.co/600x400/e2e8f0/3b82f6?text=KCH'}
            />
            <p className="text-center text-gray-500 text-sm mt-2">Kajiado Children's Home</p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-4xl font-bold text-blue-600 mb-4">"</div>
              <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To ensure every child receives love, emotional support, nutritious food, medical care, quality education, and spiritual guidance—breaking free from poverty to build a brighter future.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-4xl font-bold text-blue-600 mb-4">"</div>
              <h3 className="text-2xl font-bold mb-3">Our Commitment</h3>
              <p className="text-gray-700 leading-relaxed">
                100% of donations go directly to supporting children and programs. Operational costs are covered by a dedicated group of donors and volunteer board of directors.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Four Programs */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Our Four Programs</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Helping children from their villages through education, mentorship, and community outreach
        </p>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-md p-5 text-center hover:shadow-lg transition">
            <div className="text-4xl mb-3">🌟</div>
            <h3 className="font-bold text-lg">Hope for Kajiado</h3>
            <p className="text-gray-600 text-sm mt-2">Sustaining KCH through fundraising, child sponsorship, and operational support</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-5 text-center hover:shadow-lg transition">
            <div className="text-4xl mb-3">📚</div>
            <h3 className="font-bold text-lg">Valley School of Excellence</h3>
            <p className="text-gray-600 text-sm mt-2">Quality education for KCH children and community students</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-5 text-center hover:shadow-lg transition">
            <div className="text-4xl mb-3">🎓</div>
            <h3 className="font-bold text-lg">Bright Horizons Project</h3>
            <p className="text-gray-600 text-sm mt-2">Mentorship, career training, and digital skills for older students</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-5 text-center hover:shadow-lg transition">
            <div className="text-4xl mb-3">🍲</div>
            <h3 className="font-bold text-lg">Namanga Hope Center</h3>
            <p className="text-gray-600 text-sm mt-2">Outreach providing meals, clothing, and mentorship to villages</p>
          </div>
        </div>
      </div>

      {/* What We Provide */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">What We Provide</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-3xl mb-2">❤️</div>
              <p className="font-semibold">Love & Emotional Support</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-3xl mb-2">🍲</div>
              <p className="font-semibold">Nutritious Food</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-3xl mb-2">🏥</div>
              <p className="font-semibold">Medical Care</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-3xl mb-2">📚</div>
              <p className="font-semibold">Quality Education</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-3xl mb-2">🙏</div>
              <p className="font-semibold">Spiritual Guidance</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-3xl mb-2">⭐</div>
              <p className="font-semibold">Hope for the Future</p>
            </div>
          </div>
        </div>
      </div>

      {/* Staff Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Dedicated Team</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Meet the caring individuals who make our home a loving environment for our children
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <img 
              src="/images/staff/staff1.jpg" 
              alt="Staff member" 
              className="w-48 h-48 object-cover rounded-full mx-auto mb-4 shadow-md"
              onError={(e) => e.target.src = 'https://placehold.co/200x200/e2e8f0/3b82f6?text=Staff'}
            />
            <h3 className="font-bold text-lg">Jane Mwangi</h3>
            <p className="text-gray-600 text-sm">House Mother</p>
          </div>
          <div className="text-center">
            <img 
              src="/images/staff/staff2.jpg" 
              alt="Staff member" 
              className="w-48 h-48 object-cover rounded-full mx-auto mb-4 shadow-md"
              onError={(e) => e.target.src = 'https://placehold.co/200x200/e2e8f0/3b82f6?text=Staff'}
            />
            <h3 className="font-bold text-lg">Peter Omondi</h3>
            <p className="text-gray-600 text-sm">Social Worker</p>
          </div>
          <div className="text-center">
            <img 
              src="/images/staff/staff3.jpg" 
              alt="Staff member" 
              className="w-48 h-48 object-cover rounded-full mx-auto mb-4 shadow-md"
              onError={(e) => e.target.src = 'https://placehold.co/200x200/e2e8f0/3b82f6?text=Staff'}
            />
            <h3 className="font-bold text-lg">Mary Wanjiku</h3>
            <p className="text-gray-600 text-sm">Teacher</p>
          </div>
          <div className="text-center">
            <img 
              src="/images/staff/staff4.jpg" 
              alt="Staff member" 
              className="w-48 h-48 object-cover rounded-full mx-auto mb-4 shadow-md"
              onError={(e) => e.target.src = 'https://placehold.co/200x200/e2e8f0/3b82f6?text=Staff'}
            />
            <h3 className="font-bold text-lg">James Kariuki</h3>
            <p className="text-gray-600 text-sm">Director</p>
          </div>
        </div>
      </div>

      {/* Proven Impact */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Proven Impact</h2>
          <p className="text-xl mb-6">
            Children who grow up at KCH go on to succeed in life—and many return to mentor the next generation.
          </p>
          <p className="text-lg font-semibold">
            Transforming lives, one child at a time.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-blue-600">L</span>
              </div>
              <h4 className="font-semibold text-lg">Love & Compassion</h4>
            </div>
            <div className="text-center p-4">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-blue-600">E</span>
              </div>
              <h4 className="font-semibold text-lg">Excellence</h4>
            </div>
            <div className="text-center p-4">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-blue-600">C</span>
              </div>
              <h4 className="font-semibold text-lg">Community</h4>
            </div>
            <div className="text-center p-4">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-blue-600">I</span>
              </div>
              <h4 className="font-semibold text-lg">Integrity</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;