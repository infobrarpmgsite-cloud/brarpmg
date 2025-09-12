"use client";

import "./globals.css";
import { Outfit, Manrope } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${manrope.variable}`}>
      <head>
        <title>BRAR PMG</title>
        <meta name="description" content="BRAR Property Management Group" />
      </head>
      <body className="font-sans antialiased">
        <Navigation />
        {/* <main style={{ background: "linear-gradient(to bottom, #efefef, #efefef, #4F4F4F)" }}>{children}</main> */}
        <main style={{ backgroundColor: "#4F4F4F" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
