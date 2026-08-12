import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : undefined,
  basePath: isGitHubPages ? "/drkordy-arabic-autocaption" : undefined,
  assetPrefix: isGitHubPages ? "/drkordy-arabic-autocaption/" : undefined,
  trailingSlash: true,
  images: { unoptimized: true },
  typescript: { ignoreBuildErrors: isGitHubPages },
};

export default nextConfig;
