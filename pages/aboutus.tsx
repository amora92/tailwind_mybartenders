'use client'

import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { COMPANY_STATS, SITE_IMAGES, TRUST_INDICATORS, getBookingYear } from '@/constants/siteConfig'
import { SEO_DEFAULTS } from '@/constants/brandStyles'
import { CONTACT_INFO } from '@/constants/contact'
import '../app/globals.css'

const values = [
  {
    icon: (
      <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' />
      </svg>
    ),
    title: 'Quality First',
    description: 'Premium spirits, fresh ingredients, and meticulous attention to detail in every cocktail we craft.',
    color: 'from-pink-500 to-rose-600'
  },
  {
    icon: (
      <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' />
      </svg>
    ),
    title: 'Expert Team',
    description: 'Highly trained professionals with years of experience in hospitality and mixology.',
    color: 'from-violet-500 to-purple-600'
  },
  {
    icon: (
      <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' />
      </svg>
    ),
    title: 'Passion Driven',
    description: 'We genuinely love what we do, and that passion shines through in every event we serve.',
    color: 'from-amber-500 to-orange-600'
  },
  {
    icon: (
      <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
      </svg>
    ),
    title: 'Reliable Service',
    description: 'Punctual, professional, and consistent. We handle everything from setup to cleanup.',
    color: 'from-emerald-500 to-teal-600'
  }
]

