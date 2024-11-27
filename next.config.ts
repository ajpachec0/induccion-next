import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "raw.githubusercontent.com",
        protocol: "https",
      },
      {
        hostname: "loremflickr.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
