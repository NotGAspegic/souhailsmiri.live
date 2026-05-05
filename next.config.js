/**
 * @type {import('next').NextConfig}
 */

module.exports = {
  reactStrictMode: true,
  images: {
    qualities: [75, 100],
    remotePatterns: [
      { protocol: "https", hostname: "ucarecdn.com" },
      { protocol: "https", hostname: "cdn.buymeacoffee.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "imgur.com" },
      { protocol: "https", hostname: "i.imgur.com" },
      { protocol: "https", hostname: "cutt.ly" },
      { protocol: "https", hostname: "media.licdn.com" },
      { protocol: "https", hostname: "activity-graph.herokuapp.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "content.linkedin.com" },
      { protocol: "https", hostname: "cert.efset.org" },
      { protocol: "https", hostname: "placehold.co" },
      { protocol: "https", hostname: "on-the-move.org" },
      { protocol: "https", hostname: "i.scdn.co" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "ikarus.sg" },
    ],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  webpack: (config) => {
    const existingIgnored = config.watchOptions?.ignored;
    const ignored = Array.isArray(existingIgnored)
      ? existingIgnored.filter((pattern) => typeof pattern === "string" && pattern.length > 0)
      : typeof existingIgnored === "string" && existingIgnored.length > 0
        ? [existingIgnored]
        : [];

    config.watchOptions = {
      ...config.watchOptions,
      ignored: [
        ...ignored,
        "**/DumpStack.log.tmp",
        "**/hiberfil.sys",
        "**/pagefile.sys",
        "**/swapfile.sys",
        "C:/DumpStack.log.tmp",
        "C:/hiberfil.sys",
        "C:/pagefile.sys",
        "C:/swapfile.sys",
      ],
    };

    return config;
  },
};
