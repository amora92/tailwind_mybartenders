const { MongoClient } = require('mongodb')

const siteUrl = 'https://mybartenders.co.uk'

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  exclude: ['/admin*', '/admin/*', '/admin/**'], // <-- important
  outDir: './public',
  additionalPaths: async (config) => {
    const uri = process.env.MONGODB_URI

    if (!uri) {
      return []
    }

    const client = new MongoClient(uri)

    try {
      await client.connect()
      const db = client.db(process.env.MONGODB_DB || 'mydatabase')
      const articles = await db
        .collection('articles')
        .find({ status: { $ne: 'draft' } })
        .project({ slug: 1, updatedAt: 1, publishedAt: 1 })
        .toArray()

      return articles
        .filter(article => article.slug)
        .map(article => ({
          loc: `/articles/${article.slug}`,
          lastmod: article.updatedAt || article.publishedAt || new Date().toISOString(),
          changefreq: 'weekly',
          priority: 0.7
        }))
    } catch (error) {
      console.error('next-sitemap article generation failed:', error)
      return []
    } finally {
      await client.close()
    }
  }
}
