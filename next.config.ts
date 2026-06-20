import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      { hostname: "storage.googleapis.com" },
      { hostname: "zegoraagency.com" },
    ],
  },
};

export default nextConfig;
