import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleLinkClick = () => {
    // Scroll to top when clicking any link
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    // Close mobile menu
    setIsOpen(false);
  };

  // Also scroll to top when route changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" onClick={handleLinkClick}>
            <img 
              src="/images/logo/logo.png" 
              alt="Logo" 
              className="h-10 w-auto" 
              onError={(e) => e.target.style.display = 'none'} 
            />
            <span className="font-bold text-xl text-gray-800">Kajiado Children's Home</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition" onClick={handleLinkClick}>
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition" onClick={handleLinkClick}>
              About
            </Link>
            <Link to="/donors-partners" className="text-gray-700 hover:text-blue-600 transition" onClick={handleLinkClick}>
              Partners & Donors
            </Link>
            <Link to="/get-involved" className="text-gray-700 hover:text-blue-600 transition" onClick={handleLinkClick}>
              Get Involved
            </Link>
            <Link to="/events" className="text-gray-700 hover:text-blue-600 transition" onClick={handleLinkClick}>
              Events
            </Link>
            <Link to="/gallery" className="text-gray-700 hover:text-blue-600 transition" onClick={handleLinkClick}>
              Gallery
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition" onClick={handleLinkClick}>
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-gray-700 text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link 
              to="/" 
              className="block py-2 text-gray-700 hover:text-blue-600 transition" 
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block py-2 text-gray-700 hover:text-blue-600 transition" 
              onClick={handleLinkClick}
            >
              About
            </Link>
            <Link 
              to="/donors-partners" 
              className="block py-2 text-gray-700 hover:text-blue-600 transition" 
              onClick={handleLinkClick}
            >
              Partners & Donors
            </Link>
            <Link 
              to="/get-involved" 
              className="block py-2 text-gray-700 hover:text-blue-600 transition" 
              onClick={handleLinkClick}
            >
              Get Involved
            </Link>
            <Link 
              to="/events" 
              className="block py-2 text-gray-700 hover:text-blue-600 transition" 
              onClick={handleLinkClick}
            >
              Events
            </Link>
            <Link 
              to="/gallery" 
              className="block py-2 text-gray-700 hover:text-blue-600 transition" 
              onClick={handleLinkClick}
            >
              Gallery
            </Link>
            <Link 
              to="/contact" 
              className="block py-2 text-gray-700 hover:text-blue-600 transition" 
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;