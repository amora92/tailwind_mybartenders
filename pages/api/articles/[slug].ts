import { connectToDatabase } from '../../../lib/mongodb'

export default async (req, res) => {
  const { slug } = req.query // Extract the slug from the URL

  if (req.method === 'GET') {
    try {
      const db = await connectToDatabase()
      const article = await db.collection('articles').findOne({ slug }) // Find the article by slug in MongoDB

      if (!article) {
        return res.status(404).json({ error: 'Article not found' })
      }

      return res.status(200).json(article) // Return the article data
    } catch (error) {
      console.error('Error fetching article:', error)
      return res.status(500).json({ error: 'Internal server error' })
    }
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }
}
