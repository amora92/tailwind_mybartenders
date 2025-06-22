import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
      title: 'International Awards',
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
      title: 'We Cater to All Requirements',
      description:
        'Firebreathing & burning drinks or fine - high end drinks, we do it all.',
      additionalDescription: [
        'We love all parties and know how to please different crowds.',
        'Thousands of private events catered to (& counting).',
        'Food & Safety qualified, Licence Holders.',
        'And much more'
      ]
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [direction, setDirection] = useState(1) // 1 for next, -1 for previous

  // Auto-rotation functionality
  useEffect(() => {
    let interval
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % images.length)
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [isAutoPlaying, images.length])

  const handleNext = () => {
    setIsAutoPlaying(false)
    setDirection(1)
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length)
  }

  const handlePrev = () => {
    setIsAutoPlaying(false)
    setDirection(-1)
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const handleDotClick = index => {
    setIsAutoPlaying(false)
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  const variants = {
    enter: direction => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: direction => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
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
      className='relative overflow-hidden bg-gradient-to-b from-white to-gray-50 px-4 sm:px-6 lg:px-8 py-24 lg:py-32'
    >
      {/* Decorative elements */}
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none'>
        <div className='absolute -top-24 -right-24 w-96 h-96 bg-pink-100 rounded-full opacity-30 blur-3xl'></div>
        <div className='absolute top-1/2 -left-24 w-80 h-80 bg-purple-100 rounded-full opacity-30 blur-3xl'></div>
        <div className='absolute -bottom-24 right-1/4 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-3xl'></div>
      </div>

      <div className='container mx-auto relative z-10'>
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
            transition={{ duration: 0.7 }}
            className='space-y-6'
          >
            <h2 className='text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600 tracking-tight'>
              Why Choose Us
            </h2>
            <p className='text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto'>
              With over a decade of experience crafting unforgettable
              experiences, we bring more than just award-winning cocktails to
              your event. We bring passion, creativity, and unmatched expertise.
            </p>
            <motion.div
              className='w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full'
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            ></motion.div>
          </motion.div>
        </div>

        {/* Main Content Section - Side by Side Layout */}
        <div className='max-w-7xl mx-auto mb-32'>
          <div className='flex flex-col lg:flex-row gap-12 mb-24'>
            {/* Left Side - Image Rotator */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className='lg:w-3/5 relative'
            >
              <div className='relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-900 shadow-[0_20px_50px_rgba(8,_112,_184,_0.15)] group'>
                <div className='absolute inset-0 bg-black/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10'></div>

                <AnimatePresence initial={false} custom={direction} mode='wait'>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={variants}
                    initial='enter'
                    animate='center'
                    exit='exit'
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className='absolute inset-0'
                  >
                    <div className='relative w-full h-full'>
                      <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent'></div>
                      <img
                        src={images[currentIndex].src}
                        alt={images[currentIndex].title}
                        className='w-full h-full object-cover'
                      />
                      <div className='absolute bottom-0 left-0 w-full p-6 text-white z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        <h3 className='text-2xl font-bold mb-2'>
                          {images[currentIndex].title}
                        </h3>
                        <p className='text-white/90 text-sm max-w-md'>
                          {images[currentIndex].description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Controls */}
              <div className='absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none z-20'>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePrev}
                  className='p-3 rounded-full bg-white/90 backdrop-blur-sm shadow-lg text-gray-800 hover:bg-pink-500 hover:text-white transition-all duration-300 pointer-events-auto'
                  aria-label='Previous image'
                >
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
                      d='M15 19l-7-7 7-7'
                    />
                  </svg>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNext}
                  className='p-3 rounded-full bg-white/90 backdrop-blur-sm shadow-lg text-gray-800 hover:bg-pink-500 hover:text-white transition-all duration-300 pointer-events-auto'
                  aria-label='Next image'
                >
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
                      d='M9 5l7 7-7 7'
                    />
                  </svg>
                </motion.button>
              </div>

              {/* Dots navigation */}
              <div className='flex justify-center mt-6 space-x-2'>
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      currentIndex === index
                        ? 'bg-pink-500 w-6'
                        : 'bg-gray-300 hover:bg-pink-300'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Right Side - Dynamic Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className='lg:w-2/5 bg-white rounded-2xl p-8 shadow-[0_10px_50px_rgba(0,_0,_0,_0.08)] border border-gray-100 flex flex-col justify-between backdrop-blur-sm bg-white/90'
            >
              <div>
                <AnimatePresence mode='wait'>
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className='inline-block px-4 py-1 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 text-pink-600 text-sm font-medium mb-6'>
                      {`${currentIndex + 1}/${images.length}`} -{' '}
                      {images[currentIndex].title}
                    </div>

                    <h3 className='text-3xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700'>
                      {images[currentIndex].title}
                    </h3>

                    <p className='text-lg text-gray-700 leading-relaxed mb-8'>
                      {images[currentIndex].description}
                    </p>

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
                            <span className='text-pink-500 flex-shrink-0 mt-1'>
                              <svg
                                className='w-5 h-5'
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  d='M7 13L10 16L17 9'
                                  stroke='currentColor'
                                  strokeWidth='2'
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                />
                                <circle
                                  cx='12'
                                  cy='12'
                                  r='9'
                                  stroke='currentColor'
                                  strokeWidth='2'
                                  strokeLinecap='round'
                                />
                              </svg>
                            </span>
                            <span className='text-gray-600'>{item}</span>
                          </motion.li>
                        )
                      )}
                    </ul>
                  </motion.div>
                </AnimatePresence>
              </div>

              <motion.div
                className='pt-6 border-t border-gray-100'
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <a
                  href='/contact_us'
                  className='group inline-flex items-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg'
                >
                  <span>Learn More</span>
                  <svg
                    className='ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M13 7l5 5-5 5M5 12h13'
                    />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Testimonial Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className='mb-24'
          >
            <div className='text-center mb-10'>
              <h3 className='text-3xl font-bold text-gray-900 mb-4'>
                What Our Clients Say
              </h3>
              <div className='w-16 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full'></div>
            </div>

            <div className='grid md:grid-cols-3 gap-6'>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className='bg-white rounded-xl p-6 shadow-lg border border-gray-100 relative'
                >
                  <div className='absolute -top-4 left-6 text-pink-500 text-5xl leading-none'>
                    "
                  </div>
                  <p className='text-gray-600 italic mb-4 pt-2'>
                    {testimonial.quote}
                  </p>
                  <p className='font-semibold text-gray-800'>
                    {testimonial.author}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats and Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className='bg-white rounded-2xl p-8 lg:p-12 shadow-xl border border-gray-100 relative overflow-hidden'
          >
            {/* Decorative elements */}
            <div className='absolute -bottom-20 -right-20 w-64 h-64 bg-pink-50 rounded-full opacity-80'></div>
            <div className='absolute -top-10 -left-10 w-40 h-40 bg-purple-50 rounded-full opacity-80'></div>

            <div className='max-w-7xl mx-auto relative z-10'>
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
                    transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                    className='text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-md relative overflow-hidden group'
                  >
                    <div className='absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                    <motion.div
                      initial={{ scale: 0.5 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 10
                      }}
                      className='relative text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600 mb-2'
                    >
                      {stat.number}
                    </motion.div>
                    <p className='relative text-gray-600 font-medium'>
                      {stat.label}
                    </p>
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
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                    className='bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-lg border border-gray-100 group'
                  >
                    <div className='text-pink-500 mb-4 group-hover:scale-110 transform transition-transform duration-300 origin-left'>
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
                    <h4 className='text-xl font-semibold mb-2 text-gray-900 group-hover:text-pink-600 transition-colors duration-300'>
                      {feature.title}
                    </h4>
                    <p className='text-gray-600'>{feature.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className='text-center'>
                <motion.a
                  href='/gallery'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  className='inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl'
                >
                  <span>Explore Our Drinks</span>
                  <motion.svg
                    className='ml-2 w-6 h-6'
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      repeat: Infinity,
                      repeatType: 'mirror',
                      duration: 1.5,
                      ease: 'easeInOut'
                    }}
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
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ImageRotator
