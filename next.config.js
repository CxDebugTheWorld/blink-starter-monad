/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["example.com"], // 添加你的图片域名
  },
};

module.exports = nextConfig; 