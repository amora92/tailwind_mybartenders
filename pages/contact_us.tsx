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
    <div>
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
        {/* <div className='bg-white rounded-lg shadow-md p-6 mb-8'>
          <Getting_In_Touch />
        </div> */}
        {/* <div className='bg-white rounded-lg shadow-md p-6 mb-8'>
          <FreqQ />
        </div>
        <h1 className='text-3xl font-bold text-center mb-8'>Contact Us</h1> */}

        <section
          id='contact_form'
          className='bg-white rounded-lg shadow-md p-6 mb-8'
        >
          <h2 className='text-xl font-semibold mb-4'>Get In Touch</h2>
          <p className='text-gray-600 mb-4'>
            Fill out the form below and we'll get back to you as soon as
            possible.
          </p>

          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className='mb-4'>
              <label
                htmlFor='name'
                className='block text-gray-700 font-semibold mb-2'
              >
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className='border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500'
                required
              />
            </div>

            {/* Email */}
            <div className='mb-4'>
              <label
                htmlFor='email'
                className='block text-gray-700 font-semibold mb-2'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500'
                required
              />
            </div>

            {/* Message */}
            <div className='mb-4'>
              <label
                htmlFor='message'
                className='block text-gray-700 font-semibold mb-2'
              >
                Message
              </label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className='border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500'
                required
              ></textarea>
            </div>

            {/* Event Details */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              {/* Attendees */}
              <div>
                <label
                  htmlFor='attendees'
                  className='block text-gray-700 font-semibold mb-2'
                >
                  Number of Attendees
                </label>
                <input
                  type='number'
                  id='attendees'
                  name='attendees'
                  value={formData.attendees}
                  onChange={handleChange}
                  className='border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500'
                  required
                />
              </div>

              {/* Event Date */}
              <div>
                <label
                  htmlFor='eventDate'
                  className='block text-gray-700 font-semibold mb-2'
                >
                  Event Date
                </label>
                <input
                  type='date'
                  id='eventDate'
                  name='eventDate'
                  value={formData.eventDate}
                  onChange={handleChange}
                  className='border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500'
                  required
                />
              </div>

              {/* Location */}
              <div>
                <label
                  htmlFor='location'
                  className='block text-gray-700 font-semibold mb-2'
                >
                  Location
                </label>
                <input
                  type='text'
                  id='location'
                  name='location'
                  value={formData.location}
                  onChange={handleChange}
                  className='border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500'
                  required
                />
              </div>

              {/* Start Time */}
              <div>
                <label
                  htmlFor='startTime'
                  className='block text-gray-700 font-semibold mb-2'
                >
                  Start Time
                </label>
                <input
                  type='time'
                  id='startTime'
                  name='startTime'
                  value={formData.startTime}
                  onChange={handleChange}
                  className='border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500'
                  required
                />
              </div>

              {/* Finish Time */}
              <div>
                <label
                  htmlFor='finishTime'
                  className='block text-gray-700 font-semibold mb-2'
                >
                  Finish Time
                </label>
                <input
                  type='time'
                  id='finishTime'
                  name='finishTime'
                  value={formData.finishTime}
                  onChange={handleChange}
                  className='border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500'
                  required
                />
              </div>

              {/* Budget */}
              <div>
                <label
                  htmlFor='budget'
                  className='block text-gray-700 font-semibold mb-2'
                >
                  Budget
                </label>
                <input
                  type='text'
                  id='budget'
                  name='budget'
                  value={formData.budget}
                  onChange={handleChange}
                  className='border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500'
                  required
                />
              </div>
            </div>

            {/* Requirements */}
            <div className='mb-4'>
              <label
                htmlFor='requirements'
                className='block text-gray-700 font-semibold mb-2'
              >
                Requirements
              </label>
              <textarea
                id='requirements'
                name='requirements'
                value={formData.requirements}
                onChange={handleChange}
                rows={4}
                className='border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500'
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type='submit'
              className={`bg-[#4CAF50] hover:bg-[#45a049] text-white font-bold py-2 px-6 rounded-md transition-colors ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
            <p className='mt-2'>{statusMessage}</p>
          </form>
        </section>

        {/* Contact Information */}
        <section className='bg-white rounded-lg shadow-md p-6'>
          <h2 className='text-xl font-semibold mb-4'>Contact Information</h2>
          <p className='text-gray-600 mb-4'>
            For any inquiries, please contact us via the following methods:
          </p>
          <ul className='list-disc list-inside'>
            <li>
              <span className='font-semibold'>Email:</span>{' '}
              <a href='mailto:contact@mybartenders.co.uk'>
                contact@mybartenders.co.uk
              </a>
            </li>
            <li>
              <span className='font-semibold'>Phone:</span>{' '}
              <a href='tel:+4473655822959'>+44 7365 5822 959</a>
            </li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default ContactUs
