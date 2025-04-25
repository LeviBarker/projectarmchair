import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
      remotePatterns: [
          {
              protocol: "https",
              hostname: "static.wixstatic.com",
              pathname: "/media/**"
          },
          {
              protocol: "https",
              hostname: "firebasestorage.googleapis.com",
              pathname: "/v0/**"
          }
      ]
  }
};

export default nextConfig;
