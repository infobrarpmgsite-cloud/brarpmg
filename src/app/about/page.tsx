/* eslint-disable */
export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Flat and modern */}
      <div className="bg-gradient-to-r from-[#1B2845] to-[#3B5FE3] text-white py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
            BPMG Stays
          </h1>
          <p className="text-lg md:text-xl font-light text-blue-100 max-w-2xl mx-auto" style={{ fontFamily: 'Manrope, sans-serif' }}>
            A Stay That Feels Like Home
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        
        {/* Welcome Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-10 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Welcome</h2>
            <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Welcome to BPMG Stays, your home-away-from-home in the heart of Austin, Texas. We believe staying somewhere should be more than just a place to sleep — it should feel like an experience crafted just for you.
            </p>
          </div>
        </div>

        {/* Our Story and Why Stay With Us - Two columns */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Our Story */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Our Story</h2>
            <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Manrope, sans-serif' }}>
              At BPMG Stays, hospitality is more than a business; it's a passion. From day one, we set out to create a lodging space that blends warm service, thoughtful design, and local flavor. Whether you're traveling for business, exploring the city, or just seeking a relaxing escape, we want our place to be part of your journey.
            </p>
          </div>

          {/* Why Stay With Us */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Why Stay With Us?</h2>
            <p className="text-gray-700 mb-5 font-medium" style={{ fontFamily: 'Manrope, sans-serif' }}>We believe in genuine hospitality:</p>
            <ul className="space-y-3" style={{ fontFamily: 'Manrope, sans-serif' }}>
              <li className="flex items-start gap-3">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#3B5FE3] mt-2.5 flex-shrink-0"></span>
                <span className="text-gray-700">Friendly, attentive staff who care about your stay</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#3B5FE3] mt-2.5 flex-shrink-0"></span>
                <span className="text-gray-700">Clean, comfortable spaces where you can unwind</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#3B5FE3] mt-2.5 flex-shrink-0"></span>
                <span className="text-gray-700">A sense of place — we want you to feel like you're stepping into something unique, not generic</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#3B5FE3] mt-2.5 flex-shrink-0"></span>
                <span className="text-gray-700">Value-driven pricing — quality doesn't have to come with a hefty price tag</span>
              </li>
            </ul>
          </div>
        </div>

        {/* What We Offer Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10" style={{ fontFamily: 'Poppins, sans-serif' }}>What We Offer</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: '🏠',
                title: 'Thoughtfully Designed Spaces',
                desc: 'Cozy, well-appointed standard and deluxe rooms designed for both comfort and style'
              },
              {
                icon: '✨',
                title: 'Modern Amenities',
                desc: 'Modern amenities including WiFi, heating, comfortable beds, living room / area, aesthetic interior and more.'
              },
              {
                icon: '🎨',
                title: 'Local Character',
                desc: 'Personalized touches that reflect the spirit of our locale — art, décor, local guides'
              },
              {
                icon: '📍',
                title: 'Prime Location',
                desc: 'A location that keeps you connected to what matters: dining, landmarks, and authentic local life'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-200">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>{item.title}</h3>
                <p className="text-gray-700" style={{ fontFamily: 'Manrope, sans-serif' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="bg-gradient-to-r from-[#1B2845] to-[#3B5FE3] text-white rounded-lg p-12 md:p-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Experience BPMG Stays
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Manrope, sans-serif' }}>
            No matter whether you're here for work, leisure, or a little of both, BPMG Stays is here to make your stay memorable. Come, stay with us — and discover a place where every stay feels like home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/properties"
              className="inline-block bg-white text-[#1B2845] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              View Our Properties
            </a>
            <a
              href="/contact"
              className="inline-block bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors duration-200"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
