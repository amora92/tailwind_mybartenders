import type { NextApiRequest, NextApiResponse } from 'next'
import { validateToken } from '@/middleware/auth'

interface AuthenticatedUser {
  userId?: string
  username?: string
  role?: string
  [key: string]: unknown
}

const getRequestToken = (req: NextApiRequest): string | null => {
  const authHeader = req.headers.authorization

  if (authHeader?.startsWith('Bearer ')) {
    return authHeader.slice(7).trim()
  }

  return req.cookies.auth || null
}

export const getAuthenticatedUser = (
  req: NextApiRequest
): AuthenticatedUser | null => {
  const token = getRequestToken(req)

  if (!token) {
    return null
  }

  try {
    return validateToken(token) as AuthenticatedUser
  } catch {
    return null
  }
}

export const requireAdminApiAuth = (
  req: NextApiRequest,
  res: NextApiResponse
): AuthenticatedUser | null => {
  const user = getAuthenticatedUser(req)

  if (!user) {
    res.status(401).json({ error: 'Authentication required' })
    return null
  }

  if (user.role !== 'admin') {
    res.status(403).json({ error: 'Admin access required' })
    return null
  }

  return user
}