const milestones = [
  { year: '2009', title: 'Founded', description: 'Started with a passion for hospitality' },
  { year: '2015', title: 'Expanded', description: 'Grew to serve weddings nationwide' },
  { year: '2020', title: '500+ Events', description: 'Reached our 500th successful event' },
  { year: 'Today', title: 'Growing', description: 'Continuing to serve excellence' }
]

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>About Us | Premium Mobile Bar Services | MyBartenders UK</title>
        <meta
          name='description'
          content="Discover MyBartenders - Northampton's premier mobile bar service with 15+ years of experience. Learn about our story, values, and dedicated team of professional bartenders."
        />
        <link rel='canonical' href={`${SEO_DEFAULTS.siteUrl}/aboutus`} />
        <meta property='og:title' content='About MyBartenders | Premium Mobile Bar Services' />
        <meta property='og:description' content='15+ years of experience crafting unforgettable cocktail experiences for weddings, corporate events, and private parties across the UK.' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={`${SEO_DEFAULTS.siteUrl}/aboutus`} />
      </Head>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className='relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gray-950 overflow-hidden'>
          <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black' />
          <div className='absolute top-20 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl' />
          <div className='absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl' />

          <div className='relative container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='text-center max-w-4xl mx-auto'
            >
              <span className='inline-block px-4 py-1.5 bg-white/5 border border-white/10 text-pink-400 text-sm font-medium rounded-full mb-6'>
                Our Story
              </span>

              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight'>
                Crafting Exceptional
                <span className='block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-amber-400'>
                  Experiences Since 2009
                </span>
              </h1>

              <p className='text-xl text-gray-400 max-w-2xl mx-auto mb-10'>
                From a small team of passionate bartenders to Northampton's most trusted mobile bar service.
                Our commitment to quality and genuine hospitality drives everything we do.
              </p>

              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <a
                  href='/contact_us'
                  className='inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white font-semibold rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-pink-500/30'
                >
                  Get in Touch
                  <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                  </svg>
                </a>
                <a
                  href={CONTACT_INFO.phoneHref}
                  className='inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-colors'
                >
                  <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                  </svg>
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className='relative py-16 bg-gray-950 border-y border-white/10'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
              {[
                { value: COMPANY_STATS.yearsExperience, label: 'Years Experience' },
                { value: COMPANY_STATS.eventsServed, label: 'Events Served' },
                { value: COMPANY_STATS.cocktailsMade, label: 'Cocktails Made' },
                { value: COMPANY_STATS.googleRating, label: 'Client Rating' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className='text-center'
                >
                  <div className='text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-amber-400 mb-1'>
                    {stat.value}
                  </div>
                  <div className='text-gray-500 text-sm'>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className='relative py-24 lg:py-32 bg-gray-950 overflow-hidden'>
          <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/50 via-gray-950 to-gray-950' />
          <div className='absolute top-20 left-0 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-3xl' />

          <div className='relative container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid lg:grid-cols-2 gap-16 lg:gap-24 items-center'>
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className='relative'
              >
                <div className='absolute -inset-4 bg-gradient-to-r from-pink-500 to-amber-500 rounded-3xl blur-2xl opacity-20' />
                <div className='relative aspect-[4/5] rounded-2xl overflow-hidden'>
                  <Image
                    src={SITE_IMAGES.aboutHero}
                    alt='Professional bartender crafting cocktails'
                    fill
                    className='object-cover'
                    sizes='(max-width: 768px) 100vw, 50vw'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent' />

                  {/* Floating Badge */}
                  <div className='absolute bottom-6 left-6 right-6'>
                    <div className='inline-flex items-center gap-3 px-5 py-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20'>
                      <div className='w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center'>
                        <span className='text-white font-bold text-lg'>15+</span>
                      </div>
                      <div>
                        <div className='text-white font-semibold'>Years of Excellence</div>
                        <div className='text-white/60 text-sm'>Trusted Since 2009</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className='inline-block px-4 py-1.5 bg-white/5 border border-white/10 text-pink-400 text-sm font-medium rounded-full mb-6'>
                  How It Started
                </span>
                <h2 className='text-3xl lg:text-4xl font-bold text-white mb-6'>
                  A Passion for Perfect Hospitality
                </h2>
                <div className='space-y-4 text-gray-400 leading-relaxed'>
                  <p>
                    MyBartenders began in 2009 with a simple vision: to bring the art of
                    exceptional hospitality directly to our clients' venues. What started
                    as a small team of passionate bartenders has grown into one of
                    Northampton's most trusted mobile bar services.
                  </p>
                  <p>
                    After decades of combined experience in the hospitality industry, we
                    realized we could offer something truly special—a level of service
                    that we couldn't rely on others to provide. We gathered the best
                    professionals we could find and committed to one goal: delivering
                    the highest quality hospitality services possible.
                  </p>
                  <p>
                    Today, we've served over 500 events and crafted more than 50,000
                    cocktails, but our core values remain the same: quality, passion,
                    and genuine care for every client we serve.
                  </p>
                </div>

                {/* Timeline */}
                <div className='mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4'>
                  {milestones.map((milestone, index) => (
                    <motion.div
                      key={milestone.year}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className='p-4 bg-white/5 rounded-xl border border-white/10'
                    >
                      <div className='text-pink-400 font-bold text-lg mb-1'>{milestone.year}</div>
                      <div className='text-white font-medium text-sm mb-1'>{milestone.title}</div>
                      <div className='text-gray-500 text-xs'>{milestone.description}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className='relative py-24 lg:py-32 bg-gray-950 overflow-hidden'>
          <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black' />
          <div className='absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl' />

          <div className='relative container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='text-center mb-16'
            >
              <span className='inline-block px-4 py-1.5 bg-white/5 border border-white/10 text-pink-400 text-sm font-medium rounded-full mb-6'>
                What Sets Us Apart
              </span>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6'>
                Our
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-amber-400'> Values</span>
              </h2>
              <p className='text-xl text-gray-400 max-w-2xl mx-auto'>
                The principles that guide everything we do and make every event exceptional.
              </p>
            </motion.div>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto'>
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className='group p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-pink-500/30 transition-all'
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                    {value.icon}
                  </div>
                  <h3 className='text-lg font-semibold text-white mb-2'>{value.title}</h3>
                  <p className='text-gray-400 text-sm'>{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Gallery Strip */}
        <section className='relative py-16 bg-gray-950 overflow-hidden'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
              {[
                { src: '/wedding.webp', alt: 'Wedding bar service' },
                { src: '/corporate.webp', alt: 'Corporate event' },
                { src: '/party_cocktails.webp', alt: 'Private party' },
                { src: '/masterclass.webp', alt: 'Cocktail masterclass' }
              ].map((image, index) => (
                <motion.div
                  key={image.src}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className='relative aspect-[4/3] rounded-xl overflow-hidden'
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className='object-cover hover:scale-110 transition-transform duration-500'
                    sizes='(max-width: 768px) 50vw, 25vw'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent' />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='relative py-24 lg:py-32 overflow-hidden'>
          <div className='absolute inset-0'>
            <Image
              src={SITE_IMAGES.ctaBackground}
              alt='Background'
              fill
              className='object-cover'
              sizes='100vw'
            />
            <div className='absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-gray-900/80' />
          </div>

          <div className='absolute top-20 right-20 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl' />
          <div className='absolute bottom-20 left-20 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl' />

          <div className='relative container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='max-w-4xl mx-auto text-center'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8'
              >
                <span className='relative flex h-2 w-2'>
                  <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
                  <span className='relative inline-flex rounded-full h-2 w-2 bg-green-500'></span>
                </span>
                <span className='text-white/90 text-sm font-medium'>
                  Now Booking for {getBookingYear()}
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight'
              >
                Ready to Work
                <span className='block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-amber-400'>
                  With Us?
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='text-xl text-white/70 mb-10 max-w-2xl mx-auto'
              >
                Get in touch today for a free, no-obligation quote. We'd love to
                hear about your event and how we can make it special.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className='flex flex-col sm:flex-row gap-4 justify-center mb-12'
              >
                <a
                  href='/contact_us'
                  className='inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white font-semibold rounded-full shadow-2xl shadow-pink-500/30 hover:shadow-pink-500/50 transition-all text-lg group'
                >
                  Get Your Free Quote
                  <svg className='w-5 h-5 transition-transform group-hover:translate-x-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                  </svg>
                </a>
                <a
                  href='/services'
                  className='inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all text-lg'
                >
                  View Our Services
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='flex flex-wrap items-center justify-center gap-6 lg:gap-10 text-white/50 text-sm'
              >
                {TRUST_INDICATORS.map(item => (
                  <div key={item} className='flex items-center gap-2'>
                    <svg className='w-5 h-5 text-green-400' fill='currentColor' viewBox='0 0 20 20'>
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

export default AboutUs
