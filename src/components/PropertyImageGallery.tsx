'use client';

import Image from 'next/image';
import { StaticImageData } from 'next/image';
import { useState } from 'react';

interface PropertyImageGalleryProps {
  images: StaticImageData[];
  propertyName: string;
}

export default function PropertyImageGallery({ images, propertyName }: PropertyImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      <h2 className="text-2xl font-bold text-gray-300 mb-6 text-center">
        {propertyName} Gallery
      </h2>
      
      {/* Main Image Display */}
      <div className="relative w-full h-96 md:h-[500px] mb-4 rounded-lg overflow-hidden shadow-lg">
        <Image
          src={images[selectedImage]}
          alt={`${propertyName} - Image ${selectedImage + 1}`}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Thumbnail Grid */}
      {images.length > 1 && (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {images.map((image, index) => (
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
                alt={`${propertyName} - Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
