'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

interface FAQItem {
  question: string
  answer: string
  category: string
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs: FAQItem[] = [
    {
      question: 'What areas do you cover?',
      answer:
        "We primarily serve Northampton and surrounding areas, including Milton Keynes and London. We're happy to travel further for special events - just ask!",
      category: 'Services'
    },
    {
      question: 'How much access or space do you need?',
      answer:
        "We're completely self-sufficient and highly adaptable! Our mobile bar setup can fit into most spaces, and we bring everything we need including water supply and power if necessary. All we really need is a reasonably flat surface to set up on, and we'll handle the rest!",
      category: 'Setup'
    },
    {
      question: 'How much does it cost to hire a mobile bar?',
      answer:
        'Our pricing varies depending on several factors including the day of the week, duration of the event, number of staff required, and your specific requirements. We offer customized packages to suit different budgets and needs. Contact us for a personalized quote!',
      category: 'Pricing'
    },
    {
      question: 'How far in advance should I book?',
      answer:
        'We recommend booking 2-3 months in advance, especially for peak season events. However, we can sometimes accommodate last-minute bookings depending on availability.',
      category: 'Booking'
    },
    {
      question: "What's included in your non-alcoholic and mocktail menu?",
      answer:
        'Our extensive non-alcoholic menu features creative mocktails, craft sodas, and alcohol-free versions of classic cocktails. We use premium ingredients like house-made syrups, fresh-pressed juices, and botanical infusions.',
      category: 'Services'
    },
    {
      question: 'Do you provide all the equipment needed?',
      answer:
        'Yes, we bring everything needed for a complete mobile bar service, including glassware, ice, garnishes, and professional equipment.',
      category: 'Equipment'
    },
    {
      question: 'Are you licensed and insured?',
      answer:
        'Our team holds personal alcohol licences and are DBS checked. Additional requirements such as insurance or specific certifications can be discussed and arranged based on your event needs.',
      category: 'Legal'
    },
    {
      question: 'What happens if it rains? Do you offer wet weather options?',
      answer:
        "We're prepared for all weather conditions! For outdoor events, we can provide covered areas for the bar, and we always have contingency plans in place. We'll work with you and your venue to ensure smooth service regardless of the weather.",
      category: 'Services'
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept all major payment methods. A deposit is required to secure your booking.',
      category: 'Payment'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // JSON-LD for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }

  return (
    <section className='relative py-24 lg:py-32 bg-gray-950 overflow-hidden'>
      {/* Background Effects */}
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black' />
      <div className='absolute top-20 right-1/4 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-3xl' />
      <div className='absolute bottom-20 left-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl' />

      <div className='relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl'>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <span className='inline-block px-4 py-1.5 bg-white/5 border border-white/10 text-pink-400 text-sm font-medium rounded-full mb-6'>
            Got Questions?
          </span>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            Frequently Asked{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-amber-400'>
              Questions
            </span>
          </h2>
          <p className='text-xl text-gray-400 max-w-2xl mx-auto'>
            Everything you need to know about our premium mobile bar services
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className='space-y-4'>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div
                className={`group relative rounded-2xl border transition-all duration-300 ${
                  openIndex === index
                    ? 'bg-white/5 border-pink-500/30'
                    : 'bg-gray-900/50 border-white/10 hover:border-white/20 hover:bg-gray-900/80'
                }`}
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className='flex w-full items-center justify-between gap-4 p-6 text-left focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-inset rounded-2xl'
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <div className='flex items-center gap-4'>
                    <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      openIndex === index
                        ? 'bg-gradient-to-br from-pink-500 to-rose-600'
                        : 'bg-white/5 group-hover:bg-white/10'
                    }`}>
                      <span className={`text-sm font-semibold ${
                        openIndex === index ? 'text-white' : 'text-gray-400'
                      }`}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className={`text-lg font-medium transition-colors ${
                      openIndex === index ? 'text-white' : 'text-gray-200 group-hover:text-white'
                    }`}>
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index
                      ? 'bg-pink-500/20 rotate-180'
                      : 'bg-white/5'
                  }`}>
                    <svg
                      className={`w-4 h-4 transition-colors ${
                        openIndex === index ? 'text-pink-400' : 'text-gray-400'
                      }`}
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                    </svg>
                  </div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className='overflow-hidden'
                    >
                      <div className='px-6 pb-6 pl-20'>
                        <p className='text-gray-300 leading-relaxed'>
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='mt-16 text-center'
        >
          <div className='inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gradient-to-r from-pink-500/10 via-rose-500/10 to-amber-500/10 border border-pink-500/20 rounded-2xl'>
            <div className='text-center sm:text-left'>
              <p className='text-white font-medium mb-1'>Still have questions?</p>
              <p className='text-gray-400 text-sm'>We're here to help with any queries</p>
            </div>
            <Link
              href='/contact_us'
              className='inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white font-semibold rounded-full shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-all group'
            >
              Get in Touch
              <svg className='w-4 h-4 transition-transform group-hover:translate-x-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
