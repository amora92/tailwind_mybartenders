import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../../lib/mongodb'

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { slug } = req.query

  if (req.method === 'GET') {
    try {
      const { db } = await connectToDatabase()
      const article = await db.collection('articles').findOne({ slug })

      if (!article) {
        return res.status(404).json({ message: 'Article not found' })
      }

      return res.status(200).json(article)
    } catch (error) {
      console.error('Error fetching article:', error)
      return res.status(500).json({ message: 'Internal server error' })
    }
  }

  if (req.method === 'DELETE') {
    try {
      const { db } = await connectToDatabase()
      const result = await db.collection('articles').deleteOne({ slug })

      if (result.deletedCount === 0) {
        return res.status(404).json({ message: 'Article not found' })
      }

      return res.status(200).json({ message: 'Article deleted successfully' })
    } catch (error) {
      console.error('Error deleting article:', error)
      return res.status(500).json({ message: 'Internal server error' })
    }
  }

  return res.status(405).json({ message: 'Method not allowed' })
}
