import Link from 'next/link';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#1B2845] to-[#3B5FE3] text-white py-32 md:py-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl font-light text-blue-100 max-w-3xl mx-auto" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Have questions? We&apos;re here to help and ready to assist you.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Essential Contact Info */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Phone */}
            <div className="text-center">
              <div className="mb-4 text-5xl">📞</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Call Us
              </h2>
              <p className="text-lg text-gray-600 mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Available 24/7
              </p>
              <a href="tel:+1512XXXXXXX" className="text-2xl font-semibold text-[#3B5FE3] hover:underline" style={{ fontFamily: 'Poppins, sans-serif' }}>
              1-888-777-0870
              </a>
              <div className="mt-4 p-4 bg-blue-50 border-l-4 border-[#3B5FE3] rounded-r-lg">
                <p className="text-sm text-gray-700 leading-relaxed text-left" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  <span className="font-semibold text-[#3B5FE3]">📋 Note:</span> Please note that this contact number is designated for voice calls only. For prompt assistance, please reach out via phone call. Thank you for your understanding and cooperation.
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="text-center">
              <div className="mb-4 text-5xl">📧</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Email Us
              </h2>
              <p className="text-lg text-gray-600 mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>
                We respond within 24 hours
              </p>
              <a href="mailto:info@bpmgstays.com" className="text-2xl font-semibold text-[#3B5FE3] hover:underline" style={{ fontFamily: 'Poppins, sans-serif' }}>
              info@brarpmg.com
              </a>
            </div>
          </div>
        

          {/* CTA Box */}
          <div className="bg-gradient-to-r from-[#1B2845] to-[#3B5FE3] text-white rounded-lg p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Ready to Experience BPMG Stays?
            </h2>
            <p className="text-lg mb-8 leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Explore our properties and book your perfect stay today.
            </p>
            <Link
              href="/properties"
              className="inline-block bg-white text-[#1B2845] font-bold py-4 px-10 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              View Properties
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
