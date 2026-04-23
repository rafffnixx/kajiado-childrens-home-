import { useState, useEffect } from 'react';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  const categories = ['All', 'Daily Life', 'Education', 'Sports', 'Events'];
  const [activeCategory, setActiveCategory] = useState('All');

  const images = [
    { id: 1, category: 'Daily Life', title: 'Morning Assembly', image: '/images/gallery/morning-assembly.jpg' },
    { id: 2, category: 'Education', title: 'Classroom Session', image: '/images/gallery/classroom.jpg' },
    { id: 3, category: 'Sports', title: 'Football Match', image: '/images/gallery/football.jpg' },
    { id: 4, category: 'Events', title: 'Birthday Celebration', image: '/images/gallery/birthday.jpg' },
    { id: 5, category: 'Daily Life', title: 'Meal Time', image: '/images/gallery/meal-time.jpg' },
    { id: 6, category: 'Education', title: 'Library Time', image: '/images/gallery/library.jpg' },
    { id: 7, category: 'Sports', title: 'Athletics Day', image: '/images/gallery/athletics.jpg' },
    { id: 8, category: 'Events', title: 'Graduation Ceremony', image: '/images/gallery/graduation.jpg' },
    { id: 9, category: 'Daily Life', title: 'Play Time', image: '/images/gallery/play-time.jpg' },
    { id: 10, category: 'Education', title: 'Art Class', image: '/images/gallery/art-class.jpg' },
    { id: 11, category: 'Sports', title: 'Jump Rope', image: '/images/gallery/jump-rope.jpg' },
    { id: 12, category: 'Events', title: 'Christmas Party', image: '/images/gallery/christmas.jpg' },
  ];

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  return (
    <div>
      {/* Header with Background Image */}
      <div className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20"
          style={{
            backgroundImage: "url('/images/hero/hero-bg.jpg')"
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Gallery</h1>
          <p className="text-xl max-w-2xl mx-auto">Moments of joy, learning, and growth at Kajiado Children's Home</p>
        </div>
      </div>

      <div className="relative min-h-screen">
        {/* Background Pattern */}
        <div className="fixed inset-0 bg-gray-50 -z-10"></div>
        
        {/* Decorative Background */}
        <div className="fixed inset-0 opacity-5 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
          {/* Category Filter - Smooth Scroll */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 sticky top-20 bg-white bg-opacity-90 backdrop-blur-sm py-4 rounded-lg shadow-md z-20">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category 
                    ? 'bg-blue-600 text-white shadow-lg scale-105' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:scale-105'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Loading State */}
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            /* Gallery Grid - Masonry Style */
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {filteredImages.map((image) => (
                <div
                  key={image.id}
                  onClick={() => setSelectedImage(image)}
                  className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden bg-gray-200">
                    <img 
                      src={image.image} 
                      alt={image.title}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x500?text=Image+Coming+Soon';
                      }}
                    />
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="font-semibold text-lg">{image.title}</h3>
                        <p className="text-sm text-gray-200">{image.category}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* No Results */}
          {filteredImages.length === 0 && !loading && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No images found in this category.</p>
            </div>
          )}

          {/* Image Modal - Smooth Animation */}
          {selectedImage && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 p-4 animate-fade-in"
              onClick={() => setSelectedImage(null)}
            >
              <div 
                className="relative max-w-5xl w-full animate-scale-in"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 text-white hover:text-gray-300 text-3xl transition-colors duration-200"
                >
                  ✕
                </button>
                <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                  <img 
                    src={selectedImage.image} 
                    alt={selectedImage.title}
                    className="w-full h-auto max-h-[80vh] object-contain bg-gray-900"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/800x600?text=Image+Not+Available';
                    }}
                  />
                  <div className="p-6 text-center bg-white">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedImage.title}</h3>
                    <p className="text-blue-600">{selectedImage.category}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Video Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-8">Watch Our Story</h2>
            <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="relative h-96 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4 animate-pulse">🎥</div>
                  <p className="text-xl">Video gallery coming soon</p>
                  <p className="text-sm text-gray-200 mt-2">Stay tuned for our documentary</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        .animate-scale-in {
          animation: scale-in 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}

export default Gallery;