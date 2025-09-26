import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '/',
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