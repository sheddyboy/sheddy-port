/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      process.env.NEXT_PUBLIC_SERVER_DOMAIN,
      "https://res.cloudinary.com",
    ],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
