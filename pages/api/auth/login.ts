import { NextApiRequest, NextApiResponse } from 'next'
import { sign } from 'jsonwebtoken'
import { serialize } from 'cookie'
import * as bcrypt from 'bcrypt'
import { connectToDatabase } from '@/lib/mongodb'
import jwt from 'jsonwebtoken'

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { email, password } = req.body

    // Add debug logging
    console.log('Attempting to connect to database...')
    const { db } = await connectToDatabase()
    console.log('Connected to database, searching for user...')

    // Find user
    const user = await db.collection('users').findOne({ email })
    console.log('User search complete:', user ? 'User found' : 'User not found')

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    // Verify password
    const passwordMatch = await bcrypt.compare(password, user.passwordHash)
    console.log(
      'Password check complete:',
      passwordMatch ? 'Match' : 'No match'
    )

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    const SECRET_KEY = process.env.JWT_SECRET
    if (!SECRET_KEY) {
      throw new Error('JWT_SECRET is not configured')
    }

    const token = jwt.sign(
      {
        userId: user._id.toString()
      },
      SECRET_KEY,
      { expiresIn: '1h' }
    )

    // Set cookie
    res.setHeader(
      'Set-Cookie',
      serialize('auth', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 3600,
        path: '/'
      })
    )

    return res.status(200).json({ message: 'Logged in successfully' })
  } catch (error) {
    console.error('Login error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
