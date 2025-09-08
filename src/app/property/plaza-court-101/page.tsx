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
  faWifi,
  faDoorClosed,
} from "@fortawesome/free-solid-svg-icons";

// Import property images by category
// Bedroom images
import bedroom1 from '@/assets/images/properties/plaza-court-101/Bedroom/1.webp';
import bedroom2 from '@/assets/images/properties/plaza-court-101/Bedroom/2.webp';
import bedroom3 from '@/assets/images/properties/plaza-court-101/Bedroom/3.webp';
import bedroom4 from '@/assets/images/properties/plaza-court-101/Bedroom/4.webp';

// Dining area images
import dining1 from '@/assets/images/properties/plaza-court-101/Dining area/1.webp';
import dining2 from '@/assets/images/properties/plaza-court-101/Dining area/2.webp';

// Full bathroom images
import bathroom1 from '@/assets/images/properties/plaza-court-101/Full bathroom/1.webp';
import bathroom2 from '@/assets/images/properties/plaza-court-101/Full bathroom/2.webp';
import bathroom3 from '@/assets/images/properties/plaza-court-101/Full bathroom/3.webp';

// Full Kitchen images
import kitchen1 from '@/assets/images/properties/plaza-court-101/Full kitchen/1.webp';
import kitchen2 from '@/assets/images/properties/plaza-court-101/Full kitchen/2.webp';

// Living room images
import living1 from '@/assets/images/properties/plaza-court-101/Living room/1.webp';
import living2 from '@/assets/images/properties/plaza-court-101/Living room/2.webp';
import living3 from '@/assets/images/properties/plaza-court-101/Living room/3.webp';
import living4 from '@/assets/images/properties/plaza-court-101/Living room/4.webp';

const plazaCourt101ImageCategories = [
  {
    name: "Living Room",
    images: [living1, living2, living3, living4]
  },
  {
    name: "Bedroom",
    images: [bedroom1, bedroom2, bedroom3, bedroom4]
  },
  {
    name: "Kitchen",
    images: [kitchen1, kitchen2]
  },
  {
    name: "Dining Area",
    images: [dining1, dining2]
  },
  {
    name: "Bathroom",
    images: [bathroom1, bathroom2, bathroom3]
  }
];

export default function PlazaCourt101Property() {
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
          Modern Stay Near Downtown | Free Wi-Fi + Parking
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex space-x-6 text-xl text-gray-600">
            <span className="flex items-center">
              <FontAwesomeIcon icon={faBed} className="mr-2" /> 2 Bed
            </span>
            <span className="flex items-center">
              <FontAwesomeIcon icon={faBath} className="mr-2" /> 1 Bath
            </span>
            <span className="flex items-center">
              <FontAwesomeIcon icon={faUsers} className="mr-2" /> Up to 4 Guests
            </span>
          </div>
        </div>
        <div className="lg:col-span-7">
          <hr className="border-gray-300 my-6 border-2 rounded-full mx-auto w-3/4" />
          <CategorizedImageGallery
            categories={plazaCourt101ImageCategories}
            propertyName="Plaza Court 101"
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
                    🏡 Elegant Central Austin Retreat
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Tucked away in picturesque Central Austin, this thoughtfully designed 1BR/1BA sanctuary blends sleek modern style with cozy warmth—perfect for relaxation, work, or a weekend escape.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                        <FontAwesomeIcon icon={faTv} className="mr-2" />
                        Living Space
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Plush convertible sofa bed</li>
                        <li>• 65&quot; Smart TV with Roku</li>
                        <li>• Cozy armchairs & chic tables</li>
                        <li>• Soft ambient lighting</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                        <FontAwesomeIcon icon={faKitchenSet} className="mr-2" />
                        Kitchen & Dining
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Full modern appliance suite</li>
                        <li>• Multiple coffee makers & kettle</li>
                        <li>• Complete cooking essentials</li>
                        <li>• Dining for 8 (table + island)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Sleeping & Comfort Section */}
                <div className="bg-white/50 rounded-lg shadow-lg p-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-display tracking-tight">
                    Sleeping & Comfort
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
                        <FontAwesomeIcon icon={faBed} className="mr-2" />
                        Bedroom Suite
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• King-size bed</li>
                        <li>• 55&quot; Roku Smart TV</li>
                        <li>• Desk & chair setup</li>
                        <li>• Premium linens & lighting</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
                        <FontAwesomeIcon icon={faDoorClosed} className="mr-2" />
                        Bathroom
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Bathtub/shower combo</li>
                        <li>• Granite vanity & large mirror</li>
                        <li>• Fresh towels & toiletries</li>
                        <li>• Hair dryer provided</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Amenities Section */}
                <div className="bg-white/50 rounded-lg shadow-lg p-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-display tracking-tight">
                    Essential Amenities
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
                        <FontAwesomeIcon icon={faLock} className="mr-2" />
                        Security & Access
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Smart Lock Entry</li>
                        <li>• Secure Building</li>
                        <li>• Free Parking</li>
                        <li>• Easy Check-in</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
                        <FontAwesomeIcon icon={faSwimmingPool} className="mr-2" />
                        Shared Amenities
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Sparkling Pool</li>
                        <li>• Paid Laundry Facility</li>
                        <li>• Courtyard Access</li>
                        <li>• Peaceful Setting</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
                        <FontAwesomeIcon icon={faWifi} className="mr-2" />
                        Technology
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• High-Speed WiFi</li>
                        <li>• Smart TVs Throughout</li>
                        <li>• Streaming Services</li>
                        <li>• Work-Ready Setup</li>
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
                        Your safety and comfort are our priorities. Every unit is professionally 
                        cleaned and sanitized to ensure a spotless, welcoming space.
                      </p>
                    </div>
                    <div className="p-4 bg-red-50 rounded-lg">
                      <h3 className="text-lg font-medium text-gray-800 mb-2">
                        ⚠️ House Rules
                      </h3>
                      <p className="text-gray-600">
                        Indoor smoking is strictly prohibited. No parties or events. 
                        Please help us maintain a peaceful, respectful environment for everyone.
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
                  src="https://booking.hospitable.com/widget/9fc65099-955b-4d47-bae2-d379767ffe06/1591220"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}