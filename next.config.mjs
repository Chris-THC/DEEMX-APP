/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Si necesitas imágenes sin optimización
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Nueva configuración para exportación estática
  // output: 'standalone',
};

export default nextConfig;
