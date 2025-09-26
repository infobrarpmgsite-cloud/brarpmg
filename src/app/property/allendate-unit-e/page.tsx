"use client";

import CategorizedImageGallery from "@/components/CategorizedImageGallery";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faUsers,
  faLaptop,
  faKitchenSet,
  faKey,
  faCar,
  faLock,
  faClock
} from "@fortawesome/free-solid-svg-icons";

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
    <div className="container mx-auto px-2 py-6">
      <div className="bg-white/30">
        <div className="lg:col-span-7 px-4 py-4">
          <div className=" p-4 md:p-6">
          <div className="flex flex-col justify-center items-center h-auto py-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1B2845] font-display tracking-tight text-center px-4">
            Allendate Unit E - Premium Austin Retreat
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-wrap justify-center gap-4 md:space-x-6 text-lg md:text-xl text-[#1B2845]/50 px-4">
            <span className="flex items-center">
              <FontAwesomeIcon icon={faBed} className="mr-2" /> 2 Bed
            </span>
            <span className="flex items-center">
              <FontAwesomeIcon icon={faBath} className="mr-2" /> 2 Bath
            </span>
            <span className="flex items-center">
              <FontAwesomeIcon icon={faUsers} className="mr-2" /> Up to 4 Guests
            </span>
          </div>
        </div>
          <hr className="border-[#3B5FE3] my-6 border-4 rounded-full mx-auto w-3/4 box-shadow-xl/30" />

          <CategorizedImageGallery
            categories={allendateImageCategories}
            propertyName="Allendate Unit E"
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
                    Experience luxury and comfort at Allendate Unit E. This premium property offers 
                    exceptional amenities and stunning views for an unforgettable stay.
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
                        <li>• 10 min to Downtown</li>
                        <li>• 15 min to Airport</li>
                        <li>• Near major attractions</li>
                        <li>• Easy access to highways</li>
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
                        <li>• 2 modern bathrooms</li>
                        <li>• Air conditioning</li>
                        <li>• Dining for 4</li>
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
                        <li>• Dining for 4 total</li>
                      </ul>
                    </div>
                    <div className="sm:col-span-2 md:col-span-1">
                      <h3 className="text-lg font-medium text-gray-300 mb-3 flex items-center">
                        <FontAwesomeIcon icon={faLock} className="mr-2" />
                        Added Conveniences
                      </h3>
                      <ul className="space-y-2 text-gray-300">
                        <li>• Free parking</li>
                        <li>• Secure building</li>
                        <li>• Smart entry</li>
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
                    src="https://booking.hospitable.com/widget/9fc65099-955b-4d47-bae2-d379767ffe06/1939010"
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
