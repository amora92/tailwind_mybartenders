/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://mybartenders.co.uk',
  generateRobotsTxt: true,
  exclude: ['/admin*', '/admin/*', '/admin/**', '/studio*', '/studio/*'],
  outDir: './public',
  additionalPaths: async (config) => {
    const result = []

    // Add dynamic article paths from MongoDB
    try {
      const { MongoClient } = require('mongodb')
      const uri = process.env.MONGODB_URI
      if (uri) {
        const client = new MongoClient(uri)
        await client.connect()
        const db = client.db(process.env.MONGODB_DB || 'mybartenders')
        const articles = await db
          .collection('articles')
          .find({ status: { $ne: 'draft' } })
          .project({ slug: 1, publishedAt: 1 })
          .toArray()

        for (const article of articles) {
          result.push({
            loc: `/articles/${article.slug}`,
            changefreq: 'weekly',
            priority: 0.7,
            lastmod: article.publishedAt ? new Date(article.publishedAt).toISOString() : new Date().toISOString()
          })
        }
        await client.close()
      }
    } catch (error) {
      console.error('Error fetching articles for sitemap:', error)
    }

    return result
  },
  robotsTxtOptions: {
    additionalSitemaps: [],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/studio']
      }
    ]
  }
}
