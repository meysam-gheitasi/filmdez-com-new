/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        port: '',
        pathname: '/images/M/**',
      },
      {
        protocol: 'https',
        hostname: 'filmdez.com',
        port: '',
        pathname: '/wp-content/**',
      },
    ],
  },
};
