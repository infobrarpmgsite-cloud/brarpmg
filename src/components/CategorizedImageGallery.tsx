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

  const currentCategory = categories[selectedCategory];
  const currentImages = currentCategory?.images || [];

  // Navigation functions
  const goToNextImage = useCallback(() => {
    setSelectedImage((prev) =>
      prev === currentImages.length - 1 ? 0 : prev + 1
    );
  }, [currentImages.length]);

  const goToPrevImage = useCallback(() => {
    setSelectedImage((prev) =>
      prev === 0 ? currentImages.length - 1 : prev - 1
    );
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
            }}
            className={`px-4 py-2 rounded-lg font-medium transform transition-all duration-300 ${
              selectedCategory === index
                ? "bg-brand-primary text-brand-white scale-105 shadow-lg"
                : "bg-brand-lightGray text-brand-darkGray hover:bg-brand-darkGray hover:text-brand-white hover:scale-105"
            }`}
          >
            {category.name} ({category.images.length})
          </button>
        ))}
      </div>

      {/* Main Image Display */}
      {currentImages.length > 0 && (
        <div className="relative w-full h-96 md:h-[500px] mb-4 rounded-lg overflow-hidden shadow-lg group">
          <Image
            src={currentImages[selectedImage]}
            alt={`${propertyName} - ${currentCategory.name} - Image ${
              selectedImage + 1
            }`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
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
        </div>
      )}

      {/* Thumbnail Grid */}
      {currentImages.length > 1 && (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {currentImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative w-full h-20 md:h-24 rounded-lg overflow-hidden transform transition-all duration-300 ${
                selectedImage === index
                  ? "scale-105 shadow-lg brightness-110"
                  : "hover:scale-105 hover:shadow-md hover:brightness-105"
              }`}
            >
              <Image
                src={image}
                alt={`${propertyName} - ${currentCategory.name} - Thumbnail ${
                  index + 1
                }`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Category Info */}
      <div className="mt-4 text-center">
        <p className="text-brand-darkGray transition-all duration-300 hover:text-brand-primary">
          {currentCategory.name} • {currentImages.length} image
          {currentImages.length !== 1 ? "s" : ""}
        </p>
      </div>
    </div>
  );
}
