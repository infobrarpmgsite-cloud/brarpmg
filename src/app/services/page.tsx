'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Services() {
  const [animatedSections, setAnimatedSections] = useState(new Set());

  const sections = [
    { id: 'services', title: 'Our Services' },
    { id: 'investors', title: 'For Investors' },
    { id: 'benefits', title: 'Benefits' },
    { id: 'why-invest', title: 'Why Invest' }
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setAnimatedSections(prev => new Set([...prev, entry.target.id]));
        }
      });
    }, observerOptions);

    const sectionIds = ['services', 'investors', 'benefits', 'why-invest', 'cta'];
    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#1B2845] to-[#3B5FE3] text-white py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Our Services
          </h1>
          <p className="text-lg md:text-xl font-light text-blue-100 max-w-2xl mx-auto" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Premium Property Management & Investment Opportunities
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
        {/* Services Overview Section */}
        <div className={`bg-gradient-to-r from-[#1B2845] to-[#3B5FE3] text-white ${animatedSections.has('services') ? 'animate-fadeIn' : 'opacity-0'}`} id="services">
          <div className="py-32 md:py-52 scroll-mt-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className={`text-xl md:text-2xl font-semibold text-blue-200 mb-8 tracking-widest uppercase ${animatedSections.has('services') ? 'animate-fadeInUp animation-delay-100' : 'opacity-0'}`} style={{ fontFamily: 'Manrope, sans-serif' }}>
                What We Do
              </h2>
              
              <div className="max-w-5xl mx-auto">
                <p className={`text-5xl md:text-6xl lg:text-7xl font-light mb-12 leading-tight ${animatedSections.has('services') ? 'animate-fadeInUp animation-delay-200' : 'opacity-0'}`} style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Professional <strong style={{ fontWeight: 'bold', opacity: '70%' }}>PROPERTY MANAGEMENT</strong> Solutions
                </p>
                
                <p className={`text-xl md:text-2xl text-blue-100/90 leading-relaxed mb-14 max-w-4xl mx-auto ${animatedSections.has('services') ? 'animate-fadeInUp animation-delay-300' : 'opacity-0'}`} style={{ fontFamily: 'Manrope, sans-serif' }}>
                  BPMG Stays specializes in comprehensive property management services, from vacation rentals to long-term residential properties. We handle everything so you don&apos;t have to — from guest communications to property maintenance, ensuring your investment performs at its best.
                </p>
                
                <div className={`bg-white/10 backdrop-blur-md border-2 border-white/40 rounded-xl p-10 md:p-14 max-w-3xl mx-auto ${animatedSections.has('services') ? 'animate-scaleIn animation-delay-400' : 'opacity-0'}`}>
                  <p className="text-2xl md:text-3xl text-white font-semibold italic leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    &quot;Maximizing returns while maintaining exceptional guest experiences.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Investors Section */}
        <div className={`bg-white ${animatedSections.has('investors') ? 'animate-fadeIn' : 'opacity-0'}`} id="investors">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 scroll-mt-20">
            <div className="text-center mb-20">
              <div className={`flex items-center justify-center gap-4 mb-6 ${animatedSections.has('investors') ? 'animate-fadeInUp' : 'opacity-0'}`}>
                <div className="w-12 h-1 bg-[#3B5FE3] rounded-full"></div>
                <h2 className="text-sm md:text-base font-semibold text-[#3B5FE3] tracking-widest uppercase" style={{ fontFamily: 'Manrope, sans-serif' }}>Investment Opportunities</h2>
                <div className="w-12 h-1 bg-[#3B5FE3] rounded-full"></div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-20">
              {/* For Investors */}
              <div className={`${animatedSections.has('investors') ? 'animate-slideInLeft animation-delay-100' : 'opacity-0'}`}>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>Partner With Us</h2>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Are you a property owner looking to maximize your investment? BPMG Stays offers comprehensive property management services designed to optimize your returns while maintaining the highest standards of guest satisfaction.
                </p>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  We handle the day-to-day operations, marketing, guest relations, and maintenance — allowing you to enjoy passive income without the hassle of management.
                </p>
              </div>

              {/* Our Approach */}
              <div className={`${animatedSections.has('investors') ? 'animate-slideInRight animation-delay-200' : 'opacity-0'}`}>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>Our Approach</h2>
                <p className="text-lg md:text-xl text-gray-700 mb-8 font-medium" style={{ fontFamily: 'Manrope, sans-serif' }}>We provide end-to-end solutions:</p>
                <ul className="space-y-5" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  <li className="flex items-start gap-4">
                    <span className="inline-block w-3 h-3 rounded-full bg-[#3B5FE3] mt-2 flex-shrink-0"></span>
                    <span className="text-lg text-gray-700"><strong>Revenue Optimization</strong> — Dynamic pricing strategies to maximize your ROI</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="inline-block w-3 h-3 rounded-full bg-[#3B5FE3] mt-2 flex-shrink-0"></span>
                    <span className="text-lg text-gray-700"><strong>Full Management</strong> — Complete property oversight including maintenance and repairs</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="inline-block w-3 h-3 rounded-full bg-[#3B5FE3] mt-2 flex-shrink-0"></span>
                    <span className="text-lg text-gray-700"><strong>Marketing Excellence</strong> — Professional photography and multi-channel listing optimization</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="inline-block w-3 h-3 rounded-full bg-[#3B5FE3] mt-2 flex-shrink-0"></span>
                    <span className="text-lg text-gray-700"><strong>Guest Experience</strong> — 24/7 guest support and 5-star service standards</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className={`bg-gray-50 ${animatedSections.has('benefits') ? 'animate-fadeIn' : 'opacity-0'}`} id="benefits">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 scroll-mt-20">
            <div className="text-center mb-20">
              <div className={`flex items-center justify-center gap-4 mb-6 ${animatedSections.has('benefits') ? 'animate-fadeInUp' : 'opacity-0'}`}>
                <div className="w-12 h-1 bg-[#3B5FE3] rounded-full"></div>
                <h3 className="text-sm md:text-base font-semibold text-[#3B5FE3] tracking-widest uppercase" style={{ fontFamily: 'Manrope, sans-serif' }}>Investment Benefits</h3>
                <div className="w-12 h-1 bg-[#3B5FE3] rounded-full"></div>
              </div>
              <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-2 leading-tight ${animatedSections.has('benefits') ? 'animate-fadeInUp animation-delay-100' : 'opacity-0'}`} style={{ fontFamily: 'Poppins, sans-serif' }}>Why Choose BPMG Stays</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: '💰',
                  title: 'Maximize Revenue',
                  desc: 'Data-driven pricing strategies and high occupancy rates ensure optimal returns on your investment'
                },
                {
                  icon: '🛡️',
                  title: 'Property Protection',
                  desc: 'Rigorous guest screening, comprehensive insurance, and regular property inspections'
                },
                {
                  icon: '📊',
                  title: 'Transparent Reporting',
                  desc: 'Real-time access to booking data, financial reports, and property performance metrics'
                },
                {
                  icon: '⚙️',
                  title: 'Hands-Free Management',
                  desc: 'We handle everything from cleaning and maintenance to guest communication and reviews'
                },
                {
                  icon: '🎯',
                  title: 'Local Expertise',
                  desc: 'Deep knowledge of the Austin market and what guests are looking for in their stay'
                },
                {
                  icon: '🤝',
                  title: 'Dedicated Support',
                  desc: 'Your own account manager who understands your property and investment goals'
                }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className={`bg-white border-2 border-gray-200 rounded-xl p-10 hover:border-[#3B5FE3] hover:shadow-xl transition-all duration-300 shadow-md ${
                    animatedSections.has('benefits') ? 'animate-scaleIn' : 'opacity-0'
                  }`}
                  style={{
                    animationDelay: animatedSections.has('benefits') ? `${0.1 + idx * 0.1}s` : '0s'
                  }}
                >
                  <div className="text-6xl mb-6">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>{item.title}</h3>
                  <p className="text-lg text-gray-700" style={{ fontFamily: 'Manrope, sans-serif' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Invest Section */}
        <div className={`bg-white ${animatedSections.has('why-invest') ? 'animate-fadeIn' : 'opacity-0'}`} id="why-invest">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 scroll-mt-20">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight ${animatedSections.has('why-invest') ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Why Invest in Austin Short-Term Rentals?
                </h2>
                <p className={`text-xl text-gray-700 leading-relaxed ${animatedSections.has('why-invest') ? 'animate-fadeInUp animation-delay-100' : 'opacity-0'}`} style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Austin is one of the fastest-growing cities in America, attracting millions of visitors annually for business, music, technology, and entertainment.
                </p>
              </div>

              <div className={`space-y-8 ${animatedSections.has('why-invest') ? 'animate-fadeInUp animation-delay-200' : 'opacity-0'}`}>
                {[
                  {
                    title: 'Strong Market Demand',
                    desc: 'Austin hosts major events like SXSW, F1 races, ACL Festival, and is home to major tech companies, ensuring consistent demand year-round.'
                  },
                  {
                    title: 'High ROI Potential',
                    desc: 'Short-term rentals in Austin typically generate 2-3x more revenue than traditional long-term leases with proper management.'
                  },
                  {
                    title: 'Growing Tech Hub',
                    desc: 'With companies like Tesla, Oracle, and Apple expanding operations, business travel to Austin continues to surge.'
                  },
                  {
                    title: 'Proven Track Record',
                    desc: 'Our properties maintain an average occupancy rate of 75%+ with consistently high guest ratings and reviews.'
                  }
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    className="bg-gray-50 border-l-4 border-[#3B5FE3] p-8 rounded-r-lg hover:shadow-lg transition-shadow duration-300"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {item.title}
                    </h3>
                    <p className="text-lg text-gray-700" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`bg-white ${animatedSections.has('cta') ? 'animate-fadeIn' : 'opacity-0'}`} id="cta">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48">
            <div className={`bg-gradient-to-r from-[#1B2845] to-[#3B5FE3] text-white rounded-2xl p-16 md:p-24 text-center ${animatedSections.has('cta') ? 'animate-scaleIn' : 'opacity-0'}`}>
              <h2 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight ${animatedSections.has('cta') ? 'animate-fadeInUp animation-delay-100' : 'opacity-0'}`} style={{ fontFamily: 'Poppins, sans-serif' }}>
                Ready to Get Started?
              </h2>
              <p className={`text-xl md:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto ${animatedSections.has('cta') ? 'animate-fadeInUp animation-delay-200' : 'opacity-0'}`} style={{ fontFamily: 'Manrope, sans-serif' }}>
                Whether you&apos;re a property owner looking to maximize your returns or an investor exploring opportunities in Austin&apos;s booming short-term rental market, we&apos;re here to help you succeed.
              </p>
              <div className={`flex flex-col sm:flex-row gap-6 justify-center ${animatedSections.has('cta') ? 'animate-fadeInUp animation-delay-300' : 'opacity-0'}`}>
                <Link
                  href="/contact"
                  className="inline-block bg-white text-[#1B2845] font-bold py-4 px-12 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Contact Us Today
                </Link>
                <Link
                  href="/properties"
                  className="inline-block bg-transparent border-3 border-white text-white font-bold py-4 px-12 rounded-lg hover:bg-white/10 transition-colors duration-200 text-lg"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  View Our Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

