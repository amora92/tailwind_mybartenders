'use client'

import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { CONTACT_INFO } from '@/constants/contact'
import { SEO_DEFAULTS } from '@/constants/brandStyles'
import { getBookingYear, SITE_IMAGES, TRUST_INDICATORS } from '@/constants/siteConfig'

const services = [
  {
    id: 'weddings',
    title: 'Weddings',
    subtitle: 'Your Perfect Day, Perfectly Served',
    description:
      "From champagne towers to signature cocktails named after the happy couple, we create magical moments that your guests will remember forever. Our experienced team ensures every detail is perfect, from the first toast to the last dance.",
    image: '/wedding.webp',
    features: [
      'Bespoke cocktail menu design',
      'Champagne tower service',
      'Premium bar setup & styling',
      'Full day coverage available',
      'Professional uniformed staff',
      'Customized garnishes & presentation'
    ],
    color: 'from-rose-500 to-pink-600'
  },
  {
    id: 'corporate',
    title: 'Corporate Events',
    subtitle: 'Impress Your Clients & Team',
    description:
      "Elevate your brand with sophisticated cocktail experiences. From product launches to annual celebrations, conference after-parties to team building events, we deliver excellence that reflects your company's standards.",
    image: '/corporate.webp',
    features: [
      'Branded cocktail experiences',
      'Professional uniformed staff',
      'Flexible packages for any budget',
      'Large-scale capability (500+ guests)',
      'Non-alcoholic options available',
      'Setup & breakdown included'
    ],
    color: 'from-violet-500 to-purple-600'
  },
  {
    id: 'parties',
    title: 'Private Parties',
    subtitle: 'Celebrations Made Extraordinary',
    description:
      'Birthday milestones, anniversaries, engagement parties, or just because - transform your gathering into an unforgettable experience with our premium mobile bar service and expert mixologists.',
    image: '/party_cocktails.webp',
    features: [
      'Interactive cocktail stations',
      'Custom themed menus',
      'Premium spirits selection',
      'Flexible venue setup',
      'Mocktail options for all ages',
      'Glassware & ice included'
    ],
    color: 'from-amber-500 to-orange-600'
  },
  {
    id: 'masterclass',
    title: 'Cocktail Masterclasses',
    subtitle: 'Learn from the Experts',
    description:
      'Hands-on mixology experiences perfect for team building, hen parties, corporate events, or anyone wanting to master the art of cocktail making. Learn professional techniques from our expert bartenders.',
    image: '/masterclass.webp',
    features: [
      'Professional instruction',
      'All equipment & ingredients provided',
      'Take-home recipe cards',
      'Competition formats available',
      'Groups of 6-50 people',
      'Virtual options available'
    ],
    color: 'from-emerald-500 to-teal-600'
  }
]

const additionalServices = [
  {
    title: 'Event Planning Support',
    description:
      'We help coordinate with your venue and other vendors to ensure seamless bar service.',
    icon: (
      <svg
        className='w-6 h-6'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4'
        />
      </svg>
    )
  },
  {
    title: 'Licensing & Compliance',
    description:
      'We handle all necessary permits and licensing requirements for your event.',
    icon: (
      <svg
        className='w-6 h-6'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
        />
      </svg>
    )
  },
  {
    title: 'Bar Design & Setup',
    description:
      'Beautiful bar setups that match your event theme, from rustic to ultra-modern.',
    icon: (
      <svg
        className='w-6 h-6'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z'
        />
      </svg>
    )
  },
  {
    title: 'Custom Menu Creation',
    description:
      'Work with our mixologists to create signature cocktails unique to your event.',
    icon: (
      <svg
        className='w-6 h-6'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
        />
      </svg>
    )
  }
]

// Structured data for SEO
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Mobile Bar Hire Services',
  provider: {
    '@type': 'Organization',
    name: SEO_DEFAULTS.siteName,
    url: SEO_DEFAULTS.siteUrl
  },
  description:
    'Professional mobile bar hire services including weddings, corporate events, private parties, and cocktail masterclasses across the UK.',
  areaServed: {
    '@type': 'Country',
    name: 'United Kingdom'
  },
  serviceType: [
    'Wedding Bar Hire',
    'Corporate Event Bar',
    'Private Party Bar',
    'Cocktail Masterclass'
  ]
}

