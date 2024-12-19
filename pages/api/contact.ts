import { NextApiRequest, NextApiResponse } from 'next'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY) // No NEXT_PUBLIC_ here for server-side code

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  try {
    const { name, email, message, eventDetails } = req.body

    // Log to check the structure of eventDetails
    console.log('Event details:', eventDetails)

    // Send the email using the Resend API
    const { data, error } = await resend.emails.send({
      from: 'MyBartenders <contact@mybartenders.co.uk>',
      to: ['contact@mybartenders.co.uk'],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <h3>Event Details:</h3>
        <p><strong>Number of Attendees:</strong> ${eventDetails.attendees}</p>
        <p><strong>Event Date:</strong> ${eventDetails.eventDate}</p>
        <p><strong>Location:</strong> ${eventDetails.location}</p>
        <p><strong>Start Time:</strong> ${eventDetails.startTime}</p>
        <p><strong>Finish Time:</strong> ${eventDetails.finishTime}</p>
        <p><strong>Budget:</strong> ${eventDetails.budget}</p>
        <p><strong>Requirements:</strong> ${eventDetails.requirements}</p>
      `
    })

    // Check for any errors from Resend API
    if (error) {
      console.error('Error sending email:', error)
      return res.status(400).json({ error: 'Failed to send email' })
    }

    res.status(200).json({ message: 'Email sent successfully!' })
  } catch (error) {
    console.error('Error processing request:', error)
    res.status(500).json({ error: 'Failed to process the form' })
  }
}
