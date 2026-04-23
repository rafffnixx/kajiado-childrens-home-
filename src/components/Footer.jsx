import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-blue-400 text-2xl">❤️</span>
              <h3 className="font-bold text-lg">Kajiado Children's Home</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Providing hope, shelter, and education to vulnerable children in Kajiado County since 1997.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-400 hover:text-blue-400 transition">About Us</Link></li>
              <li><Link to="/programs" className="text-gray-400 hover:text-blue-400 transition">Our Programs</Link></li>
              <li><Link to="/get-involved" className="text-gray-400 hover:text-blue-400 transition">Get Involved</Link></li>
              <li><Link to="/donors-partners" className="text-gray-400 hover:text-blue-400 transition">Partners & Donors</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <span className="text-blue-400">📞</span> +254 700 123 456
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">✉️</span> info@kajiadochildrenhome.org
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">📍</span> Kajiado Town, Kenya
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4 mb-6">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition text-xl">
                📘
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition text-xl">
                🐦
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition text-xl">
                📷
              </a>
            </div>
            <div className="flex">
              <input type="email" placeholder="Your email" className="flex-1 px-3 py-2 rounded-l text-gray-800 text-sm" />
              <button className="bg-blue-600 px-4 py-2 rounded-r hover:bg-blue-700 transition text-sm">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Kajiado Children's Home. All rights reserved.</p>
          <p className="mt-2 text-xs">
            Website developed with by <a href="https://github.com/raffcodes" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition">@raffcodes</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;