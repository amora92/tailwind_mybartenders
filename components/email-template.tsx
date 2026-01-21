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
    eventType?: string
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

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ backgroundColor: '#ec4899', padding: '24px', borderRadius: '12px 12px 0 0' }}>
        <h1 style={{ color: 'white', margin: 0, fontSize: '24px' }}>New Enquiry from MyBartenders</h1>
      </div>

      <div style={{ backgroundColor: '#ffffff', padding: '24px', border: '1px solid #e5e7eb' }}>
        {eventDetails.eventType && (
          <div style={{ backgroundColor: '#fdf2f8', padding: '12px 16px', borderRadius: '8px', marginBottom: '20px' }}>
            <span style={{ color: '#be185d', fontWeight: 'bold', fontSize: '16px' }}>
              Event Type: {eventDetails.eventType}
            </span>
          </div>
        )}

        <h2 style={{ color: '#111827', fontSize: '18px', borderBottom: '2px solid #ec4899', paddingBottom: '8px' }}>
          Contact Information
        </h2>
        <table style={{ width: '100%', marginBottom: '20px' }}>
          <tr>
            <td style={{ padding: '8px 0', color: '#6b7280', width: '140px' }}>Name:</td>
            <td style={{ padding: '8px 0', color: '#111827', fontWeight: '500' }}>{name}</td>
          </tr>
          <tr>
            <td style={{ padding: '8px 0', color: '#6b7280' }}>Email:</td>
            <td style={{ padding: '8px 0' }}>
              <a href={`mailto:${email}`} style={{ color: '#ec4899' }}>{email}</a>
            </td>
          </tr>
          <tr>
            <td style={{ padding: '8px 0', color: '#6b7280' }}>Phone:</td>
            <td style={{ padding: '8px 0' }}>
              <a href={`tel:${phone}`} style={{ color: '#ec4899' }}>{phone}</a>
            </td>
          </tr>
          <tr>
            <td style={{ padding: '8px 0', color: '#6b7280' }}>Preferred Contact:</td>
            <td style={{ padding: '8px 0', color: '#111827', fontWeight: '500' }}>{contactPreference}</td>
          </tr>
        </table>

        <h2 style={{ color: '#111827', fontSize: '18px', borderBottom: '2px solid #ec4899', paddingBottom: '8px' }}>
          Event Details
        </h2>
        <table style={{ width: '100%', marginBottom: '20px' }}>
          <tr>
            <td style={{ padding: '8px 0', color: '#6b7280', width: '140px' }}>Guests:</td>
            <td style={{ padding: '8px 0', color: '#111827', fontWeight: '500' }}>{eventDetails.attendees || 'Not specified'}</td>
          </tr>
          <tr>
            <td style={{ padding: '8px 0', color: '#6b7280' }}>Event Date:</td>
            <td style={{ padding: '8px 0', color: '#111827', fontWeight: '500' }}>{formatDate(eventDetails.eventDate)}</td>
          </tr>
          <tr>
            <td style={{ padding: '8px 0', color: '#6b7280' }}>Start Time:</td>
            <td style={{ padding: '8px 0', color: '#111827', fontWeight: '500' }}>{formatTime(eventDetails.startTime)}</td>
          </tr>
          <tr>
            <td style={{ padding: '8px 0', color: '#6b7280' }}>Finish Time:</td>
            <td style={{ padding: '8px 0', color: '#111827', fontWeight: '500' }}>{formatTime(eventDetails.finishTime)}</td>
          </tr>
          <tr>
            <td style={{ padding: '8px 0', color: '#6b7280' }}>Location:</td>
            <td style={{ padding: '8px 0', color: '#111827', fontWeight: '500' }}>{eventDetails.location || 'Not specified'}</td>
          </tr>
          <tr>
            <td style={{ padding: '8px 0', color: '#6b7280' }}>Budget:</td>
            <td style={{ padding: '8px 0', color: '#111827', fontWeight: '500' }}>{eventDetails.budget || 'Not specified'}</td>
          </tr>
        </table>

        <h2 style={{ color: '#111827', fontSize: '18px', borderBottom: '2px solid #ec4899', paddingBottom: '8px' }}>
          Message
        </h2>
        <div style={{ backgroundColor: '#f9fafb', padding: '16px', borderRadius: '8px', marginBottom: '20px' }}>
          <p style={{ margin: 0, color: '#374151', lineHeight: '1.6' }}>{message}</p>
        </div>

        {eventDetails.requirements && (
          <>
            <h2 style={{ color: '#111827', fontSize: '18px', borderBottom: '2px solid #ec4899', paddingBottom: '8px' }}>
              Special Requirements
            </h2>
            <div style={{ backgroundColor: '#fef3c7', padding: '16px', borderRadius: '8px' }}>
              <p style={{ margin: 0, color: '#92400e', lineHeight: '1.6' }}>{eventDetails.requirements}</p>
            </div>
          </>
        )}
      </div>

      <div style={{ backgroundColor: '#f3f4f6', padding: '16px', borderRadius: '0 0 12px 12px', textAlign: 'center' as const }}>
        <p style={{ margin: 0, color: '#6b7280', fontSize: '14px' }}>
          This enquiry was submitted via mybartenders.co.uk
        </p>
      </div>
    </div>
  )
}
