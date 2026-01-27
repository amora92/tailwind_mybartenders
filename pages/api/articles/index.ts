import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../../lib/mongodb'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const { db } = await connectToDatabase()

      // Check if admin=true query param is passed (for admin dashboard)
      const { admin, status: statusFilter } = req.query

      // Build query - if not admin, only show published articles
      const query: Record<string, unknown> = {}
      if (admin !== 'true') {
        query.status = { $ne: 'draft' }
      } else if (statusFilter) {
        query.status = statusFilter
      }

      const articles = await db
        .collection('articles')
        .find(query)
        .sort({ publishedAt: -1 })
        .toArray()

      return res.status(200).json(articles)
    } catch (error) {
      console.error('Error fetching articles:', error)
      return res.status(500).json({ error: 'Internal server error' })
    }
  }

  if (req.method === 'POST') {
    try {
      const { db } = await connectToDatabase()

      const {
        title,
        description,
        imageUrl,
        contentSections,
        publishedAt,
        category,
        author,
        readTime,
        slug,
        tags,
        status
      } = req.body

      if (!title || !description || !imageUrl || !publishedAt || !slug) {
        return res.status(400).json({ error: 'Missing required fields' })
      }

      const existingArticle = await db
        .collection('articles')
        .findOne({ slug: slug })

      if (existingArticle) {
        return res.status(409).json({ error: 'Article with this slug already exists' })
      }

      const result = await db.collection('articles').insertOne({
        title,
        description,
        imageUrl,
        contentSections: contentSections || [],
        publishedAt: new Date(publishedAt).toISOString(),
        category: category || 'General',
        author: author || { name: 'MyBartenders', avatar: '/mybartenders.co.uk_logo_svg.svg' },
        readTime: readTime || 5,
        slug,
        tags: tags || [],
        status: status || 'published',
        views: 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      })

      return res.status(201).json({
        message: 'Article created successfully',
        id: result.insertedId
      })
    } catch (error) {
      console.error('Error creating article:', error)
      return res.status(500).json({ error: 'Internal server error' })
    }
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
