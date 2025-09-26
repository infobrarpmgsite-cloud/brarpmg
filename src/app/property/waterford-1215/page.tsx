"use client";

import CategorizedImageGallery from "@/components/CategorizedImageGallery";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faUsers,
  faKitchenSet,
  faLaptop,
  faCar,
  faLock,
  faClock,
  faKey,
} from "@fortawesome/free-solid-svg-icons";

// Import property images by category
// Bedroom 1
import bedroom1_1 from '@/assets/images/properties/waterford-1215/Bedroom 1/1.webp';
import bedroom1_2 from '@/assets/images/properties/waterford-1215/Bedroom 1/2.webp';
import bedroom1_3 from '@/assets/images/properties/waterford-1215/Bedroom 1/3.webp';
import bedroom1_4 from '@/assets/images/properties/waterford-1215/Bedroom 1/4.webp';
import bedroom1_5 from '@/assets/images/properties/waterford-1215/Bedroom 1/5.webp';
import bedroom1_6 from '@/assets/images/properties/waterford-1215/Bedroom 1/6.webp';

// Bedroom 2
import bedroom2_1 from '@/assets/images/properties/waterford-1215/Bedroom 2/1.webp';
import bedroom2_2 from '@/assets/images/properties/waterford-1215/Bedroom 2/2.webp';
import bedroom2_3 from '@/assets/images/properties/waterford-1215/Bedroom 2/3.webp';
import bedroom2_4 from '@/assets/images/properties/waterford-1215/Bedroom 2/4.webp';

// Dining area
import dining1 from '@/assets/images/properties/waterford-1215/Dining area/1.webp';
import dining2 from '@/assets/images/properties/waterford-1215/Dining area/2.webp';
import dining3 from '@/assets/images/properties/waterford-1215/Dining area/3.webp';

// Exterior
import exterior1 from '@/assets/images/properties/waterford-1215/Exterior/1.webp';
import exterior2 from '@/assets/images/properties/waterford-1215/Exterior/2.webp';

// Full bathroom
import bathroom1 from '@/assets/images/properties/waterford-1215/Full bathroom/1.webp';
import bathroom2 from '@/assets/images/properties/waterford-1215/Full bathroom/2.webp';
import bathroom3 from '@/assets/images/properties/waterford-1215/Full bathroom/3.webp';
import bathroom4 from '@/assets/images/properties/waterford-1215/Full bathroom/4.webp';

// Full kitchen
import kitchen1 from '@/assets/images/properties/waterford-1215/Full kitchen/1.webp';
import kitchen2 from '@/assets/images/properties/waterford-1215/Full kitchen/2.webp';
import kitchen3 from '@/assets/images/properties/waterford-1215/Full kitchen/3.webp';
import kitchen4 from '@/assets/images/properties/waterford-1215/Full kitchen/4.webp';

// Gym
import gym1 from '@/assets/images/properties/waterford-1215/Gym/1.webp';
import gym2 from '@/assets/images/properties/waterford-1215/Gym/2.webp';
import gym3 from '@/assets/images/properties/waterford-1215/Gym/3.webp';

// Half bathroom
import halfBath1 from '@/assets/images/properties/waterford-1215/Half bathroom/1.webp';
import halfBath2 from '@/assets/images/properties/waterford-1215/Half bathroom/2.webp';
import halfBath3 from '@/assets/images/properties/waterford-1215/Half bathroom/3.webp';
import halfBath4 from '@/assets/images/properties/waterford-1215/Half bathroom/4.webp';

// Laundry area
import laundry1 from '@/assets/images/properties/waterford-1215/Laundry area/1.webp';

// Living room
import living1 from '@/assets/images/properties/waterford-1215/Living room/1.webp';
import living2 from '@/assets/images/properties/waterford-1215/Living room/2.webp';
import living3 from '@/assets/images/properties/waterford-1215/Living room/3.webp';
import living4 from '@/assets/images/properties/waterford-1215/Living room/4.webp';

