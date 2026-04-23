import { Link } from 'react-router-dom';
import { Heart, Users, GraduationCap, Home as HomeIcon, Calendar, HandHeart } from 'lucide-react';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            Providing Hope, Shelter
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            and Education for Kajiado's Children
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Join us in transforming young lives through love, care, and opportunity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-105">
              Donate Now
            </Link>
            <Link to="/get-involved" className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition duration-300">
              Sponsor a Child
            </Link>
          </div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border-b-4 border-blue-600 hover:shadow-xl transition">
            <Users className="w-12 h-12 text-blue-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-800">150+</div>
            <div className="text-gray-600">Children Cared For</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border-b-4 border-blue-600 hover:shadow-xl transition">
            <GraduationCap className="w-12 h-12 text-blue-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-800">95%</div>
            <div className="text-gray-600">School Attendance</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border-b-4 border-blue-600 hover:shadow-xl transition">
            <Heart className="w-12 h-12 text-blue-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-800">20+</div>
            <div className="text-gray-600">Staff Members</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border-b-4 border-blue-600 hover:shadow-xl transition">
            <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-800">15+</div>
            <div className="text-gray-600">Years of Service</div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              To provide a loving home, quality education, and healthcare to orphaned 
              and vulnerable children in Kajiado County, empowering them to become 
              self-reliant and productive members of society.
            </p>
          </div>
        </div>
      </div>

      {/* How to Help */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How You Can Help</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <HandHeart className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Make a Donation</h3>
            <p className="text-gray-600">Your financial support helps provide food, shelter, and education.</p>
          </div>
          <div className="text-center p-6">
            <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <Users className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Sponsor a Child</h3>
            <p className="text-gray-600">Monthly sponsorship transforms one child's life completely.</p>
          </div>
          <div className="text-center p-6">
            <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <HomeIcon className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Volunteer</h3>
            <p className="text-gray-600">Share your time and skills to make a difference.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;