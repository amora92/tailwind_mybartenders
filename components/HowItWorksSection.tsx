'use client'

import React from 'react'
import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Get in Touch',
    description: 'Share your event details with us. Tell us about your vision, guest count, and any special requests.',
    icon: (
      <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' />
      </svg>
    )
  },
  {
    number: '02',
    title: 'Custom Proposal',
    description: 'Receive a tailored quote with menu suggestions perfectly matched to your event style and budget.',
    icon: (
      <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
      </svg>
    )
  },
  {
    number: '03',
    title: 'Plan Together',
    description: "We'll work with you to finalize the cocktail menu, bar setup, and all the details that matter.",
    icon: (
      <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' />
      </svg>
    )
  },
  {
    number: '04',
    title: 'We Deliver Magic',
    description: 'Sit back and enjoy. Our team handles everything from setup to service to cleanup.',
    icon: (
      <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' />
      </svg>
    )
  }
]

const HowItWorksSection = () => {
  return (
    <section className='relative py-24 lg:py-32 bg-gray-50 overflow-hidden'>
      {/* Background decoration */}
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent' />

      <div className='relative container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16 lg:mb-20'
        >
          <span className='inline-block px-4 py-1.5 bg-pink-100 text-pink-600 text-sm font-medium rounded-full mb-6'>
            Simple Process
          </span>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
            How It Works
          </h2>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            From first contact to last call, we make booking your mobile bar effortless.
          </p>
        </motion.div>

        {/* Steps */}
        <div className='relative max-w-5xl mx-auto'>
          {/* Connection line - desktop */}
          <div className='hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-pink-200 via-pink-400 to-amber-400' />

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6'>
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='relative'
              >
                {/* Step card */}
                <div className='relative bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 h-full'>
                  {/* Number badge */}
                  <div className='absolute -top-4 left-6 w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg'>
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className='w-16 h-16 bg-pink-50 rounded-2xl flex items-center justify-center text-pink-500 mt-6 mb-6'>
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className='text-xl font-bold text-gray-900 mb-3'>
                    {step.title}
                  </h3>
                  <p className='text-gray-600 leading-relaxed'>
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector - mobile/tablet */}
                {index < steps.length - 1 && (
                  <div className='lg:hidden flex justify-center my-4'>
                    <svg className='w-6 h-6 text-pink-300 rotate-90 md:rotate-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='text-center mt-16'
        >
          <a
            href='/contact_us'
            className='inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-semibold rounded-full hover:from-pink-600 hover:to-rose-700 transition-all shadow-lg shadow-pink-500/30 hover:shadow-pink-500/40'
          >
            Start Your Journey
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorksSection
