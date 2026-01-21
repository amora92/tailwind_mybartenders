'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const FreqQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqsByCategory = {
    'Getting Started': [
      {
        question: 'What is your typical response time after contact?',
        answer:
          'We pride ourselves on quick response times - typically within 24 hours on business days. For urgent inquiries, we recommend calling directly.'
      },
      {
        question: 'How far in advance should I book for my event?',
        answer:
          'For the best availability, we recommend booking 2-3 months in advance, especially for peak season events (May-September) and weekends. However, we can often accommodate last-minute bookings.'
      }
    ],
    'Services & Coverage': [
      {
        question: 'Which areas do you cover?',
        answer:
          "While we're based in Northampton, we provide services across the UK. Our primary areas include Northamptonshire, London, Milton Keynes, and surrounding counties. Distance surcharges may apply for locations beyond our core service area."
      },
      {
        question: 'Do you offer non-alcoholic alternatives?',
        answer:
          'Absolutely! We offer an extensive range of non-alcoholic options including craft mocktails, premium coffee services, fresh smoothies, and alcohol-free spirits. Our mixologists create impressive non-alcoholic beverages.'
      }
    ],
    'Setup & Requirements': [
      {
        question: 'Is there a minimum or maximum guest capacity?',
        answer:
          'We have a minimum hire time of 2 hours. We can serve events with up to 500 guests, and our setup scales to accommodate your specific needs with adjusted staffing and equipment.'
      },
      {
        question: 'What about glasses, ice, and equipment?',
        answer:
          'We provide all necessary glassware, ice, and equipment within our standard packages - including premium glassware, ice buckets, garnishes, and bar equipment.'
      }
    ],
    'Pricing & Legal': [
      {
        question: 'How much does it cost?',
        answer:
          'Pricing varies depending on the day, duration, staffing, and requirements. We offer customized packages to suit different budgets. Contact us for a personalized quote!'
      },
      {
        question: 'Are you licensed and certified?',
        answer:
          'Yes, our team holds personal alcohol licences and are DBS checked. Additional requirements such as insurance or specific certifications can be discussed and arranged based on your event needs.'
      }
    ]
  }

  // Flatten FAQs for easier indexing
  const allFaqs = Object.entries(faqsByCategory).flatMap(([category, questions]) =>
    questions.map(q => ({ ...q, category }))
  )

  // JSON-LD for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }

  const categoryIcons: Record<string, JSX.Element> = {
    'Getting Started': (
      <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M13 10V3L4 14h7v7l9-11h-7z' />
      </svg>
    ),
    'Services & Coverage': (
      <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
      </svg>
    ),
    'Setup & Requirements': (
      <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' />
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
      </svg>
    ),
    'Pricing & Legal': (
      <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
      </svg>
    )
  }

  let globalIndex = 0

  return (
    <section id='faq' className='relative py-24 lg:py-32 bg-gray-950 overflow-hidden'>
      {/* Background Effects */}
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black' />
      <div className='absolute top-1/4 left-0 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-3xl' />
      <div className='absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl' />

      <div className='relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl'>
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
            FAQ
          </span>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            Frequently Asked{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-amber-400'>
              Questions
            </span>
          </h2>
          <p className='text-xl text-gray-400 max-w-2xl mx-auto'>
            Everything you need to know about our mobile bar services
          </p>
        </motion.div>

        {/* FAQ Categories Grid */}
        <div className='grid md:grid-cols-2 gap-8'>
          {Object.entries(faqsByCategory).map(([category, questions], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className='space-y-4'
            >
              {/* Category Header */}
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-10 h-10 bg-gradient-to-br from-pink-500/20 to-amber-500/20 border border-pink-500/30 rounded-xl flex items-center justify-center text-pink-400'>
                  {categoryIcons[category]}
                </div>
                <h3 className='text-lg font-semibold text-white'>
                  {category}
                </h3>
              </div>

              {/* Questions */}
              <div className='space-y-3'>
                {questions.map((faq, index) => {
                  const currentIndex = globalIndex++
                  return (
                    <div
                      key={index}
                      className={`group rounded-xl border transition-all duration-300 ${
                        openIndex === currentIndex
                          ? 'bg-white/5 border-pink-500/30'
                          : 'bg-gray-900/30 border-white/5 hover:border-white/10 hover:bg-gray-900/50'
                      }`}
                    >
                      <button
                        onClick={() => setOpenIndex(openIndex === currentIndex ? null : currentIndex)}
                        className='flex w-full items-center justify-between gap-3 p-4 text-left'
                      >
                        <span className={`text-sm font-medium transition-colors ${
                          openIndex === currentIndex ? 'text-white' : 'text-gray-300 group-hover:text-white'
                        }`}>
                          {faq.question}
                        </span>
                        <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                          openIndex === currentIndex ? 'bg-pink-500/20 rotate-180' : 'bg-white/5'
                        }`}>
                          <svg
                            className={`w-3 h-3 transition-colors ${
                              openIndex === currentIndex ? 'text-pink-400' : 'text-gray-500'
                            }`}
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                          >
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                          </svg>
                        </div>
                      </button>

                      <AnimatePresence>
                        {openIndex === currentIndex && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                            className='overflow-hidden'
                          >
                            <div className='px-4 pb-4'>
                              <p className='text-sm text-gray-400 leading-relaxed'>
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
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
          <div className='inline-flex flex-col sm:flex-row items-center gap-6 p-8 bg-gradient-to-r from-pink-500/10 via-rose-500/5 to-amber-500/10 border border-white/10 rounded-2xl backdrop-blur-sm'>
            <div className='w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg shadow-pink-500/25'>
              <svg className='w-7 h-7 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
              </svg>
            </div>
            <div className='text-center sm:text-left'>
              <p className='text-white font-semibold text-lg mb-1'>Still have questions?</p>
              <p className='text-gray-400 text-sm'>Our team is here to help with any queries you may have</p>
            </div>
            <Link
              href='/contact_us'
              className='inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white font-semibold rounded-full shadow-xl shadow-pink-500/25 hover:shadow-pink-500/40 transition-all group'
            >
              Contact Us
              <svg className='w-5 h-5 transition-transform group-hover:translate-x-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FreqQ
