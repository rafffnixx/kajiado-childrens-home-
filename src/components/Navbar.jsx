import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // Navigation items
  const navItems = [
    { path: '/', name: 'Home' },
    { path: '/events', name: 'Events' },
    { path: '/gallery', name: 'Gallery' },
    { path: '/about', name: 'About' },
    { path: '/donors-partners', name: 'Partners' },
    { path: '/contact', name: 'Contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
        : 'bg-white shadow-md py-3'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group" 
            onClick={handleLinkClick}
          >
            <div className="relative">
              <img 
                src="/images/logo/logo.png" 
                alt="Logo" 
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-105" 
                onError={(e) => e.target.style.display = 'none'} 
              />
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
            </div>
            <span className="font-bold text-xl text-gray-800 hidden sm:inline-block">
              Kajiado Children's Home
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={handleLinkClick}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg
                  ${location.pathname === item.path 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-blue-600 rounded-full"></span>
                )}
              </Link>
            ))}
            <Link
              to="/get-involved"
              onClick={handleLinkClick}
              className="ml-4 px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl"
            >
              Get Involved
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-all duration-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5">
              <span className={`absolute left-0 w-full h-0.5 bg-gray-800 rounded-full transition-all duration-300 ${
                isOpen ? 'rotate-45 top-2' : 'top-0'
              }`}></span>
              <span className={`absolute left-0 w-full h-0.5 bg-gray-800 rounded-full transition-all duration-300 ${
                isOpen ? 'opacity-0' : 'top-2'
              }`}></span>
              <span className={`absolute left-0 w-full h-0.5 bg-gray-800 rounded-full transition-all duration-300 ${
                isOpen ? '-rotate-45 top-2' : 'top-4'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-2 space-y-1 border-t border-gray-100">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={handleLinkClick}
                className={`block px-4 py-2.5 text-base font-medium rounded-lg transition-all duration-300 ${
                  location.pathname === item.path 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/get-involved"
              onClick={handleLinkClick}
              className="block mt-3 mx-4 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar