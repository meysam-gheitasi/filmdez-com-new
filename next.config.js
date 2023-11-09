/** @type {import('next').NextConfig} */
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'swiperjs.com',
          port: '',
          pathname: '/demos/images/**',
        },
      ],
    },
  }