// next.config.js
module.exports = {
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    path: '/_next/image'
  },
  async redirects () {
    return [
      // Force HTTPS and www for all HTTP requests
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'mybartenders.co.uk'
          }
        ],
        destination: 'https://www.mybartenders.co.uk/:path*',
        permanent: true
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'http://mybartenders.co.uk'
          }
        ],
        destination: 'https://www.mybartenders.co.uk/:path*',
        permanent: true
      },
      // Catch-all for any remaining HTTP requests
      {
        source: '/:path*',
        missing: [
          {
            type: 'host',
            value: 'www.mybartenders.co.uk'
          },
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'https'
          }
        ],
        destination: 'https://www.mybartenders.co.uk/:path*',
        permanent: true
      }
    ]
  }
}
