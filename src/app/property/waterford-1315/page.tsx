"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faUsers,
  faBuilding,
  faClock,
  faLaptop,
  faDumbbell,
  faKey,
  faCar,
} from "@fortawesome/free-solid-svg-icons";

// Import property images by category
// Balcony
import balcony1 from '@/assets/images/properties/waterford-1315/Balcony/1.webp';
import balcony2 from '@/assets/images/properties/waterford-1315/Balcony/2.webp';

// Bedroom 1
import bedroom1_1 from '@/assets/images/properties/waterford-1315/Bedroom 1/1.webp';
import bedroom1_2 from '@/assets/images/properties/waterford-1315/Bedroom 1/2.webp';
import bedroom1_3 from '@/assets/images/properties/waterford-1315/Bedroom 1/3.webp';
import bedroom1_4 from '@/assets/images/properties/waterford-1315/Bedroom 1/4.webp';
import bedroom1_5 from '@/assets/images/properties/waterford-1315/Bedroom 1/5.webp';
import bedroom1_6 from '@/assets/images/properties/waterford-1315/Bedroom 1/6.webp';

// Bedroom 2
import bedroom2_1 from '@/assets/images/properties/waterford-1315/Bedroom 2/1.webp';

// Dining area
import dining1 from '@/assets/images/properties/waterford-1315/Dining area/1.webp';

// Full bathroom 1
import bathroom1_1 from '@/assets/images/properties/waterford-1315/Full bathroom 1/1.webp';
import bathroom1_2 from '@/assets/images/properties/waterford-1315/Full bathroom 1/2.webp';
import bathroom1_3 from '@/assets/images/properties/waterford-1315/Full bathroom 1/3.webp';
import bathroom1_4 from '@/assets/images/properties/waterford-1315/Full bathroom 1/4.webp';

// Full bathroom 2
import bathroom2_1 from '@/assets/images/properties/waterford-1315/Full bathroom 2/1.webp';

// Full kitchen
import kitchen1 from '@/assets/images/properties/waterford-1315/Full kitchen/1.webp';
import kitchen2 from '@/assets/images/properties/waterford-1315/Full kitchen/2.webp';
import kitchen3 from '@/assets/images/properties/waterford-1315/Full kitchen/3.webp';
import kitchen4 from '@/assets/images/properties/waterford-1315/Full kitchen/4.webp';

// Game room
import gameroom1 from '@/assets/images/properties/waterford-1315/Game room/1.webp';

// Gym
import gym1 from '@/assets/images/properties/waterford-1315/Gym/1.webp';
import gym2 from '@/assets/images/properties/waterford-1315/Gym/2.webp';
import gym3 from '@/assets/images/properties/waterford-1315/Gym/3.webp';

// Laundry area
import laundry1 from '@/assets/images/properties/waterford-1315/Laundry area/1.webp';

// Living room
import living1 from '@/assets/images/properties/waterford-1315/Living room/1.webp';
import living2 from '@/assets/images/properties/waterford-1315/Living room/2.webp';
import living3 from '@/assets/images/properties/waterford-1315/Living room/3.webp';
import living4 from '@/assets/images/properties/waterford-1315/Living room/4.webp';
import living5 from '@/assets/images/properties/waterford-1315/Living room/5.webp';

// Others
import other1 from '@/assets/images/properties/waterford-1315/Others/1.webp';
import other2 from '@/assets/images/properties/waterford-1315/Others/2.webp';
import other3 from '@/assets/images/properties/waterford-1315/Others/3.webp';
import other4 from '@/assets/images/properties/waterford-1315/Others/4.webp';

// Pool
import pool1 from '@/assets/images/properties/waterford-1315/Pool/1.webp';
import pool2 from '@/assets/images/properties/waterford-1315/Pool/2.webp';

// Workspace
import workspace1 from '@/assets/images/properties/waterford-1315/Workspace/1.webp';
import workspace2 from '@/assets/images/properties/waterford-1315/Workspace/2.webp';

const waterford1315ImageCategories = [
  {
    name: "Living Room",
    images: [living1, living2, living3, living4, living5]
  },
  {
    name: "Bedroom 1",
    images: [bedroom1_1, bedroom1_2, bedroom1_3, bedroom1_4, bedroom1_5, bedroom1_6]
  },
  {
    name: "Bedroom 2",
    images: [bedroom2_1]
  },
  {
    name: "Kitchen",
    images: [kitchen1, kitchen2, kitchen3, kitchen4]
  },
  {
    name: "Dining Area",
    images: [dining1]
  },
  {
    name: "Full Bathroom 1",
    images: [bathroom1_1, bathroom1_2, bathroom1_3, bathroom1_4]
  },
  {
    name: "Full Bathroom 2",
    images: [bathroom2_1]
  },
  {
    name: "Balcony",
    images: [balcony1, balcony2]
  },
  {
    name: "Gym",
    images: [gym1, gym2, gym3]
  },
  {
    name: "Pool",
    images: [pool1, pool2]
  },
  {
    name: "Game Room",
    images: [gameroom1]
  },
  {
    name: "Laundry",
    images: [laundry1]
  },
  {
    name: "Workspace",
    images: [workspace1, workspace2]
  },
  {
    name: "Others",
    images: [other1, other2, other3, other4]
  }
];

