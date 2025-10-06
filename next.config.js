/** @type {import('next').NextConfig} */
const apiUrl = process.env.MY_PORTFOLIO_BACKEND_API_URL;

const nextConfig = {
    /* config options here */
  devIndicators: false,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${apiUrl}/api/:path*`,
      },
    ]
  },
  crossOrigin: 'anonymous',
};

module.exports = nextConfig;
