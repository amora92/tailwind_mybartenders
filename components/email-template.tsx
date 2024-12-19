type EmailTemplateProps = {
  name: string
  email: string
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

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  name,
  email,
  message,
  eventDetails
}) => {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.6',
        color: '#333'
      }}
    >
      <h1>New Contact Form Submission</h1>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Message:</strong> {message}
      </p>
      <h2>Event Details</h2>
      <ul>
        <li>
          <strong>Attendees:</strong> {eventDetails.attendees}
        </li>
        <li>
          <strong>Event Date:</strong> {eventDetails.eventDate}
        </li>
        <li>
          <strong>Location:</strong> {eventDetails.location}
        </li>
        <li>
          <strong>Start Time:</strong> {eventDetails.startTime}
        </li>
        <li>
          <strong>Finish Time:</strong> {eventDetails.finishTime}
        </li>
        <li>
          <strong>Budget:</strong> {eventDetails.budget}
        </li>
        <li>
          <strong>Requirements:</strong> {eventDetails.requirements}
        </li>
      </ul>
    </div>
  )
}