// Flatten all images for slider
const allImages = waterford1315ImageCategories.flatMap(category => 
  category.images.map(image => ({
    src: image.src,
    alt: `${category.name} - ${image.src.split('/').pop()?.split('.')[0] || 'Image'}`
  }))
);

// Icon components
const ChevronLeft = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const PlayIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const PauseIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
  </svg>
);

export default function Waterford1315Property() {
  // Slider state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  
  const totalImages = allImages.length;

  // Navigation functions
  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
    setTranslateX(0);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % totalImages);
    setTranslateX(0);
  }, [totalImages]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + totalImages) % totalImages);
    setTranslateX(0);
  }, [totalImages]);

  // Auto-play functions
  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      goToNext();
    }, 4000);
    setIsAutoPlaying(true);
  }, [goToNext]);

  const stopAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
    setIsAutoPlaying(false);
  }, []);

  // Touch/mouse event handlers
  const handleStart = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
    setTranslateX(0);
    stopAutoPlay();
  }, [stopAutoPlay]);

  const handleMove = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const diff = clientX - startX;
    setTranslateX(diff);
  }, [isDragging, startX]);

  const handleEnd = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const threshold = 100;
    if (Math.abs(translateX) > threshold) {
      if (translateX > 0) {
        goToPrevious();
      } else {
        goToNext();
      }
    } else {
      setTranslateX(0);
    }
    
    startAutoPlay();
  }, [isDragging, translateX, goToPrevious, goToNext, startAutoPlay]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
          goToPrevious();
          break;
        case 'ArrowRight':
          goToNext();
          break;
        case ' ':
          e.preventDefault();
          if (isAutoPlaying) {
            stopAutoPlay();
          } else {
            startAutoPlay();
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPrevious, goToNext, isAutoPlaying, stopAutoPlay, startAutoPlay]);

  // Auto-play on mount
  useEffect(() => {
    startAutoPlay();
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [startAutoPlay]);

  useEffect(() => {
    function getQueryParams(param: string) {
      const urlSearchParams = new URLSearchParams(window.location.search);
      return urlSearchParams.get(param);
    }

    function updateIframeSrc() {
      const iframe = document.getElementById(
        "booking-iframe"
      ) as HTMLIFrameElement;
      if (!iframe) return;

      const checkin = getQueryParams("checkin");
      const checkout = getQueryParams("checkout");
      const adults = getQueryParams("adults");
      const children = getQueryParams("children");
      const infants = getQueryParams("infants");
      const pets = getQueryParams("pets");

      let newSrc = iframe.src;
      newSrc = newSrc + (newSrc?.includes("?") ? "&" : "?");
      newSrc += `checkin=${checkin}&checkout=${checkout}&adults=${adults}&children=${children}&pets=${pets}&infants=${infants}`;

      iframe.src = newSrc;
    }

    updateIframeSrc();
  }, []);

  return (
    <div className="">
      <div className="">
        <div className="p-2 lg:px-10 lg:py-4">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-10">
            <div className="col-span-10 lg:col-span-4 bg-white rounded-4xl p-2 h-[750]">
              {/* Enhanced Image Slider */}
              <div className="mb-8">
                <div className="relative group">
                  {/* Main Slider Container */}
                  <div
                    ref={sliderRef}
                    className="relative overflow-hidden rounded-4xl bg-gray-100 shadow-2xl"
                    onMouseEnter={stopAutoPlay}
                    onMouseLeave={startAutoPlay}
                    onMouseDown={handleStart}
                    onMouseMove={handleMove}
                    onMouseUp={handleEnd}
                    onTouchStart={handleStart}
                    onTouchMove={handleMove}
                    onTouchEnd={handleEnd}
                  >
                    <div
                      className="flex transition-transform duration-500 ease-out"
                      style={{
                        transform: `translateX(calc(-${currentIndex * 100}% + ${translateX}px))`,
                      }}
                    >
                      {allImages.map((image, index) => (
                        <div key={index} className="w-full flex-shrink-0 relative">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            width={1200}
                            height={800}
                            className="w-full h-[60vh] object-cover"
                            draggable={false}
                            loading={index === 0 ? "eager" : "lazy"}
                          />
                          {/* Image overlay with info */}
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                            <div className="text-white">
                              <p className="text-sm opacity-90 mb-1" style={{ fontFamily: 'Segoe UI, sans-serif' }}>Image {index + 1} of {totalImages}</p>
                              <p className="text-lg font-medium" style={{ fontFamily: 'Segoe UI, sans-serif' }}>{image.alt}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Navigation Arrows */}
                    <button
                      onClick={goToPrevious}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={goToNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Progress Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                      {allImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToSlide(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                            ? 'bg-white scale-125'
                            : 'bg-white/50 hover:bg-white/75'
                            }`}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>

                    {/* Auto-play Toggle */}
                    <button
                      onClick={isAutoPlaying ? stopAutoPlay : startAutoPlay}
                      className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
                      aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
                    >
                      {isAutoPlaying ? (
                        <PauseIcon className="w-4 h-4" />
                      ) : (
                        <PlayIcon className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Thumbnail Navigation with Overflow */}
                  <div className="mt-4 overflow-x-auto">
                    <div className="flex gap-2 pb-2" style={{ width: 'max-content' }}>
                      {allImages.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => goToSlide(index)}
                          className={`relative overflow-hidden rounded-lg transition-all duration-300 flex-shrink-0 ${index === currentIndex
                            ? 'ring-2 ring-blue-500 scale-105'
                            : 'hover:scale-105'
                            }`}
                          style={{ width: '60px', height: '60px' }}
                        >
                          <Image
                            src={image.src}
                            alt=""
                            width={60}
                            height={60}
                            className="w-full h-full object-cover"
                          />
                          {index === currentIndex && (
                            <div className="absolute inset-0 bg-blue-500/20" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Image Counter */}
                  <div className="mt-2 text-center text-sm text-gray-600" style={{ fontFamily: 'Segoe UI, sans-serif' }}>
                    {currentIndex + 1} / {totalImages}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-10 lg:col-span-6 rounded-4xl bg-white lg:p-2">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="col-span-3 lg:col-span-2">
                  <div className="lg:p-4">
                    <h1 className="text-2xl text-[#1B2845] font-bold lg:p-2 p-5" style={{ fontFamily: 'Segoe UI, sans-serif' }}>
                      Relaxed 2BR Stay Near Domain & Central Aux
                    </h1>
                    <div className="flex justify-center items-center">
                      <div className="flex flex-wrap justify-center gap-4 md:space-x-6 text-md text-[#1B2845]/50 px-4" style={{ fontFamily: 'Segoe UI, sans-serif' }}>
                        <span className="flex items-center">
                          <FontAwesomeIcon icon={faBed} className="mr-2" /> 2 Bed
                        </span>
                        <span className="flex items-center">
                          <FontAwesomeIcon icon={faBath} className="mr-2" /> 2 Bath
                        </span>
                        <span className="flex items-center">
                          <FontAwesomeIcon icon={faUsers} className="mr-2" /> Up to 5 Guests
                        </span>
                      </div>
                    </div>
                    <div className="px-4 py-5">
                      <div className="lg:flex lg:items-center gap-4 mb-4 text-center lg:text-left">
                        <h2 className="text-md font-semibold text-gray-900 tracking-tight" style={{ fontFamily: 'Segoe UI, sans-serif' }}>
                          Modern Traveler&apos;s Haven
                        </h2>
                        <hr className="flex-grow border-[#B4B4B4] opacity-50 border-2 rounded-full" />
                      </div>
                      <p className="text-sm text-gray-800 mb-6 pl-4" style={{ fontFamily: 'Segoe UI, sans-serif' }}>
                        An elegant 2BR/2BA retreat near The Domain, perfectly designed for business travelers who value both productivity and comfort.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center lg:text-left">
                        <div>
                          <h3 className="text-md text-gray-800 lg:flex lg:items-center text-center lg:text-left" style={{ fontFamily: 'Segoe UI, sans-serif' }}>
                            <FontAwesomeIcon icon={faLaptop} className="mr-2" />
                            Work & Relax
                          </h3>
                          <ul className="space-y-2 text-gray-800 text-sm" style={{ fontFamily: 'Segoe UI, sans-serif' }}>
                            <li>• Dedicated workspace</li>
                            <li>• Lightning-fast Wi-Fi</li>
                            <li>• Cozy living area</li>
                            <li>• Smart TV entertainment</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-md text-gray-800 lg:flex lg:items-center text-center lg:text-left" style={{ fontFamily: 'Segoe UI, sans-serif' }}>
                            <FontAwesomeIcon icon={faCar} className="mr-2" />
                            Prime Location
                          </h3>
                          <ul className="space-y-2 text-gray-800 text-sm" style={{ fontFamily: 'Segoe UI, sans-serif' }}>
                            <li>• 8 min to The Domain</li>
                            <li>• 10 min to tech campuses</li>
                            <li>• 15 min to Downtown</li>
                            <li>• 20 min to Airport</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="px-4 mb-4">
                      <div className="lg:flex lg:items-center gap-4 mb-4 text-center lg:text-left">
                        <h2 className="text-md font-semibold text-gray-800 tracking-tight" style={{ fontFamily: 'Segoe UI, sans-serif' }}>
                          Property Features
                        </h2>
                        <hr className="flex-grow border-[#B4B4B4] opacity-50 border-2 rounded-full" />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center lg:text-left">
                        <div>
                          <h3 className="text-md text-gray-800 lg:flex lg:items-center text-center lg:text-left" style={{ fontFamily: 'Segoe UI, sans-serif' }}>
                            <FontAwesomeIcon icon={faKey} className="mr-2" />
                            Essential Comforts
                          </h3>
                          <ul className="space-y-2 text-gray-800 text-sm" style={{ fontFamily: 'Segoe UI, sans-serif' }}>
                            <li>• 2 comfortable bedrooms</li>
                            <li>• 2 modern bathrooms</li>
                            <li>• Air conditioning</li>
                            <li>• Dining for 5</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-md text-gray-800 lg:flex lg:items-center text-center lg:text-left" style={{ fontFamily: 'Segoe UI, sans-serif' }}>
                            <FontAwesomeIcon icon={faBuilding} className="mr-2" />
                            Kitchen & Dining
                          </h3>
                          <ul className="space-y-2 text-gray-800 text-sm" style={{ fontFamily: 'Segoe UI, sans-serif' }}>
                            <li>• Full kitchen setup</li>
                            <li>• Coffee essentials</li>
                            <li>• Modern appliances</li>
                            <li>• Private balcony</li>
                          </ul>
                        </div>
                        <div className="sm:col-span-2 md:col-span-1">
                          <h3 className="text-md text-gray-800 lg:flex lg:items-center text-center lg:text-left" style={{ fontFamily: 'Segoe UI, sans-serif' }}>
                            <FontAwesomeIcon icon={faDumbbell} className="mr-2" />
                            Added Conveniences
                          </h3>
                          <ul className="space-y-2 text-gray-800 text-sm" style={{ fontFamily: 'Segoe UI, sans-serif' }}>
                            <li>• Free parking</li>
                            <li>• Resort-style pool</li>
                            <li>• Fitness center</li>
                            <li>• Game room</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="px-4">
                      <div className="lg:flex lg:items-center gap-4 mb-4 text-center lg:text-left">
                        <h2 className="text-md font-semibold text-gray-800 tracking-tight" style={{ fontFamily: 'Segoe UI, sans-serif' }}>
                          Important Details
                        </h2>
                        <hr className="flex-grow border-[#B4B4B4] opacity-50 border-2 rounded-full" />
                      </div>
                      <div className="space-y-4">
                        <div className="p-4 bg-blue-50 rounded-lg ">
                          <h3 className="text-md font-bold text-gray-800 mb-2 " style={{ fontFamily: 'Segoe UI, sans-serif' }}>
                            <FontAwesomeIcon icon={faClock} className="mr-2" />
                            Quiet Hours & Check-in
                          </h3>
                          <p className="text-sm text-gray-600" style={{ fontFamily: 'Segoe UI, sans-serif' }}>
                            Quiet hours: 10:00 PM – 7:00 AM. Early check-in/late check-out
                            available upon request (additional fee applies).
                          </p>
                        </div>
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h3 className="text-md font-bold text-gray-800 mb-2" style={{ fontFamily: 'Segoe UI, sans-serif' }}>
                            🐾 Pet Policy
                          </h3>
                          <p className="text-sm text-gray-600" style={{ fontFamily: 'Segoe UI, sans-serif' }}>
                            Well-behaved, house-trained pets welcome! Fees: $25/night | $100/week
                            | $300/month (Max 2 pets per stay)
                          </p>
                        </div>
                        <div className="p-4 bg-red-50 rounded-lg">
                          <h3 className="text-md font-bold text-gray-800 mb-2" style={{ fontFamily: 'Segoe UI, sans-serif' }}>
                            ⚠️ House Rules
                          </h3>
                          <p className="text-sm text-gray-600" style={{ fontFamily: 'Segoe UI, sans-serif' }}>
                            No parties or events. This home is intended for families and
                            business travelers. Unauthorized gatherings will result in
                            immediate cancellation.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-3 lg:col-span-1 p-5 lg:border-l lg:border-[#B4B4B4]">
                  <iframe
                    id="booking-iframe"
                    sandbox="allow-top-navigation allow-scripts allow-same-origin"
                    style={{ width: "100%", height: "750px", border: "none" }}
                    src={`https://booking.hospitable.com/widget/${process.env.NEXT_PUBLIC_HOSPITABLE_WIDGET_ID}/${process.env.NEXT_PUBLIC_PROPERTY_WATERFORD_1315}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}