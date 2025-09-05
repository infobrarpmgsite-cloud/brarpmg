'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathname = usePathname();

  // Get the base path from Next.js config
  const basePath = process.env.NODE_ENV === 'production' ? '/brarpmg' : '';
  
  const navItems = [
    { name: 'Home', href: `${basePath}/` },
    { name: 'About Us', href: `${basePath}/about` },
    { name: 'Contact Us', href: `${basePath}/contact` },
  ];

  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-3xl font-bold text-white">BRAR PMG</h1>
            </div>
          </div>
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-3 rounded-md text-base font-medium transition-colors duration-200 ${
                  pathname === item.href || (basePath && pathname === item.href.replace(basePath, ''))
                    ? 'text-white bg-blue-700'
                    : 'text-blue-100 hover:text-white hover:bg-blue-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
