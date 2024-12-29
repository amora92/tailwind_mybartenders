import { NextApiRequest, NextApiResponse } from 'next'
import { serialize } from 'cookie'

export default function handler (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  // Clear the auth cookie
  res.setHeader(
    'Set-Cookie',
    serialize('auth', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: -1,
      path: '/'
    })
  )

  res.status(200).json({ message: 'Logged out successfully' })
}
