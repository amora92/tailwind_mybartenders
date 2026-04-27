import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../../lib/mongodb'
import { requireAdminApiAuth } from '@/lib/apiAuth'
import {
  normalizeGalleryCategory,
  normalizeGallerySpan,
  normalizeSafeImageUrl,
  sanitizePlainText
} from '@/lib/contentValidation'
import { logger } from '@/lib/logger'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const { db } = await connectToDatabase()

      const images = await db
        .collection('gallery')
        .find({})
        .sort({ createdAt: -1 })
        .toArray()

      return res.status(200).json(images)
    } catch (error) {
      logger.error('Error fetching gallery:', error)
      return res.status(500).json({ error: 'Internal server error' })
    }
  }

  if (req.method === 'POST') {
    if (!requireAdminApiAuth(req, res)) {
      return
    }

    try {
      const { db } = await connectToDatabase()

      const { src, alt, category, span } = req.body
      const normalizedSrc = normalizeSafeImageUrl(src)
      const normalizedAlt = sanitizePlainText(alt, 180)
      const normalizedCategory = normalizeGalleryCategory(category)
      const normalizedSpan = normalizeGallerySpan(span)

      if (!normalizedSrc || !normalizedAlt || !normalizedCategory) {
        return res.status(400).json({ error: 'Missing required fields' })
      }

      const result = await db.collection('gallery').insertOne({
        src: normalizedSrc,
        alt: normalizedAlt,
        category: normalizedCategory,
        span: normalizedSpan || null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      })

      return res.status(201).json({
        _id: result.insertedId,
        src: normalizedSrc,
        alt: normalizedAlt,
        category: normalizedCategory,
        span: normalizedSpan
      })
    } catch (error) {
      logger.error('Error adding gallery image:', error)
      return res.status(500).json({ error: 'Internal server error' })
    }
  }

  if (req.method === 'DELETE') {
    if (!requireAdminApiAuth(req, res)) {
      return
    }

    try {
      const { db } = await connectToDatabase()
      const { id } = req.query

      if (!id) {
        return res.status(400).json({ error: 'Image ID required' })
      }

      const { ObjectId } = await import('mongodb')
      const result = await db.collection('gallery').deleteOne({
        _id: new ObjectId(id as string)
      })

      if (result.deletedCount === 0) {
        return res.status(404).json({ error: 'Image not found' })
      }

      return res.status(200).json({ message: 'Image deleted successfully' })
    } catch (error) {
      logger.error('Error deleting gallery image:', error)
      return res.status(500).json({ error: 'Internal server error' })
    }
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
