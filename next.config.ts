import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      { hostname: "storage.googleapis.com" },
      { hostname: "zegora-foreign-employment-agent-et.lovable.app" },
    ],
  },
};

export default nextConfig;