// Others
import other1 from '@/assets/images/properties/waterford-1215/Others/1.webp';
import other2 from '@/assets/images/properties/waterford-1215/Others/2.webp';
import other3 from '@/assets/images/properties/waterford-1215/Others/3.webp';
import other4 from '@/assets/images/properties/waterford-1215/Others/4.webp';
import other5 from '@/assets/images/properties/waterford-1215/Others/5.webp';

// Pool
import pool1 from '@/assets/images/properties/waterford-1215/Pool/1.webp';
import pool2 from '@/assets/images/properties/waterford-1215/Pool/2.webp';

// Workplace
import workplace1 from '@/assets/images/properties/waterford-1215/Workplace/1.webp';
import workplace2 from '@/assets/images/properties/waterford-1215/Workplace/2.webp';

const waterford1215ImageCategories = [
  {
    name: "Living Room",
    images: [living1, living2, living3, living4]
  },
  {
    name: "Bedroom 1",
    images: [bedroom1_1, bedroom1_2, bedroom1_3, bedroom1_4, bedroom1_5, bedroom1_6]
  },
  {
    name: "Bedroom 2",
    images: [bedroom2_1, bedroom2_2, bedroom2_3, bedroom2_4]
  },
  {
    name: "Kitchen",
    images: [kitchen1, kitchen2, kitchen3, kitchen4]
  },
  {
    name: "Dining Area",
    images: [dining1, dining2, dining3]
  },
  {
    name: "Full Bathroom",
    images: [bathroom1, bathroom2, bathroom3, bathroom4]
  },
  {
    name: "Half Bathroom",
    images: [halfBath1, halfBath2, halfBath3, halfBath4]
  },
  {
    name: "Workspace",
    images: [workplace1, workplace2]
  },
  {
    name: "Fitness Center",
    images: [gym1, gym2, gym3]
  },
  {
    name: "Pool",
    images: [pool1, pool2]
  },
  {
    name: "Laundry",
    images: [laundry1]
  },
  {
    name: "Exterior",
    images: [exterior1, exterior2]
  },
  {
    name: "Others",
    images: [other1, other2, other3, other4, other5]
  }
];

