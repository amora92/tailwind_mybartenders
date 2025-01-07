import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useState } from 'react'
import '../app/globals.css'
import Getting_In_Touch from '@/components/Getting_In_Touch'
import FreqQ from '@/components/FreqQ'

interface FormData {
  name: string
  email: string
  phone: string
  contactPreference: string
  message: string
  attendees: string
  eventDate: string
  location: string
  startTime: string
  finishTime: string
  budget: string
  requirements: string
}

const ContactUs: React.FC = () => {
  const [statusMessage, setStatusMessage] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    contactPreference: 'email',
    message: '',
    attendees: '',
    eventDate: '',
    location: '',
    startTime: '',
    finishTime: '',
    budget: '',
    requirements: ''
  })

  // Unified change handler for all inputs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatusMessage('') // Clear previous status message
    setLoading(true) // Set loading state

    const {
      name,
      email,
      phone,
      contactPreference,
      message,
      attendees,
      eventDate,
      location,
      startTime,
      finishTime,
      budget,
      requirements
    } = formData

    const eventDetails = {
      attendees,
      eventDate,
      location,
      startTime,
      finishTime,
      budget,
      requirements
    }

    try {
      // Send form data to the backend API for email processing
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          contactPreference,
          message,
          eventDetails
        })
      })

      const data = await response.json()

      if (response.ok) {
        setStatusMessage(
          'Thanks for your submission! We will get back to you soon.'
        )
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          contactPreference: 'email',
          message: '',
          attendees: '',
          eventDate: '',
          location: '',
          startTime: '',
          finishTime: '',
          budget: '',
          requirements: ''
        })
      } else {
        setStatusMessage(
          data.error ||
            'Oops! There was a problem submitting your form. Please try again later.'
        )
      }
    } catch (error) {
      setStatusMessage(
        'Oops! There was a problem submitting your form. Please try again later.'
      )
    } finally {
      setLoading(false) // Reset loading state
    }
  }

  return (
    <div className='min-h-screen bg-gradient-to-b from-white to-pink-50/30'>
      <Head>
        <title>Contact Us | Mobile Bartending Services</title>
        <meta
          name='description'
          content='Get in touch with MYBARTENDERS.CO.UK for inquiries, bookings, or custom bartending services. Fill out our contact form for quick assistance.'
        />
        <link
          rel='canonical'
          href='https://www.mybartenders.co.uk/contact_us'
        />
      </Head>

      <Navbar />
      <main className='container mx-auto px-4 py-24'>
        <div className='max-w-4xl mx-auto'>
          <section
            id='contact_form'
            className='bg-white rounded-xl shadow-xl p-8 mb-8'
          >
            <h2 className='text-3xl font-bold mb-2 text-gray-800'>
              Get In Touch
            </h2>
            <p className='text-gray-600 mb-8 text-lg'>
              Ready to make your event extraordinary? Fill out the form below
              and let's create something amazing together.
            </p>

            <form onSubmit={handleSubmit} className='space-y-8'>
              {/* Personal Information */}
              <div className='rounded-lg p-6 border-l-4 border-pink-400 bg-gradient-to-r from-pink-50 to-transparent'>
                <h3 className='text-xl font-semibold mb-4 text-gray-800'>
                  Personal Details
                </h3>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  {/* Name */}
                  <div>
                    <label
                      htmlFor='name'
                      className='block text-gray-700 font-medium mb-2'
                    >
                      Your Name
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      placeholder='John Doe'
                      value={formData.name}
                      onChange={handleChange}
                      className='border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200'
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor='email'
                      className='block text-gray-700 font-medium mb-2'
                    >
                      Email Address
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      placeholder='johndoe@mail.com'
                      value={formData.email}
                      onChange={handleChange}
                      className='border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200'
                      required
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label
                      htmlFor='phone'
                      className='block text-gray-700 font-medium mb-2'
                    >
                      Phone Number
                    </label>
                    <input
                      type='tel'
                      id='phone'
                      name='phone'
                      placeholder='07700 900000'
                      value={formData.phone}
                      onChange={handleChange}
                      className='border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200'
                      required
                    />
                  </div>

                  {/* Contact Preference */}
                  <div className='flex items-center space-x-6'>
                    <div>
                      <input
                        type='radio'
                        id='emailPreference'
                        name='contactPreference'
                        value='email'
                        checked={formData.contactPreference === 'email'}
                        onChange={handleChange}
                        className='mr-2 accent-pink-500'
                      />
                      <label htmlFor='emailPreference'>
                        Contact me via Email
                      </label>
                    </div>
                    <div>
                      <input
                        type='radio'
                        id='phonePreference'
                        name='contactPreference'
                        value='phone'
                        checked={formData.contactPreference === 'phone'}
                        onChange={handleChange}
                        className='mr-2 accent-pink-500'
                      />
                      <label htmlFor='phonePreference'>
                        Contact me via Phone
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Event Details Section */}
              <div className='rounded-lg p-6 border-l-4 border-pink-400 bg-gradient-to-r from-pink-50 to-transparent'>
                <h3 className='text-xl font-semibold mb-4 text-gray-800'>
                  Event Details
                </h3>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  {/* Attendees */}
                  <div>
                    <label
                      htmlFor='attendees'
                      className='block text-gray-700 font-medium mb-2'
                    >
                      Number of Guests
                    </label>
                    <input
                      type='number'
                      id='attendees'
                      name='attendees'
                      placeholder='20'
                      value={formData.attendees}
                      onChange={handleChange}
                      className='border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200'
                      required
                    />
                  </div>

                  {/* Event Date */}
                  <div>
                    <label
                      htmlFor='eventDate'
                      className='block text-gray-700 font-medium mb-2'
                    >
                      Event Date
                    </label>
                    <input
                      type='date'
                      id='eventDate'
                      name='eventDate'
                      value={formData.eventDate}
                      onChange={handleChange}
                      className='border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200'
                      required
                    />
                  </div>

                  {/* Location */}
                  <div>
                    <label
                      htmlFor='location'
                      className='block text-gray-700 font-medium mb-2'
                    >
                      Location
                    </label>
                    <input
                      type='text'
                      id='location'
                      name='location'
                      value={formData.location}
                      onChange={handleChange}
                      className='border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200'
                      required
                    />
                  </div>

                  {/* Start Time */}
                  <div>
                    <label
                      htmlFor='startTime'
                      className='block text-gray-700 font-medium mb-2'
                    >
                      Start Time
                    </label>
                    <input
                      type='time'
                      id='startTime'
                      name='startTime'
                      value={formData.startTime}
                      onChange={handleChange}
                      className='border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200'
                      required
                      step='1800' // 30-minute intervals
                    />
                  </div>

                  {/* Finish Time */}
                  <div>
                    <label
                      htmlFor='finishTime'
                      className='block text-gray-700 font-medium mb-2'
                    >
                      Finish Time
                    </label>
                    <input
                      type='time'
                      id='finishTime'
                      name='finishTime'
                      value={formData.finishTime}
                      onChange={handleChange}
                      className='border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200'
                      required
                      step='1800' // 30-minute intervals
                    />
                  </div>

                  {/* Budget */}
                  <div>
                    <label
                      htmlFor='budget'
                      className='block text-gray-700 font-medium mb-2'
                    >
                      Budget
                    </label>
                    <input
                      type='text'
                      id='budget'
                      name='budget'
                      value={formData.budget}
                      onChange={handleChange}
                      className='border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200'
                    />
                  </div>
                </div>
              </div>

              {/* Message Section */}
              <div className='rounded-lg p-6 border-l-4 border-pink-400 bg-gradient-to-r from-pink-50 to-transparent'>
                <h3 className='text-xl font-semibold mb-4 text-gray-800'>
                  Additional Information
                </h3>
                <div className='space-y-6'>
                  <div>
                    <label
                      htmlFor='message'
                      className='block text-gray-700 font-medium mb-2'
                    >
                      Tell us about your event
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      placeholder='Share any specific details about your event that would help us understand your needs better...'
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className='border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200'
                      required
                    ></textarea>
                  </div>

                  {/* Requirements */}
                  <div>
                    <label
                      htmlFor='requirements'
                      className='block text-gray-700 font-medium mb-2'
                    >
                      Special Requirements
                    </label>
                    <textarea
                      id='requirements'
                      name='requirements'
                      placeholder='Any specific requirements for your event? (e.g., specific cocktails, equipment needs, dietary restrictions...)'
                      value={formData.requirements}
                      onChange={handleChange}
                      rows={4}
                      className='border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200'
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type='submit'
                className={`w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 ${
                  loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              {statusMessage && (
                <p
                  className={`mt-4 text-center ${
                    statusMessage.includes('Thanks')
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}
                >
                  {statusMessage}
                </p>
              )}
            </form>
          </section>

          {/* Contact Information */}
          <section className='bg-white rounded-xl shadow-xl p-8'>
            <h2 className='text-2xl font-bold mb-6 text-center text-gray-800'>
              Contact Information
            </h2>
            <div className='flex flex-col items-center space-y-4'>
              <div className='w-full max-w-md p-4 rounded-lg hover:bg-pink-50 transition-colors duration-200'>
                <div className='flex items-center justify-center space-x-4'>
                  <div className='bg-pink-100 p-3 rounded-full'>
                    <svg
                      className='w-6 h-6 text-pink-500'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                      />
                    </svg>
                  </div>
                  <a
                    href='mailto:contact@mybartenders.co.uk'
                    className='text-gray-700 hover:text-pink-600 transition-colors duration-200'
                  >
                    contact@mybartenders.co.uk
                  </a>
                </div>
              </div>

              <div className='w-full max-w-md p-4 rounded-lg hover:bg-pink-50 transition-colors duration-200'>
                <div className='flex items-center justify-center space-x-4'>
                  <div className='bg-pink-100 p-3 rounded-full'>
                    <svg
                      className='w-6 h-6 text-pink-500'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                      />
                    </svg>
                  </div>
                  <a
                    href='tel:+447482612532'
                    className='text-gray-700 hover:text-pink-600 transition-colors duration-200'
                  >
                    +44 7482 6125 32
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default ContactUs
