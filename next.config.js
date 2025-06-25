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
    if (process.env.NODE_ENV === 'production') {
      return [
        {
          source: '/:path*',
          missing: [
            { type: 'header', key: 'x-forwarded-proto', value: 'https' }
          ],
          destination: `https://mybartenders.co.uk/:path*`,
          permanent: true
        }
      ]
    }
    // No redirects in development
    return []
  }
}
