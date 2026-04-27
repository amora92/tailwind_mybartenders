import { NextApiRequest, NextApiResponse } from 'next'
import { validateToken } from '../../../middleware/auth'

export default function handler (req: NextApiRequest, res: NextApiResponse) {
  try {
    // Get token from either Authorization header or auth cookie
    const authHeader = req.headers.authorization
    const authCookie = req.cookies.auth

    const token = authHeader?.replace('Bearer ', '') || authCookie

    if (!token) {
      return res.status(401).json({
        authenticated: false,
        error: 'No token provided'
      })
    }

    const decoded = validateToken(token)

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
    return res.status(401).json({
      authenticated: false,
      error: 'Invalid token'
    })
  }
}
