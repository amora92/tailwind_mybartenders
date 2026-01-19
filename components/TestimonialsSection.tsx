'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    rating: 5,
    quote: 'The attention to detail was extraordinary. Each cocktail was a masterpiece - from the hand-carved ice to the carefully selected garnishes. Our corporate event was elevated beyond expectations.',
    author: 'Jeff Davidson',
    role: 'Marketing Director',
    company: 'London Tech Summit',
    image: '/testimonial-1.webp'
  },
  {
    id: 2,
    rating: 5,
    quote: "The bespoke menu they created for my wife's 40th matched our theme perfectly. The molecular mixology demonstrations were the highlight - smoking cocktails had everyone amazed.",
    author: 'Richard Lawrence',
    role: 'Private Client',
    company: 'Northamptonshire',
    image: '/testimonial-2.webp'
  },
  {
    id: 3,
    rating: 5,
    quote: "Their mixology masterclass was transformative. I learned professional techniques and insider tips. Now I'm confident creating signature cocktails for my own events.",
    author: 'Karen Griffiths',
    role: 'Event Planner',
    company: 'Celebrations London',
    image: '/testimonial-3.webp'
  },
  {
    id: 4,
    rating: 5,
    quote: 'From the initial consultation to the last drink served, everything was flawless. Our wedding guests are still talking about the champagne tower and signature cocktails.',
    author: 'Sarah & James',
    role: 'Wedding Clients',
    company: 'Milton Keynes',
    image: '/testimonial-4.webp'
  }
]

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className='relative py-24 lg:py-32 bg-gray-50 overflow-hidden'>
      {/* Background decoration */}
      <div className='absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-pink-50 to-transparent' />
      <div className='absolute bottom-0 left-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl' />

      <div className='relative container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='max-w-3xl mb-16 lg:mb-20'
        >
          <span className='inline-block px-4 py-1.5 bg-pink-100 text-pink-600 text-sm font-medium rounded-full mb-6'>
            Client Stories
          </span>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
            Trusted by Hundreds of
            <span className='block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-amber-500'>
              Happy Clients
            </span>
          </h2>
          <p className='text-xl text-gray-600'>
            Don't just take our word for it. Here's what our clients have to say about their experience.
          </p>
        </motion.div>

        {/* Main testimonial display */}
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
          {/* Testimonial Content */}
          <div className='relative'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.4 }}
                className='space-y-8'
              >
                {/* Quote icon */}
                <svg className='w-16 h-16 text-pink-200' fill='currentColor' viewBox='0 0 32 32'>
                  <path d='M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z' />
                </svg>

                {/* Stars */}
                <div className='flex gap-1'>
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <svg key={i} className='w-6 h-6 text-amber-400' fill='currentColor' viewBox='0 0 20 20'>
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className='text-2xl lg:text-3xl font-medium text-gray-900 leading-relaxed'>
                  "{testimonials[activeIndex].quote}"
                </blockquote>

                {/* Author */}
                <div className='flex items-center gap-4'>
                  <div className='w-14 h-14 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center text-white font-bold text-xl'>
                    {testimonials[activeIndex].author.charAt(0)}
                  </div>
                  <div>
                    <p className='font-semibold text-gray-900 text-lg'>{testimonials[activeIndex].author}</p>
                    <p className='text-gray-600'>{testimonials[activeIndex].role}, {testimonials[activeIndex].company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className='flex items-center gap-4 mt-12'>
              <button
                onClick={prevTestimonial}
                className='w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-600 hover:border-pink-500 hover:text-pink-500 transition-colors'
                aria-label='Previous testimonial'
              >
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                className='w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-600 hover:border-pink-500 hover:text-pink-500 transition-colors'
                aria-label='Next testimonial'
              >
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                </svg>
              </button>
              <div className='flex gap-2 ml-4'>
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex ? 'w-8 bg-pink-500' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Stats/Trust side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='relative'
          >
            <div className='bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 lg:p-12'>
              {/* Client rating highlight */}
              <div className='text-center mb-10'>
                <div className='inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6'>
                  <svg className='w-5 h-5 text-amber-400' fill='currentColor' viewBox='0 0 20 20'>
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                  </svg>
                  <span className='text-white/80 text-sm font-medium'>Client Reviews</span>
                </div>
                <div className='text-6xl lg:text-7xl font-bold text-white mb-2'>5.0</div>
                <div className='flex justify-center gap-1 mb-4'>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className='w-6 h-6 text-amber-400' fill='currentColor' viewBox='0 0 20 20'>
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                  ))}
                </div>
                <p className='text-white/60'>Based on 100+ reviews</p>
              </div>

              {/* Mini testimonials */}
              <div className='space-y-4'>
                {testimonials.slice(0, 3).map((t, i) => (
                  <div
                    key={t.id}
                    className={`p-4 rounded-xl transition-all cursor-pointer ${
                      i === activeIndex
                        ? 'bg-white/10 border border-white/20'
                        : 'hover:bg-white/5'
                    }`}
                    onClick={() => setActiveIndex(i)}
                  >
                    <div className='flex items-center gap-3'>
                      <div className='w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center text-white font-semibold text-sm'>
                        {t.author.charAt(0)}
                      </div>
                      <div className='flex-1 min-w-0'>
                        <p className='text-white font-medium truncate'>{t.author}</p>
                        <p className='text-white/50 text-sm truncate'>{t.company}</p>
                      </div>
                      <div className='flex gap-0.5'>
                        {[...Array(5)].map((_, j) => (
                          <svg key={j} className='w-3 h-3 text-amber-400' fill='currentColor' viewBox='0 0 20 20'>
                            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