const Services = () => {
  return (
    <>
      <Head>
        <title>
          Mobile Bar Hire Services | Weddings, Corporate & Private Events |
          MyBartenders
        </title>
        <meta
          name='description'
          content='Professional mobile bar hire services in Northampton and across the UK. Expert bartenders for weddings, corporate events, private parties, and cocktail masterclasses.'
        />
        <meta
          name='keywords'
          content='mobile bar hire, wedding bar, corporate event bar, cocktail masterclass, bartender hire, Northampton, UK'
        />
        <link rel='canonical' href={`${SEO_DEFAULTS.siteUrl}/services`} />

        {/* Open Graph */}
        <meta
          property='og:title'
          content='Mobile Bar Hire Services | MyBartenders UK'
        />
        <meta
          property='og:description'
          content='Professional mobile bar hire for weddings, corporate events, and private parties.'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={`${SEO_DEFAULTS.siteUrl}/services`} />
        <meta
          property='og:image'
          content={`${SEO_DEFAULTS.siteUrl}/wedding.webp`}
        />

        {/* Twitter Card */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='Mobile Bar Hire Services | MyBartenders UK'
        />
        <meta
          name='twitter:description'
          content='Professional mobile bar hire for weddings, corporate events, and private parties.'
        />

        {/* Structured Data */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className='relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gray-950 overflow-hidden'>
          <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black' />
          <div className='absolute top-20 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl' />
          <div className='absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl' />

          <div className='relative container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='text-center max-w-4xl mx-auto'
            >
              <span className='inline-block px-4 py-1.5 bg-white/5 border border-white/10 text-pink-400 text-sm font-medium rounded-full mb-6'>
                Our Services
              </span>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight'>
                Premium Mobile Bar
                <span className='block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-amber-400'>
                  Services for Every Occasion
                </span>
              </h1>
              <p className='text-xl text-gray-400 max-w-2xl mx-auto mb-10'>
                From intimate gatherings to grand celebrations, we bring the bar
                to you with style, professionalism, and exceptional cocktails.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <a
                  href='/contact_us'
                  className='inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white font-semibold rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-pink-500/30'
                >
                  Get a Free Quote
                  <svg
                    className='w-5 h-5'
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
                  href={CONTACT_INFO.phoneHref}
                  className='inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-colors'
                >
                  <svg
                    className='w-5 h-5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                    />
                  </svg>
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Services - Dark Theme */}
        <section className='relative py-20 lg:py-32 bg-gray-950 overflow-hidden'>
          <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/50 via-gray-950 to-gray-950' />

          <div className='relative container mx-auto px-4 sm:px-6 lg:px-8'>
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 lg:mb-32 last:mb-0 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div
                    className={`absolute -inset-4 bg-gradient-to-r ${service.color} rounded-3xl blur-2xl opacity-20`}
                  />
                  <div className='relative aspect-[4/3] rounded-2xl overflow-hidden'>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className='object-cover'
                      sizes='(max-width: 768px) 100vw, 50vw'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent' />

                    {/* Floating Badge */}
                    <div className='absolute bottom-6 left-6 right-6'>
                      <div className='inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20'>
                        <span
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}
                        />
                        <span className='text-white text-sm font-medium'>
                          {service.subtitle}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h2 className='text-3xl lg:text-4xl font-bold text-white mb-4'>
                    {service.title}
                  </h2>
                  <p className='text-lg text-gray-400 leading-relaxed mb-8'>
                    {service.description}
                  </p>

                  {/* Features Grid */}
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8'>
                    {service.features.map(feature => (
                      <div
                        key={feature}
                        className='flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5'
                      >
                        <div
                          className={`w-6 h-6 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center flex-shrink-0`}
                        >
                          <svg
                            className='w-3 h-3 text-white'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                          >
                            <path
                              fillRule='evenodd'
                              d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                              clipRule='evenodd'
                            />
                          </svg>
                        </div>
                        <span className='text-gray-300 text-sm'>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href='/contact_us'
                    className={`inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${service.color} text-white font-semibold rounded-full hover:opacity-90 transition-opacity shadow-lg`}
                  >
                    Enquire About {service.title}
                    <svg
                      className='w-4 h-4'
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
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Additional Services - Dark Theme */}
        <section className='relative py-20 lg:py-32 bg-gray-950 overflow-hidden'>
          <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black' />
          <div className='absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-3xl' />

          <div className='relative container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='text-center mb-16'
            >
              <span className='inline-block px-4 py-1.5 bg-white/5 border border-white/10 text-pink-400 text-sm font-medium rounded-full mb-6'>
                More Than Just Drinks
              </span>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6'>
                Complete Event
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-amber-400'>
                  {' '}
                  Support
                </span>
              </h2>
              <p className='text-xl text-gray-400 max-w-2xl mx-auto'>
                We go beyond bartending to ensure your event runs smoothly from
                start to finish.
              </p>
            </motion.div>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto'>
              {additionalServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className='group p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-pink-500/30 transition-colors'
                >
                  <div className='w-12 h-12 bg-gradient-to-r from-pink-500/20 to-amber-500/20 rounded-xl flex items-center justify-center text-pink-400 mb-4'>
                    {service.icon}
                  </div>
                  <h3 className='text-lg font-semibold text-white mb-2'>
                    {service.title}
                  </h3>
                  <p className='text-gray-400 text-sm'>{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='relative py-24 lg:py-32 overflow-hidden'>
          {/* Background Image */}
          <div className='absolute inset-0'>
            <Image
              src={SITE_IMAGES.servicesCtaBackground}
              alt='Background'
              fill
              className='object-cover'
              sizes='100vw'
            />
            <div className='absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-gray-900/80' />
          </div>

          {/* Decorative elements */}
          <div className='absolute top-20 right-20 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl' />
          <div className='absolute bottom-20 left-20 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl' />

          <div className='relative container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='max-w-4xl mx-auto text-center'>
              {/* Badge */}
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

              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight'
              >
                Ready to Elevate
                <span className='block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-amber-400'>
                  Your Event?
                </span>
              </motion.h2>

              {/* Description */}
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

              {/* CTAs */}
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
                  <svg
                    className='w-5 h-5 transition-transform group-hover:translate-x-1'
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
                  href='/gallery'
                  className='inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all text-lg'
                >
                  View Our Work
                </a>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='flex flex-wrap items-center justify-center gap-6 lg:gap-10 text-white/50 text-sm'
              >
                {TRUST_INDICATORS.map(item => (
                  <div key={item} className='flex items-center gap-2'>
                    <svg
                      className='w-5 h-5 text-green-400'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                        clipRule='evenodd'
                      />
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

export default Services
