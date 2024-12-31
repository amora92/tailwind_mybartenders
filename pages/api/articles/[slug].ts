import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../../lib/mongodb'

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'PUT') {
    try {
      const { db } = await connectToDatabase()
      const { slug } = req.query

      const {
        title,
        description,
        imageUrl,
        contentSections,
        publishedAt,
        category,
        author,
        readTime
      } = req.body

      if (!title || !description || !imageUrl || !publishedAt) {
        return res.status(400).json({ error: 'Missing required fields' })
      }

      const result = await db.collection('articles').updateOne(
        { slug: slug },
        {
          $set: {
            title,
            description,
            imageUrl,
            contentSections,
            publishedAt: new Date(publishedAt).toISOString(),
            category,
            author,
            readTime,
            updatedAt: new Date().toISOString()
          }
        }
      )

      if (result.matchedCount === 0) {
        return res.status(404).json({ error: 'Article not found' })
      }

      return res.status(200).json({ message: 'Article updated successfully' })
    } catch (error) {
      console.error('Error updating article:', error)
      return res.status(500).json({ error: 'Internal server error' })
    }
  }

  // Handle GET request for single article
  if (req.method === 'GET') {
    try {
      const { db } = await connectToDatabase()
      const { slug } = req.query

      // First, find the article
      const article = await db.collection('articles').findOne({ slug: slug })

      if (!article) {
        return res.status(404).json({ error: 'Article not found' })
      }

      // Increment the view count
      await db
        .collection('articles')
        .updateOne({ slug: slug }, { $inc: { views: 1 } })

      // Return the article with updated view count
      return res.status(200).json({
        ...article,
        views: (article.views || 0) + 1
      })
    } catch (error) {
      console.error('Error fetching article:', error)
      return res.status(500).json({ error: 'Internal server error' })
    }
  }

  // Handle DELETE method
  if (req.method === 'DELETE') {
    try {
      const { db } = await connectToDatabase()
      const { slug } = req.query

      const result = await db.collection('articles').deleteOne({ slug: slug })

      if (result.deletedCount === 0) {
        return res.status(404).json({ error: 'Article not found' })
      }

      return res.status(200).json({ message: 'Article deleted successfully' })
    } catch (error) {
      console.error('Error deleting article:', error)
      return res.status(500).json({ error: 'Internal server error' })
    }
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
