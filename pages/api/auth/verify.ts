import { NextApiRequest, NextApiResponse } from 'next'
import { validateToken } from '../../../middleware/auth'

export default function handler (req: NextApiRequest, res: NextApiResponse) {
  const user = validateToken(req)

  if (user) {
    return res.status(200).json({ message: 'Authenticated' })
  }

  res.status(401).json({ message: 'Unauthorized' })
}
