import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // Skips ESLint during builds
  },
};

export default nextConfig;
