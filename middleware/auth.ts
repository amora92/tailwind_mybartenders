import { NextApiRequest } from 'next'
import { verify } from 'jsonwebtoken'

const SECRET_KEY = process.env.JWT_SECRET || 'your-secret-key'

export function validateToken (req: NextApiRequest) {
  const token = req.cookies.auth

  try {
    const decoded = verify(token, SECRET_KEY)
    return decoded
  } catch (e) {
    return null
  }
}
