import { NextApiRequest, NextApiResponse } from 'next'
import { validateToken } from '../../../middleware/auth'

export default function handler (req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log('Verify endpoint called')
    console.log('Headers:', req.headers)

    // Get token from either Authorization header or auth cookie
    const authHeader = req.headers.authorization
    const authCookie = req.cookies.auth

    const token = authHeader?.replace('Bearer ', '') || authCookie
    console.log('Token found:', !!token)

    if (!token) {
      console.log('No token provided')
      return res.status(401).json({
        authenticated: false,
        error: 'No token provided'
      })
    }

    const decoded = validateToken(token)
    console.log('Token decoded:', decoded)

    if (decoded) {
      return res.status(200).json({
        authenticated: true,
        user: {
          username: decoded.username,
          role: decoded.role
        }
      })
    }

    return res.status(401).json({
      authenticated: false,
      error: 'Invalid token'
    })
  } catch (error) {
    console.error('Verify error:', error)
    return res.status(401).json({
      authenticated: false,
      error: 'Invalid token'
    })
  }
}
