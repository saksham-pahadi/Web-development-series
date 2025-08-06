/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.smartslider3.com',
        port: '',
      },
    ],
  },
};

export default nextConfig;
