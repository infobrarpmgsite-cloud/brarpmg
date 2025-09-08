"use client";

import CategorizedImageGallery from "@/components/CategorizedImageGallery";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faUsers,
  faTv,
  faKitchenSet,
  faSwimmingPool,
  faLock,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons";

// Import property images by category
// Bedroom images
import bedroom1 from '@/assets/images/properties/flats-202/Bedroom/1.webp';
import bedroom2 from '@/assets/images/properties/flats-202/Bedroom/2.webp';
import bedroom3 from '@/assets/images/properties/flats-202/Bedroom/3.webp';

// Dining area images
import dining1 from '@/assets/images/properties/flats-202/Dining area/1.webp';
import dining2 from '@/assets/images/properties/flats-202/Dining area/2.webp';

// Full bathroom images
import bathroom1 from '@/assets/images/properties/flats-202/Full bathroom/1.webp';

// Full Kitchen images
import kitchen1 from '@/assets/images/properties/flats-202/Full kitchen/1.webp';
import kitchen2 from '@/assets/images/properties/flats-202/Full kitchen/2.webp';
import kitchen3 from '@/assets/images/properties/flats-202/Full kitchen/3.webp';

// Living room images
import living1 from '@/assets/images/properties/flats-202/Living room/1.webp';
import living2 from '@/assets/images/properties/flats-202/Living room/2.webp';
import living3 from '@/assets/images/properties/flats-202/Living room/3.webp';

const flats202ImageCategories = [
  {
    name: "Living Room",
    images: [living1, living2, living3]
  },
  {
    name: "Bedroom",
    images: [bedroom1, bedroom2, bedroom3]
  },
  {
    name: "Kitchen",
    images: [kitchen1, kitchen2, kitchen3]
  },
  {
    name: "Dining Area",
    images: [dining1, dining2]
  },
  {
    name: "Bathroom",
    images: [bathroom1]
  }
];

export default function Flats202Property() {
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
          Emerald Cozy Retreat - Austin, Texas
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex space-x-6 text-xl text-gray-600">
            <span className="flex items-center">
              <FontAwesomeIcon icon={faBed} className="mr-2" /> 1 Bed
            </span>
            <span className="flex items-center">
              <FontAwesomeIcon icon={faBath} className="mr-2" /> 1 Bath
            </span>
            <span className="flex items-center">
              <FontAwesomeIcon icon={faUsers} className="mr-2" /> Up to 6 Guests
            </span>
          </div>
        </div>
        <div className="lg:col-span-7">
          <hr className="border-gray-300 my-6 border-2 rounded-full mx-auto w-3/4" />
          <CategorizedImageGallery
            categories={flats202ImageCategories}
            propertyName="Flats 202"
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
                    🏡 Welcome to the Cozy Emerald Hideaway
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Your stylish retreat in the vibrant heart of South Congress. This modern 1BD/1BA condo perfectly balances charm and comfort for weekend getaways or extended visits.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                        <FontAwesomeIcon icon={faTv} className="mr-2" />
                        Living Space
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Queen futon sofa (sleeps 2)</li>
                        <li>• Futon bunk bed (sleeps 4)</li>
                        <li>• 50&quot; 4K Roku Smart TV</li>
                        <li>• Elegant coffee table with emerald accents</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                        <FontAwesomeIcon icon={faKitchenSet} className="mr-2" />
                        Kitchen & Dining
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Full-size modern appliances</li>
                        <li>• Coffee maker & toaster</li>
                        <li>• Complete cookware & utensils</li>
                        <li>• Deep sink with hot/cold water</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Guest Access Section */}
                <div className="bg-white/50 rounded-lg shadow-lg p-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-display tracking-tight">
                    Essential Amenities
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
                        <FontAwesomeIcon icon={faLock} className="mr-2" />
                        In-Unit Features
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Smart Lock Entry</li>
                        <li>• High-Speed Wi-Fi</li>
                        <li>• Work Desk Setup</li>
                        <li>• Premium Bedding</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
                        <FontAwesomeIcon icon={faSwimmingPool} className="mr-2" />
                        Building Amenities
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Sparkling Pool</li>
                        <li>• Free Parking</li>
                        <li>• On-Site Laundry</li>
                        <li>• Secure Building</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
                        <FontAwesomeIcon icon={faSnowflake} className="mr-2" />
                        Comfort & Climate
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Central AC/Heat</li>
                        <li>• Ceiling Fans</li>
                        <li>• Blackout Curtains</li>
                        <li>• Iron & Board</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Important Notes Section */}
                <div className="bg-white/50 rounded-lg shadow-lg p-6 mb-5">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-display tracking-tight">
                    Important Details to Note
                  </h2>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h3 className="text-lg font-medium text-gray-800 mb-2">
                        🐾 Pet Policy
                      </h3>
                      <p className="text-gray-600">
                        Well-behaved, house-trained pets welcome! Fees: $25/night | $100/week
                        | $300/month (Max 2 pets per stay)
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h3 className="text-lg font-medium text-gray-800 mb-2">
                        🧼 Cleaning Standards
                      </h3>
                      <p className="text-gray-600">
                        Each unit is thoroughly cleaned and sanitized to ensure a fresh,
                        welcoming environment for every guest.
                      </p>
                    </div>
                    <div className="p-4 bg-red-50 rounded-lg">
                      <h3 className="text-lg font-medium text-gray-800 mb-2">
                        ⚠️ House Rules
                      </h3>
                      <p className="text-gray-600">
                        No smoking indoors. No parties or events. Unauthorized gatherings
                        may result in cancellation without refund.
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
                  src="https://booking.hospitable.com/widget/9fc65099-955b-4d47-bae2-d379767ffe06/1871066"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}