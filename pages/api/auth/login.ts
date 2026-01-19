import { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'
import { serialize } from 'cookie'
import * as bcrypt from 'bcrypt'
import { connectToDatabase } from '@/lib/mongodb'
import { rateLimit, getClientIp } from '@/lib/rateLimit'
import { logger } from '@/lib/logger'

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // Rate limiting: 5 attempts per minute per IP
  const clientIp = getClientIp(req)
  const rateLimitResult = rateLimit(`login:${clientIp}`, {
    maxAttempts: 5,
    windowMs: 60 * 1000
  })

  if (!rateLimitResult.success) {
    const retryAfter = Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000)
    res.setHeader('Retry-After', retryAfter.toString())
    return res.status(429).json({
      error: 'Too many login attempts. Please try again later.',
      retryAfter
    })
  }

  try {
    const { username, password } = req.body

    // Validate input
    if (!username || !password) {
      return res
        .status(400)
        .json({ error: 'Username and password are required' })
    }

    logger.log('Attempting login for username:', username)

    const { db } = await connectToDatabase()

    // Find user
    const user = await db.collection('users').findOne({ username })

    if (!user) {
      logger.log('User not found')
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    // Verify password
    const passwordMatch = await bcrypt.compare(password, user.passwordHash)
    logger.log('Password match:', passwordMatch)

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
    logger.error('Login error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
