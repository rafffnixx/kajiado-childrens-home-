import { useState } from 'react';

function Donate() {
  const [amount, setAmount] = useState('');
  const [donationType, setDonationType] = useState('one-time');
  const [activeTab, setActiveTab] = useState('money');

  const presetAmounts = [500, 1000, 2500, 5000, 10000];

  const handleMoneyDonation = (e) => {
    e.preventDefault();
    alert(`Thank you for your donation of KES ${amount}! Use Paybill 247247, Account KCH to complete payment.`);
  };

  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Make a Donation</h1>
          <p className="text-xl max-w-2xl mx-auto">Your generosity transforms young lives in Kajiado</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab('money')}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              activeTab === 'money' 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Money Donation
          </button>
          <button
            onClick={() => setActiveTab('goods')}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              activeTab === 'goods' 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Goods & Foodstuff
          </button>
          <button
            onClick={() => setActiveTab('volunteer')}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              activeTab === 'volunteer' 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Volunteer
          </button>
        </div>

        {/* Money Donation Tab */}
        {activeTab === 'money' && (
          <div className="grid md:grid-cols-3 gap-8">
            {/* Donation Form */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Donation Amount</h2>
                
                {/* Donation Type Toggle */}
                <div className="flex gap-4 mb-6">
                  <button
                    className={`flex-1 py-2 rounded ${donationType === 'one-time' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                    onClick={() => setDonationType('one-time')}
                  >
                    One-Time
                  </button>
                  <button
                    className={`flex-1 py-2 rounded ${donationType === 'monthly' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                    onClick={() => setDonationType('monthly')}
                  >
                    Monthly
                  </button>
                </div>

                {/* Preset Amounts */}
                <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-6">
                  {presetAmounts.map((preset) => (
                    <button
                      key={preset}
                      onClick={() => setAmount(preset.toString())}
                      className={`py-2 rounded border ${amount === preset.toString() ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-300 hover:border-blue-600'}`}
                    >
                      KES {preset.toLocaleString()}
                    </button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2">Custom Amount (KES)</label>
                  <input
                    type="number"
                    placeholder="Enter amount"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>

                {/* Personal Info */}
                <h3 className="text-xl font-bold mb-4">Your Information</h3>
                <form onSubmit={handleMoneyDonation}>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <input type="text" placeholder="Full Name" required className="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600" />
                    <input type="email" placeholder="Email Address" required className="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600" />
                    <input type="tel" placeholder="Phone Number" className="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600" />
                    <select className="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600">
                      <option>Kenya</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition text-lg font-semibold">
                    Proceed to Payment
                  </button>
                </form>
              </div>
            </div>

            {/* Payment Methods Sidebar */}
            <div>
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-lg mb-4">M-Pesa Paybill</h3>
                <div className="text-center">
                  <p className="text-gray-600">Paybill Number:</p>
                  <p className="text-3xl font-bold text-blue-700">247247</p>
                  <p className="text-gray-600 mt-4">Account Number:</p>
                  <p className="text-2xl font-bold text-blue-700">KCH</p>
                  <div className="mt-4 p-3 bg-green-100 rounded-lg">
                    <p className="text-sm text-green-800">Steps:</p>
                    <ol className="text-xs text-green-700 text-left mt-2 space-y-1">
                      <li>1. Go to M-Pesa menu</li>
                      <li>2. Select "Lipa na M-Pesa"</li>
                      <li>3. Choose "Paybill"</li>
                      <li>4. Enter Business No: <strong>247247</strong></li>
                      <li>5. Enter Account: <strong>KCH</strong></li>
                      <li>6. Enter Amount</li>
                      <li>7. Enter M-Pesa PIN</li>
                      <li>8. Confirm payment</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-lg mb-4">Other Payment Methods</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">💳</span>
                    <span>Visa / Mastercard</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🏦</span>
                    <span>Bank Transfer</span>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t">
                  <p className="text-sm text-gray-600">Bank: Equity Bank</p>
                  <p className="text-sm text-gray-600">Account: Kajiado Children's Home</p>
                  <p className="text-sm text-gray-600">Account No: 1234567890</p>
                </div>
              </div>

              <div className="bg-white border rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">Impact of Your Donation</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ KES 500 = School supplies for 1 child</li>
                  <li>✓ KES 2,500 = Monthly sponsorship for 1 child</li>
                  <li>✓ KES 5,000 = Uniforms for 5 children</li>
                  <li>✓ KES 10,000 = Feed 20 children for 1 week</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Goods & Foodstuff Donation Tab */}
        {activeTab === 'goods' && (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Donate Goods & Foodstuff</h2>
              <p className="text-gray-600 mb-6">Your in-kind donations make a direct impact on our children's lives.</p>
              
              <h3 className="font-bold text-lg mb-3">Items We Need:</h3>
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-semibold">🍚 Food Items</p>
                  <p className="text-sm text-gray-600">Maize, beans, rice, cooking oil, sugar</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-semibold">👕 Clothing</p>
                  <p className="text-sm text-gray-600">Children's clothes, shoes, uniforms</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-semibold">📚 School Supplies</p>
                  <p className="text-sm text-gray-600">Books, pens, notebooks, backpacks</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-semibold">🛏️ Bedding</p>
                  <p className="text-sm text-gray-600">Blankets, sheets, mattresses</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-semibold">⚽ Sports Equipment</p>
                  <p className="text-sm text-gray-600">Balls, nets, sports uniforms</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-semibold">💻 Electronics</p>
                  <p className="text-sm text-gray-600">Computers, tablets, projectors</p>
                </div>
              </div>

              <h3 className="font-bold text-lg mb-3">Donation Process:</h3>
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <ul className="space-y-2 text-sm">
                  <li>1. Fill in your contact information below</li>
                  <li>2. We will contact you to arrange drop-off or pickup</li>
                  <li>3. Bring items to: Kajiado Children's Home, Kajiado Town</li>
                  <li>4. For large donations, we can arrange pickup</li>
                </ul>
              </div>

              <form onSubmit={(e) => { e.preventDefault(); alert('Thank you! We will contact you within 2-3 business days to arrange donation pickup or drop-off.'); }}>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <input type="text" placeholder="Full Name" required className="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600" />
                  <input type="email" placeholder="Email Address" required className="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600" />
                </div>
                <div className="mb-4">
                  <input type="tel" placeholder="Phone Number" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600" />
                </div>
                <div className="mb-4">
                  <textarea 
                    rows="3" 
                    placeholder="What items would you like to donate?"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
                  Submit Donation Offer
                </button>
              </form>
            </div>

            <div className="bg-blue-50 rounded-lg p-8 h-fit">
              <h3 className="font-bold text-lg mb-4">Drop-off Location</h3>
              <div className="mb-4">
                <p className="font-semibold">Address:</p>
                <p className="text-gray-600">Kajiado Children's Home<br />Kajiado Town, Kajiado County<br />Kenya</p>
              </div>
              <div className="mb-4">
                <p className="font-semibold">Contact for Drop-off:</p>
                <p className="text-gray-600">Phone: +254 700 123 456</p>
                <p className="text-gray-600">Email: donations@kajiadochildrenhome.org</p>
              </div>
              <div>
                <p className="font-semibold">Drop-off Hours:</p>
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>
        )}

        {/* Volunteer Tab */}
        {activeTab === 'volunteer' && (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Volunteer With Us</h2>
              <p className="text-gray-600 mb-6">Share your time, skills, and passion to make a difference in children's lives.</p>
              
              <h3 className="font-bold text-lg mb-3">Volunteer Opportunities:</h3>
              <div className="space-y-3 mb-6">
                <div className="bg-gray-50 p-3 rounded flex justify-between items-center">
                  <div>
                    <p className="font-semibold">Teaching & Tutoring</p>
                    <p className="text-sm text-gray-600">Help children with homework and lessons</p>
                  </div>
                  <span className="text-blue-600">📚</span>
                </div>
                <div className="bg-gray-50 p-3 rounded flex justify-between items-center">
                  <div>
                    <p className="font-semibold">Sports & Recreation</p>
                    <p className="text-sm text-gray-600">Organize games and sports activities</p>
                  </div>
                  <span className="text-blue-600">⚽</span>
                </div>
                <div className="bg-gray-50 p-3 rounded flex justify-between items-center">
                  <div>
                    <p className="font-semibold">Medical/Healthcare</p>
                    <p className="text-sm text-gray-600">Health checkups and medical care</p>
                  </div>
                  <span className="text-blue-600">🏥</span>
                </div>
                <div className="bg-gray-50 p-3 rounded flex justify-between items-center">
                  <div>
                    <p className="font-semibold">Mentorship</p>
                    <p className="text-sm text-gray-600">Be a role model for our children</p>
                  </div>
                  <span className="text-blue-600">🤝</span>
                </div>
                <div className="bg-gray-50 p-3 rounded flex justify-between items-center">
                  <div>
                    <p className="font-semibold">Fundraising</p>
                    <p className="text-sm text-gray-600">Help organize fundraising events</p>
                  </div>
                  <span className="text-blue-600">💰</span>
                </div>
                <div className="bg-gray-50 p-3 rounded flex justify-between items-center">
                  <div>
                    <p className="font-semibold">Maintenance & Construction</p>
                    <p className="text-sm text-gray-600">Help maintain our facilities</p>
                  </div>
                  <span className="text-blue-600">🔧</span>
                </div>
              </div>

              <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for volunteering! We will contact you soon.'); }}>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <input type="text" placeholder="Full Name" required className="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600" />
                  <input type="email" placeholder="Email Address" required className="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600" />
                </div>
                <div className="mb-4">
                  <input type="tel" placeholder="Phone Number" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600" />
                </div>
                <div className="mb-4">
                  <select required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600">
                    <option value="">Select Area of Interest</option>
                    <option>Teaching & Tutoring</option>
                    <option>Sports & Recreation</option>
                    <option>Medical/Healthcare</option>
                    <option>Mentorship</option>
                    <option>Fundraising</option>
                    <option>Maintenance & Construction</option>
                    <option>Administration</option>
                  </select>
                </div>
                <div className="mb-4">
                  <textarea 
                    rows="3" 
                    placeholder="Tell us about your skills and availability..."
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
                  Submit Volunteer Application
                </button>
              </form>
            </div>

            <div className="bg-blue-50 rounded-lg p-8 h-fit">
              <h3 className="font-bold text-lg mb-4">Volunteer Requirements</h3>
              <ul className="space-y-2 text-sm mb-6">
                <li>✓ Minimum age: 18 years</li>
                <li>✓ Commitment of at least 2 hours per week</li>
                <li>✓ Passion for working with children</li>
                <li>✓ Clean background check (for certain roles)</li>
                <li>✓ Orientation session required</li>
              </ul>
              
              <h3 className="font-bold text-lg mb-4">Benefits of Volunteering</h3>
              <ul className="space-y-2 text-sm">
                <li>✓ Make a direct impact on children's lives</li>
                <li>✓ Gain valuable experience</li>
                <li>✓ Meet like-minded people</li>
                <li>✓ Volunteer certificate provided</li>
                <li>✓ Meal provided during volunteer hours</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Donate;