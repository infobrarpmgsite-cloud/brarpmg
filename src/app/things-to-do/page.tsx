/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import Image from 'next/image';

export default function ThingsToDo() {
  const sections = [
    { id: 'heart', title: 'Explore the Heart of Austin' },
    { id: 'outdoor', title: 'Outdoor Adventures' },
    { id: 'arts', title: 'Arts, Culture & Live Music' },
    { id: 'dining', title: 'Local Flavor & Dining' },
    { id: 'events', title: 'Events' }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#1B2845] to-[#3B5FE3] text-white py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Things to Do in Austin
          </h1>
          <p className="text-lg md:text-xl font-light text-blue-100 max-w-2xl mx-auto" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Discover the best activities, attractions, and experiences Austin has to offer
          </p>
        </div>
      </div>

      {/* Section Navigation */}
      <div 
        className="sticky bg-white border-b border-gray-200 shadow-sm"
        style={{
          top: '80px',
          zIndex: 900
        }}
      >
        <div className="w-full overflow-x-auto">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center space-x-4 md:space-x-8 py-4 min-w-max md:min-w-0">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-gray-700 hover:text-[#3B5FE3] font-semibold whitespace-nowrap transition-colors duration-200 text-xs sm:text-sm md:text-base px-2"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {section.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white overflow-x-hidden">
        {/* Main Content - Intro */}
      <div className="min-h-screen bg-white flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-2xl text-gray-700 leading-relaxed font-light" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  A city known for its rhythm, flavor, and free spirit, Austin, Texas offers something for every kind of traveler — from foodies and music lovers to nature seekers and creative souls. No matter which of our BPMG Stays locations you choose — from North Central to South Austin — you'll find yourself close to the best the city has to offer.
                </p>
              </div>
              <div className="relative rounded-lg h-96 overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=800&h=600&fit=crop"
                  alt="Austin Texas Skyline"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 1: Explore the Heart of Austin */}
      <div id="heart" className="min-h-screen bg-gradient-to-r from-[#3B5FE3] to-[#1B2845] text-white flex items-center scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Explore the Heart of Austin</h2>
                <p className="text-xl leading-relaxed font-light" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Experience the city's perfect blend of culture and charm. From strolling through Downtown Austin's iconic 6th Street and South Congress Avenue to catching a live band at a tucked-away venue, the city's energy is undeniable. Austin's creative scene spills into every corner — where local art, food trucks, and music turn every visit into a story worth sharing.
                </p>
              </div>
              <div className="relative rounded-lg h-96 overflow-hidden shadow-xl border-2 border-white/40">
                <Image
                  src="https://images.unsplash.com/photo-1569014576396-196a71f4f4a6?w=800&h=600&fit=crop"
                  alt="Downtown Austin 6th Street"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Outdoor Adventures */}
      <div id="outdoor" className="min-h-screen bg-[#F0F4F8] flex items-center scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>Outdoor Adventures</h2>
                <p className="text-xl text-gray-700 font-semibold mb-8" style={{ fontFamily: 'Manrope, sans-serif' }}>Nature thrives right alongside city life here:</p>
                <ul className="space-y-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  <li className="flex items-start gap-3 text-lg">
                    <span className="inline-block w-3 h-3 rounded-full bg-[#3B5FE3] mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700"><strong>Zilker Park</strong> – Austin's beloved urban oasis, perfect for picnics, kayaking on Lady Bird Lake, or just soaking up the skyline.</span>
                  </li>
                  <li className="flex items-start gap-3 text-lg">
                    <span className="inline-block w-3 h-3 rounded-full bg-[#3B5FE3] mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700"><strong>Barton Springs Pool</strong> – A must-visit natural spring-fed pool that stays refreshingly cool year-round.</span>
                  </li>
                  <li className="flex items-start gap-3 text-lg">
                    <span className="inline-block w-3 h-3 rounded-full bg-[#3B5FE3] mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700"><strong>Mount Bonnell</strong> – Climb to one of Austin's highest points for breathtaking views of the Colorado River and Hill Country.</span>
                  </li>
                  <li className="flex items-start gap-3 text-lg">
                    <span className="inline-block w-3 h-3 rounded-full bg-[#3B5FE3] mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700"><strong>Lady Bird Lake Hike & Bike Trail</strong> – A scenic route for runners, walkers, and bikers looking to explore the city's beauty on foot.</span>
                  </li>
                </ul>
              </div>
              <div className="relative rounded-lg h-96 overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
                  alt="Zilker Park and Lady Bird Lake"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Arts, Culture & Live Music */}
      <div id="arts" className="min-h-screen bg-gradient-to-r from-[#1B2845] to-[#3B5FE3] text-white flex items-center scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Arts, Culture & Live Music</h2>
                <p className="text-xl leading-relaxed font-light" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Austin is called the "Live Music Capital of the World" for a reason. Catch an intimate performance at The Continental Club, discover indie acts at Mohawk or The Parish, or join the crowd at legendary festivals like SXSW and Austin City Limits. Art lovers can stroll through the Blanton Museum of Art, East Austin Studio Tour, or admire vibrant murals that decorate nearly every street.
                </p>
              </div>
              <div className="relative rounded-lg h-96 overflow-hidden shadow-xl border-2 border-white/40">
                <Image
                  src="https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=800&h=600&fit=crop"
                  alt="Live Music in Austin"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: Local Flavor & Dining */}
      <div id="dining" className="min-h-screen bg-[#FFF8F0] flex items-center scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>Local Flavor & Dining</h2>
                <p className="text-xl text-gray-700 font-semibold mb-8" style={{ fontFamily: 'Manrope, sans-serif' }}>Austin's food scene is a journey in itself — a mix of bold flavors and local favorites.</p>
                <ul className="space-y-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  <li className="flex items-start gap-3 text-lg">
                    <span className="inline-block w-3 h-3 rounded-full bg-[#FF6B35] mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">Savor authentic Texas BBQ at Franklin Barbecue or La Barbecue.</span>
                  </li>
                  <li className="flex items-start gap-3 text-lg">
                    <span className="inline-block w-3 h-3 rounded-full bg-[#FF6B35] mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">Discover inventive tacos at Veracruz All Natural or Torchy's Tacos.</span>
                  </li>
                  <li className="flex items-start gap-3 text-lg">
                    <span className="inline-block w-3 h-3 rounded-full bg-[#FF6B35] mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">Enjoy cozy coffee stops, local breweries, and rooftop bars that celebrate Austin's laid-back yet vibrant vibe.</span>
                  </li>
                </ul>
              </div>
              <div className="relative rounded-lg h-96 overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop"
                  alt="Austin Food and Tacos"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5: Events */}
      <div id="events" className="min-h-screen bg-gradient-to-r from-[#3B5FE3] via-[#1B2845] to-[#4F4F4F] text-white flex items-center scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Events</h2>
              <p className="text-xl text-blue-100 font-light mb-10" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Austin is a 24-hour town with an incredible events calendar year-round. From world-class music festivals to culinary celebrations, discover the must-attend events that make Austin unforgettable.
              </p>
            </div>

            {/* Featured Events - Top Picks */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>🌟 Top Must-Attend Events</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Austin City Limits */}
                <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur border-2 border-white/30 rounded-lg p-8 hover:border-white/50 transition-all duration-200 group">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Austin City Limits Music Festival</h4>
                      <p className="text-blue-100 font-semibold" style={{ fontFamily: 'Manrope, sans-serif' }}>October • Zilker Park</p>
                    </div>
                    <span className="text-4xl">🎵</span>
                  </div>
                  <p className="text-gray-100 leading-relaxed mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>One of the country's largest celebrations of music with 140+ musical acts over two weekends. A defining Austin experience.</p>
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm text-blue-200" style={{ fontFamily: 'Manrope, sans-serif' }}>⭐ Must-see for music lovers</p>
                  </div>
                </div>

                {/* Austin Food + Wine */}
                <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur border-2 border-white/30 rounded-lg p-8 hover:border-white/50 transition-all duration-200 group">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Austin Food + Wine Festival</h4>
                      <p className="text-blue-100 font-semibold" style={{ fontFamily: 'Manrope, sans-serif' }}>November • Auditorium Shores</p>
                    </div>
                    <span className="text-4xl">🍷</span>
                  </div>
                  <p className="text-gray-100 leading-relaxed mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>A three-day epicurean adventure with top chefs, sommeliers and winemakers from across the nation. Pure culinary bliss.</p>
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm text-blue-200" style={{ fontFamily: 'Manrope, sans-serif' }}>⭐ Must-see for foodies</p>
                  </div>
                </div>

                {/* Trail of Lights */}
                <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur border-2 border-white/30 rounded-lg p-8 hover:border-white/50 transition-all duration-200 group">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Trail of Lights</h4>
                      <p className="text-blue-100 font-semibold" style={{ fontFamily: 'Manrope, sans-serif' }}>December • Zilker Park</p>
                    </div>
                    <span className="text-4xl">✨</span>
                  </div>
                  <p className="text-gray-100 leading-relaxed mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>An essential Austin experience lighting up the season with a celebration of community, memories and fun. Don't miss the iconic Zilker Tree!</p>
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm text-blue-200" style={{ fontFamily: 'Manrope, sans-serif' }}>⭐ Must-see for families</p>
                  </div>
                </div>

                {/* Austin's New Year */}
                <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur border-2 border-white/30 rounded-lg p-8 hover:border-white/50 transition-all duration-200 group">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Austin's New Year</h4>
                      <p className="text-blue-100 font-semibold" style={{ fontFamily: 'Manrope, sans-serif' }}>December/January • Auditorium Shores</p>
                    </div>
                    <span className="text-4xl">🎆</span>
                  </div>
                  <p className="text-gray-100 leading-relaxed mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>Free, family-friendly celebration with local musicians, food trucks, vendors, and midnight fireworks. CNN's official Austin countdown.</p>
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm text-blue-200" style={{ fontFamily: 'Manrope, sans-serif' }}>⭐ Must-see for New Year's Eve</p>
                  </div>
                </div>
              </div>
            </div>

            {/* More Events Grid */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>More Great Events</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: '🎬', title: 'Austin Film Festival', month: 'October', location: 'Paramount Theatre', desc: 'Top film festival spotlighting top-billed and indie films' },
                  { icon: '🍺', title: 'Austin Oktoberfest', month: 'October', location: 'Scholz Garten', desc: 'German heritage with beer, sausage, live music and bowling' },
                  { icon: '🏎️', title: 'Formula 1 Grand Prix', month: 'October', location: 'Circuit of The Americas', desc: 'Three days of F1 racing with live music and performances' },
                  { icon: '📚', title: 'Texas Book Festival', month: 'October', location: 'State Capitol Grounds', desc: 'Readings, signings, live music and local food' },
                  { icon: '🍻', title: 'Texas Craft Brewers Fest', month: 'October', location: 'Fiesta Gardens', desc: 'Largest Texas craft beer festival featuring local breweries' },
                  { icon: '🍀', title: 'Austin Celtic Festival', month: 'November', location: 'Pioneer Farms', desc: 'Largest Celtic gathering with Irish, Scottish & Breton culture' },
                  { icon: '🪶', title: 'Austin Powwow', month: 'November', location: 'Travis County Expo', desc: 'Largest in Texas with American Indian culture and food' },
                  { icon: '🎄', title: 'Armadillo Christmas Bazaar', month: 'December', location: 'Palmer Events Center', desc: '200+ artists, live music, activities and local food' },
                  { icon: '🎨', title: 'Austin Studio Tour', month: 'November', location: 'Studios Across Austin', desc: 'Free art event showcasing local artists and creative spaces' },
                ].map((event, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur border border-white/20 rounded-lg p-6 hover:bg-white/15 transition-all duration-200">
                    <div className="text-3xl mb-3">{event.icon}</div>
                    <h5 className="text-lg font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>{event.title}</h5>
                    <p className="text-blue-100 text-sm mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>{event.month} • {event.location}</p>
                    <p className="text-gray-100 text-sm leading-relaxed" style={{ fontFamily: 'Manrope, sans-serif' }}>{event.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center pt-12 border-t border-white/20">
              <p className="text-lg text-blue-100 mb-6" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Discover more festivals and events throughout the year on <a href="https://www.austintexas.org/things-to-do/festivals/" target="_blank" rel="noopener noreferrer" className="underline font-bold hover:text-white transition-colors">Austin's Official Events Calendar</a>
              </p>
              <p className="text-sm text-blue-200" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Events run year-round • Plan your visit to Austin and book one of our BPMG Stays properties for the perfect home base!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="min-h-screen bg-white flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-[#1B2845] to-[#3B5FE3] text-white rounded-lg p-12 md:p-16 shadow-lg">
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Ready to Explore Austin?
              </h2>
              <p className="text-lg mb-10 leading-relaxed" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Make BPMG Stays your base for exploring all the amazing attractions and activities Austin has to offer. Our properties are perfectly located for easy access to the best of the city.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/properties"
                  className="inline-block bg-white text-[#1B2845] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  View Our Properties
                </Link>
                <Link
                  href="/contact"
                  className="inline-block bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors duration-200"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
