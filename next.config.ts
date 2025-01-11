import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: 'build',
  output: 'export',
  basePath: 'https://github.com/amarogamedev/rick-and-morty',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3-alpha-sig.figma.com',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
