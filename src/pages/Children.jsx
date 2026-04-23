import { useState } from 'react';

function Children() {
  const [selectedChild, setSelectedChild] = useState(null);

  const children = [
    { id: 1, name: "Grace Mwikali", age: 8, dream: "To become a doctor", hobby: "Reading", emoji: "👧", story: "Grace joined us in 2020 and has shown remarkable progress in her studies." },
    { id: 2, name: "James Omondi", age: 10, dream: "To be an engineer", hobby: "Drawing", emoji: "👦", story: "James loves building things and excels in mathematics." },
    { id: 3, name: "Mary Wanjiku", age: 7, dream: "To become a teacher", hobby: "Singing", emoji: "👧", story: "Mary is a bright student who helps younger children with their homework." },
    { id: 4, name: "Peter Njoroge", age: 12, dream: "To be a pilot", hobby: "Sports", emoji: "👦", story: "Peter is athletic and dreams of flying planes someday." },
  ];

  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Children</h1>
          <p className="text-xl max-w-2xl mx-auto">Meet the beautiful children who call Kajiado Children's Home their family</p>
        </div>
      </div>

      {/* Children Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {children.map((child) => (
            <div key={child.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-8 text-center">
                <div className="text-6xl mb-2">{child.emoji}</div>
                <h3 className="text-xl font-bold text-white">{child.name}</h3>
                <p className="text-blue-100">{child.age} years old</p>
              </div>
              <div className="p-6">
                <div className="mb-3">
                  <div className="flex items-center gap-2 text-gray-700 mb-2">
                    <span>💭</span>
                    <span className="text-sm">Dreams: {child.dream}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <span>❤️</span>
                    <span className="text-sm">Loves: {child.hobby}</span>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedChild(child)}
                  className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                  Sponsor {child.name.split(' ')[0]}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Success Stories */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center text-white text-xl">👩‍🎓</div>
                <div>
                  <h4 className="font-bold text-lg">Esther's Journey</h4>
                  <p className="text-gray-600">Now in University</p>
                </div>
              </div>
              <p className="text-gray-700">Esther joined us at age 6. Today, she's pursuing a degree in Social Work at the University of Nairobi.</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center text-white text-xl">👨‍🍳</div>
                <div>
                  <h4 className="font-bold text-lg">Samuel's Success</h4>
                  <p className="text-gray-600">Professional Chef</p>
                </div>
              </div>
              <p className="text-gray-700">Samuel completed vocational training and now works at a top hotel in Nairobi.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sponsor Modal */}
      {selectedChild && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-2xl font-bold mb-4">Sponsor {selectedChild.name}</h3>
            <div className="mb-4">
              <p className="text-gray-700 mb-2"><strong>Age:</strong> {selectedChild.age}</p>
              <p className="text-gray-700 mb-2"><strong>Dream:</strong> {selectedChild.dream}</p>
              <p className="text-gray-700 mb-4"><strong>Story:</strong> {selectedChild.story}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded mb-4">
              <p className="font-semibold">Sponsorship Cost: KES 2,500/month</p>
              <p className="text-sm text-gray-600">Covers education, meals, and care</p>
            </div>
            <div className="flex gap-3">
              <button className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                Sponsor Now
              </button>
              <button onClick={() => setSelectedChild(null)} className="flex-1 bg-gray-300 py-2 rounded hover:bg-gray-400">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Children;