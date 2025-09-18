import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">BPMG STAYS</h3>
            <p className="text-brand-lightGray mb-4">
              Premium property management and accommodation services tailored to your needs. 
              We provide comprehensive solutions for property owners and guests.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-brand-lightGray hover:text-brand-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-brand-lightGray hover:text-brand-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/properties" className="text-brand-lightGray hover:text-brand-white transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-brand-lightGray hover:text-brand-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/search" className="text-brand-lightGray hover:text-brand-white transition-colors">
                  Property Search
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="text-brand-lightGray space-y-2">
              <p>Email: info@bpmgstays.com</p>
              <p>Phone: (555) 123-4567</p>
              <p>Address: 123 Property St, City, State 12345</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-brand-darkGray mt-8 pt-8 text-center">
          <p className="text-brand-lightGray">
            © {new Date().getFullYear()} BPMG STAYS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;