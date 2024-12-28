import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../../lib/mongodb'

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { slug } = req.query

  try {
    const db = await connectToDatabase()
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
