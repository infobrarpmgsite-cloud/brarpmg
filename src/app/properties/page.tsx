import IframeWidget from "@/components/IframeWidget";

export default function Properties() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Our Properties
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover our collection of premium properties. Each property offers 
          unique amenities and exceptional experiences.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Property Listings
          </h2>
          <IframeWidget
            src="https://example.com/property-listings"
            title="Property Listings Widget"
            height="600px"
          />
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Featured Properties
          </h2>
          <IframeWidget
            src="https://example.com/featured-properties"
            title="Featured Properties Widget"
            height="600px"
          />
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
          Property Search & Filters
        </h2>
        <IframeWidget
          src="https://example.com/property-search-filters"
          title="Property Search & Filters Widget"
          height="500px"
        />
      </div>
    </div>
  );
}
