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
  faDumbbell,
  faClock,
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
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-sm">
        <div className="flex justify-center items-center h-20">
          <h1 className="text-4xl font-bold text-gray-900 mt-5 font-display tracking-tight">
          The Domain Spot | Chic & Central in North ATX
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex space-x-6 text-xl text-gray-600">
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
        <div className="lg:col-span-7">
          <hr className="border-gray-300 my-6 border-2 rounded-full mx-auto w-3/4" />
          <CategorizedImageGallery
            categories={waterford1215ImageCategories}
            propertyName="Waterford 1215"
          />
          <hr className="border-gray-300 my-6 border-2 rounded-full mx-auto w-3/4" />
        </div>
        <div>
          <div className="w-full max-w-7xl mx-auto px-6 py-8 bg-gradient-to-b from-gray- to-transparent rounded-xl">
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
              {/* Main Content - 70% on large screens */}
              <div className="lg:col-span-7 space-y-8">
                {/* Welcome Section */}
                <div className="bg-white/50 rounded-lg shadow-lg p-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-display tracking-tight">
                    💼 Welcome to Your Business Haven
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Step into your ideal home office away from home! This sleek 2BR/2.5BA at Presidium Waterford blends efficiency, comfort, and convenience for an effortless stay.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                        <FontAwesomeIcon icon={faLaptop} className="mr-2" />
                        Work & Comfort
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Ergonomic built-in desk</li>
                        <li>• Ultra-fast Wi-Fi</li>
                        <li>• Queen beds with blackout curtains</li>
                        <li>• Walk-in closet storage</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                        <FontAwesomeIcon icon={faCar} className="mr-2" />
                        Prime Location
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• 8 min to The Domain</li>
                        <li>• 10 min to tech campuses</li>
                        <li>• 15 min to Downtown</li>
                        <li>• 20 min to Airport</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Amenities Section */}
                <div className="bg-white/50 rounded-lg shadow-lg p-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-display tracking-tight">
                    Premium Features
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
                        <FontAwesomeIcon icon={faKitchenSet} className="mr-2" />
                        Kitchen & Living
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Modern kitchen suite</li>
                        <li>• Breakfast bar</li>
                        <li>• Coffee & tea station</li>
                        <li>• Cozy living space</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
                        <FontAwesomeIcon icon={faDumbbell} className="mr-2" />
                        Community Access
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Resort-style pool</li>
                        <li>• Modern fitness center</li>
                        <li>• Stylish lounges</li>
                        <li>• Meeting spaces</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
                        <FontAwesomeIcon icon={faLock} className="mr-2" />
                        Added Comforts
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• In-unit laundry</li>
                        <li>• Free parking</li>
                        <li>• Secure building</li>
                        <li>• 24/7 surveillance</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Important Notes Section */}
                <div className="bg-white/50 rounded-lg shadow-lg p-6 mb-5">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-display tracking-tight">
                    Essential Information
                  </h2>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h3 className="text-lg font-medium text-gray-800 mb-2">
                        <FontAwesomeIcon icon={faClock} className="mr-2" />
                        Hours & Access
                      </h3>
                      <p className="text-gray-600">
                        Quiet hours: 10:00 PM – 7:00 AM. Early check-in/late check-out
                        available upon request (additional fee applies).
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h3 className="text-lg font-medium text-gray-800 mb-2">
                        🧼 Cleaning Service
                      </h3>
                      <p className="text-gray-600">
                        Professionally sanitized before arrival. Optional mid-stay cleaning
                        available for stays over 7 nights (additional fee).
                      </p>
                    </div>
                    <div className="p-4 bg-red-50 rounded-lg">
                      <h3 className="text-lg font-medium text-gray-800 mb-2">
                        ⚠️ Important Policies
                      </h3>
                      <p className="text-gray-600">
                        No pets allowed ($500 fee for violations). No parties or events.
                        This home is for respectful guests only.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking Iframe - 30% on large screens */}
              <div className="lg:col-span-3">
                <iframe
                  id="booking-iframe"
                  sandbox="allow-top-navigation allow-scripts allow-same-origin"
                  style={{ width: "100%", height: "900px", border: "none" }}
                  src="https://booking.hospitable.com/widget/9fc65099-955b-4d47-bae2-d379767ffe06/1934150"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}