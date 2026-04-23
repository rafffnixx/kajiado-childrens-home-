import { useState, useEffect } from 'react';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [loadedImages, setLoadedImages] = useState({});

  const categories = ['All', 'Daily Life', 'Education', 'Sports', 'Events'];

  const images = [
    { id: 1, category: 'Daily Life', title: 'Morning Assembly', image: '/images/gallery/morning-assembly.jpg' },
    { id: 2, category: 'Education', title: 'Classroom Session', image: '/images/gallery/classroom.jpg' },
    { id: 3, category: 'Sports', title: 'Football Match', image: '/images/gallery/football.jpg' },
    { id: 4, category: 'Events', title: 'Birthday Celebration', image: '/images/gallery/birthday.jpg' },
    { id: 5, category: 'Daily Life', title: 'Meal Time', image: '/images/gallery/meal-time.jpg' },
    { id: 6, category: 'Education', title: 'Library Time', image: '/images/gallery/library.jpg' },
    { id: 7, category: 'Sports', title: 'Athletics Day', image: '/images/gallery/athletics.jpg' },
    { id: 8, category: 'Events', title: 'Graduation Ceremony', image: '/images/gallery/graduation.jpg' },
  ];

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  // Preload all images
  useEffect(() => {
    images.forEach((img) => {
      const preloadImg = new Image();
      preloadImg.src = img.image;
      preloadImg.onload = () => {
        setLoadedImages(prev => ({ ...prev, [img.id]: true }));
      };
    });
  }, []);

  return (
    <div>
      {/* Header with Background Image */}
      <div className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <img 
          src="/images/hero/hero-bg.jpg" 
          alt="Gallery" 
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => e.target.style.display = 'none'}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl max-w-2xl mx-auto">Moments of joy, learning, and growth at Kajiado Children's Home</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-1.5 rounded-full text-sm transition ${
                activeCategory === category 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="cursor-pointer overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition"
            >
              <div className="h-48 overflow-hidden bg-gray-100 relative">
                {!loadedImages[image.id] && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                <img 
                  src={image.image} 
                  alt={image.title}
                  className={`w-full h-full object-cover transition duration-300 hover:scale-105 ${
                    loadedImages[image.id] ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading="eager"
                  onError={(e) => {
                    e.target.src = 'https://placehold.co/500x400/e2e8f0/3b82f6?text=Image';
                    setLoadedImages(prev => ({ ...prev, [image.id]: true }));
                  }}
                />
              </div>
              <div className="p-2 text-center">
                <p className="text-sm font-medium text-gray-800">{image.title}</p>
                <p className="text-xs text-gray-500">{image.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No images found.</p>
          </div>
        )}

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div 
              className="relative max-w-3xl w-full bg-white rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 text-white bg-black/50 rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-black/75 z-10"
              >
                ✕
              </button>
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title}
                className="w-full h-auto max-h-[60vh] object-contain bg-gray-100"
                loading="eager"
              />
              <div className="p-3 text-center border-t">
                <p className="font-medium text-gray-800">{selectedImage.title}</p>
                <p className="text-sm text-blue-600">{selectedImage.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Gallery;