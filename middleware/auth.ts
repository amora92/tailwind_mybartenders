import { verify } from 'jsonwebtoken'

const SECRET_KEY = process.env.JWT_SECRET as string

export function verifyToken (token: string) {
  if (!SECRET_KEY) {
    throw new Error('JWT_SECRET is not defined in environment variables')
  }

  try {
    const decoded = verify(token, SECRET_KEY)
    return decoded
  } catch (e) {
    return null
  }
}
