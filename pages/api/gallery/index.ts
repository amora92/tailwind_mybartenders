import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../../lib/mongodb'

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
      console.error('Error fetching gallery:', error)
      return res.status(500).json({ error: 'Internal server error' })
    }
  }

  if (req.method === 'POST') {
    try {
      const { db } = await connectToDatabase()

      const { src, alt, category, span } = req.body

      if (!src || !alt || !category) {
        return res.status(400).json({ error: 'Missing required fields' })
      }

      const result = await db.collection('gallery').insertOne({
        src,
        alt,
        category,
        span: span || null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      })

      return res.status(201).json({
        _id: result.insertedId,
        src,
        alt,
        category,
        span
      })
    } catch (error) {
      console.error('Error adding gallery image:', error)
      return res.status(500).json({ error: 'Internal server error' })
    }
  }

  if (req.method === 'DELETE') {
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
      console.error('Error deleting gallery image:', error)
      return res.status(500).json({ error: 'Internal server error' })
    }
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
