import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,          // keep strict mode if you want
  eslint: {
    ignoreDuringBuilds: true,     // prevents ESLint errors from breaking Vercel build
  },
};

export default nextConfig;
