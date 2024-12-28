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
        content,
        secondaryContent,
        imageUrl,
        secondaryImageUrl,
        slug,
        publishedAt,
        category,
        author,
        readTime
      } = req.body

      if (
        !title ||
        !description ||
        !content ||
        !imageUrl ||
        !slug ||
        !publishedAt
      ) {
        return res.status(400).json({ error: 'Missing required fields' })
      }

      const result = await db.collection('articles').insertOne({
        title,
        description,
        content,
        secondaryContent,
        imageUrl,
        secondaryImageUrl,
        slug,
        publishedAt: new Date(publishedAt).toISOString(),
        category,
        author,
        readTime,
        createdAt: new Date()
      })

      console.log('Inserted article:', result)
      return res.status(201).json({
        ...req.body,
        _id: result.insertedId
      })
    } catch (error) {
      console.error('Error inserting article:', error)
      return res.status(500).json({
        error: 'Internal server error',
        message: error.message
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

      // Return empty array if no articles found
      return res.status(200).json(articles || [])
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
