'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { getCarouselImages } from '@/utils/carouselImages';

interface ContentCarouselProps {
  children: React.ReactNode;
}

export default function ContentCarousel({ children }: ContentCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [images] = useState(() => getCarouselImages());

  // Manual navigation only - no auto-advance

  if (images.length === 0) {
    return <div className="w-full">{children}</div>;
  }

  return (
    <div className="w-full h-screen sm:h-screen md:h-screen lg:h-screen">
      {/* Carousel Container */}
      <div className="relative w-full h-full group overflow-hidden">
        {/* Current Image */}
        <Image
          src={images[currentImageIndex]}
          alt={`Property showcase ${currentImageIndex + 1}`}
          fill
          className={`absolute inset-0 object-cover object-center transition-opacity duration-2000 ease-in-out ${
            isTransitioning ? 'opacity-40' : 'opacity-100'
          }`}
          priority
          quality={100}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
        />
        
        {/* Two-tone overlay */}
        <div className="absolute inset-0 two-tone-overlay"></div>
        
        {/* Dark overlay for content readability */}
        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div>
            {children}
          </div>
        </div>
        

        {/* Navigation Arrows */}
        {/* Left Arrow */}
        <button
          onClick={() => {
            if (isTransitioning) return;
            const nextIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
            setIsTransitioning(true);
            setTimeout(() => {
              setCurrentImageIndex(nextIndex);
              setTimeout(() => {
                setIsTransitioning(false);
              }, 50);
            }, 500);
          }}
          disabled={isTransitioning}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full opacity-70 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
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

        {/* Right Arrow */}
        <button
          onClick={() => {
            if (isTransitioning) return;
            const nextIndex = (currentImageIndex + 1) % images.length;
            setIsTransitioning(true);
            setTimeout(() => {
              setCurrentImageIndex(nextIndex);
              setTimeout(() => {
                setIsTransitioning(false);
              }, 50);
            }, 500);
          }}
          disabled={isTransitioning}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full opacity-70 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
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
        </button>

        {/* Image Counter */}
        {/* <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {currentImageIndex + 1} / {images.length}
        </div> */}

        {/* Progress Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 px-4">
          {images.slice(0, 10).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (isTransitioning || index === currentImageIndex) return;
                
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentImageIndex(index);
                  setTimeout(() => {
                    setIsTransitioning(false);
                  }, 50);
                }, 500);
              }}
              disabled={isTransitioning || index === currentImageIndex}
              className={`w-3 h-3 sm:w-2 sm:h-2 rounded-full transition-all duration-300 touch-manipulation ${
                currentImageIndex === index
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/75 active:bg-white/90'
              } disabled:opacity-50 disabled:cursor-not-allowed`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
          {images.length > 10 && (
            <div className="w-3 h-3 sm:w-2 sm:h-2 rounded-full bg-white/30 flex items-center justify-center">
              <span className="text-xs text-white">+</span>
            </div>
          )}
        </div>
      </div>

      
    </div>
  );
}
