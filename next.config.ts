import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Pin the workspace root so Turbopack doesn't infer it from a stray
  // lockfile in a parent directory.
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
