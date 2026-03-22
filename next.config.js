/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'yildirim-automation.vercel.app', 'emre-web.github.io'],
    unoptimized: false,
  },
};

module.exports = nextConfig;
