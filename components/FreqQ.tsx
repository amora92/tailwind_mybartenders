'use client'

import React from 'react'
import { motion } from 'framer-motion'

const FreqQ = () => {
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
          'Yes, we are fully licensed with all relevant certifications including Food Hygiene, Allergen Awareness, Health & Safety, and DBS checks.'
      }
    ]
  }

  // JSON-LD for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: Object.values(faqsByCategory)
      .flat()
      .map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
  }

  return (
    <section id='faq' className='py-20 bg-white'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl'>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Header */}
        <div className='text-center mb-12'>
          <span className='inline-block px-4 py-1.5 bg-pink-100 text-pink-600 text-sm font-medium rounded-full mb-4'>
            FAQ
          </span>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            Frequently Asked Questions
          </h2>
          <p className='text-lg text-gray-600'>
            Everything you need to know about our mobile bar services.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className='space-y-8'>
          {Object.entries(faqsByCategory).map(([category, questions]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h3 className='text-lg font-semibold text-gray-900 mb-4'>
                {category}
              </h3>
              <div className='space-y-3'>
                {questions.map((faq, index) => (
                  <details
                    key={index}
                    className='group bg-gray-50 rounded-xl overflow-hidden'
                  >
                    <summary className='flex cursor-pointer items-center justify-between p-5 text-gray-900 hover:bg-gray-100 transition-colors'>
                      <span className='font-medium pr-4'>{faq.question}</span>
                      <svg
                        className='w-5 h-5 text-gray-500 flex-shrink-0 transition-transform group-open:rotate-180'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                      </svg>
                    </summary>
                    <div className='px-5 pb-5'>
                      <p className='text-gray-600 leading-relaxed'>
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className='mt-12 text-center'>
          <p className='text-gray-600 mb-4'>Still have questions?</p>
          <a
            href='/contact_us'
            className='inline-flex items-center gap-2 px-6 py-3 bg-pink-500 text-white font-medium rounded-full hover:bg-pink-600 transition-colors'
          >
            Contact Us
            <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default FreqQ
