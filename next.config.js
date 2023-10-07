/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: true,
  compress: true,
  experimental: {
    appDir: true,  
  },
};

module.exports = nextConfig;
