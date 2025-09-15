'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { getAllPropertyImages } from '@/utils/propertyImages';

interface ContentCarouselProps {
  children: React.ReactNode;
}

export default function ContentCarousel({ children }: ContentCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [images] = useState(() => getAllPropertyImages());
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance carousel with random timing
  useEffect(() => {
    const getRandomInterval = () => Math.random() * 3000 + 4000; // 4-7 seconds
    
    const scheduleNext = () => {
      intervalRef.current = setTimeout(() => {
        setIsTransitioning(true);
        
        setTimeout(() => {
          setCurrentImageIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
          setIsTransitioning(false);
        }, 500);
        
        scheduleNext();
      }, getRandomInterval());
    };

    scheduleNext();
    
    return () => {
      if (intervalRef.current) {
        clearTimeout(intervalRef.current);
      }
    };
  }, [images.length]);

  if (images.length === 0) {
    return <div className="w-full">{children}</div>;
  }

  return (
    <div className="w-full max-w-7xl mx-auto mt-8">
      {/* Carousel Container */}
      <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] rounded-2xl shadow-2xl group">
        {/* Current Image */}
        <Image
          src={images[currentImageIndex]}
          alt={`Property showcase ${currentImageIndex + 1}`}
          fill
          className={`absolute inset-0 object-cover transition-all duration-1000 ease-in-out transform scale-105 ${
            isTransitioning ? 'opacity-0 scale-110' : 'opacity-100 scale-105'
          }`}
          priority
          quality={90}
        />
        
        {/* Dark overlay for content readability */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div>
            {children}
          </div>
        </div>
        

        {/* Navigation Arrows */}
        {/* <button
          onClick={() => setCurrentImageIndex((prev) => 
            prev === 0 ? images.length - 1 : prev - 1
          )}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
          aria-label="Previous image"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        
        <button
          onClick={() => setCurrentImageIndex((prev) => 
            prev === images.length - 1 ? 0 : prev + 1
          )}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
          aria-label="Next image"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button> */}

        {/* Image Counter */}
        {/* <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {currentImageIndex + 1} / {images.length}
        </div> */}

        {/* Progress Dots */}
        {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.slice(0, 10).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentImageIndex === index
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
          {images.length > 10 && (
            <div className="w-2 h-2 rounded-full bg-white/30 flex items-center justify-center">
              <span className="text-xs text-white">+</span>
            </div>
          )}
        </div> */}
      </div>

      
    </div>
  );
}
