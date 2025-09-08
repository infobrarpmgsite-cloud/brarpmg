"use client";

import CategorizedImageGallery from "@/components/CategorizedImageGallery";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faUsers,
  faTv,
  faSwimmingPool,
  faKitchenSet,
  faKey,
  faGamepad,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

// Import property images by category
// Bedroom images
import bedroom1 from '@/assets/images/properties/spanish-207/Bedroom/1.webp';
import bedroom2 from '@/assets/images/properties/spanish-207/Bedroom/2.webp';
import bedroom3 from '@/assets/images/properties/spanish-207/Bedroom/3.webp';

// Dining area images
import dining1 from '@/assets/images/properties/spanish-207/Dining area/1.webp';
import dining2 from '@/assets/images/properties/spanish-207/Dining area/2.webp';

// Full bathroom images
import bathroom1 from '@/assets/images/properties/spanish-207/Full bathroom/1.webp';
import bathroom2 from '@/assets/images/properties/spanish-207/Full bathroom/2.webp';

// Full Kitchen images
import kitchen1 from '@/assets/images/properties/spanish-207/Full kitchen/1.webp';
import kitchen2 from '@/assets/images/properties/spanish-207/Full kitchen/2.webp';
import kitchen3 from '@/assets/images/properties/spanish-207/Full kitchen/3.webp';

// Living room images
import living1 from '@/assets/images/properties/spanish-207/Living room/1.webp';
import living2 from '@/assets/images/properties/spanish-207/Living room/2.webp';
import living3 from '@/assets/images/properties/spanish-207/Living room/3.webp';
import living4 from '@/assets/images/properties/spanish-207/Living room/4.webp';

const spanish207ImageCategories = [
  {
    name: "Living Room",
    images: [living1, living2, living3, living4]
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
    images: [bathroom1, bathroom2]
  }
];

export default function Spanish207Property() {
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
          Stylish & Central /Perfect for F1 +Wi-Fi & Parking
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex space-x-6 text-xl text-gray-600">
            <span className="flex items-center">
              <FontAwesomeIcon icon={faBed} className="mr-2" /> 3 Bed
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
            categories={spanish207ImageCategories}
            propertyName="Spanish 207"
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
                    🏡 Welcome to Hyde Park Haven
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Experience relaxed, contemporary living in the heart of Hyde Park—one of Austin&lsquo;s most walkable and picturesque areas. This bright 1BR/1BA haven is ideal for couples, solo travelers, or small families.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                        <FontAwesomeIcon icon={faTv} className="mr-2" />
                        Living Space
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Convertible sofa bed</li>
                        <li>• Full-size extra bed</li>
                        <li>• 55&quot; Roku Smart TV</li>
                        <li>• Dedicated workspace</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                        <FontAwesomeIcon icon={faKitchenSet} className="mr-2" />
                        Kitchen & Dining
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Full appliance suite</li>
                        <li>• Multiple coffee options</li>
                        <li>• Air fryer & bread maker</li>
                        <li>• Dining for 6 total</li>
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
                        <li>• Premium linens</li>
                        <li>• Spacious closets</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
                        <FontAwesomeIcon icon={faHouse} className="mr-2" />
                        Bathroom
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Tub/shower combo</li>
                        <li>• Modern vanity</li>
                        <li>• Fresh towels</li>
                        <li>• Hair dryer</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Amenities Section */}
                <div className="bg-white/50 rounded-lg shadow-lg p-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-display tracking-tight">
                    Property Amenities
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
                        <FontAwesomeIcon icon={faKey} className="mr-2" />
                        Essential Features
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Smart Lock Entry</li>
                        <li>• Ultra-fast WiFi</li>
                        <li>• Climate Control</li>
                        <li>• Travel Crib</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
                        <FontAwesomeIcon icon={faSwimmingPool} className="mr-2" />
                        Outdoor Access
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Sparkling Pool</li>
                        <li>• BBQ Area</li>
                        <li>• Outdoor Lounge</li>
                        <li>• Free Parking</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
                        <FontAwesomeIcon icon={faGamepad} className="mr-2" />
                        Entertainment
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Smart TVs</li>
                        <li>• Board Games</li>
                        <li>• Streaming Apps</li>
                        <li>• Fast Internet</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Important Notes Section */}
                <div className="bg-white/50 rounded-lg shadow-lg p-6 mb-5">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-display tracking-tight">
                    Important Details
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
                        Your comfort and safety are top priority. Each unit is meticulously 
                        cleaned and sanitized to ensure a pristine, welcoming environment.
                      </p>
                    </div>
                    <div className="p-4 bg-red-50 rounded-lg">
                      <h3 className="text-lg font-medium text-gray-800 mb-2">
                        ⚠️ House Rules
                      </h3>
                      <p className="text-gray-600">
                        No smoking indoors. No parties or events. Help us maintain a 
                        peaceful and respectful atmosphere for everyone.
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
                  src="https://booking.hospitable.com/widget/9fc65099-955b-4d47-bae2-d379767ffe06/1604860"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}