import { useState } from 'react'
import { motion } from 'framer-motion'

const ImageRotator = () => {
  const images = [
    {
      src: '/prtb6.jpg',
      title: 'Mobile Bar',
      description:
        "We don't need any special access requirements and will pitch up anywhere.",
      additionalDescription: [
        'Indoor and outdoor setups.',
        'Ability to brand our bar with your logo designs.',
        'And much more.'
      ]
    },
    {
      src: '/20150428_230641.jpg',
      title: 'Food & Drink Pairings',
      description: 'Let us pair your food with our drinks! Perfect for:',
      additionalDescription: [
        'Brand awareness / signature serves.',
        'Product launches, ingredient showcases.',
        'Special occasions.'
      ]
    },
    {
      src: '/20220528_183404.webp',
      title: 'Custom Menus',
      description:
        'We take inspiration and work with the best mixologists in the industry. ',
      additionalDescription: [
        'Let us guide you through thousands of drink options. ',
        'Recipes that are not available anywhere else!',
        'All requirements/allergens catered to with great care.'
      ]
    },
    {
      src: '/IMG-20240224-WA0049.jpg',
      title: 'International awards',
      description: 'We actively compete and win industry competitions.',
      additionalDescription: [
        'Bols International Cocktail Championship - National Champion',
        'Absolut Invite Cup',
        'Chambord Mixology Championship',
        'And much more'
      ]
    },
    {
      src: '/IMG_20220323_122115_003.webp',
      title: 'Unique Offering',
      description:
        'We have long standing relationships with a wide range of suppliers.',
      additionalDescription: [
        'Rare, discontinued offerings.',
        'Access to trade prices.',
        'Best deals in the market.'
      ]
    },
    {
      src: '/Fire.webp',
      title: 'We cater to all requirements',
      description:
        'Firebreathing & burning drinks or fine - high end drinks, we do it all.',
      additionalDescription: [
        'We love all parties and know how to please different crowds.',
        'Thousands of private events catered to (& counting).',
        'Food & Safety qualified, Licence Holders.',
        'And much more'
      ]
    }
    // Add more images as needed
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length)
  }

  const handlePrev = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  const testimonials = [
    {
      quote: "The most professional bar service we've ever worked with!",
      author: 'Sarah & James, Wedding 2023'
    },
    {
      quote:
        'Incredible cocktails and amazing service - our corporate event was a huge success!',
      author: 'Tech Solutions Ltd.'
    },
    {
      quote:
        'They made our product launch unforgettable with their custom drinks menu.',
      author: 'Luxury Brands Co.'
    }
  ]

  return (
    <section
      id='services'
      className='container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32'
    >
      {/* SEO-friendly header */}
      <h1 className='sr-only'>
        Premium Mobile Bar Services and Cocktail Catering
      </h1>

      {/* Enhanced Section Header */}
      <div className='max-w-4xl mx-auto text-center mb-20'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='space-y-6'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 tracking-tight'>
            Why Choose Us
          </h2>
          <p className='text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto'>
            With over a decade of experience crafting unforgettable experiences,
            we bring more than just award-winning cocktails to your event. We
            bring passion, creativity, and unmatched expertise.
          </p>
          <div className='w-24 h-1 bg-pink-500 mx-auto rounded-full'></div>
        </motion.div>
      </div>

      {/* Main Content Section - Side by Side Layout */}
      <div className='max-w-8xl mx-auto mb-32'>
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-12 mb-24'>
          {/* Left Side - Image Rotator */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='lg:w-2/3 relative'
          >
            <div className='aspect-[16/9] rounded-2xl overflow-hidden bg-gray-100 shadow-2xl'>
              <motion.img
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                src={images[currentIndex].src}
                alt={images[currentIndex].title}
                className='w-full h-full object-cover'
              />
            </div>

            {/* Navigation Controls */}
            <div className='absolute top-1/2 -translate-y-1/2 left-8 right-8 flex justify-between pointer-events-none'>
              <button
                onClick={handlePrev}
                className='p-4 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-pink-500 hover:text-white transition-all duration-300 pointer-events-auto'
                aria-label='Previous image'
              >
                <svg
                  className='w-8 h-8'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M15 19l-7-7 7-7'
                  />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className='p-4 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-pink-500 hover:text-white transition-all duration-300 pointer-events-auto'
                aria-label='Next image'
              >
                <svg
                  className='w-8 h-8'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* Right Side - Dynamic Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='lg:w-1/3 bg-white rounded-2xl p-8 shadow-xl border border-gray-100 flex flex-col justify-between'
          >
            <div>
              <motion.h3
                key={images[currentIndex].title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className='text-3xl font-bold text-gray-900 mb-6'
              >
                {images[currentIndex].title}
              </motion.h3>

              <motion.p
                key={images[currentIndex].description}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className='text-lg text-gray-700 leading-relaxed mb-8'
              >
                {images[currentIndex].description}
              </motion.p>

              <ul className='space-y-4 mb-8'>
                {images[currentIndex].additionalDescription.map(
                  (item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className='flex items-start space-x-3'
                    >
                      <svg
                        className='w-5 h-5 text-pink-500 mt-1 flex-shrink-0'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path
                          fillRule='evenodd'
                          d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                          clipRule='evenodd'
                        />
                      </svg>
                      <span className='text-gray-600'>{item}</span>
                    </motion.li>
                  )
                )}
              </ul>
            </div>

            <div className='pt-6 border-t border-gray-100'>
              <a
                href='/contact_us'
                className='inline-flex items-center px-6 py-3 text-base font-medium text-white bg-pink-500 rounded-lg hover:bg-pink-600 transition-colors duration-300'
              >
                Learn More
                <svg
                  className='ml-2 w-5 h-5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Combined Stats and Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='bg-white rounded-2xl p-8 lg:p-12 shadow-xl border border-gray-100'
        >
          <div className='max-w-7xl mx-auto'>
            <h3 className='text-3xl font-bold mb-12 text-center text-gray-900'>
              The Complete Experience
            </h3>

            {/* Stats Grid */}
            <div className='grid md:grid-cols-4 gap-8 mb-16'>
              {[
                { number: '1000+', label: 'Events Served' },
                { number: '500+', label: 'Signature Drinks' },
                { number: '15+', label: 'Years Experience' },
                { number: '3+', label: 'Awards Won' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className='text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg'
                >
                  <motion.div
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    className='text-4xl font-bold text-pink-500 mb-2'
                  >
                    {stat.number}
                  </motion.div>
                  <p className='text-gray-600'>{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Experience Features */}
            <div className='grid md:grid-cols-3 gap-8 mb-12'>
              {[
                {
                  icon: 'M13 10V3L4 14h7v7l9-11h-7z',
                  title: 'Expert Mixologists',
                  description:
                    'Award-winning bartenders creating unforgettable drinks'
                },
                {
                  icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
                  title: 'Bespoke Service',
                  description:
                    'Customized menus and setups for your unique event'
                },
                {
                  icon: 'M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7',
                  title: 'Full Package',
                  description: 'Everything handled from setup to cleanup'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className='bg-gradient-to-br from-purple-100 to-pink-50 rounded-xl p-6 shadow-lg'
                >
                  <div className='text-pink-500 mb-4'>
                    <svg
                      className='w-8 h-8'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d={feature.icon}
                      />
                    </svg>
                  </div>
                  <h4 className='text-xl font-semibold mb-2 text-gray-900'>
                    {feature.title}
                  </h4>
                  <p className='text-gray-600'>{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <div className='text-center'>
              <a
                href='/gallery'
                className='inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-pink-500 rounded-xl hover:bg-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl'
              >
                Explore Our Drinks
                <motion.svg
                  className='ml-2 w-6 h-6'
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M14 5l7 7m0 0l-7 7m7-7H3'
                  />
                </motion.svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ImageRotator
