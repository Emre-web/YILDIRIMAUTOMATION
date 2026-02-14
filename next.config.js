/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/emre-yildirim-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://emreyildirimx.github.io/emre-yildirim-portfolio/' : '',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
