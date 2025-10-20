"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Things to Do", href: "/things-to-do" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav
      className="sticky top-0"
      style={{
        zIndex: 1000,
        backgroundColor: "#4F4F4F",
        boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="max-w-7xl mx-auto px-14 sm:px-8 lg:px-8">
        <div className="flex justify-center items-center h-20">
          <div className="flex items-center space-x-2">
            {/* Logo */}
            <div className="flex-shrink-0 rounded-full p-1 bg-white select-none" onContextMenu={(e) => e.preventDefault()}>
              <Link href="/" className="flex items-center">
                <Image
                   // src="https://infobrarpmgsite-cloud.github.io/brarpmg/Logo.PNG" 
                   src="/Logo.PNG"
                  alt="BPMG STAYS"
                  width={400}
                  height={400}
                  className="h-12 w-auto object-contain pointer-events-none"
                  draggable={false}
                />
              </Link>
            </div>
            
            {/* Brand Name */}
            <div className="flex-shrink-0 pr-15 lg:pr-10 hidden lg:block">
              <Link href="/" className="flex items-center">
                <h1 className="text-2xl font-bold text-[#B4B4B4]/90 tracking-tight " style={{ fontFamily: 'Segoe UI, sans-serif' }}>BPMG Stays</h1>
              </Link>
            </div>
            
            {/* Navigation items */}
            <div className="flex items-center space-x-4 sm:pl-15 md:pl-15  lg:pl-0">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`uppercase px-2 py-2 rounded-md text-xs sm:text-sm md:text-base lg:text-lg font-medium text-white tracking-tight transition-colors duration-200 ${
                    pathname === item.href
                      ? "text-brand-white bg-brand-primary border-b-2 border-[#3B5FE3]"
                      : "text-brand-white hover:text-brand-white hover:bg-[#3B5FE3]/30"
                  }`}
                  style={{ fontFamily: 'Segoe UI, sans-serif' }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
