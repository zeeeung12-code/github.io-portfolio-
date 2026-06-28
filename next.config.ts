import type { NextConfig } from "next";

// For GitHub Pages project sites the app is served from /<repo>. The deploy
// workflow injects NEXT_PUBLIC_BASE_PATH; locally it is empty (served at /).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  images: {
    // GitHub Pages has no Node server → disable on-the-fly optimization.
    // Images are already pre-optimized to WebP.
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    qualities: [75, 90, 95],
  },
};

export default nextConfig;
