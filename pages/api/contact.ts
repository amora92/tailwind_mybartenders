import { NextApiRequest, NextApiResponse } from 'next'
import { Resend } from 'resend'
import EmailTemplate from '../../components/email-template'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { name, email, phone, contactPreference, message, eventDetails } =
      req.body

    const data = await resend.emails.send({
      from: 'MyBartenders <contact@mybartenders.co.uk>',
      to: ['contact@mybartenders.co.uk'],
      subject: 'New Contact Form Submission',
      react: EmailTemplate({
        name,
        email,
        phone,
        contactPreference,
        message,
        eventDetails
      })
    })

    return res.status(200).json(data)
  } catch (error) {
    return res.status(500).json({ error: 'Error sending email' })
  }
}
