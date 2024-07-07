// pages/contactus.tsx

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useState } from 'react'
import '../app/globals.css'
import Getting_In_Touch from '@/components/Getting_In_Touch'
import FreqQ from '@/components/FreqQ'

const ContactUs: React.FC = () => {
  const [statusMessage, setStatusMessage] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [eventDetails, setEventDetails] = useState({
    attendees: '',
    eventDate: '',
    location: '',
    startTime: '',
    finishTime: '',
    budget: '',
    requirements: ''
  })

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.target as HTMLFormElement
    const formData = new FormData(form)
    formData.append('eventDetails', JSON.stringify(eventDetails))

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: 'application/json'
        }
      })

      if (response.ok) {
        setStatusMessage('Thanks for your submission!')
        form.reset()
      } else {
        const data = await response.json()
        if (data.hasOwnProperty('errors')) {
          setStatusMessage(
            data.errors
              .map((error: { message: string }) => error.message)
              .join(', ')
          )
        } else {
          setStatusMessage('Oops! There was a problem submitting your form')
        }
      }
    } catch (error) {
      setStatusMessage('Oops! There was a problem submitting your form')
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setEventDetails(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div>
      <Navbar />
      <main className='container mx-auto px-4 py-8'>
        <div className='bg-white rounded-lg shadow-md p-6 mb-8'>
          <Getting_In_Touch />
        </div>
        <div className='bg-white rounded-lg shadow-md p-6 mb-8'>
          <FreqQ />
        </div>
        <h1 className='text-3xl font-bold text-center mb-8'>Contact Us</h1>

        <section className='bg-white rounded-lg shadow-md p-6 mb-8'>
          <h2 className='text-xl font-semibold mb-4'>Get In Touch</h2>
          <p className='text-gray-600 mb-4'>
            Fill out the form below and we'll get back to you as soon as
            possible.
          </p>

          {/* Formspree form */}
          <form
            id='my-form'
            action='https://formspree.io/f/xyyoygpk'
            method='POST'
            onSubmit={handleSubmit}
          >
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
                value={name}
                onChange={e => setName(e.target.value)}
                className='border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500'
                required
              />
            </div>

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
                value={email}
                onChange={e => setEmail(e.target.value)}
                className='border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500'
                required
              />
            </div>

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
                value={message}
                onChange={e => setMessage(e.target.value)}
                rows={4}
                className='border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500'
                required
              ></textarea>
            </div>

            <div className='mb-4'>
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
                value={eventDetails.attendees}
                onChange={handleChange}
                className='border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500'
                required
              />
            </div>

            <div className='mb-4'>
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
                value={eventDetails.eventDate}
                onChange={handleChange}
                className='border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500'
                required
              />
            </div>

            <div className='mb-4'>
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
                value={eventDetails.location}
                onChange={handleChange}
                className='border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500'
                required
              />
            </div>

            <div className='mb-4'>
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
                value={eventDetails.startTime}
                onChange={handleChange}
                className='border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500'
                required
              />
            </div>

            <div className='mb-4'>
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
                value={eventDetails.finishTime}
                onChange={handleChange}
                className='border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500'
                required
              />
            </div>

            <div className='mb-4'>
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
                value={eventDetails.budget}
                onChange={handleChange}
                className='border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500'
                required
              />
            </div>

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
                value={eventDetails.requirements}
                onChange={handleChange}
                rows={4}
                className='border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500'
                required
              ></textarea>
            </div>

            <button
              type='submit'
              className=' bg-main_buttons_1 hover:bg-lime-500 text-white py-2 px-4 rounded-md'
            >
              Send
            </button>
            <p className='mt-2'>{statusMessage}</p>
          </form>
        </section>

        <section className='bg-white rounded-lg shadow-md p-6'>
          <h2 className='text-xl font-semibold mb-4'>Contact Information</h2>
          <p className='text-gray-600 mb-4'>
            For any inquiries, please contact us via the following methods:
          </p>

          <ul className='list-disc list-inside'>
            <li className='mb-2'>
              <span className='font-semibold'>Email:</span>{' '}
              <a href='mailto:contact@mybartenders.co.uk'>
                contact@mybartenders.co.uk
              </a>
            </li>
            {/* <li className='mb-2'>
              <span className='font-semibold'>Phone:</span> +1 234 567 890
            </li>
            <li className='mb-2'>
              <span className='font-semibold'>Address:</span> 123 Main St, City,
              Country
            </li> */}
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default ContactUs
