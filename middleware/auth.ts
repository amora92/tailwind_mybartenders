import { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'

const SECRET_KEY = process.env.JWT_SECRET

export const validateToken = (token: string): any => {
  if (!SECRET_KEY) {
    throw new Error('JWT_SECRET is not defined')
  }

  try {
    return jwt.verify(token, SECRET_KEY)
  } catch (error) {
    throw new Error('Invalid token')
  }
}

export const authMiddleware = (handler: Function) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const token = req.headers.authorization?.replace('Bearer ', '')

      if (!token) {
        return res.status(401).json({ error: 'No token provided' })
      }

      const decoded = validateToken(token)
      req.body.user = decoded

      return handler(req, res)
    } catch (error) {
      return res.status(401).json({ error: 'Invalid token' })
    }
  }
}
