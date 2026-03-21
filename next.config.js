/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['yildirim-automation.vercel.app', 'emre-web.github.io'],
    unoptimized: false,
  },
};

module.exports = nextConfig;
