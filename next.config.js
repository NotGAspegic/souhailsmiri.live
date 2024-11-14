/**
 * @type {import('next').NextConfig}
 */

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  publicExcludes: ["!CVCYB.pdf"],
});

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: [
      "ucarecdn.com",
      "cdn.buymeacoffee.com",
      "res.cloudinary.com",
      "imgur.com",//images
      "i.imgur.com",//images
      "cutt.ly",
      "media.licdn.com",
      "activity-graph.herokuapp.com",
      "lh3.googleusercontent.com",//images
      "on-the-move.org",//images
      "i.scdn.co", // images from spotify
      "images.unsplash.com",//images
      "ikarus.sg",
    ],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
});