export default function Waterford1215Property() {
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
    <div className="container mx-auto px-2 py-6">
      <div className="bg-white/30">
        <div className="lg:col-span-7 px-4 py-4">
          <div className=" p-4 md:p-6">
          <div className="flex flex-col justify-center items-center h-auto py-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1B2845] font-display tracking-tight text-center px-4">
            The Domain Spot | Chic & Central in North ATX
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-wrap justify-center gap-4 md:space-x-6 text-lg md:text-xl text-[#1B2845]/50 px-4">
            <span className="flex items-center">
              <FontAwesomeIcon icon={faBed} className="mr-2" /> 2 Bed
            </span>
            <span className="flex items-center">
              <FontAwesomeIcon icon={faBath} className="mr-2" /> 1.5 Bath
            </span>
            <span className="flex items-center">
              <FontAwesomeIcon icon={faUsers} className="mr-2" /> Up to 5 Guests
            </span>
          </div>
        </div>
          <hr className="border-[#3B5FE3] my-6 border-4 rounded-full mx-auto w-3/4 box-shadow-xl/30" />

          <CategorizedImageGallery
            categories={waterford1215ImageCategories}
            propertyName="Waterford 1215"
          />
          </div>
        </div>
     
      </div>
      <div className="bg-white/30 mt-10">
        <div className="lg:col-span-7">
        <div>
          <div className="w-full max-w-7xl mx-auto px-2 py-10 rounded-xl">
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
              {/* Main Content - 70% on large screens */}
              <div className="lg:col-span-7 space-y-6 md:space-y-8">
                {/* Welcome Section */}
                <div className="bg-[#3B5FE3] shadow-xl/30 p-4 md:p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-200 font-display tracking-tight">
                    💼 Modern Traveler&apos;s Haven
                    </h2>
                    <hr className="flex-grow border-[#B4B4B4] opacity-50 border-4 rounded-full" />
                  </div>
                  <p className="text-gray-300 mb-6">
                    Step into your ideal home office away from home! This sleek 2BR/1.5BA at Presidium Waterford blends efficiency, comfort, and convenience for an effortless stay.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="mb-4">
                      <h3 className="text-lg md:text-xl font-semibold text-gray-300 mb-4 flex items-center">
                        <FontAwesomeIcon icon={faLaptop} className="mr-2" />
                        Work & Relax
                      </h3>
                      <ul className="space-y-2 text-gray-300">
                        <li>• Dedicated workspace</li>
                        <li>• Lightning-fast Wi-Fi</li>
                        <li>• Cozy living area</li>
                        <li>• Smart TV entertainment</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-gray-300 mb-4 flex items-center">
                        <FontAwesomeIcon icon={faCar} className="mr-2" />
                        Prime Location
                      </h3>
                      <ul className="space-y-2 text-gray-300">
                        <li>• 8 min to The Domain</li>
                        <li>• 10 min to tech campuses</li>
                        <li>• 15 min to Downtown</li>
                        <li>• 20 min to Airport</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Amenities Section */}
                <div className="bg-[#3B5FE3] shadow-xl/30 p-4 md:p-6">
                 <div className="flex items-center gap-4 mb-4">
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-200 font-display tracking-tight">
                    Property Features
                    </h2>
                    <hr className="flex-grow border-[#B4B4B4] opacity-50 border-4 rounded-full" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-300 mb-3 flex items-center">
                        <FontAwesomeIcon icon={faKey} className="mr-2" />
                        Essential Comforts
                      </h3>
                      <ul className="space-y-2 text-gray-300">
                        <li>• 2 comfortable bedrooms</li>
                        <li>• 1.5 modern bathrooms</li>
                        <li>• Air conditioning</li>
                        <li>• Dining for 5</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-300 mb-3 flex items-center">
                        <FontAwesomeIcon icon={faKitchenSet} className="mr-2" />
                        Kitchen & Dining
                      </h3>
                      <ul className="space-y-2 text-gray-300">
                        <li>• Full kitchen setup</li>
                        <li>• Coffee essentials</li>
                        <li>• Modern appliances</li>
                        <li>• Breakfast bar</li>
                      </ul>
                    </div>
                    <div className="sm:col-span-2 md:col-span-1">
                      <h3 className="text-lg font-medium text-gray-300 mb-3 flex items-center">
                        <FontAwesomeIcon icon={faLock} className="mr-2" />
                        Added Conveniences
                      </h3>
                      <ul className="space-y-2 text-gray-300">
                        <li>• Free parking</li>
                        <li>• Resort-style pool</li>
                        <li>• Fitness center</li>
                        <li>• 24/7 surveillance</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Important Notes Section */}
                <div className="bg-[#3B5FE3] shadow-xl/30 p-4 md:p-6 mb-5">
                <div className="flex items-center gap-4 mb-4">
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-200 font-display tracking-tight">
                    Important Details
                    </h2>
                    <hr className="flex-grow border-[#B4B4B4] opacity-50 border-4 rounded-full" />
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">
                        <FontAwesomeIcon icon={faClock} className="mr-2" />
                        Quiet Hours & Check-in
                      </h3>
                      <p className="text-gray-600">
                        Quiet hours: 10:00 PM – 7:00 AM. Early check-in/late check-out
                        available upon request (additional fee applies).
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">
                        🐾 Pet Policy
                      </h3>
                      <p className="text-gray-600">
                        Well-behaved, house-trained pets welcome! Fees: $25/night | $100/week
                        | $300/month (Max 2 pets per stay)
                      </p>
                    </div>
                    <div className="p-4 bg-red-50 rounded-lg">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">
                        ⚠️ House Rules
                      </h3>
                      <p className="text-gray-600">
                        No parties or events. This home is intended for families and
                        business travelers. Unauthorized gatherings will result in
                        immediate cancellation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking Iframe - 30% on large screens */}
              <div className="lg:col-span-3 flex justify-center">
                <div className="w-full">
                   <iframe
                    id="booking-iframe"
                    sandbox="allow-top-navigation allow-scripts allow-same-origin"
                    style={{ width: "100%", height: "700px", border: "none" }}
                    src="https://booking.hospitable.com/widget/9fc65099-955b-4d47-bae2-d379767ffe06/1934150"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}