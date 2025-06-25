// next-sitemap.config.js
module.exports = {
  siteUrl: 'https://mybartenders.co.uk',
  generateRobotsTxt: true,
  exclude: ['/admin', '/private/*', '/dashboard'],
  priority: 0.7, // Default priority
  changefreq: 'weekly',
  transform: async (config, path) => {
    // Custom priorities for key pages
    let priority = config.priority
    if (path === '/') priority = 1.0
    if (path.includes('/mobile-bar-hire-northampton')) priority = 0.9
    if (path.includes('/wedding')) priority = 0.8
    if (path.includes('/blog')) priority = 0.6

    return {
      loc: path,
      priority,
      lastmod: new Date().toISOString(),
      changefreq: config.changefreq
    }
  },
  additionalPaths: async config => {
    // No additional manual paths for now
    return []
  }
}
