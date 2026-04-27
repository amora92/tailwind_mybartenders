import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../../lib/mongodb'
import {
  evaluateArticleSeo,
  normalizeArticlePayload
} from '../../../lib/articleSeo'
import { requireAdminApiAuth } from '@/lib/apiAuth'
import { logger } from '@/lib/logger'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const { db } = await connectToDatabase()

      // Check if admin=true query param is passed (for admin dashboard)
      const { admin, status: statusFilter } = req.query
      const isAdminRequest = admin === 'true'

      if (isAdminRequest && !requireAdminApiAuth(req, res)) {
        return
      }

      // Build query - if not admin, only show published articles
      const query: Record<string, unknown> = {}
      if (!isAdminRequest) {
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
      logger.error('Error fetching articles:', error)
      return res.status(500).json({ error: 'Internal server error' })
    }
  }

  if (req.method === 'POST') {
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
        readTime,
        slug,
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
        readTime,
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
        !normalizedArticle.publishedAt ||
        !normalizedArticle.slug
      ) {
        return res.status(400).json({ error: 'Missing required fields' })
      }

      if (seoAssessment.publishBlockers.length > 0) {
        return res.status(400).json({ error: seoAssessment.publishBlockers[0] })
      }

      const existingArticle = await db
        .collection('articles')
        .findOne({ slug: normalizedArticle.slug })

      if (existingArticle) {
        return res.status(409).json({ error: 'Article with this slug already exists' })
      }

      const result = await db.collection('articles').insertOne({
        ...normalizedArticle,
        views: 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      })

      return res.status(201).json({
        message: 'Article created successfully',
        id: result.insertedId
      })
    } catch (error) {
      logger.error('Error creating article:', error)
      return res.status(500).json({ error: 'Internal server error' })
    }
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
