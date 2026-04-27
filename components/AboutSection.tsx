'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { COMPANY_STATS, SITE_IMAGES } from '@/constants/siteConfig'

const stats = [
  { value: COMPANY_STATS.yearsExperience, label: 'Years of Excellence' },
  { value: COMPANY_STATS.eventsServed, label: 'Events Crafted' },
  { value: COMPANY_STATS.cocktailsMade, label: 'Cocktails Served' },
  { value: COMPANY_STATS.googleRating, label: 'Client Rating' }
]

const AboutSection = () => {
  return (
    <section className='relative overflow-hidden bg-gray-50 py-24 lg:py-32'>
      <div className='absolute inset-0 opacity-[0.02]'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className='relative container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid items-center gap-16 lg:grid-cols-2 lg:gap-24'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='relative'
          >
            <div className='relative z-10'>
              <div className='relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl'>
                <Image
                  src={SITE_IMAGES.aboutHero}
                  alt='Expert mixologist crafting a cocktail'
                  fill
                  className='object-cover'
                  sizes='(max-width: 768px) 100vw, 50vw'
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='absolute -bottom-8 -right-8 max-w-[200px] rounded-2xl border border-gray-100 bg-white p-6 shadow-xl'
              >
                <div className='mb-2 flex items-center gap-3'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-rose-600'>
                    <svg
                      className='h-5 w-5 text-white'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                  <span className='font-semibold text-gray-900'>
                    Award Winning
                  </span>
                </div>
                <p className='text-sm text-gray-600'>
                  Recognized for excellence in mobile bar services
                </p>
              </motion.div>
            </div>

            <div className='absolute top-12 -left-12 h-32 w-32 rounded-full bg-pink-100 opacity-60 blur-3xl' />
            <div className='absolute bottom-24 -right-12 h-40 w-40 rounded-full bg-amber-100 opacity-60 blur-3xl' />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='space-y-8'
          >
            <div>
              <span className='mb-6 inline-block rounded-full bg-pink-100 px-4 py-1.5 text-sm font-medium text-pink-600'>
                Our Story
              </span>
              <h2 className='mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl'>
                Crafting Memories,
                <span className='block bg-gradient-to-r from-pink-500 to-amber-500 bg-clip-text text-transparent'>
                  One Cocktail at a Time
                </span>
              </h2>
              <p className='mb-6 text-lg leading-relaxed text-gray-600'>
                What began as a passion for mixology has evolved into one of
                Northampton&apos;s most trusted names for mobile bar hire,
                private bartender hire and event mixologist services. For over
                15 years, we&apos;ve been transforming ordinary events into
                extraordinary experiences.
              </p>
              <p className='text-lg leading-relaxed text-gray-600'>
                Our team of expert mixologists brings creativity, precision and
                genuine warmth to weddings, private parties and corporate
                events. We believe that the perfect cocktail is more than just
                a drink; it&apos;s the catalyst for connection, celebration and
                unforgettable moments.
              </p>
            </div>

            <div className='grid grid-cols-2 gap-4'>
              {[
                {
                  title: 'Quality First',
                  desc: 'Premium spirits and fresh ingredients'
                },
                {
                  title: 'Personal Touch',
                  desc: 'Tailored to your unique vision'
                },
                {
                  title: 'Experienced Team',
                  desc: 'Skilled and professional bartenders'
                },
                { title: 'Full Service', desc: 'From setup to cleanup' }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className='rounded-xl bg-gray-50 p-4'
                >
                  <h3 className='mb-1 font-semibold text-gray-900'>
                    {item.title}
                  </h3>
                  <p className='text-sm text-gray-600'>{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className='flex flex-col gap-4 pt-4 sm:flex-row'>
              <a
                href='/aboutus'
                className='inline-flex items-center justify-center gap-2 rounded-full bg-gray-900 px-8 py-4 font-semibold text-white transition-colors hover:bg-gray-800'
              >
                Learn Our Story
                <svg
                  className='h-5 w-5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17 8l4 4m0 0l-4 4m4-4H3'
                  />
                </svg>
              </a>
              <a
                href='/contact_us'
                className='inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-200 px-8 py-4 font-semibold text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-50'
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='mt-24 grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12'
        >
          {stats.map(stat => (
            <div key={stat.label} className='text-center'>
              <div className='mb-2 text-4xl font-bold text-gray-900 lg:text-5xl'>
                {stat.value}
              </div>
              <div className='font-medium text-gray-600'>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
