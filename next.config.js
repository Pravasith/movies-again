/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: ["picsum.photos"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        // pathname: '/account123/**',
      },
    ],
  },
};

module.exports = nextConfig;
