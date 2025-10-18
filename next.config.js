/** @type {import('next').NextConfig} */
const apiUrl = process.env.MY_PORTFOLIO_BACKEND_API_URL || "http://localhost:8080";

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
