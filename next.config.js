/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i-m-all.com',
      },
    ],
  },
};

module.exports = nextConfig;
