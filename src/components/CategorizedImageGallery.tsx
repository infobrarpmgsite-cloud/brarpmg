"use client";

import Image from "next/image";
import { StaticImageData } from "next/image";
import { useState, useCallback, useEffect } from "react";

interface ImageCategory {
  name: string;
  images: StaticImageData[];
}

interface CategorizedImageGalleryProps {
  categories: ImageCategory[];
  propertyName: string;
}

export default function CategorizedImageGallery({
  categories,
  propertyName,
}: CategorizedImageGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const currentCategory = categories[selectedCategory];
  const currentImages = currentCategory?.images || [];

  // Navigation functions
  const goToNextImage = useCallback(() => {
    if (currentImages.length > 0) {
      setIsLoading(true);
      setSelectedImage((prev) =>
        prev === currentImages.length - 1 ? 0 : prev + 1
      );
    }
  }, [currentImages.length]);

  const goToPrevImage = useCallback(() => {
    if (currentImages.length > 0) {
      setIsLoading(true);
      setSelectedImage((prev) =>
        prev === 0 ? currentImages.length - 1 : prev - 1
      );
    }
  }, [currentImages.length]);

  // Keyboard navigation
  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        goToNextImage();
      } else if (e.key === "ArrowLeft") {
        goToPrevImage();
      }
    },
    [goToNextImage, goToPrevImage]
  );

  // Add keyboard event listeners
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  // Reset selected image when category changes
  useEffect(() => {
    setSelectedImage(0);
    setIsLoading(false);
  }, [selectedCategory]);

  // Handle image load
  const handleImageLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  // Mouse drag handlers
  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    setIsMouseDown(true);
    setStartX(e.pageX - e.currentTarget.offsetLeft);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsMouseDown(false);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsMouseDown(false);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - e.currentTarget.offsetLeft;
    const walk = (x - startX) * 2;
    const threshold = 50;
    
    if (walk > threshold) {
      goToPrevImage();
      setIsMouseDown(false);
    } else if (walk < -threshold) {
      goToNextImage();
      setIsMouseDown(false);
    }
  }, [isMouseDown, startX, goToNextImage, goToPrevImage]);

  // Wheel scroll handler
  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY > 0) {
      goToNextImage();
    } else {
      goToPrevImage();
    }
  }, [goToNextImage, goToPrevImage]);

  // Touch handlers for mobile
  const handleTouchStart = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    setTouchStart(touch.clientX);
    setTouchEnd(touch.clientX);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    setTouchEnd(touch.clientX);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;
    
    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        goToNextImage();
      } else {
        goToPrevImage();
      }
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  }, [touchStart, touchEnd, goToNextImage, goToPrevImage]);

  if (!categories || categories.length === 0) {
    return null;
  }

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => {
              setSelectedCategory(index);
              setSelectedImage(0);
              setIsLoading(true);
            }}
            className={`px-4 py-2 rounded-lg font-medium transform transition-all duration-300 ${
              selectedCategory === index
                ? "bg-[#4F4F4F]/80 text-[#B4B4B4] font-bold scale-105 shadow-lg"
                : "bg-[#B4B4B4] text-[#4F4F4F] hover:bg-[#4F4F4F] hover:text-[#B4B4B4] hover:scale-105"
            }`}
          >
            {category.name} ({category.images.length})
          </button>
        ))}
      </div>

      {/* Main Image Display */}
      {currentImages.length > 0 && (
        <div 
          className="relative w-full h-96 md:h-[500px] mb-4 rounded-lg overflow-hidden shadow-lg group cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onWheel={handleWheel}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {isLoading && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center z-10">
              <div className="text-gray-500">Loading...</div>
            </div>
          )}
          <Image
            src={currentImages[selectedImage]}
            alt={`${propertyName} - ${currentCategory.name} - Image ${
              selectedImage + 1
            }`}
            fill
            className={`object-cover transition-all duration-500 group-hover:scale-105 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            } ${isMouseDown ? 'scale-105' : ''}`}
            priority={selectedImage === 0}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            quality={90}
            onLoad={handleImageLoad}
            draggable={false}
          />

          {/* Navigation Arrows */}
          {currentImages.length > 1 && (
            <>
              <button
                onClick={goToPrevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-label="Previous image"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="white"
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
                onClick={goToNextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-label="Next image"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="white"
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
            </>
          )}

          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {selectedImage + 1} / {currentImages.length}
          </div>

          {/* Interaction indicator */}
          {currentImages.length > 1 && (
            <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {isMouseDown ? 'Drag to navigate' : 'Click & drag, scroll, or swipe'}
            </div>
          )}
        </div>
      )}

      {/* Thumbnail Grid */}
      {currentImages.length > 1 && (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {currentImages.map((image, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedImage(index);
                setIsLoading(true);
              }}
              className={`relative w-full h-20 md:h-24 rounded-lg overflow-hidden transform transition-all duration-300 cursor-pointer ${
                selectedImage === index
                  ? "scale-105 shadow-lg brightness-110 ring-2 ring-[#3B5FE3]"
                  : "hover:scale-105 hover:shadow-md hover:brightness-105 hover:ring-1 hover:ring-[#3B5FE3]/50"
              }`}
            >
              <Image
                src={image}
                alt={`${propertyName} - ${currentCategory.name} - Thumbnail ${
                  index + 1
                }`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                quality={75}
              />
            </button>
          ))}
        </div>
      )}

      {/* Category Info */}
      <div className="mt-4 text-center">
        <p className="text-[#4F4F4F] transition-all duration-300">
          {currentCategory.name} • {currentImages.length} image
          {currentImages.length !== 1 ? "s" : ""}
        </p>
      </div>
    </div>
  );
}
