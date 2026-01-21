'use client'

import Link from 'next/link'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SEO_DEFAULTS } from '@/constants/brandStyles'
import '../app/globals.css'

const sections = [
  {
    title: '1. Bookings',
    items: [
      'A deposit may be required to secure your booking, with the amount to be agreed upon during consultation',
      'Payment terms will be clearly outlined in your booking confirmation',
      "We're happy to discuss flexible payment arrangements for your event"
    ]
  },
  {
    title: '2. Changes and Cancellations',
    items: [
      'We understand plans can change - please let us know as soon as possible if you need to modify your booking',
      'Cancellation terms will be provided with your booking confirmation',
      "We'll always try to accommodate date changes where possible"
    ]
  },
  {
    title: '3. Service Delivery',
    items: [
      "We follow responsible service of alcohol guidelines to ensure everyone's safety and enjoyment",
      'We operate in accordance with UK licensing requirements',
      'Our team will work with you to ensure smooth service delivery'
    ]
  },
  {
    title: '4. Setup Requirements',
    items: [
      "We'll discuss specific setup requirements during the planning process",
      'Basic requirements include access to water and power where needed',
      "We're happy to work with your venue to meet any specific requirements"
    ]
  },
  {
    title: '5. Insurance',
    items: [
      'We maintain appropriate insurance coverage for our services',
      'Details of our insurance can be provided upon request'
    ]
  },
  {
    title: '6. Service Hours',
    items: [
      'Service duration will be agreed upon during booking',
      'Extensions may be possible during the event, subject to staff availability'
    ]
  },
  {
    title: '7. Menu Selection',
    items: [
      "We'll work with you to create the perfect menu for your event",
      'Menu adjustments can be made based on availability and requirements'
    ]
  }
]

const TermsAndConditions = () => {
  return (
    <>
      <Head>
        <title>Terms and Conditions | MyBartenders UK</title>
        <meta
          name='description'
          content='Read the Terms and Conditions for MyBartenders mobile bartending services in the UK.'
        />
        <link rel='canonical' href={`${SEO_DEFAULTS.siteUrl}/terms-and-conditions`} />
      </Head>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className='relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gray-950 overflow-hidden'>
          <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black' />
          <div className='absolute top-20 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl' />

          <div className='relative container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='text-center max-w-3xl mx-auto'
            >
              <span className='inline-block px-4 py-1.5 bg-white/5 border border-white/10 text-pink-400 text-sm font-medium rounded-full mb-6'>
                Legal
              </span>
              <h1 className='text-4xl md:text-5xl font-bold text-white mb-6'>
                Terms &{' '}
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-amber-400'>
                  Conditions
                </span>
              </h1>
              <p className='text-xl text-gray-400'>
                General agreement between MyBartenders and our clients for mobile bartending services
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className='relative py-16 lg:py-24 bg-gray-950'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='max-w-4xl mx-auto'>
              {/* Introduction */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='mb-12 p-6 bg-white/5 border border-white/10 rounded-2xl'
              >
                <p className='text-gray-300 leading-relaxed'>
                  These Terms and Conditions outline the general agreement between MyBartenders
                  and our clients for mobile bartending services in the UK. Specific arrangements
                  can be discussed and agreed upon during the booking process.
                </p>
              </motion.div>

              {/* Sections */}
              <div className='space-y-6'>
                {sections.map((section, index) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className='p-6 bg-gray-900 border border-white/10 rounded-2xl'
                  >
                    <h2 className='text-xl font-semibold text-white mb-4'>
                      {section.title}
                    </h2>
                    <ul className='space-y-3'>
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className='flex items-start gap-3 text-gray-400'>
                          <svg
                            className='w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M5 13l4 4L19 7'
                            />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}

                {/* Privacy Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className='p-6 bg-gray-900 border border-white/10 rounded-2xl'
                >
                  <h2 className='text-xl font-semibold text-white mb-4'>
                    8. Privacy
                  </h2>
                  <ul className='space-y-3'>
                    <li className='flex items-start gap-3 text-gray-400'>
                      <svg
                        className='w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      <span>
                        We respect your privacy and handle your data in accordance with our{' '}
                        <Link
                          href='/privacy-policy'
                          className='text-pink-400 hover:text-pink-300 transition-colors'
                        >
                          Privacy Policy
                        </Link>
                      </span>
                    </li>
                    <li className='flex items-start gap-3 text-gray-400'>
                      <svg
                        className='w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      <span>We're happy to discuss any specific privacy requirements for your event</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Contact Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className='p-6 bg-gradient-to-r from-pink-500/10 to-amber-500/10 border border-pink-500/20 rounded-2xl'
                >
                  <h2 className='text-xl font-semibold text-white mb-4'>
                    9. Contact Us
                  </h2>
                  <p className='text-gray-300 leading-relaxed'>
                    We're here to help! For any questions about these terms or to discuss your
                    specific requirements, please contact us at{' '}
                    <Link
                      href='mailto:contact@mybartenders.co.uk'
                      className='text-pink-400 hover:text-pink-300 transition-colors'
                    >
                      contact@mybartenders.co.uk
                    </Link>
                  </p>
                </motion.div>
              </div>

              {/* Last Updated */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className='mt-12 text-center'
              >
                <p className='text-gray-500 text-sm'>
                  Last updated: January 2025
                </p>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='mt-12 text-center'
              >
                <Link
                  href='/contact_us'
                  className='inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white font-semibold rounded-full shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-all'
                >
                  Get in Touch
                  <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default TermsAndConditions
