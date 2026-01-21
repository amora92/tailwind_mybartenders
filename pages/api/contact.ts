import { NextApiRequest, NextApiResponse } from 'next'
import { Resend } from 'resend'
import nodemailer from 'nodemailer'
import { rateLimit, getClientIp } from '@/lib/rateLimit'

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
        ? `<tr><td style="padding: 8px; border-bottom: 1px solid #eee; color: #666;">Event Type:</td><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: 500;">${eventDetails.eventType}</td></tr>`
        : ''
    }
    <tr><td style="padding: 8px; border-bottom: 1px solid #eee; color: #666;">Guests:</td><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: 500;">${
      eventDetails.attendees || 'Not specified'
    }</td></tr>
    <tr><td style="padding: 8px; border-bottom: 1px solid #eee; color: #666;">Date:</td><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: 500;">${formatDate(
      eventDetails.eventDate || ''
    )}</td></tr>
    <tr><td style="padding: 8px; border-bottom: 1px solid #eee; color: #666;">Time:</td><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: 500;">${formatTime(
      eventDetails.startTime || ''
    )} - ${formatTime(eventDetails.finishTime || '')}</td></tr>
    <tr><td style="padding: 8px; border-bottom: 1px solid #eee; color: #666;">Location:</td><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: 500;">${
      eventDetails.location || 'Not specified'
    }</td></tr>
    <tr><td style="padding: 8px; border-bottom: 1px solid #eee; color: #666;">Budget:</td><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: 500;">${
      eventDetails.budget || 'Not specified'
    }</td></tr>
    ${
      eventDetails.requirements
        ? `<tr><td style="padding: 8px; border-bottom: 1px solid #eee; color: #666;">Special Requirements:</td><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: 500;">${eventDetails.requirements}</td></tr>`
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
        Event Type: ${data.eventDetails.eventType}
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
        data.name
      }</td></tr>
      <tr><td style="padding: 8px; border-bottom: 1px solid #eee; color: #666;">Email:</td><td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${
        data.email
      }" style="color: #ec4899;">${data.email}</a></td></tr>
      <tr><td style="padding: 8px; border-bottom: 1px solid #eee; color: #666;">Phone:</td><td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="tel:${
        data.phone
      }" style="color: #ec4899;">${data.phone}</a></td></tr>
      <tr><td style="padding: 8px; border-bottom: 1px solid #eee; color: #666;">Preferred Contact:</td><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: 500;">${
        data.contactPreference
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
        data.message
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

    // Validation
    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ error: 'Name, email, and message are required' })
    }

    console.log('=== Contact Form Submission ===')
    console.log('Name:', name)
    console.log('Email:', email)

    const htmlContent = generateEmailHTML({
      name,
      email,
      phone,
      contactPreference,
      message,
      eventDetails
    })

    // Email configuration - all values from environment variables
    const senderEmail = process.env.CONTACT_FORM_SENDER || process.env.ZOHO_SMTP_USER
    const recipientEmail = process.env.CONTACT_FORM_RECIPIENT || process.env.ZOHO_SMTP_USER
    const fromEmail = `MyBartenders <${senderEmail}>`
    const toEmail = recipientEmail as string
    const bccEmail = process.env.CONTACT_FORM_BCC || ''

    console.log('=== Sending Email via Resend ===')
    console.log('From:', fromEmail)
    console.log('To:', toEmail)
    console.log('BCC:', bccEmail ? '[configured]' : '[none]')
    console.log('Reply-To:', email)

    let emailSent = false
    let emailId: string | undefined
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
        replyTo: email,
        subject: `New Enquiry from ${name} - MyBartenders`,
        html: htmlContent
      }

      // Only add BCC if configured
      if (bccEmail) {
        emailOptions.bcc = [bccEmail]
      }

      const { data, error } = await resend.emails.send(emailOptions)

      console.log('=== Resend Response ===')
      if (data) {
        console.log('Success! ID:', data.id)
        emailSent = true
        emailId = data.id
      }
      if (error) {
        console.log('Resend Error:', JSON.stringify(error, null, 2))
        throw new Error(error.message || 'Resend failed')
      }
    } catch (resendError) {
      console.log('=== Resend failed, trying Zoho SMTP fallback ===')

      // Fallback to Zoho SMTP
      if (process.env.ZOHO_SMTP_USER && process.env.ZOHO_SMTP_PASSWORD) {
        try {
          const zohoResult = await zohoTransporter.sendMail({
            from: `MyBartenders <${process.env.ZOHO_SMTP_USER}>`,
            to: toEmail,
            bcc: bccEmail,
            replyTo: email,
            subject: `New Enquiry from ${name} - MyBartenders`,
            html: htmlContent
          })

          console.log('=== Zoho SMTP Response ===')
          console.log('Success! Message ID:', zohoResult.messageId)
          emailSent = true
          emailId = zohoResult.messageId
          usedProvider = 'zoho'
        } catch (zohoError) {
          console.error('Zoho SMTP Error:', zohoError)
          return res.status(400).json({
            error: 'Failed to send email via both providers',
            details:
              zohoError instanceof Error ? zohoError.message : 'Unknown error'
          })
        }
      } else {
        console.error('Zoho SMTP not configured, cannot fallback')
        return res.status(400).json({
          error: 'Failed to send email',
          details:
            resendError instanceof Error ? resendError.message : 'Unknown error'
        })
      }
    }

    if (!emailSent) {
      return res.status(400).json({
        error: 'Failed to send email',
        details: 'No email provider succeeded'
      })
    }

    console.log(`Email sent successfully via ${usedProvider}!`)
    return res.status(200).json({
      success: true,
      message: 'Email sent successfully',
      id: emailId,
      provider: usedProvider
    })
  } catch (error: unknown) {
    console.error('=== Email Error ===')
    console.error('Error:', error)

    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error'
    return res.status(500).json({
      error: 'Failed to send email',
      details: errorMessage
    })
  }
}
