'use client'

import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { CONTACT_INFO } from '@/constants/contact'
import { SEO_DEFAULTS } from '@/constants/brandStyles'
import { getBookingYear, TRUST_INDICATORS } from '@/constants/siteConfig'
import '../app/globals.css'

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
  eventType: string
}

const GUEST_PRESETS = [
  { value: '20-50', label: '20-50' },
  { value: '50-100', label: '50-100' },
  { value: '100-150', label: '100-150' },
  { value: '150-200', label: '150-200' },
  { value: '200+', label: '200+' },
]

const BUDGET_PRESETS = [
  { value: '£300-500', label: '£300-500' },
  { value: '£500-1000', label: '£500-1,000' },
  { value: '£1000-2000', label: '£1,000-2,000' },
  { value: '£2000+', label: '£2,000+' },
  { value: 'Flexible', label: 'Flexible' },
]

const EVENT_TYPES = [
  { value: 'Wedding', label: 'Wedding', icon: '💒' },
  { value: 'Corporate', label: 'Corporate', icon: '🏢' },
  { value: 'Birthday', label: 'Birthday', icon: '🎂' },
  { value: 'Engagement', label: 'Engagement', icon: '💍' },
  { value: 'Anniversary', label: 'Anniversary', icon: '🥂' },
  { value: 'Other', label: 'Other', icon: '🎉' },
]

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
    requirements: '',
    eventType: ''
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatusMessage('')
    setLoading(true)

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
      requirements,
      eventType
    } = formData

    const eventDetails = {
      attendees,
      eventDate,
      location,
      startTime,
      finishTime,
      budget,
      requirements,
      eventType
    }

    try {
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
          requirements: '',
          eventType: ''
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
      setLoading(false)
    }
  }

  const inputClasses = 'w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200'

  return (
    <>
      <Head>
        <title>Contact Us | Get a Free Quote | MyBartenders UK</title>
        <meta
          name='description'
          content='Contact MyBartenders for mobile bar hire and professional bartending services. Get a free quote for your wedding, corporate event, or private party.'
        />
        <link rel='canonical' href={`${SEO_DEFAULTS.siteUrl}/contact_us`} />
        <meta property='og:title' content='Contact MyBartenders | Get a Free Quote' />
        <meta property='og:description' content='Get in touch for premium mobile bar services. Free consultation, customized packages, UK nationwide service.' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={`${SEO_DEFAULTS.siteUrl}/contact_us`} />
      </Head>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className='relative pt-36 pb-20 lg:pt-44 lg:pb-24 bg-gray-950 overflow-hidden'>
          <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black' />
          <div className='absolute top-20 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl' />
          <div className='absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl' />

          <div className='relative container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='text-center max-w-3xl mx-auto'
            >
              <div className='inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8'>
                <span className='relative flex h-2 w-2'>
                  <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
                  <span className='relative inline-flex rounded-full h-2 w-2 bg-green-500'></span>
                </span>
                <span className='text-white/80 text-sm font-medium'>Now Booking for {getBookingYear()}</span>
              </div>

              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight'>
                Let's Create{' '}
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-amber-400'>
                  Something Amazing
                </span>
              </h1>

              <p className='text-xl text-gray-400 max-w-2xl mx-auto'>
                Ready to elevate your event? Fill out the form below for a free, no-obligation quote.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Form Section */}
        <section className='relative py-16 lg:py-24 bg-gray-50'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='max-w-4xl mx-auto'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='bg-white rounded-3xl shadow-xl overflow-hidden'
              >
                {/* Form Header */}
                <div className='bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 px-8 py-6'>
                  <h2 className='text-2xl font-bold text-white'>Get Your Free Quote</h2>
                  <p className='text-white/80 mt-1'>Tell us about your event and we'll get back to you within 24 hours.</p>
                </div>

                <form onSubmit={handleSubmit} className='p-8 space-y-8'>
                  {/* Personal Information */}
                  <div>
                    <h3 className='text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2'>
                      <span className='w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center'>
                        <svg className='w-4 h-4 text-pink-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' />
                        </svg>
                      </span>
                      Personal Details
                    </h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                      <div>
                        <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-1'>
                          Your Name *
                        </label>
                        <input
                          type='text'
                          id='name'
                          name='name'
                          placeholder='John Doe'
                          value={formData.name}
                          onChange={handleChange}
                          className={inputClasses}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-1'>
                          Email Address *
                        </label>
                        <input
                          type='email'
                          id='email'
                          name='email'
                          placeholder='john@example.com'
                          value={formData.email}
                          onChange={handleChange}
                          className={inputClasses}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor='phone' className='block text-sm font-medium text-gray-700 mb-1'>
                          Phone Number *
                        </label>
                        <input
                          type='tel'
                          id='phone'
                          name='phone'
                          placeholder='07700 900000'
                          value={formData.phone}
                          onChange={handleChange}
                          className={inputClasses}
                          required
                        />
                      </div>
                      <div className='flex items-end gap-6 pb-3'>
                        <label className='flex items-center gap-2 cursor-pointer'>
                          <input
                            type='radio'
                            name='contactPreference'
                            value='email'
                            checked={formData.contactPreference === 'email'}
                            onChange={handleChange}
                            className='w-4 h-4 text-pink-500 focus:ring-pink-500'
                          />
                          <span className='text-sm text-gray-700'>Contact via Email</span>
                        </label>
                        <label className='flex items-center gap-2 cursor-pointer'>
                          <input
                            type='radio'
                            name='contactPreference'
                            value='phone'
                            checked={formData.contactPreference === 'phone'}
                            onChange={handleChange}
                            className='w-4 h-4 text-pink-500 focus:ring-pink-500'
                          />
                          <span className='text-sm text-gray-700'>Contact via Phone</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Event Type Selection */}
                  <div>
                    <h3 className='text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2'>
                      <span className='w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center'>
                        <svg className='w-4 h-4 text-pink-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' />
                        </svg>
                      </span>
                      What type of event?
                    </h3>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
                      {EVENT_TYPES.map(type => (
                        <button
                          key={type.value}
                          type='button'
                          onClick={() => setFormData(prev => ({ ...prev, eventType: type.value }))}
                          className={`p-4 rounded-xl border-2 transition-all text-left ${
                            formData.eventType === type.value
                              ? 'border-pink-500 bg-pink-50 ring-2 ring-pink-500/20'
                              : 'border-gray-200 hover:border-pink-300 hover:bg-gray-50'
                          }`}
                        >
                          <span className='text-2xl mb-2 block'>{type.icon}</span>
                          <span className={`font-medium ${formData.eventType === type.value ? 'text-pink-700' : 'text-gray-700'}`}>
                            {type.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Event Details */}
                  <div>
                    <h3 className='text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2'>
                      <span className='w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center'>
                        <svg className='w-4 h-4 text-pink-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
                        </svg>
                      </span>
                      Event Details
                    </h3>
                    <div className='space-y-5'>
                      {/* Guest Count Presets */}
                      <div>
                        <label className='block text-sm font-medium text-gray-700 mb-2'>
                          Number of Guests *
                        </label>
                        <div className='flex flex-wrap gap-2'>
                          {GUEST_PRESETS.map(preset => (
                            <button
                              key={preset.value}
                              type='button'
                              onClick={() => setFormData(prev => ({ ...prev, attendees: preset.value }))}
                              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                formData.attendees === preset.value
                                  ? 'bg-pink-500 text-white shadow-lg shadow-pink-500/30'
                                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                              }`}
                            >
                              {preset.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div>
                          <label htmlFor='eventDate' className='block text-sm font-medium text-gray-700 mb-1'>
                            Event Date *
                          </label>
                          <input
                            type='date'
                            id='eventDate'
                            name='eventDate'
                            value={formData.eventDate}
                            onChange={handleChange}
                            className={inputClasses}
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor='location' className='block text-sm font-medium text-gray-700 mb-1'>
                            Location *
                          </label>
                          <input
                            type='text'
                            id='location'
                            name='location'
                            placeholder='Northampton, UK'
                            value={formData.location}
                            onChange={handleChange}
                            className={inputClasses}
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor='startTime' className='block text-sm font-medium text-gray-700 mb-1'>
                            Start Time *
                          </label>
                          <input
                            type='time'
                            id='startTime'
                            name='startTime'
                            value={formData.startTime}
                            onChange={handleChange}
                            className={inputClasses}
                            required
                            step='1800'
                          />
                        </div>
                        <div>
                          <label htmlFor='finishTime' className='block text-sm font-medium text-gray-700 mb-1'>
                            Finish Time *
                          </label>
                          <input
                            type='time'
                            id='finishTime'
                            name='finishTime'
                            value={formData.finishTime}
                            onChange={handleChange}
                            className={inputClasses}
                            required
                            step='1800'
                          />
                        </div>
                      </div>

                      {/* Budget Presets */}
                      <div>
                        <label className='block text-sm font-medium text-gray-700 mb-2'>
                          Budget Range
                        </label>
                        <div className='flex flex-wrap gap-2'>
                          {BUDGET_PRESETS.map(preset => (
                            <button
                              key={preset.value}
                              type='button'
                              onClick={() => setFormData(prev => ({ ...prev, budget: preset.value }))}
                              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                formData.budget === preset.value
                                  ? 'bg-pink-500 text-white shadow-lg shadow-pink-500/30'
                                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                              }`}
                            >
                              {preset.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div>
                    <h3 className='text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2'>
                      <span className='w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center'>
                        <svg className='w-4 h-4 text-pink-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z' />
                        </svg>
                      </span>
                      Additional Information
                    </h3>
                    <div className='space-y-4'>
                      <div>
                        <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-1'>
                          Tell us about your event *
                        </label>
                        <textarea
                          id='message'
                          name='message'
                          placeholder='Share details about your event - type of occasion, theme, any specific requirements...'
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className={inputClasses}
                          required
                        ></textarea>
                      </div>
                      <div>
                        <label htmlFor='requirements' className='block text-sm font-medium text-gray-700 mb-1'>
                          Special Requirements (Optional)
                        </label>
                        <textarea
                          id='requirements'
                          name='requirements'
                          placeholder='Any dietary requirements, specific cocktails, equipment needs...'
                          value={formData.requirements}
                          onChange={handleChange}
                          rows={3}
                          className={inputClasses}
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type='submit'
                    disabled={loading}
                    className={`w-full py-4 px-6 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white font-semibold rounded-xl shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-300 flex items-center justify-center gap-2 ${
                      loading ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {loading ? (
                      <>
                        <svg className='animate-spin h-5 w-5' viewBox='0 0 24 24'>
                          <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' fill='none' />
                          <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z' />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                        </svg>
                      </>
                    )}
                  </button>

                  {statusMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 rounded-xl text-center ${
                        statusMessage.includes('Thanks')
                          ? 'bg-green-50 text-green-700 border border-green-200'
                          : 'bg-red-50 text-red-700 border border-red-200'
                      }`}
                    >
                      {statusMessage}
                    </motion.div>
                  )}
                </form>
              </motion.div>

              {/* Contact Info Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='grid md:grid-cols-2 gap-6 mt-8'
              >
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className='flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100 group'
                >
                  <div className='w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center group-hover:bg-pink-500 transition-colors'>
                    <svg className='w-6 h-6 text-pink-500 group-hover:text-white transition-colors' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                    </svg>
                  </div>
                  <div>
                    <p className='text-sm text-gray-500'>Email us at</p>
                    <p className='text-gray-900 font-medium'>{CONTACT_INFO.email}</p>
                  </div>
                </a>

                <a
                  href={CONTACT_INFO.phoneHref}
                  className='flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100 group'
                >
                  <div className='w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center group-hover:bg-pink-500 transition-colors'>
                    <svg className='w-6 h-6 text-pink-500 group-hover:text-white transition-colors' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                    </svg>
                  </div>
                  <div>
                    <p className='text-sm text-gray-500'>Call us at</p>
                    <p className='text-gray-900 font-medium'>{CONTACT_INFO.phone}</p>
                  </div>
                </a>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className='flex flex-wrap justify-center gap-6 mt-12 text-gray-500 text-sm'
              >
                {TRUST_INDICATORS.map(item => (
                  <div key={item} className='flex items-center gap-2'>
                    <svg className='w-5 h-5 text-green-500' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default ContactUs
