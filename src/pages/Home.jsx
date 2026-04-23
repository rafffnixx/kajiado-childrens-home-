import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

function Home() {
  const [stats, setStats] = useState({
    children: 0,
    volunteers: 0,
    partners: 0,
    years: 0
  });

  const [currentHero, setCurrentHero] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const statsRef = useRef(null);
  const programsRef = useRef(null);
  const aboutRef = useRef(null);

  const heroMessages = [
    {
      title: "Kajiado Children's Home",
      subtitle: "Providing hope for the vulnerable, one child at a time",
      description: "Transforming lives through love, education, and faith since 1997",
      bgImage: "/images/hero/hero-bg.jpg"
    },
    {
      title: "Every Child Deserves a Chance",
      subtitle: "Help us provide shelter, food, and education",
      description: "Your support changes lives forever",
      bgImage: "/images/hero/hero-bg2.jpg"
    },
    {
      title: "Building Bright Futures",
      subtitle: "Together we can break the cycle of poverty",
      description: "Join us in making a difference today",
      bgImage: "/images/hero/hero-bg3.jpg"
    },
    {
      title: "Hope Starts Here",
      subtitle: "One child, one dream, one future at a time",
      description: "Be part of their journey to success",
      bgImage: "/images/hero/hero-bg4.jpg"
    }
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

    if (statsRef.current) observer.observe(statsRef.current);
    if (programsRef.current) observer.observe(programsRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);

    return () => observer.disconnect();
  }, []);

  // Animated counter effect
  useEffect(() => {
    const counters = [
      { key: 'children', target: 150, duration: 2000 },
      { key: 'volunteers', target: 50, duration: 2000 },
      { key: 'partners', target: 20, duration: 2000 },
      { key: 'years', target: 27, duration: 1500 }
    ];

    counters.forEach(counter => {
      const steps = 60;
      const increment = counter.target / steps;
      let current = 0;
      const interval = setInterval(() => {
        current += increment;
        if (current >= counter.target) {
          setStats(prev => ({ ...prev, [counter.key]: counter.target }));
          clearInterval(interval);
        } else {
          setStats(prev => ({ ...prev, [counter.key]: Math.floor(current) }));
        }
      }, counter.duration / steps);
    });
  }, []);

  // Rotate hero message every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroMessages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroMessages.length]);

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Smooth Crossfade */}
      <div className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        {heroMessages.map((message, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              currentHero === index 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
          >
            <img 
              src={message.bgImage}
              alt={message.title}
              className="w-full h-full object-cover"
              onError={(e) => e.target.style.display = 'none'}
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
        ))}
        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32 text-center z-10">
          <div className="transition-all duration-700 ease-out transform">
            <h1 
              key={`title-${currentHero}`}
              className="text-4xl md:text-6xl font-bold mb-4 animate-slide-up"
            >
              {heroMessages[currentHero].title}
            </h1>
            <p 
              key={`subtitle-${currentHero}`}
              className="text-xl md:text-2xl mb-4 animate-slide-up-delay-1"
            >
              {heroMessages[currentHero].subtitle}
            </p>
            <p 
              key={`desc-${currentHero}`}
              className="text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-slide-up-delay-2"
            >
              {heroMessages[currentHero].description}
            </p>
          </div>

          {/* Hero Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {heroMessages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentHero(index)}
                className={`transition-all duration-500 ease-out rounded-full ${
                  currentHero === index 
                    ? 'bg-white w-8 h-2' 
                    : 'bg-white/50 w-2 h-2 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="bg-blue-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            To ensure every child receives <span className="font-semibold text-blue-600">love</span>, 
            a <span className="font-semibold text-blue-600">full stomach</span>, 
            <span className="font-semibold text-blue-600"> quality education</span>, 
            <span className="font-semibold text-blue-600"> spiritual nourishment</span>, 
            and <span className="font-semibold text-blue-600">hope for a better future</span>.
          </p>
        </div>
      </div>

      {/* Stats Counter */}
      <div 
        ref={statsRef}
        id="stats"
        className={`max-w-7xl mx-auto px-4 py-12 transition-all duration-1000 ease-out transform ${
          isVisible.stats ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="text-3xl font-bold text-blue-600">{stats.children}+</div>
            <div className="text-gray-600">Children Cared For</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="text-3xl font-bold text-blue-600">{stats.volunteers}+</div>
            <div className="text-gray-600">Active Volunteers</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="text-3xl font-bold text-blue-600">{stats.partners}+</div>
            <div className="text-gray-600">Partner Organizations</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="text-3xl font-bold text-blue-600">{stats.years}+</div>
            <div className="text-gray-600">Years of Service</div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div 
        ref={aboutRef}
        id="about"
        className={`bg-gray-50 py-16 transition-all duration-1000 ease-out delay-300 transform ${
          isVisible.about ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">About Kajiado Children's Home</h2>
              <div className="w-16 h-1 bg-blue-600 mb-6"></div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kajiado Children's Home (KCH) provides a safe and loving environment for abused, abandoned, and orphaned children who have no place to go. Since 1997, KCH has supported hundreds of children by offering shelter, care, and opportunities for a better future.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We work closely with Kenya Child Services to support children lacking parental care and basic needs, whether for short-term or long-term care.
              </p>
              <Link to="/about" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105">
                Read Our Story →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/images/about/kajiado-home.jpg" 
                alt="Kajiado Children's Home" 
                className="rounded-lg shadow-md h-48 w-full object-cover hover:scale-105 transition duration-500"
                onError={(e) => e.target.src = 'https://placehold.co/400x300/e2e8f0/3b82f6?text=KCH'}
              />
              <img 
                src="/images/children/happy-children.jpg" 
                alt="Happy Children" 
                className="rounded-lg shadow-md h-48 w-full object-cover mt-8 hover:scale-105 transition duration-500"
                onError={(e) => e.target.src = 'https://placehold.co/400x300/e2e8f0/3b82f6?text=Happy+Children'}
              />
              <img 
                src="/images/about/founder.jpg" 
                alt="Founder" 
                className="rounded-lg shadow-md h-48 w-full object-cover hover:scale-105 transition duration-500"
                onError={(e) => e.target.src = 'https://placehold.co/400x300/e2e8f0/3b82f6?text=Founder'}
              />
              <img 
                src="/images/staff/staff1.jpg" 
                alt="Staff" 
                className="rounded-lg shadow-md h-48 w-full object-cover mt-8 hover:scale-105 transition duration-500"
                onError={(e) => e.target.src = 'https://placehold.co/400x300/e2e8f0/3b82f6?text=Staff'}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Partners Section */}
      <div 
        ref={programsRef}
        id="programs"
        className={`max-w-7xl mx-auto px-4 py-16 transition-all duration-1000 ease-out transform ${
          isVisible.programs ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <h2 className="text-3xl font-bold text-center mb-4">Our Partners</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Helping children from their villages through education, mentorship, and community outreach
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
            <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">🌟</div>
            <h3 className="font-bold text-xl mb-2">Hope for Kajiado</h3>
            <p className="text-gray-600 text-sm">Sustaining KCH through fundraising and support</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
            <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">📚</div>
            <h3 className="font-bold text-xl mb-2">Valley School of Excellence</h3>
            <p className="text-gray-600 text-sm">Quality education for KCH and community</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
            <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">🎓</div>
            <h3 className="font-bold text-xl mb-2">Bright Horizons Project</h3>
            <p className="text-gray-600 text-sm">Mentorship and career training</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
            <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">🍲</div>
            <h3 className="font-bold text-xl mb-2">Namanga Hope Center</h3>
            <p className="text-gray-600 text-sm">Outreach to vulnerable communities</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link to="/programs" className="text-blue-600 font-semibold hover:text-blue-700 transition-all duration-300 inline-flex items-center gap-1 hover:gap-2">
            Learn More About Our Programs →
          </Link>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-5xl mb-4">"</div>
          <p className="text-xl md:text-2xl italic mb-6">
            Kajiado Children's Home gave me a second chance at life. Today, I'm a social worker helping children just like me.
          </p>
          <p className="font-semibold">— Former KCH Student, Now Staff Member</p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Help Us Transform Lives</h2>
          <p className="text-lg mb-6">Your donation, sponsorship, or volunteer time makes a direct impact on a child's future.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate" className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Donate Now
            </Link>
            <Link to="/contact" className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-all duration-300 transform hover:scale-105">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

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
        
        .animate-slide-up {
          animation: slide-up 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
        }
        
        .animate-slide-up-delay-1 {
          animation: slide-up 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1) 0.2s forwards;
          opacity: 0;
        }
        
        .animate-slide-up-delay-2 {
          animation: slide-up 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1) 0.4s forwards;
          opacity: 0;
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out 0.6s forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}

export default Home;