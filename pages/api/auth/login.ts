import { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'
import { serialize } from 'cookie'
import * as bcrypt from 'bcrypt'
import { connectToDatabase } from '@/lib/mongodb'

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { username, password } = req.body

    // Validate input
    if (!username || !password) {
      return res
        .status(400)
        .json({ error: 'Username and password are required' })
    }

    console.log('Attempting login for username:', username)

    const { db } = await connectToDatabase()

    // Find user
    const user = await db.collection('users').findOne({ username })

    if (!user) {
      console.log('User not found')
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    // Verify password
    const passwordMatch = await bcrypt.compare(password, user.passwordHash)
    console.log('Password match:', passwordMatch)

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    const SECRET_KEY = process.env.JWT_SECRET
    if (!SECRET_KEY) {
      throw new Error('JWT_SECRET is not configured')
    }

    // Generate token
    const token = jwt.sign(
      {
        userId: user._id.toString(),
        username: user.username,
        role: user.role
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

    // Return success with token
    return res.status(200).json({
      success: true,
      token,
      user: {
        username: user.username,
        role: user.role
      }
    })
  } catch (error) {
    console.error('Login error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
