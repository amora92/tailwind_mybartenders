import { NextApiRequest, NextApiResponse } from 'next'
import { Resend } from 'resend'
import nodemailer from 'nodemailer'
import { rateLimit, getClientIp } from '@/lib/rateLimit'
import { logger } from '@/lib/logger'
import {
  escapeHtml,
  sanitizeMultilineText,
  sanitizePlainText
} from '@/lib/contentValidation'

const resend = new Resend(process.env.RESEND_API_KEY)

// Zoho SMTP configuration
const zohoTransporter = nodemailer.createTransport({
  host: process.env.ZOHO_SMTP_HOST || 'smtp.zoho.eu',
  port: parseInt(process.env.ZOHO_SMTP_PORT || '587', 10),
  secure: false, // important for 587
  requireTLS: true, // enforce TLS
  auth: {
    user: process.env.ZOHO_SMTP_USER,
    pass: process.env.ZOHO_SMTP_PASSWORD
  }
})

// Format event details for email
const formatEventDetails = (eventDetails: {
  attendees?: string
  eventDate?: string
  location?: string
  startTime?: string
  finishTime?: string
  budget?: string
  requirements?: string
  eventType?: string
}) => {
  const formatDate = (dateString: string) => {
    if (!dateString) return 'Not specified'
    const date = new Date(dateString)
    return date.toLocaleDateString('en-GB', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const formatTime = (time: string) => {
    if (!time) return 'Not specified'
    const [hours, minutes] = time.split(':')
    const hour = parseInt(hours)
    const ampm = hour >= 12 ? 'PM' : 'AM'
    const formattedHour = hour % 12 || 12
    return `${formattedHour}:${minutes} ${ampm}`
  }

  return `
    ${
      eventDetails.eventType
        ? `<tr><td style="padding: 8px; border-bottom: 1px solid #eee; color: #666;">Event Type:</td><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: 500;">${escapeHtml(eventDetails.eventType)}</td></tr>`
        : ''
    }
    <tr><td style="padding: 8px; border-bottom: 1px solid #eee; color: #666;">Guests:</td><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: 500;">${
      escapeHtml(eventDetails.attendees || 'Not specified')
    }</td></tr>
    <tr><td style="padding: 8px; border-bottom: 1px solid #eee; color: #666;">Event Date:</td><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: 500;">${formatDate(
      eventDetails.eventDate || ''
    )}</td></tr>
    <tr><td style="padding: 8px; border-bottom: 1px solid #eee; color: #666;">Start Time:</td><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: 500;">${formatTime(
      eventDetails.startTime || ''
    )}</td></tr>
    <tr><td style="padding: 8px; border-bottom: 1px solid #eee; color: #666;">Finish Time:</td><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: 500;">${formatTime(
      eventDetails.finishTime || ''
    )}</td></tr>
    <tr><td style="padding: 8px; border-bottom: 1px solid #eee; color: #666;">Location:</td><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: 500;">${
      escapeHtml(eventDetails.location || 'Not specified')
    }</td></tr>
    <tr><td style="padding: 8px; border-bottom: 1px solid #eee; color: #666;">Budget:</td><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: 500;">${
      escapeHtml(eventDetails.budget || 'Not specified')
    }</td></tr>
    ${
      eventDetails.requirements
        ? `<tr><td style="padding: 8px; border-bottom: 1px solid #eee; color: #666;">Special Requirements:</td><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: 500;">${escapeHtml(eventDetails.requirements)}</td></tr>`
        : ''
    }
  `
}

// Generate HTML email
const generateEmailHTML = (data: {
  name: string
  email: string
  phone: string
  contactPreference: string
  message: string
  eventDetails: {
    attendees?: string
    eventDate?: string
    location?: string
    startTime?: string
    finishTime?: string
    budget?: string
    requirements?: string
    eventType?: string
  }
}) => {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #ec4899, #f43f5e); padding: 24px; border-radius: 12px 12px 0 0;">
    <h1 style="color: white; margin: 0; font-size: 24px;">New Enquiry from MyBartenders</h1>
  </div>

  <div style="background: #ffffff; padding: 24px; border: 1px solid #e5e7eb;">
    ${
      data.eventDetails?.eventType
        ? `
    <div style="background: #fdf2f8; padding: 12px 16px; border-radius: 8px; margin-bottom: 20px;">
      <span style="color: #be185d; font-weight: bold; font-size: 16px;">
        Event Type: ${escapeHtml(data.eventDetails.eventType)}
      </span>
    </div>
    `
        : ''
    }

    <h2 style="color: #111827; font-size: 18px; border-bottom: 2px solid #ec4899; padding-bottom: 8px;">
      Contact Information
    </h2>
    <table style="width: 100%; margin-bottom: 20px; border-collapse: collapse;">
      <tr><td style="padding: 8px; border-bottom: 1px solid #eee; color: #666; width: 140px;">Name:</td><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: 500;">${
        escapeHtml(data.name)
      }</td></tr>
      <tr><td style="padding: 8px; border-bottom: 1px solid #eee; color: #666;">Email:</td><td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${
        escapeHtml(data.email)
      }" style="color: #ec4899;">${escapeHtml(data.email)}</a></td></tr>
      <tr><td style="padding: 8px; border-bottom: 1px solid #eee; color: #666;">Phone:</td><td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="tel:${
        escapeHtml(data.phone)
      }" style="color: #ec4899;">${escapeHtml(data.phone)}</a></td></tr>
      <tr><td style="padding: 8px; border-bottom: 1px solid #eee; color: #666;">Preferred Contact:</td><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: 500;">${
        escapeHtml(data.contactPreference)
      }</td></tr>
    </table>

    <h2 style="color: #111827; font-size: 18px; border-bottom: 2px solid #ec4899; padding-bottom: 8px;">
      Event Details
    </h2>
    <table style="width: 100%; margin-bottom: 20px; border-collapse: collapse;">
      ${formatEventDetails(data.eventDetails || {})}
    </table>

    <h2 style="color: #111827; font-size: 18px; border-bottom: 2px solid #ec4899; padding-bottom: 8px;">
      Message
    </h2>
    <div style="background: #f9fafb; padding: 16px; border-radius: 8px; margin-bottom: 20px;">
      <p style="margin: 0; color: #374151; line-height: 1.6; white-space: pre-wrap;">${
        escapeHtml(data.message)
      }</p>
    </div>
  </div>

  <div style="background: #f3f4f6; padding: 16px; border-radius: 0 0 12px 12px; text-align: center;">
    <p style="margin: 0; color: #6b7280; font-size: 14px;">
      This enquiry was submitted via mybartenders.co.uk
    </p>
  </div>
</body>
</html>
  `
}

