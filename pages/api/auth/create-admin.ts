import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '@/lib/mongodb'
import { logger } from '@/lib/logger'
import * as bcrypt from 'bcrypt'

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  // Require ADMIN_SETUP_KEY for security
  const setupKey = req.headers['x-admin-setup-key'] || req.body.setupKey
  const expectedKey = process.env.ADMIN_SETUP_KEY

  if (!expectedKey) {
    return res.status(403).json({
      message: 'Admin setup is disabled. Set ADMIN_SETUP_KEY environment variable to enable.'
    })
  }

  if (setupKey !== expectedKey) {
    return res.status(403).json({ message: 'Invalid setup key' })
  }

  const { username, password } = req.body

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' })
  }

  if (password.length < 8) {
    return res.status(400).json({ message: 'Password must be at least 8 characters' })
  }

  try {
    const { db } = await connectToDatabase()

    // Check if admin already exists
    const existingAdmin = await db
      .collection('users')
      .findOne({ role: 'admin' })
    if (existingAdmin) {
      return res.status(400).json({ message: 'Admin user already exists' })
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 10)

    // Create admin user
    const result = await db.collection('users').insertOne({
      username,
      passwordHash,
      role: 'admin',
      createdAt: new Date()
    })

    res.status(201).json({ message: 'Admin user created successfully' })
  } catch (error) {
    logger.error('Error creating admin:', error)
    res.status(500).json({ message: 'Error creating admin user' })
  }
}
