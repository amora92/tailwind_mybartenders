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
    // Only apply redirects in production
    if (process.env.NODE_ENV !== 'production') {
      return []
    }

    return [
      {
        // Only redirect HTTP to HTTPS (not all requests)
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'mybartenders.co.uk'
          },
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http'
          }
        ],
        destination: 'https://mybartenders.co.uk/:path*',
        permanent: true
      }
    ]
  }
}
