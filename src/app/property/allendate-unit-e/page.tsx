'use client';

import CategorizedImageGallery from "@/components/CategorizedImageGallery";
import { useEffect } from 'react';

// Property images organized by category (placeholder structure)
// Add your images to the appropriate folders and import them here
const allendateImageCategories: Array<{name: string; images: never[]}> = [
  // Example structure - add your actual images when available
  // {
  //   name: "Bedroom",
  //   images: [bedroom1, bedroom2, bedroom3]
  // },
  // {
  //   name: "Living Room", 
  //   images: [living1, living2]
  // }
];

export default function AllendateUnitEProperty() {
  useEffect(() => {
    function getQueryParams(param: string) {
      const urlSearchParams = new URLSearchParams(window.location.search);
      return urlSearchParams.get(param);
    }

    function updateIframeSrc() {
      const iframe = document.getElementById("booking-iframe") as HTMLIFrameElement;
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
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Allendate Unit E Property Details
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Experience luxury and comfort at Allendate Unit E. This premium property offers 
          exceptional amenities and stunning views for an unforgettable stay.
        </p>
      </div>
      
      {/* Property Gallery and Booking Container */}
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
          {/* Image Gallery - 70% on large screens, full width on mobile */}
          <div className="lg:col-span-7">
            <CategorizedImageGallery 
              categories={allendateImageCategories} 
              propertyName="Allendate Unit E" 
            />
          </div>
          
          {/* Booking Iframe - 30% on large screens, full width on mobile */}
          <div className="lg:col-span-3">
            <div className="sticky top-4">
              <iframe 
                id="booking-iframe" 
                sandbox="allow-top-navigation allow-scripts allow-same-origin" 
                style={{ width: '100%', height: '900px', border: 'none' }} 
                src="https://booking.hospitable.com/widget/9fc65099-955b-4d47-bae2-d379767ffe06/1939010"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
