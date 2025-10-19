/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
    /* config options here */
  devIndicators: false,
  images: {
    unoptimized: true,
  },
  crossOrigin: 'anonymous',
};

module.exports = nextConfig;
