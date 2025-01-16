// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Включает строгий режим React
  swcMinify: true, // Включает минимизацию через SWC
  images: {
    unoptimized: true, // Требуется, если вы используете Next.js без встроенного оптимизатора изображений на Netlify
  },
  trailingSlash: true, // Создает HTML-страницы для всех маршрутов (например, `/about` → `/about/index.html`)
  output: "standalone", // Позволяет Netlify обрабатывать приложение в серверной среде
};

module.exports = nextConfig;
