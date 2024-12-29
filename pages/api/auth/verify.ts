import { NextApiRequest, NextApiResponse } from 'next'
import { validateToken } from '../../../middleware/auth'

export default function handler (req: NextApiRequest, res: NextApiResponse) {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '')

    if (!token) {
      return res.status(401).json({
        authenticated: false,
        error: 'No token provided'
      })
    }

    const user = validateToken(token)

    if (user) {
      return res.status(200).json({ authenticated: true, user })
    } else {
      return res.status(401).json({
        authenticated: false,
        error: 'Invalid token'
      })
    }
  } catch (error) {
    return res.status(401).json({
      authenticated: false,
      error: 'Invalid token'
    })
  }
}
