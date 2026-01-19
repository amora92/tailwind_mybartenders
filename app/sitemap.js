// app/sitemap.js

const BASE_URL = 'https://mybartenders.co.uk'

// Static pages with their priorities
const staticPages = [
  { path: '', priority: 1, changeFrequency: 'weekly' },
  { path: '/mobile-bar-hire-northampton', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/wedding-bar-hire', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/services', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/gallery', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/aboutus', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/faq', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/pricing', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/contact_us', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/articles', priority: 0.8, changeFrequency: 'daily' }
]

async function fetchArticles() {
  try {
    // In build time, we need to fetch from the database directly
    // This is a simplified version that works during build
    const { MongoClient } = await import('mongodb')

    const uri = process.env.MONGODB_URI
    if (!uri) {
      console.warn('MONGODB_URI not set, skipping dynamic article sitemap')
      return []
    }

    const client = new MongoClient(uri)
    await client.connect()

    const db = client.db(process.env.MONGODB_DB || 'mydatabase')
    const articles = await db
      .collection('articles')
      .find({})
      .project({ slug: 1, updatedAt: 1, publishedAt: 1 })
      .toArray()

    await client.close()

    return articles.map(article => ({
      url: `${BASE_URL}/articles/${article.slug}`,
      lastModified: article.updatedAt || article.publishedAt || new Date(),
      changeFrequency: 'weekly',
      priority: 0.6
    }))
  } catch (error) {
    console.error('Error fetching articles for sitemap:', error)
    return []
  }
}

export default async function sitemap() {
  // Generate static page entries
  const staticEntries = staticPages.map(page => ({
    url: `${BASE_URL}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority
  }))

  // Fetch dynamic article entries
  const articleEntries = await fetchArticles()

  return [...staticEntries, ...articleEntries]
}
