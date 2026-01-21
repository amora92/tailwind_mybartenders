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
    title: '1. Information We Collect',
    content: [
      'We do not collect or process personal data from visitors to our website unless you provide it to us voluntarily through the contact form. The only personal information we may collect is your email address, which you provide when submitting an inquiry through our contact form.',
      'This information is only used for the purpose of responding to your query or request and is not stored beyond that.'
    ]
  },
  {
    title: '2. How We Use Your Information',
    content: [
      'Your email address is used exclusively to respond to inquiries made through our contact form. We do not use your email address for marketing purposes or share it with any third parties.',
      'We will not send unsolicited emails or use your personal information for any purposes other than those explicitly stated here.'
    ]
  },
  {
    title: '3. Data Retention',
    content: [
      'We will only retain your email address for as long as necessary to respond to your inquiry or request. Once the communication has been completed, your email address will be deleted from our system.'
    ]
  },
  {
    title: '4. Cookies and Tracking Technologies',
    content: [
      'Our website may use cookies or similar tracking technologies to improve user experience, analyze usage patterns, and help us improve our services. However, we do not use cookies to collect personal data.',
      'You can control cookie settings in your browser. Please note that disabling cookies may impact your ability to use some features of the website.'
    ]
  },
  {
    title: '5. Third-Party Services',
    content: [
      'We do not share your email address or any other personal information with third-party services, except where required by law. If you choose to interact with third-party services (such as social media platforms or payment processors), please review their privacy policies.'
    ]
  },
  {
    title: '6. Your Rights',
    content: [
      'Under the General Data Protection Regulation (GDPR) and the Data Protection Act 2018, you have the right to:'
    ],
    list: [
      'Request access to the personal data we hold about you',
      'Request corrections to any inaccuracies in your personal data',
      'Request the deletion of your personal data, where applicable',
      'Request the restriction of processing your personal data in certain circumstances'
    ]
  },
  {
    title: '7. Security',
    content: [
      'We take appropriate measures to protect the personal data you provide through our website. However, no method of electronic transmission or storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.'
    ]
  },
  {
    title: '8. Changes to This Privacy Policy',
    content: [
      'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date at the top. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your personal data.'
    ]
  },
  {
    title: '9. Governing Law',
    content: [
      'This Privacy Policy is governed by the laws of the United Kingdom. Any disputes will be subject to the exclusive jurisdiction of the courts in the United Kingdom.'
    ]
  }
]

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | MyBartenders UK</title>
        <meta
          name='description'
          content='Read the privacy policy of MyBartenders to learn how we collect and protect your personal data.'
        />
        <link rel='canonical' href={`${SEO_DEFAULTS.siteUrl}/privacy-policy`} />
      </Head>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className='relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gray-950 overflow-hidden'>
          <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black' />
          <div className='absolute top-20 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl' />

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
                Privacy{' '}
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-amber-400'>
                  Policy
                </span>
              </h1>
              <p className='text-xl text-gray-400'>
                How we collect, use, and protect your personal information
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
                  This Privacy Policy explains how MyBartenders collects, uses, and protects
                  the personal data of users visiting our website or using our services. We
                  are committed to safeguarding your privacy and ensuring that your personal
                  information is handled securely.
                </p>
              </motion.div>

              {/* Sections */}
              <div className='space-y-8'>
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
                    <div className='space-y-3'>
                      {section.content.map((paragraph, pIndex) => (
                        <p key={pIndex} className='text-gray-400 leading-relaxed'>
                          {paragraph}
                        </p>
                      ))}
                      {section.list && (
                        <ul className='list-disc list-inside space-y-2 text-gray-400 ml-4'>
                          {section.list.map((item, lIndex) => (
                            <li key={lIndex}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.div>
                ))}

                {/* Contact Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className='p-6 bg-gradient-to-r from-pink-500/10 to-amber-500/10 border border-pink-500/20 rounded-2xl'
                >
                  <h2 className='text-xl font-semibold text-white mb-4'>
                    10. Contact Us
                  </h2>
                  <p className='text-gray-300 leading-relaxed'>
                    If you have any questions or concerns about this Privacy Policy, or if
                    you wish to exercise your rights under the GDPR, please contact us at{' '}
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
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default PrivacyPolicy
