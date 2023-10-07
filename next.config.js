/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: true,
  compress: true,
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
  },
};

module.exports = nextConfig;
