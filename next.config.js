/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'bg'],
    defaultLocale: 'en',
    localeDetection: true,
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*',
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'accept-language',
            value: '(?<lang>.*?)',
          },
        ],
        destination: '/:lang/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
