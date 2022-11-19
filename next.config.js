/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/yheenca/image/upload/**",
      },
      {
        protocol: "https",
        hostname: "musica-api.up.railway.app",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
