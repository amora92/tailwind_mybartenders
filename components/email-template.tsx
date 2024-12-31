interface EmailTemplateProps {
  name: string
  email: string
  phone: string
  contactPreference: string
  message: string
  eventDetails: {
    attendees: string
    eventDate: string
    location: string
    startTime: string
    finishTime: string
    budget: string
    requirements: string
  }
}

export default function EmailTemplate ({
  name,
  email,
  phone,
  contactPreference,
  message,
  eventDetails
}: EmailTemplateProps) {
  return (
    <div>
      <h1>New Contact Form Submission</h1>

      <h2>Contact Information:</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>
        <strong>Preferred Contact Method: {contactPreference}</strong>
      </p>

      <h2>Message:</h2>
      <p>{message}</p>

      <h2>Event Details:</h2>
      <p>Number of Attendees: {eventDetails.attendees}</p>
      <p>Event Date: {eventDetails.eventDate}</p>
      <p>Location: {eventDetails.location}</p>
      <p>Start Time: {eventDetails.startTime}</p>
      <p>Finish Time: {eventDetails.finishTime}</p>
      <p>Budget: {eventDetails.budget || 'Not specified'}</p>
      <p>Requirements: {eventDetails.requirements || 'None specified'}</p>
    </div>
  )
}
