/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.nightcafe.studio",
      },
    ],
  },
};

module.exports = nextConfig;
