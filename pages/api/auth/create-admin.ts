import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '@/lib/mongodb'
import * as bcrypt from 'bcrypt'

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { username, password } = req.body

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
    console.error('Error creating admin:', error)
    res.status(500).json({ message: 'Error creating admin user' })
  }
}
