import IframeWidget from "@/components/IframeWidget";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Contact Us
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Get in touch with our team. We&apos;re here to help with all your property 
          management needs and answer any questions you may have.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Contact Form
          </h2>
          <IframeWidget
            src="https://example.com/contact-form"
            title="Contact Form Widget"
            height="500px"
          />
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Office Locations
          </h2>
          <IframeWidget
            src="https://example.com/office-locations"
            title="Office Locations Widget"
            height="500px"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Business Hours
          </h2>
          <IframeWidget
            src="https://example.com/business-hours"
            title="Business Hours Widget"
            height="300px"
          />
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Emergency Contact
          </h2>
          <IframeWidget
            src="https://example.com/emergency-contact"
            title="Emergency Contact Widget"
            height="300px"
          />
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
          Frequently Asked Questions
        </h2>
        <IframeWidget
          src="https://example.com/faq"
          title="FAQ Widget"
          height="600px"
        />
      </div>
    </div>
  );
}
