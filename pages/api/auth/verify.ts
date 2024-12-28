import { NextApiRequest, NextApiResponse } from 'next'
import { validateToken } from '../../../middleware/auth'

export default function handler (req: NextApiRequest, res: NextApiResponse) {
  const user = validateToken(req)

  if (user) {
    return res.status(200).json({ authenticated: true, user })
  }

  res.status(401).json({ authenticated: false, message: 'Unauthorized' })
}
