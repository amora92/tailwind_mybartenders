'use client'

import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { COMPANY_STATS, SITE_IMAGES } from '@/constants/siteConfig'
import { SEO_DEFAULTS } from '@/constants/brandStyles'
import '../app/globals.css'

const values = [
  {
    icon: (
      <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' />
      </svg>
    ),
    title: 'Quality First',
    description: 'Premium spirits, fresh ingredients, and meticulous attention to detail in every cocktail we craft.'
  },
  {
    icon: (
      <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' />
      </svg>
    ),
    title: 'Expert Team',
    description: 'Highly trained professionals with years of experience in hospitality and mixology.'
  },
  {
    icon: (
      <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' />
      </svg>
    ),
    title: 'Passion Driven',
    description: 'We genuinely love what we do, and that passion shines through in every event we serve.'
  },
  {
    icon: (
      <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
      </svg>
    ),
    title: 'Reliable Service',
    description: 'Punctual, professional, and consistent. We handle everything from setup to cleanup.'
  }
]

const services = [
  {
    title: 'Private Cocktail Bartender Hire',
    description: 'Our experienced bartenders create bespoke cocktail experiences at your location, from small gatherings to large celebrations.'
  },
  {
    title: 'Mobile Bar Services',
    description: 'Fully equipped mobile bars with premium spirits, mixers, and garnishes that can be set up at any venue.'
  },
  {
    title: 'Wedding & Event Catering',
    description: 'Make your special day unforgettable with personalized service and custom cocktail menus tailored to your event.'
  },
  {
    title: 'Mixology Workshops',
    description: 'Hands-on workshops perfect for team-building, parties, or anyone wanting to master cocktail-making skills.'
  }
]

const team = [
  { name: 'A.M.', role: 'Head Bartender', image: '/pineapple5.jpg' },
  { name: 'L.V.', role: 'Event Coordinator', image: '/pineapple_2.svg' },
  { name: 'M.B.', role: 'Mixologist', image: '/pineapple_4.svg' }
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
        <section className='relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gray-950 overflow-hidden'>
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

              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6'>
                Crafting Exceptional
                <span className='block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-amber-400'>
                  Experiences Since 2009
                </span>
              </h1>

              <p className='text-xl text-gray-400 max-w-2xl mx-auto'>
                From a small team of passionate bartenders to Northampton's most trusted mobile bar service.
                Our commitment to quality and genuine hospitality drives everything we do.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className='relative py-16 bg-gray-900 border-y border-white/10'>
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
                  <div className='text-3xl md:text-4xl font-bold text-white mb-1'>{stat.value}</div>
                  <div className='text-gray-500 text-sm'>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className='relative py-24 lg:py-32 bg-gray-50 overflow-hidden'>
          <div className='absolute top-0 left-0 w-96 h-96 bg-pink-100/50 rounded-full blur-3xl' />

          <div className='relative container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid lg:grid-cols-2 gap-16 items-center'>
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className='relative'
              >
                <div className='relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl'>
                  <Image
                    src={SITE_IMAGES.aboutHero}
                    alt='Professional bartender crafting cocktails'
                    fill
                    className='object-cover'
                    sizes='(max-width: 768px) 100vw, 50vw'
                  />
                </div>
                <div className='absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-xl'>
                  <div className='text-center text-white'>
                    <div className='text-3xl font-bold'>15+</div>
                    <div className='text-xs'>Years</div>
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className='space-y-6'
              >
                <span className='inline-block px-4 py-1.5 bg-pink-100 text-pink-600 text-sm font-medium rounded-full'>
                  How It Started
                </span>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
                  A Passion for Perfect Hospitality
                </h2>
                <div className='space-y-4 text-gray-600 leading-relaxed'>
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
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className='relative py-24 lg:py-32 bg-gray-950 overflow-hidden'>
          <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-gray-950' />

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
              <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
                Our Values
              </h2>
              <p className='text-gray-400 max-w-2xl mx-auto'>
                The principles that guide everything we do and make every event exceptional.
              </p>
            </motion.div>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className='p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-pink-500/30 transition-colors'
                >
                  <div className='w-12 h-12 bg-gradient-to-br from-pink-500/20 to-amber-500/20 rounded-xl flex items-center justify-center text-pink-400 mb-4'>
                    {value.icon}
                  </div>
                  <h3 className='text-lg font-semibold text-white mb-2'>{value.title}</h3>
                  <p className='text-gray-400 text-sm'>{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className='relative py-24 lg:py-32 bg-gray-50 overflow-hidden'>
          <div className='absolute bottom-0 right-0 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl' />

          <div className='relative container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='text-center mb-16'
            >
              <span className='inline-block px-4 py-1.5 bg-pink-100 text-pink-600 text-sm font-medium rounded-full mb-6'>
                What We Offer
              </span>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                Our Services
              </h2>
              <p className='text-gray-600 max-w-2xl mx-auto'>
                Comprehensive mobile bar solutions tailored to your unique event needs.
              </p>
            </motion.div>

            <div className='grid md:grid-cols-2 gap-6 max-w-4xl mx-auto'>
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className='p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100'
                >
                  <div className='flex items-start gap-4'>
                    <div className='w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0'>
                      <svg className='w-5 h-5 text-pink-500' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                      </svg>
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-900 mb-2'>{service.title}</h3>
                      <p className='text-gray-600 text-sm'>{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className='text-center mt-12'
            >
              <a
                href='/services'
                className='inline-flex items-center gap-2 text-pink-500 font-medium hover:text-pink-600 transition-colors'
              >
                View All Services
                <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                </svg>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className='relative py-24 lg:py-32 bg-gray-950 overflow-hidden'>
          <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black' />

          <div className='relative container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='text-center mb-16'
            >
              <span className='inline-block px-4 py-1.5 bg-white/5 border border-white/10 text-pink-400 text-sm font-medium rounded-full mb-6'>
                The Experts
              </span>
              <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
                Meet Our Team
              </h2>
              <p className='text-gray-400 max-w-2xl mx-auto'>
                Passionate professionals dedicated to making your event extraordinary.
              </p>
            </motion.div>

            <div className='grid md:grid-cols-3 gap-8 max-w-4xl mx-auto'>
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className='text-center group'
                >
                  <div className='relative w-32 h-32 mx-auto mb-6'>
                    <div className='absolute inset-0 bg-gradient-to-br from-pink-500 to-amber-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity' />
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className='object-cover rounded-full border-4 border-white/10'
                    />
                  </div>
                  <h3 className='text-xl font-semibold text-white mb-1'>{member.name}</h3>
                  <p className='text-pink-400 text-sm'>{member.role}</p>
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

          <div className='relative container mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='max-w-3xl mx-auto'
            >
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6'>
                Ready to Create
                <span className='block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-amber-400'>
                  Something Amazing?
                </span>
              </h2>
              <p className='text-xl text-white/70 mb-10'>
                Let's discuss your event and craft an unforgettable experience together.
              </p>
              <a
                href='/contact_us'
                className='inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white font-semibold rounded-full shadow-2xl shadow-pink-500/30 hover:shadow-pink-500/50 transition-all text-lg'
              >
                Get Your Free Quote
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                </svg>
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default AboutUs
