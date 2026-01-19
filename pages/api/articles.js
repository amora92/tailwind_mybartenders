import { connectToDatabase } from '../../lib/mongodb'
import { logger } from '../../lib/logger'
import jwt from 'jsonwebtoken'

// Middleware to verify authentication for protected routes
const verifyAuth = (req) => {
  const token = req.cookies?.auth
  if (!token) {
    return null
  }

  try {
    const SECRET_KEY = process.env.JWT_SECRET
    if (!SECRET_KEY) {
      return null
    }
    return jwt.verify(token, SECRET_KEY)
  } catch (error) {
    return null
  }
}

export default async (req, res) => {
  // Handle POST requests (create new article) - PROTECTED
  if (req.method === 'POST') {
    // Verify authentication
    const user = verifyAuth(req)
    if (!user) {
      return res.status(401).json({ error: 'Unauthorized' })
    }

    try {
      const { db } = await connectToDatabase()
      logger.log('Connected to MongoDB')

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
        logger.error('Missing required fields:', {
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

      logger.log('Attempting to insert article:', article)

      const result = await db.collection('articles').insertOne(article)

      logger.log('Article inserted successfully:', result)

      return res.status(201).json({
        ...article,
        _id: result.insertedId
      })
    } catch (error) {
      logger.error('Error creating article:', error)
      return res.status(500).json({
        error: 'Failed to create article'
      })
    }
  }

  // Handle GET requests (fetch all articles) - PUBLIC
  if (req.method === 'GET') {
    try {
      const { db } = await connectToDatabase()
      logger.log('Connected to MongoDB')

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
      logger.error('Error fetching articles:', error)
      return res.status(500).json({
        error: 'Internal server error'
      })
    }
  }

  // Handle PUT requests (update article) - PROTECTED
  if (req.method === 'PUT') {
    const user = verifyAuth(req)
    if (!user) {
      return res.status(401).json({ error: 'Unauthorized' })
    }
    // PUT logic would go here
    return res.status(405).json({ error: 'Method Not Implemented' })
  }

  // Handle DELETE requests - PROTECTED
  if (req.method === 'DELETE') {
    const user = verifyAuth(req)
    if (!user) {
      return res.status(401).json({ error: 'Unauthorized' })
    }
    // DELETE logic would go here
    return res.status(405).json({ error: 'Method Not Implemented' })
  }

  // Handle unsupported HTTP methods
  return res.status(405).json({ error: 'Method Not Allowed' })
}
