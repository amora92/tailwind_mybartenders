import { NextApiRequest, NextApiResponse } from 'next'
import React from 'react'
import { Resend } from 'resend'
import EmailTemplate from '../../components/email-template'
import { rateLimit, getClientIp } from '@/lib/rateLimit'
import { CONTACT_INFO } from '@/constants/contact'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // Rate limiting: 5 submissions per minute per IP
  const clientIp = getClientIp(req)
  const rateLimitResult = rateLimit(`contact:${clientIp}`, {
    maxAttempts: 5,
    windowMs: 60 * 1000
  })

  if (!rateLimitResult.success) {
    const retryAfter = Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000)
    res.setHeader('Retry-After', retryAfter.toString())
    return res.status(429).json({
      error: 'Too many submissions. Please try again later.',
      retryAfter
    })
  }

  try {
    const { name, email, phone, contactPreference, message, eventDetails } =
      req.body

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' })
    }

    // Build email options with optional BCC
    const emailOptions: {
      from: string
      to: string[]
      subject: string
      react: React.ReactElement
      bcc?: string[]
    } = {
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
    }

    // Add BCC if configured in constants or environment variable
    const bccEmail = process.env.CONTACT_FORM_BCC || CONTACT_INFO.bccEmail
    if (bccEmail) {
      emailOptions.bcc = [bccEmail]
    }

    const data = await resend.emails.send(emailOptions)

    return res.status(200).json(data)
  } catch (error) {
    return res.status(500).json({ error: 'Error sending email' })
  }
}
