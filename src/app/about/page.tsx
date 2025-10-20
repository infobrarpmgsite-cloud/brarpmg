'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function About() {
  const [animatedSections, setAnimatedSections] = useState(new Set());

  const sections = [
    { id: 'about', title: 'About' },
    { id: 'story', title: 'Our Story' },
    { id: 'what-we-offer', title: 'What We Offer' }
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

    const sectionIds = ['about', 'story', 'what-we-offer', 'cta'];
    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#1B2845] to-[#3B5FE3] text-white py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
            About BPMG Stays
          </h1>
          <p className="text-lg md:text-xl font-light text-blue-100 max-w-2xl mx-auto" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Your Home-Away-From-Home in the Heart of Austin
          </p>
        </div>
      </div>

      {/* Section Navigation */}
      <div className="sticky top-20 bg-white border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto space-x-8 py-4">
            {sections.map((section) => (
              <Link
                key={section.id}
                href={`#${section.id}`}
                className="text-gray-700 hover:text-[#3B5FE3] font-semibold whitespace-nowrap transition-colors duration-200 text-sm md:text-base"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {section.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className={`bg-gradient-to-r from-[#1B2845] to-[#3B5FE3] text-white ${animatedSections.has('about') ? 'animate-fadeIn' : 'opacity-0'}`} id="about">
        {/* Enhanced Hero Section with Welcome */}
        <div className="py-32 md:py-52 scroll-mt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Welcome Title */}
            <h2 className={`text-xl md:text-2xl font-semibold text-blue-200 mb-8 tracking-widest uppercase ${animatedSections.has('about') ? 'animate-fadeInUp animation-delay-100' : 'opacity-0'}`} style={{ fontFamily: 'Manrope, sans-serif' }}>
              Welcome to BPMG Stays
            </h2>
            
            {/* Main Welcome Message */}
            <div className="max-w-5xl mx-auto">
              <p className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-12 leading-tight ${animatedSections.has('about') ? 'animate-fadeInUp animation-delay-200' : 'opacity-0'}`} style={{ fontFamily: 'Poppins, sans-serif' }}>
                Your Home-Away-From-Home in the Heart of Austin
              </p>
              
              {/* Description */}
              <p className={`text-xl md:text-2xl text-blue-100/90 leading-relaxed mb-14 max-w-4xl mx-auto ${animatedSections.has('about') ? 'animate-fadeInUp animation-delay-300' : 'opacity-0'}`} style={{ fontFamily: 'Manrope, sans-serif' }}>
                We believe staying somewhere should be more than just a place to sleep — it should feel like an experience crafted just for you. At BPMG Stays, we&apos;ve created a lodging space where warm service, thoughtful design, and authentic local flavor come together to make your stay unforgettable.
              </p>
              
              {/* Emphasis Box */}
              <div className={`bg-white/10 backdrop-blur-md border-2 border-white/40 rounded-xl p-10 md:p-14 max-w-3xl mx-auto ${animatedSections.has('about') ? 'animate-scaleIn animation-delay-400' : 'opacity-0'}`}>
                <p className="text-2xl md:text-3xl text-white font-semibold italic leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  &quot;A stay that feels like home — because the best travels are the ones where you truly belong.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className={`bg-white ${animatedSections.has('story') ? 'animate-fadeIn' : 'opacity-0'}`} id="story">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 scroll-mt-20">
          {/* Section Title with Separator */}
          <div className="text-center mb-20">
            <div className={`flex items-center justify-center gap-4 mb-6 ${animatedSections.has('story') ? 'animate-fadeInUp' : 'opacity-0'}`}>
              <div className="w-12 h-1 bg-[#3B5FE3] rounded-full"></div>
              <h2 className="text-sm md:text-base font-semibold text-[#3B5FE3] tracking-widest uppercase" style={{ fontFamily: 'Manrope, sans-serif' }}>Our Heritage</h2>
              <div className="w-12 h-1 bg-[#3B5FE3] rounded-full"></div>
            </div>
          </div>
          
          {/* Our Story and Why Stay With Us - Two columns */}
          <div className="grid md:grid-cols-2 gap-20">
            {/* Our Story */}
            <div className={`${animatedSections.has('story') ? 'animate-slideInLeft animation-delay-100' : 'opacity-0'}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>Our Story</h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed" style={{ fontFamily: 'Manrope, sans-serif' }}>
                At BPMG Stays, hospitality is more than a business; it&apos;s a passion. From day one, we set out to create a lodging space that blends warm service, thoughtful design, and local flavor. Whether you&apos;re traveling for business, exploring the city, or just seeking a relaxing escape, we want our place to be part of your journey.
              </p>
            </div>

            {/* Why Stay With Us */}
            <div className={`${animatedSections.has('story') ? 'animate-slideInRight animation-delay-200' : 'opacity-0'}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>Why Stay With Us?</h2>
              <p className="text-lg md:text-xl text-gray-700 mb-8 font-medium" style={{ fontFamily: 'Manrope, sans-serif' }}>We believe in genuine hospitality:</p>
              <ul className="space-y-5" style={{ fontFamily: 'Manrope, sans-serif' }}>
                <li className="flex items-start gap-4">
                  <span className="inline-block w-3 h-3 rounded-full bg-[#3B5FE3] mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-gray-700">Friendly, attentive staff who care about your stay</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="inline-block w-3 h-3 rounded-full bg-[#3B5FE3] mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-gray-700">Clean, comfortable spaces where you can unwind</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="inline-block w-3 h-3 rounded-full bg-[#3B5FE3] mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-gray-700">A sense of place — we want you to feel like you&apos;re stepping into something unique, not generic</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="inline-block w-3 h-3 rounded-full bg-[#3B5FE3] mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-gray-700">Value-driven pricing — quality doesn&apos;t have to come with a hefty price tag</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* What We Offer Section */}
      <div className={`bg-gray-50 ${animatedSections.has('what-we-offer') ? 'animate-fadeIn' : 'opacity-0'}`} id="what-we-offer">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 scroll-mt-20">
          {/* Section Title with Separator */}
          <div className="text-center mb-20">
            <div className={`flex items-center justify-center gap-4 mb-6 ${animatedSections.has('what-we-offer') ? 'animate-fadeInUp' : 'opacity-0'}`}>
              <div className="w-12 h-1 bg-[#3B5FE3] rounded-full"></div>
              <h3 className="text-sm md:text-base font-semibold text-[#3B5FE3] tracking-widest uppercase" style={{ fontFamily: 'Manrope, sans-serif' }}>Premium Experience</h3>
              <div className="w-12 h-1 bg-[#3B5FE3] rounded-full"></div>
            </div>
            <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-2 leading-tight ${animatedSections.has('what-we-offer') ? 'animate-fadeInUp animation-delay-100' : 'opacity-0'}`} style={{ fontFamily: 'Poppins, sans-serif' }}>What We Offer</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
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
              <div 
                key={idx} 
                className={`bg-white border-2 border-gray-200 rounded-xl p-10 hover:border-[#3B5FE3] hover:shadow-xl transition-all duration-300 shadow-md ${
                  animatedSections.has('what-we-offer') ? 'animate-scaleIn' : 'opacity-0'
                }`}
                style={{
                  animationDelay: animatedSections.has('what-we-offer') ? `${0.1 + idx * 0.1}s` : '0s'
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

      {/* Final CTA Section */}
      <div className={`bg-white ${animatedSections.has('cta') ? 'animate-fadeIn' : 'opacity-0'}`} id="cta">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48">
          <div className={`bg-gradient-to-r from-[#1B2845] to-[#3B5FE3] text-white rounded-2xl p-16 md:p-24 text-center ${animatedSections.has('cta') ? 'animate-scaleIn' : 'opacity-0'}`}>
            <h2 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight ${animatedSections.has('cta') ? 'animate-fadeInUp animation-delay-100' : 'opacity-0'}`} style={{ fontFamily: 'Poppins, sans-serif' }}>
              Experience BPMG Stays
            </h2>
            <p className={`text-xl md:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto ${animatedSections.has('cta') ? 'animate-fadeInUp animation-delay-200' : 'opacity-0'}`} style={{ fontFamily: 'Manrope, sans-serif' }}>
              No matter whether you&apos;re here for work, leisure, or a little of both, BPMG Stays is here to make your stay memorable. Come, stay with us — and discover a place where every stay feels like home.
            </p>
            <div className={`flex flex-col sm:flex-row gap-6 justify-center ${animatedSections.has('cta') ? 'animate-fadeInUp animation-delay-300' : 'opacity-0'}`}>
              <a
                href="/properties"
                className="inline-block bg-white text-[#1B2845] font-bold py-4 px-12 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                View Our Properties
              </a>
              <a
                href="/contact"
                className="inline-block bg-transparent border-3 border-white text-white font-bold py-4 px-12 rounded-lg hover:bg-white/10 transition-colors duration-200 text-lg"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
