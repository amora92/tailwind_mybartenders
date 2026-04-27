import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../../lib/mongodb'
import {
  evaluateArticleSeo,
  normalizeArticlePayload
} from '../../../lib/articleSeo'
import { requireAdminApiAuth } from '@/lib/apiAuth'
import { logger } from '@/lib/logger'

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  const slug = typeof req.query.slug === 'string' ? req.query.slug : ''

  if (!slug) {
    return res.status(400).json({ error: 'Article slug is required' })
  }

  if (req.method === 'PUT') {
    if (!requireAdminApiAuth(req, res)) {
      return
    }

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
        tags,
        status
      } = req.body

      const normalizedArticle = normalizeArticlePayload({
        title,
        description,
        imageUrl,
        contentSections,
        publishedAt,
        category,
        author,
        slug,
        tags,
        status
      })

      const seoAssessment = evaluateArticleSeo({
        title: normalizedArticle.title,
        description: normalizedArticle.description,
        imageUrl: normalizedArticle.imageUrl,
        contentSections: normalizedArticle.contentSections,
        slug: normalizedArticle.slug,
        category: normalizedArticle.category,
        tags: normalizedArticle.tags,
        status: normalizedArticle.status
      })

      if (
        !normalizedArticle.title ||
        !normalizedArticle.publishedAt
      ) {
        return res.status(400).json({ error: 'Missing required fields' })
      }

      if (seoAssessment.publishBlockers.length > 0) {
        return res.status(400).json({ error: seoAssessment.publishBlockers[0] })
      }

      const result = await db.collection('articles').updateOne(
        { slug },
        {
          $set: {
            ...normalizedArticle,
            updatedAt: new Date().toISOString()
          }
        }
      )

      if (result.matchedCount === 0) {
        return res.status(404).json({ error: 'Article not found' })
      }

      return res.status(200).json({ message: 'Article updated successfully' })
    } catch (error) {
      logger.error('Error updating article:', error)
      return res.status(500).json({ error: 'Internal server error' })
    }
  }

  // Handle GET request for single article
  if (req.method === 'GET') {
    try {
      const { db } = await connectToDatabase()
      const { admin } = req.query
      const isAdminRequest = admin === 'true'

      if (isAdminRequest && !requireAdminApiAuth(req, res)) {
        return
      }

      // First, find the article
      const article = await db.collection('articles').findOne({ slug })

      if (!article) {
        return res.status(404).json({ error: 'Article not found' })
      }

      // If article is draft and not admin request, return 404
      if (article.status === 'draft' && !isAdminRequest) {
        return res.status(404).json({ error: 'Article not found' })
      }

      // Only increment view count for non-admin, published articles
      if (!isAdminRequest && article.status !== 'draft') {
        await db
          .collection('articles')
          .updateOne({ slug }, { $inc: { views: 1 } })

        // Return the article with updated view count
        return res.status(200).json({
          ...article,
          views: (article.views || 0) + 1
        })
      }

      // For admin requests, return without incrementing views
      return res.status(200).json(article)
    } catch (error) {
      logger.error('Error fetching article:', error)
      return res.status(500).json({ error: 'Internal server error' })
    }
  }

  // Handle DELETE method
  if (req.method === 'DELETE') {
    if (!requireAdminApiAuth(req, res)) {
      return
    }

    try {
      const { db } = await connectToDatabase()

      const result = await db.collection('articles').deleteOne({ slug })

      if (result.deletedCount === 0) {
        return res.status(404).json({ error: 'Article not found' })
      }

      return res.status(200).json({ message: 'Article deleted successfully' })
    } catch (error) {
      logger.error('Error deleting article:', error)
      return res.status(500).json({ error: 'Internal server error' })
    }
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
