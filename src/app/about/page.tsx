import IframeWidget from "@/components/IframeWidget";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          About BRAR PMG
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We are a leading property management company dedicated to providing 
          exceptional service and innovative solutions for property owners and tenants.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Our Story
          </h2>
          <IframeWidget
            src="https://example.com/our-story"
            title="Our Story Widget"
            height="400px"
          />
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Our Team
          </h2>
          <IframeWidget
            src="https://example.com/our-team"
            title="Our Team Widget"
            height="400px"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Our Values
          </h2>
          <IframeWidget
            src="https://example.com/our-values"
            title="Our Values Widget"
            height="400px"
          />
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Company Timeline
          </h2>
          <IframeWidget
            src="https://example.com/company-timeline"
            title="Company Timeline Widget"
            height="400px"
          />
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
          Awards & Recognition
        </h2>
        <IframeWidget
          src="https://example.com/awards-recognition"
          title="Awards & Recognition Widget"
          height="500px"
        />
      </div>
    </div>
  );
}
