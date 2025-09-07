'use client';

import CategorizedImageGallery from "@/components/CategorizedImageGallery";
import { useEffect } from 'react';

// Import property images by category
// Bedroom images
import bedroom1 from '@/assets/images/properties/vip-107/Bedroom/image1.avif';
import bedroom2 from '@/assets/images/properties/vip-107/Bedroom/image2.avif';
import bedroom3 from '@/assets/images/properties/vip-107/Bedroom/image3.avif';
import bedroom4 from '@/assets/images/properties/vip-107/Bedroom/image4.jpeg';

// Dining area images
import dining1 from '@/assets/images/properties/vip-107/Dining area/image1.avif';

// Full bathroom images
import bathroom1 from '@/assets/images/properties/vip-107/Full bathroom/image1.avif';
import bathroom2 from '@/assets/images/properties/vip-107/Full bathroom/image2.avif';

// Full Kitchen images
import kitchen1 from '@/assets/images/properties/vip-107/Full Kitchen/image1.avif';
import kitchen2 from '@/assets/images/properties/vip-107/Full Kitchen/image2.avif';
import kitchen3 from '@/assets/images/properties/vip-107/Full Kitchen/image3.avif';

// Living room images
import living1 from '@/assets/images/properties/vip-107/Living room/image1.avif';
import living2 from '@/assets/images/properties/vip-107/Living room/image2.avif';
import living3 from '@/assets/images/properties/vip-107/Living room/image3.avif';
import living4 from '@/assets/images/properties/vip-107/Living room/image4.avif';
import living5 from '@/assets/images/properties/vip-107/Living room/image5.avif';
import living6 from '@/assets/images/properties/vip-107/Living room/image6.avif';

// Pool images
import pool1 from '@/assets/images/properties/vip-107/Pool/image1.avif';
import pool2 from '@/assets/images/properties/vip-107/Pool/image2.avif';

// Property images organized by category
const vip107ImageCategories = [
  {
    name: "Bedroom",
    images: [bedroom1, bedroom2, bedroom3, bedroom4]
  },
  {
    name: "Living Room",
    images: [living1, living2, living3, living4, living5, living6]
  },
  {
    name: "Full Kitchen",
    images: [kitchen1, kitchen2, kitchen3]
  },
  {
    name: "Full Bathroom",
    images: [bathroom1, bathroom2]
  },
  {
    name: "Pool",
    images: [pool1, pool2]
  },
  {
    name: "Dining Area",
    images: [dining1]
  }
];

export default function Vip107Property() {
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
        <h1 className="text-2xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Cozy & Central ~ UT/Moody ~ Pool ~ Parking ~ WiFi
        </h1>
        <div className="text-base text-gray-600 max-w-3xl mx-auto space-y-4">
          <p className="italic text-lg font-light">
            Experience your perfect Austin escape—where timeless charm meets modern elegance!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/50 rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-blue-500 text-lg mr-2">✦</span>
                  <span className="text-gray-700 text-sm">Sleeps 6 with roomy bedrooms</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 text-lg mr-2">✦</span>
                  <span className="text-gray-700 text-sm">Bright, modern interiors</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 text-lg mr-2">✦</span>
                  <span className="text-gray-700 text-sm">Fully equipped kitchen</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/50 rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-purple-500 text-lg mr-2">✦</span>
                  <span className="text-gray-700 text-sm">Smart TVs with Roku</span>
                </li>
                <li className="flex items-center">
                  <span className="text-purple-500 text-lg mr-2">✦</span>
                  <span className="text-gray-700 text-sm">High-speed Wi-Fi</span>
                </li>
                <li className="flex items-center">
                  <span className="text-purple-500 text-lg mr-2">✦</span>
                  <span className="text-gray-700 text-sm">Pool, parking & laundry</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-base font-medium text-gray-800 mt-4">
            Book your unforgettable Austin stay today!
          </p>
        </div>
      </div>
      
      {/* Property Gallery and Booking Container */}
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
          {/* Image Gallery - 70% on large screens, full width on mobile */}
          <div className="lg:col-span-7">
            <CategorizedImageGallery 
              categories={vip107ImageCategories} 
              propertyName="VIP-107" 
            />
          </div>
          
          {/* Booking Iframe - 30% on large screens, full width on mobile */}
          <div className="lg:col-span-3">
            <div className="sticky top-4">
              <iframe 
                id="booking-iframe" 
                sandbox="allow-top-navigation allow-scripts allow-same-origin" 
                style={{ width: '100%', height: '900px', border: 'none' }} 
                src="https://booking.hospitable.com/widget/9fc65099-955b-4d47-bae2-d379767ffe06/1581300"
              />
            </div>
          </div>
        </div>
      </div>
      
      
     
      
    
    </div>
  );
}
