"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backgroundColor: "white",
        boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8">
        <div className="flex justify-between h-24">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/" className="flex items-center h-full ml-10">
                  <Image
                    src="/Logo.PNG"
                    alt="BPMG STAYS"
                    width={300}
                    height={100}
                    className="h-24 w-auto object-contain"
                  />
                </Link>
              </div>
            </div>
          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-4 rounded-md text-lg font-medium transition-colors duration-200 ${
                  pathname === item.href
                    ? "text-brand-white bg-brand-primary"
                    : "text-brand-white hover:text-brand-white hover:bg-brand-primary"
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
