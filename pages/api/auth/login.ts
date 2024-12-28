import { NextApiRequest, NextApiResponse } from 'next'
import { sign } from 'jsonwebtoken'
import { serialize } from 'cookie'

const SECRET_KEY = process.env.JWT_SECRET || 'your-secret-key' // Change this in production!
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin'
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'password123' // Change this in production!

export default function handler (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { username, password } = req.body

  // Verify credentials
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    // Create token
    const token = sign({ username, admin: true }, SECRET_KEY, {
      expiresIn: '1h'
    })

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

    return res.status(200).json({ message: 'Logged in successfully' })
  }

  res.status(401).json({ message: 'Invalid credentials' })
}
