"use client";

import CategorizedImageGallery from "@/components/CategorizedImageGallery";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faUsers,
  faWifi,
  faTv,
  faKey,
  faSwimmingPool,
  faKitchenSet,
} from "@fortawesome/free-solid-svg-icons";

// [Previous imports remain the same...]
// Import property images by category
// Bedroom images
import bedroom1 from "@/assets/images/properties/vip-107/Bedroom/image1.webp";
import bedroom2 from "@/assets/images/properties/vip-107/Bedroom/image2.webp";
import bedroom3 from "@/assets/images/properties/vip-107/Bedroom/image3.webp";
import bedroom4 from "@/assets/images/properties/vip-107/Bedroom/image4.jpeg";

// Dining area images
import dining1 from "@/assets/images/properties/vip-107/Dining area/image1.webp";

// Full bathroom images
import bathroom1 from "@/assets/images/properties/vip-107/Full bathroom/image1.webp";
import bathroom2 from "@/assets/images/properties/vip-107/Full bathroom/image2.webp";

// Full Kitchen images
import kitchen1 from "@/assets/images/properties/vip-107/Full Kitchen/image1.webp";
import kitchen2 from "@/assets/images/properties/vip-107/Full Kitchen/image2.webp";
import kitchen3 from "@/assets/images/properties/vip-107/Full Kitchen/image3.webp";

// Living room images
import living1 from "@/assets/images/properties/vip-107/Living room/image1.webp";
import living2 from "@/assets/images/properties/vip-107/Living room/image2.webp";
import living3 from "@/assets/images/properties/vip-107/Living room/image3.webp";
import living4 from "@/assets/images/properties/vip-107/Living room/image4.webp";
import living5 from "@/assets/images/properties/vip-107/Living room/image5.webp";
import living6 from "@/assets/images/properties/vip-107/Living room/image6.webp";

// Pool images
import pool1 from "@/assets/images/properties/vip-107/Pool/image1.webp";
import pool2 from "@/assets/images/properties/vip-107/Pool/image2.webp";

const vip107ImageCategories = [
  {
    name: "Bedroom",
    images: [bedroom1, bedroom2, bedroom3, bedroom4],
  },
  {
    name: "Living Room",
    images: [living1, living2, living3, living4, living5, living6],
  },
  {
    name: "Full Kitchen",
    images: [kitchen1, kitchen2, kitchen3],
  },
  {
    name: "Full Bathroom",
    images: [bathroom1, bathroom2],
  },
  {
    name: "Pool",
    images: [pool1, pool2],
  },
  {
    name: "Dining Area",
    images: [dining1],
  },
];

export default function Vip107Property() {
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
            Cozy & Central ~ UT/Moody ~ Pool ~ Parking ~ WiFi
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex space-x-6 text-xl text-gray-600">
            <span className="flex items-center">
              <FontAwesomeIcon icon={faBed} className="mr-2" /> 4 Bed
            </span>
            <span className="flex items-center">
              <FontAwesomeIcon icon={faBath} className="mr-2" /> 2 Bath
            </span>
            <span className="flex items-center">
              <FontAwesomeIcon icon={faUsers} className="mr-2" /> Up to 6 Guests
            </span>
          </div>
        </div>
        <div className="lg:col-span-7">
          <hr className="border-gray-300 my-6 border-2 rounded-full mx-auto w-3/4" />
          <CategorizedImageGallery
            categories={vip107ImageCategories}
            propertyName="VIP-107"
          />
          <hr className="border-gray-300 my-6 border-2 rounded-full mx-auto w-3/4" />
        </div>
        <div>
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
              {/* Main Content - 70% on large screens */}
              <div className="lg:col-span-7 space-y-8">
                {/* Your Property Section */}
                <div className="bg-white/50 rounded-lg shadow-sm p-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-display tracking-tight">
                    🏡 Welcome to Your Chic Central Austin Retreat
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Step into a bright 1BR/1BA sanctuary where modern style
                    meets cozy charm—ideal for relaxing, working, or exploring.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                        <FontAwesomeIcon icon={faTv} className="mr-2" />
                        Living Room
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Sofa bed for extra sleeping space</li>
                        <li>• Ergonomic workspace</li>
                        <li>• 65&quot; Smart TV with Roku</li>
                        <li>• Lounge chairs & soft lighting</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                        <FontAwesomeIcon icon={faKitchenSet} className="mr-2" />
                        Kitchen & Dining
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Fully equipped with modern appliances</li>
                        <li>• Keurig & drip coffee makers</li>
                        <li>• Full fridge/freezer & deep sink</li>
                        <li>• Dining table for 4 + island seating</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Guest Access Section */}
                <div className="bg-white/50 rounded-lg shadow-sm p-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-display tracking-tight">
                    Essential Amenities
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
                        <FontAwesomeIcon icon={faKey} className="mr-2" />
                        In-Unit Essentials
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Smart Lock Entry</li>
                        <li>• High-Speed Wi-Fi</li>
                        <li>• AC & Heating</li>
                        <li>• Iron & Board</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
                        <FontAwesomeIcon
                          icon={faSwimmingPool}
                          className="mr-2"
                        />
                        Outdoor & Shared
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Sparkling Outdoor Pool</li>
                        <li>• On-Site Paid Laundry</li>
                        <li>• Free Parking</li>
                        <li>• BBQ grill (shared)</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
                        <FontAwesomeIcon icon={faWifi} className="mr-2" />
                        Entertainment
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Smart TVs in all rooms</li>
                        <li>• Streaming services</li>
                        <li>• Board games</li>
                        <li>• High-speed internet</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Important Notes Section */}
                <div className="bg-white/50 rounded-lg shadow-sm p-6 mb-5">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-display tracking-tight">
                    Important Details to Note
                  </h2>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h3 className="text-lg font-medium text-gray-800 mb-2">
                        🐾 Pet Policy
                      </h3>
                      <p className="text-gray-600">
                        House-trained pets welcome! Fees: $25/night | $100/week
                        | $300/month (Max 2 pets)
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h3 className="text-lg font-medium text-gray-800 mb-2">
                        🧼 Cleaning Standards
                      </h3>
                      <p className="text-gray-600">
                        Every unit is professionally cleaned and sanitized to
                        the highest standards.
                      </p>
                    </div>
                    <div className="p-4 bg-red-50 rounded-lg">
                      <h3 className="text-lg font-medium text-gray-800 mb-2">
                        ⚠️ House Rules
                      </h3>
                      <p className="text-gray-600">
                        No smoking indoors. No parties or events. Unauthorized
                        gatherings may result in immediate cancellation.
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
                  src="https://booking.hospitable.com/widget/9fc65099-955b-4d47-bae2-d379767ffe06/1581300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
