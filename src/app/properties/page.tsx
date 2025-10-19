import PropertyShowcase from "@/components/PropertyShowcase";
import { propertiesData } from "@/utils/propertiesData";

export default function Properties() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Segoe UI, sans-serif' }}>
            Our Properties
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Segoe UI, sans-serif' }}>
            Discover our collection of premium properties. Each property offers 
            unique amenities and exceptional experiences tailored for your comfort.
          </p>
        </div>

        {/* Properties Showcase Grid */}
        <div className="space-y-8">
          {propertiesData.map((property) => (
            <PropertyShowcase key={property.id} property={property} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Segoe UI, sans-serif' }}>
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto" style={{ fontFamily: 'Segoe UI, sans-serif' }}>
            Contact us directly and we&apos;ll help you find the perfect property for your needs.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            style={{ fontFamily: 'Segoe UI, sans-serif' }}
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
