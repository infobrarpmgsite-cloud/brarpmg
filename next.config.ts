import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'infobrarpmgsite-cloud.github.io',
      },
    ],
  },
  // output: 'export',
  // trailingSlash: true,
  // images: {
  //   unoptimized: true
  // },
  // // Configure for GitHub Pages deployment
  // basePath: process.env.NODE_ENV === 'production' ? '/brar-pmg' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/brar-pmg' : '',
};

export default nextConfig;