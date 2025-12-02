"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navigation = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Properties", href: "/properties" },
    { name: "Things to Do", href: "/things-to-do" },
    { name: "Our Services", href: "/services" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav
      className="sticky top-0"
      style={{
        zIndex: 1000,
        backgroundColor: "white",
        boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="max-w-7xl mx-auto px-2 md:px-4 lg:px-8">
        <div className="flex justify-center items-center h-20">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center space-x-2">
              {/* Logo */}
              <div className="flex-shrink-0 select-none" onContextMenu={(e) => e.preventDefault()}>
                <Link href="/" className="flex items-center">
                  <Image
                    //src="https://infobrarpmgsite-cloud.github.io/brarpmg/Logo.PNG" 
                    src="/logo.png"
                    alt="BPMG STAYS"
                    width={400}
                    height={400}
                    className="h-25 w-auto object-contain pointer-events-none"
                    draggable={false}
                  />
                </Link>
              </div>
              
              {/* Brand Name */}
              <div className="flex-shrink-0 pr-15 lg:pr-10  lg:block">
                <Link href="/" className="flex items-center">
                  <h1 className="text-2xl font-bold text-[#1B2845] tracking-tight" style={{ fontFamily: 'Segoe UI, sans-serif' }}>BPMG STAYS</h1>
                </Link>
              </div>
            </div>
            
            {/* Burger Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-[#3B5FE3] hover:bg-gray-100 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`uppercase px-2 py-2 rounded-md text-lg font-medium text-black tracking-tight transition-colors duration-200 ${
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

          {/* Mobile Navigation Dropdown */}
          <div 
            className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out ${
              isMenuOpen 
                ? 'opacity-100 visible translate-y-0' 
                : 'opacity-0 invisible -translate-y-2'
            }`}
            style={{
              transformOrigin: 'top',
              zIndex: 50
            }}
          >
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    pathname === item.href
                      ? "text-[#3B5FE3] bg-[#3B5FE3]/10"
                      : "text-gray-700 hover:text-[#3B5FE3] hover:bg-gray-50"
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
