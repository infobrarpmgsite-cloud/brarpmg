'use client';

import Image from 'next/image';
import { useState, useEffect, useRef, useCallback } from 'react';
import { getCarouselImages } from '@/utils/carouselImages';

interface ContentCarouselProps {
  children: React.ReactNode;
}

// Icon Components
interface IconProps {
  className?: string;
}

function ChevronLeft(props: IconProps) {
  return (
    <svg
      className={props.className}
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
  );
}

function ChevronRight(props: IconProps) {
  return (
    <svg
      className={props.className}
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
  );
}

function PlayIcon(props: IconProps) {
  return (
    <svg
      className={props.className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function PauseIcon(props: IconProps) {
  return (
    <svg
      className={props.className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
    </svg>
  );
}

export default function ContentCarousel({ children }: ContentCarouselProps) {
  // Enhanced slider state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  
  const [images] = useState(() => getCarouselImages());
  const totalImages = images.length;

  // Navigation functions
  const goToSlide = useCallback((index: number) => {
    setCurrentIndex((index + totalImages) % totalImages);
  }, [totalImages]);

  const goToNext = useCallback(() => {
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  const goToPrevious = useCallback(() => {
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  // Auto-play functionality
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

  // Touch and mouse events
  const handleStart = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    stopAutoPlay();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
  }, [stopAutoPlay]);

  const handleMove = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setTranslateX(clientX - startX);
  }, [isDragging, startX]);

  const handleEnd = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 50;
    if (translateX > threshold) {
      goToPrevious();
    } else if (translateX < -threshold) {
      goToNext();
    }

    setTranslateX(0);
    startAutoPlay();
  }, [isDragging, translateX, goToPrevious, goToNext, startAutoPlay]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        goToNext();
      } else if (e.key === ' ') {
        e.preventDefault();
        if (isAutoPlaying) {
          stopAutoPlay();
        } else {
          startAutoPlay();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPrevious, goToNext, isAutoPlaying, startAutoPlay, stopAutoPlay]);

  // Auto-play on mount
  useEffect(() => {
    startAutoPlay();
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [startAutoPlay]);

  if (images.length === 0) {
    return <div className="w-full">{children}</div>;
  }

  return (
    <div className="w-full h-screen sm:h-screen md:h-screen lg:h-screen overflow-x-hidden">
      {/* Enhanced Carousel Container */}
      <div 
        ref={sliderRef}
        className="relative w-full h-full group sm:overflow-visible overflow-hidden"
        style={{
          touchAction: 'pan-y'
        }}
        onMouseEnter={stopAutoPlay}
        onMouseLeave={startAutoPlay}
        onMouseDown={handleStart}
        onMouseMove={handleMove}
        onMouseUp={handleEnd}
        onTouchStart={handleStart}
        onTouchMove={handleMove}
        onTouchEnd={handleEnd}
      >
        {/* Image Slider */}
        <div
          className="flex transition-transform duration-500 ease-out h-full"
          style={{
            transform: `translateX(calc(-${currentIndex * 100}% + ${translateX}px))`,
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0 relative">
              <Image
                src={image}
                alt={`Property showcase ${index + 1}`}
                fill
                className="object-cover object-center"
                priority={index === 0}
                quality={100}
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
              />
              {/* Image overlay with info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <div className="text-white">
                  <p className="text-sm opacity-90 mb-1" style={{ fontFamily: 'Segoe UI, sans-serif' }}>
                    Image {index + 1} of {totalImages}
                  </p>
                  <p className="text-lg font-medium" style={{ fontFamily: 'Segoe UI, sans-serif' }}>
                    Property Showcase {index + 1}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Two-tone overlay */}
        <div className="absolute inset-0 two-tone-overlay"></div>
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div>
            {children}
          </div>
        </div>

        {/* Enhanced Navigation Arrows */}
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

        {/* Enhanced Progress Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
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

        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm" style={{ fontFamily: 'Segoe UI, sans-serif' }}>
          {currentIndex + 1} / {totalImages}
        </div>
      </div>
    </div>
  );
}
