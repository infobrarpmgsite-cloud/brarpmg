"use client";

import "./globals.css";
import { Outfit, Manrope, Poppins, Inter, Lavishly_Yours, Quintessential } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import { useState, useEffect } from "react";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const lavishlyYours = Lavishly_Yours({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lavishly-yours",
  weight: ["400"],
});

const quintessential = Quintessential({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quintessential",
  weight: ["400"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" className={`${outfit.variable} ${manrope.variable} ${poppins.variable} ${inter.variable} ${lavishlyYours.variable} ${quintessential.variable}`}>
      <head>
        <title>BPMG Stays</title>
        <meta name="description" content="BPMG Stays" />
      </head>
      <body className="font-sans antialiased abstract-bg">
        <Loader isLoading={isLoading} />
        <Navigation />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
