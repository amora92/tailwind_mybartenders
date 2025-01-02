'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
          'For the best availability, we recommend booking 2-3 months in advance, especially for peak season events (May-September) and weekends. However, we understand that sometimes plans come together quickly - we can often accommodate last-minute bookings or at the very least attempt to help you.'
      }
    ],
    'Services & Coverage': [
      {
        question: 'Which areas do you cover with your mobile bar service?',
        answer:
          "While we're based in Northampton, we provide our premium mobile bar services across the UK. Our primary service areas include Northamptonshire, London, Milton Keynes, and surrounding counties. Distance surcharges may apply for locations beyond our core service area."
      },
      {
        question: 'What service options do you offer?',
        answer:
          'We offer flexible service options to suit your needs. We can provide a full-service experience where we handle everything from supplies to service, or we can work with you on a hybrid approach. For example, we can provide you with a detailed shopping list and quantity estimates while you handle the purchasing, or we can manage the entire process. Our goal is to make your event as stress-free as possible, whether you want us to handle everything or prefer a more collaborative approach.'
      },
      {
        question: 'Do you offer non-alcoholic alternatives?',
        answer:
          'Absolutely! We offer an extensive range of non-alcoholic options including craft mocktails, premium coffee services, fresh smoothies, and alcohol-free spirits and wines. Our mixologists are skilled in creating exciting non-alcoholic beverages that are just as impressive as their alcoholic counterparts.'
      }
    ],
    'Setup & Requirements': [
      {
        question: 'Is there a minimum or maximum guest capacity?',
        answer:
          'We have a minimum hire time of 2 hours for all events. In terms of capacity, we have successfully served events with up to 500 guests, and our setup can be scaled to accommodate your specific needs. For larger events, we can adjust our staffing and equipment accordingly.'
      },
      {
        question: 'What about glasses, ice, and equipment?',
        answer:
          'We provide all necessary glassware, ice, and equipment within our standard packages. This includes premium glassware, ice buckets, garnishes, and bar equipment. For custom requirements or specialized equipment, additional fees may apply. We ensure everything is provided to deliver a professional service tailored to your event.'
      },
      {
        question: 'How much access or space do you need?',
        answer:
          "We're completely self-sufficient and highly adaptable! Our mobile bar setup can fit into most spaces, and we bring everything we need. All we really need is a reasonably flat surface to set up on, and we'll handle the rest!"
      },
      {
        question: 'What happens if it rains? Do you offer wet weather options?',
        answer:
          "We're prepared for all weather conditions! For outdoor events, we can provide covered areas for the bar, and we always have contingency plans in place. We'll work with you and your venue to ensure smooth service regardless of the weather."
      }
    ],
    'Pricing & Payment': [
      {
        question:
          'How much does it cost to hire a mobile bar / mixology service?',
        answer:
          'Our pricing varies depending on several factors including the day of the week, duration of the event, number of staff required, and your specific requirements. We offer customized packages to suit different budgets and needs. Contact us for a personalized quote!'
      }
    ],
    'Legal & Safety': [
      {
        question: 'Are you licensed / certified?',
        answer:
          'We are fully licensed and hold all relevant certifications, including Food Hygiene, Allergen Awareness, Health & Safety, DBS, and more.'
      },
      {
        question: 'Can you accommodate special dietary requirements?',
        answer:
          'Yes, we take dietary requirements very seriously. We can accommodate all dietary restrictions and allergies, including gluten-free, dairy-free, and vegan options. We maintain detailed ingredient lists and can create custom menus to ensure all your guests can enjoy our drinks safely and confidently.'
      }
    ]
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  // Create the JSON-LD script content
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
    <section
      id='faq'
      className='py-16 bg-gradient-to-b from-white via-pink-50/30 to-white'
      aria-label='Frequently Asked Questions'
    >
      <div className='mx-auto max-w-4xl px-4 sm:px-6 lg:px-8'>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          className='text-center mb-12'
        >
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4'>
            Frequently Asked <span className='text-pink-500'>Questions</span>
          </h2>
          <p className='text-lg text-gray-600'>
            Everything you need to know about our{' '}
            <span className='text-pink-500'>premium mobile bar services</span>{' '}
            in Northampton and surrounding areas
          </p>
        </motion.div>

        <AnimatePresence>
          {Object.entries(faqsByCategory).map(([category, questions]) => (
            <motion.div
              key={category}
              variants={itemVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              className='mb-8'
            >
              <h3 className='text-xl font-semibold text-gray-800 mb-4'>
                {category}
              </h3>
              <div className='divide-y divide-pink-100 rounded-xl border border-pink-100 bg-white shadow-sm'>
                {questions.map((faq, index) => (
                  <details
                    key={index}
                    className='group p-6 [&_summary::-webkit-details-marker]:hidden hover:bg-pink-50/30 transition-colors duration-200'
                  >
                    <summary className='flex cursor-pointer items-center justify-between gap-1.5 text-gray-900'>
                      <h2 className='text-lg font-medium'>{faq.question}</h2>

                      <span className='relative size-5 shrink-0 text-pink-500'>
                        {/* SVGs remain the same but with text-pink-500 class */}
                      </span>
                    </summary>
                    <p className='mt-4 leading-relaxed text-gray-700'>
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        <motion.div
          variants={itemVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='mt-8 text-center'
        >
          <p className='text-gray-600'>
            Still have questions?{' '}
            <a
              href='/contact_us'
              className='text-pink-500 hover:text-pink-600 font-medium inline-flex items-center gap-1 group'
            >
              Contact us directly
              <svg
                className='w-4 h-4 transform group-hover:translate-x-1 transition-transform'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default FreqQ