const isValidEmail = (value: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // Rate limiting
  const clientIp = getClientIp(req)
  const rateLimitResult = rateLimit(`contact:${clientIp}`, {
    maxAttempts: 5,
    windowMs: 60 * 1000
  })

  if (!rateLimitResult.success) {
    const retryAfter = Math.ceil(
      (rateLimitResult.resetTime - Date.now()) / 1000
    )
    res.setHeader('Retry-After', retryAfter.toString())
    return res.status(429).json({
      error: 'Too many submissions. Please try again later.',
      retryAfter
    })
  }

  try {
    const { name, email, phone, contactPreference, message, eventDetails } =
      req.body
    const normalizedName = sanitizePlainText(name, 120)
    const normalizedEmail = sanitizePlainText(email, 254).toLowerCase()
    const normalizedPhone = sanitizePlainText(phone, 40)
    const normalizedContactPreference = sanitizePlainText(contactPreference, 40)
    const normalizedMessage = sanitizeMultilineText(message, 3000)
    const normalizedEventDetails = {
      attendees: sanitizePlainText(eventDetails?.attendees, 40),
      eventDate: sanitizePlainText(eventDetails?.eventDate, 40),
      location: sanitizePlainText(eventDetails?.location, 160),
      startTime: sanitizePlainText(eventDetails?.startTime, 10),
      finishTime: sanitizePlainText(eventDetails?.finishTime, 10),
      budget: sanitizePlainText(eventDetails?.budget, 40),
      requirements: sanitizeMultilineText(eventDetails?.requirements, 1200),
      eventType: sanitizePlainText(eventDetails?.eventType, 80)
    }

    // Validation
    if (!normalizedName || !normalizedEmail || !normalizedMessage) {
      return res
        .status(400)
        .json({ error: 'Name, email, and message are required' })
    }

    if (!isValidEmail(normalizedEmail)) {
      return res
        .status(400)
        .json({ error: 'Please provide a valid email address.' })
    }

    const htmlContent = generateEmailHTML({
      name: normalizedName,
      email: normalizedEmail,
      phone: normalizedPhone,
      contactPreference: normalizedContactPreference || 'email',
      message: normalizedMessage,
      eventDetails: normalizedEventDetails
    })

    // Email configuration - all values from environment variables
    const senderEmail = process.env.CONTACT_FORM_SENDER || process.env.ZOHO_SMTP_USER
    const recipientEmail = process.env.CONTACT_FORM_RECIPIENT || process.env.ZOHO_SMTP_USER
    const fromEmail = `MyBartenders <${senderEmail}>`
    const toEmail = recipientEmail as string
    const bccEmail = process.env.CONTACT_FORM_BCC || ''

    let emailSent = false
    let usedProvider = 'resend'

    // Try Resend first
    try {
      const emailOptions: {
        from: string
        to: string[]
        bcc?: string[]
        replyTo: string
        subject: string
        html: string
      } = {
        from: fromEmail,
        to: [toEmail],
        replyTo: normalizedEmail,
        subject: `New Enquiry from ${normalizedName} - MyBartenders`,
        html: htmlContent
      }

      // Only add BCC if configured
      if (bccEmail) {
        emailOptions.bcc = [bccEmail]
      }

      const { data, error } = await resend.emails.send(emailOptions)

      if (data) {
        logger.info('Contact email sent via Resend')
        emailSent = true
      }
      if (error) {
        throw new Error(error.message || 'Resend failed')
      }
    } catch (resendError) {
      logger.warn('Resend failed, trying Zoho SMTP fallback')

      // Fallback to Zoho SMTP
      if (process.env.ZOHO_SMTP_USER && process.env.ZOHO_SMTP_PASSWORD) {
        try {
          const zohoResult = await zohoTransporter.sendMail({
            from: `MyBartenders <${process.env.ZOHO_SMTP_USER}>`,
            to: toEmail,
            bcc: bccEmail,
            replyTo: normalizedEmail,
            subject: `New Enquiry from ${normalizedName} - MyBartenders`,
            html: htmlContent
          })

          logger.info('Contact email sent via Zoho SMTP')
          emailSent = true
          usedProvider = 'zoho'
        } catch (zohoError) {
          logger.error('Zoho SMTP fallback failed', zohoError)
          return res.status(400).json({
            error: 'Failed to send enquiry email. Please try again later.'
          })
        }
      } else {
        logger.error('Zoho SMTP fallback unavailable')
        return res.status(400).json({
          error: 'Failed to send enquiry email. Please try again later.'
        })
      }
    }

    if (!emailSent) {
      return res.status(400).json({
        error: 'Failed to send enquiry email. Please try again later.'
      })
    }

    logger.info(`Contact email sent successfully via ${usedProvider}`)
    return res.status(200).json({
      success: true,
      message: 'Email sent successfully'
    })
  } catch (error: unknown) {
    logger.error('Contact email handler failed', error)
    return res.status(500).json({
      error: 'Failed to send enquiry email. Please try again later.'
    })
  }
}
