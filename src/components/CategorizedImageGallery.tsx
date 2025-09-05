'use client';

import Image from 'next/image';
import { StaticImageData } from 'next/image';
import { useState } from 'react';

interface ImageCategory {
  name: string;
  images: StaticImageData[];
}

interface CategorizedImageGalleryProps {
  categories: ImageCategory[];
  propertyName: string;
}

export default function CategorizedImageGallery({ categories, propertyName }: CategorizedImageGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!categories || categories.length === 0) {
    return null;
  }

  const currentCategory = categories[selectedCategory];
  const currentImages = currentCategory?.images || [];

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Category Tabs - Horizontal for main content area */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => {
              setSelectedCategory(index);
              setSelectedImage(0);
            }}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              selectedCategory === index
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category.name} ({category.images.length})
          </button>
        ))}
      </div>

      {/* Main Image Display - Larger for main content area */}
      {currentImages.length > 0 && (
        <div className="relative w-full h-96 md:h-[500px] mb-4 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={currentImages[selectedImage]}
            alt={`${propertyName} - ${currentCategory.name} - Image ${selectedImage + 1}`}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Thumbnail Grid - More thumbnails for main content area */}
      {currentImages.length > 1 && (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {currentImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative w-full h-20 md:h-24 rounded-lg overflow-hidden transition-all duration-200 ${
                selectedImage === index
                  ? 'ring-4 ring-blue-500 scale-105'
                  : 'hover:scale-105 hover:shadow-md'
              }`}
            >
              <Image
                src={image}
                alt={`${propertyName} - ${currentCategory.name} - Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Category Info */}
      <div className="mt-4 text-center">
        <p className="text-gray-600">
          {currentCategory.name} • {currentImages.length} image{currentImages.length !== 1 ? 's' : ''}
        </p>
      </div>
    </div>
  );
}
