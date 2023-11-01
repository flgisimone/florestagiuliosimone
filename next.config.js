/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
      ],
    },
    rules: {
      "react/jsx-key": "error",
    },
};

module.exports = nextConfig
