import { connectToDatabase } from '../../lib/mongodb'

export default async (req, res) => {
  // Handle POST requests (create new article)
  if (req.method === 'POST') {
    try {
      const { db } = await connectToDatabase()
      console.log('Connected to MongoDB')

      const {
        title,
        description,
        imageUrl,
        slug,
        publishedAt,
        category,
        contentSections,
        author,
        readTime,
        seo
      } = req.body

      // Validate required fields
      if (!title || !description || !imageUrl || !slug || !publishedAt) {
        console.error('Missing required fields:', {
          title,
          description,
          imageUrl,
          slug,
          publishedAt
        })
        return res.status(400).json({ error: 'Missing required fields' })
      }

      // Create the article document
      const article = {
        title,
        description,
        imageUrl,
        slug,
        publishedAt: new Date(publishedAt).toISOString(),
        category: category || 'General',
        contentSections: contentSections || [],
        author,
        readTime,
        seo,
        createdAt: new Date(),
        updatedAt: new Date()
      }

      console.log('Attempting to insert article:', article)

      const result = await db.collection('articles').insertOne(article)

      console.log('Article inserted successfully:', result)

      return res.status(201).json({
        ...article,
        _id: result.insertedId
      })
    } catch (error) {
      console.error('Error creating article:', error)
      return res.status(500).json({
        error: 'Failed to create article',
        details: error.message
      })
    }
  }

  // Handle GET requests (fetch all articles)
  if (req.method === 'GET') {
    try {
      const { db } = await connectToDatabase()
      console.log('Connected to MongoDB')

      // Find all articles and sort by publishedAt in descending order
      const articles = await db
        .collection('articles')
        .find({})
        .sort({ publishedAt: -1 })
        .toArray()

      // Format dates properly
      const formattedArticles = articles.map(article => ({
        ...article,
        publishedAt: article.publishedAt
          ? new Date(article.publishedAt).toISOString()
          : null,
        createdAt: article.createdAt
          ? new Date(article.createdAt).toISOString()
          : null
      }))

      // Return empty array if no articles found
      return res.status(200).json(formattedArticles || [])
    } catch (error) {
      console.error('Error fetching articles:', error)
      return res.status(500).json({
        error: 'Internal server error',
        message: error.message
      })
    }
  }

  // Handle unsupported HTTP methods
  return res.status(405).json({ error: 'Method Not Allowed' })
}
