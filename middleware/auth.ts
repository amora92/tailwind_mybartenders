import { NextApiRequest } from 'next'
import { verify } from 'jsonwebtoken'

const SECRET_KEY = process.env.JWT_SECRET

if (!SECRET_KEY) {
  throw new Error('JWT_SECRET is not defined')
}

export function validateToken (req: NextApiRequest) {
  const token = req.cookies.auth

  if (!token) {
    return null
  }

  try {
    const decoded = verify(token, SECRET_KEY)
    return decoded
  } catch (e) {
    return null
  }
}
