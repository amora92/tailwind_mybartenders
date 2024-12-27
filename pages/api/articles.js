import { connectToDatabase } from '../../lib/mongodb'

export default async (req, res) => {
  // Handle POST requests (create new article)
  if (req.method === 'POST') {
    console.log('Received POST request:', req.body)

    try {
      const db = await connectToDatabase()
      console.log('Connected to MongoDB')

      const { title, description, content, image, slug, date } = req.body

      if (!title || !description || !content || !image || !slug || !date) {
        return res.status(400).json({ error: 'Missing required fields' })
      }

      const result = await db.collection('articles').insertOne({
        title,
        description,
        content,
        image,
        slug,
        date,
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

    // Handle GET requests (fetch all articles)
  } else if (req.method === 'GET') {
    try {
      const db = await connectToDatabase()
      console.log('Connected to MongoDB')

      // Find all articles in the "articles" collection
      const articles = await db.collection('articles').find({}).toArray()

      if (articles.length === 0) {
        return res.status(404).json({ message: 'No articles found' })
      }

      // Return the articles
      return res.status(200).json(articles)
    } catch (error) {
      console.error('Error fetching articles:', error)
      return res.status(500).json({
        error: 'Internal server error',
        message: error.message
      })
    }
  } else {
    // Handle unsupported HTTP methods
    console.log('Unsupported request method:', req.method)
    return res.status(405).json({ error: 'Method Not Allowed' })
  }
}
