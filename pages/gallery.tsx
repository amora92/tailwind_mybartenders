import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import OptimizedImage from '@/components/OptimizedImage'

const inter = Inter({ subsets: ['latin'] })

const simpleVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}

interface MediaItem {
  src: string
  alt: string
  category: string
  width: number
  height: number
  largeSrc: string
}

const mediaItems: MediaItem[] = [
  {
    src: '/IMG-20240224-WA0027.webp',
    largeSrc: '/IMG-20240224-WA0027.webp',
    alt: 'Luxury Parisian Absinthe Fountain Service',
    category: 'cocktails',
    width: 600,
    height: 450
  },
  {
    src: '/IMG-20240224-WA0048.webp',
    largeSrc: '/IMG-20240224-WA0048.webp',
    alt: 'Signature White Russian Cocktail',
    category: 'cocktails',
    width: 600,
    height: 450
  },
  {
    src: '/IMG-20240224-WA0053.webp',
    largeSrc: '/IMG-20240224-WA0053.webp',
    alt: 'Artisanal White Russian with Layered Cream',
    category: 'cocktails',
    width: 600,
    height: 450
  },
  {
    src: '/IMG-20240224-WA0056.webp',
    largeSrc: '/IMG-20240224-WA0056.webp',
    alt: 'Signature Cinnamon White Russian',
    category: 'cocktails',
    width: 600,
    height: 450
  },
  {
    src: '/IMG_20220323_122115_003.webp',
    largeSrc: '/IMG_20220323_122115_003.webp',
    alt: 'Stolichnaya Vodka, Belvedere Vodka, Au Vodka, Absinthe Fountain, Premium Vodka Selection',
    category: 'cocktails',
    width: 600,
    height: 450
  },
  {
    src: '/fire.webp',
    largeSrc: '/fire.webp',
    alt: 'Firebreathing Bartender, Flair Bartending, Entertainment Services',
    category: 'cocktails',
    width: 600,
    height: 450
  },
  {
    src: '/FB_IMG_1563583948109.jpg',
    largeSrc: '/FB_IMG_1563583948109.jpg',
    alt: 'Creamy, Nightcap Cocktail, Bourbon, Cherries, Fruit',
    category: 'cocktails',
    width: 600,
    height: 450
  },
  {
    src: '/2014.jpg',
    largeSrc: '/2014.jpg',
    alt: 'Louis XIII Cognac, Martini Glass, Mixologist',
    category: 'cocktails',
    width: 600,
    height: 450
  },
  {
    src: '/201111.jpg',
    largeSrc: '/201111.jpg',
    alt: 'Professional Mobile Bar Setup',
    category: 'events',
    width: 600,
    height: 450
  },
  {
    src: '/picture1.jpg',
    largeSrc: '/picture1.jpg',
    alt: 'Luxury Outdoor Bar Service',
    category: 'events',
    width: 600,
    height: 450
  },
  {
    src: '/55555.jpg',
    largeSrc: '/55555.jpg',
    alt: 'Bespoke Cocktail Creation',
    category: 'cocktails',
    width: 600,
    height: 450
  },
  {
    src: '/aaaa.jpg',
    largeSrc: '/aaaa.jpg',
    alt: 'Professional Event Bartending',
    category: 'events',
    width: 600,
    height: 450
  }
]

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null)
  const [visibleItems, setVisibleItems] = useState(6)
  const [activeCategory, setActiveCategory] = useState('all')
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'cocktails', name: 'Signature Cocktails' },
    { id: 'events', name: 'Events' },
    { id: 'behind-the-scenes', name: 'Behind the Scenes' }
  ]

  const filteredMedia =
    activeCategory === 'all'
      ? mediaItems
      : mediaItems.filter(item => item.category === activeCategory)

  const showMoreItems = () => {
    setVisibleItems(prev => Math.min(prev + 6, filteredMedia.length))
  }

  const navigateMedia = (direction: 'prev' | 'next') => {
    if (!selectedMedia) return

    const currentIdx = filteredMedia.findIndex(item => item === selectedMedia)
    if (direction === 'prev') {
      const newIndex =
        currentIdx > 0 ? currentIdx - 1 : filteredMedia.length - 1
      setSelectedMedia(filteredMedia[newIndex])
      setCurrentIndex(newIndex)
    } else {
      const newIndex =
        currentIdx < filteredMedia.length - 1 ? currentIdx + 1 : 0
      setSelectedMedia(filteredMedia[newIndex])
      setCurrentIndex(newIndex)
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedMedia) {
        if (e.key === 'ArrowLeft') navigateMedia('prev')
        if (e.key === 'ArrowRight') navigateMedia('next')
        if (e.key === 'Escape') setSelectedMedia(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedMedia, filteredMedia])

  return (
    <div className={inter.className}>
      <Head>
        <title>
          Luxury Mobile Bar Gallery | Premium Cocktail Events in Northampton &
          UK
        </title>
        <meta
          name='description'
          content='Explore our premium mobile bar gallery showcasing bespoke cocktail creations, professional mixology services, and exceptional event experiences across Northampton and the UK. View our stunning portfolio of corporate events, weddings, and private celebrations.'
        />
        <meta
          name='keywords'
          content='mobile bar hire, cocktail gallery, event bartending, mixology services, Northampton bars, UK events, luxury drinks, corporate events, wedding bar service, cocktail masterclass'
        />
        <link rel='canonical' href='https://www.mybartenders.co.uk/gallery' />
        <link
          rel='preload'
          href={mediaItems[0].src}
          as='image'
          type='image/webp'
        />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
      </Head>

      <Navbar />
      <main className='relative overflow-hidden bg-gradient-to-b from-white via-pink-50/30 to-white'>
        <section className='container mx-auto px-6 lg:px-20 py-16 mt-16'>
          <div className='max-w-4xl mx-auto mb-16'>
            <h1 className='text-4xl md:text-5xl font-bold mb-6 text-center'>
              Our <span className='text-pink-500'>Mobile Bar</span> Gallery
            </h1>
            <h2 className='text-2xl font-semibold mb-6 text-center text-gray-800'>
              Cocktails & Events
            </h2>
            <div className='space-y-4 text-center text-gray-600'>
              <p className='text-lg'>
                Browse through our collection of cocktails and events. Here
                you'll find examples of our mobile bar services across
                Northampton and the UK.
              </p>
              <p className='text-lg'>
                From private parties to corporate events, we provide{' '}
                <span className='text-pink-500'>professional bar services</span>{' '}
                tailored to your needs.
              </p>
            </div>
          </div>

          {/* Hide filter until more content is available 
          <div className='flex justify-center gap-4 mb-12'>
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeCategory === category.id
                    ? 'bg-pink-500 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          */}

          <motion.div
            className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'
            initial='hidden'
            animate='show'
            variants={simpleVariants}
          >
            {filteredMedia.slice(0, visibleItems).map((item, index) => (
              <motion.div
                key={index}
                layout
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                className='group relative overflow-hidden rounded-xl shadow-md bg-white p-2 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'
                onClick={() => setSelectedMedia(item)}
              >
                <div className='aspect-w-4 aspect-h-3 overflow-hidden rounded-lg'>
                  <OptimizedImage
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    priority={index < 3}
                    className='transform transition duration-300 group-hover:scale-105 object-cover w-full h-full'
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {visibleItems < filteredMedia.length && (
            <div className='mt-12 text-center'>
              <button
                onClick={showMoreItems}
                className='inline-flex items-center px-8 py-3 rounded-full bg-pink-500 text-white font-semibold hover:bg-pink-600 transition-colors gap-2'
              >
                Show More
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
                    d='M19 9l-7 7-7-7'
                  />
                </svg>
              </button>
            </div>
          )}

          <Transition appear show={!!selectedMedia} as={Fragment}>
            <Dialog
              as='div'
              className='relative z-50'
              onClose={() => setSelectedMedia(null)}
            >
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <div className='fixed inset-0 bg-black/75' />
              </Transition.Child>

              <div className='fixed inset-0 overflow-y-auto'>
                <div className='flex min-h-full items-center justify-center p-4'>
                  <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0 scale-95'
                    enterTo='opacity-100 scale-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100 scale-100'
                    leaveTo='opacity-0 scale-95'
                  >
                    <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-black shadow-xl transition-all max-w-7xl'>
                      {selectedMedia && (
                        <>
                          {/* Navigation buttons */}
                          <button
                            onClick={() => navigateMedia('prev')}
                            className='absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-black/50 p-3 text-white hover:bg-black/70'
                          >
                            <svg
                              className='h-6 w-6 rotate-180'
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
                          <button
                            onClick={() => navigateMedia('next')}
                            className='absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-black/50 p-3 text-white hover:bg-black/70'
                          >
                            <svg
                              className='h-6 w-6'
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

                          <div className='relative p-4'>
                            <button
                              onClick={() => setSelectedMedia(null)}
                              className='absolute top-4 right-4 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-black/70'
                            >
                              <svg
                                className='h-6 w-6'
                                fill='none'
                                stroke='currentColor'
                                viewBox='0 0 24 24'
                              >
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  strokeWidth={2}
                                  d='M6 18L18 6M6 6l12 12'
                                />
                              </svg>
                            </button>
                            <OptimizedImage
                              src={selectedMedia.largeSrc}
                              alt={selectedMedia.alt}
                              width={1200}
                              height={900}
                              className='max-h-[85vh] w-auto object-contain mx-auto'
                              priority={false}
                            />
                          </div>
                        </>
                      )}
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>

          <div className='max-w-4xl mx-auto mt-16 space-y-12'>
            {/* Main Content Section */}
            <div className='bg-white/50 rounded-xl border border-pink-100 p-8'>
              <div className='prose prose-lg max-w-none'>
                <h3 className='text-2xl font-semibold text-gray-900 mb-6'>
                  What We <span className='text-pink-500'>Offer</span>
                </h3>
                <p className='text-gray-700 leading-relaxed'>
                  Take a look at our previous events and cocktail selections.
                  Whether you're planning a wedding reception, corporate event,
                  or private party, we can help create a bar service that fits
                  your occasion.
                </p>
              </div>
            </div>

            {/* Services Grid */}
            <div className='grid md:grid-cols-2 gap-8 mt-12'>
              <div className='bg-white/60 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow'>
                <h4 className='text-xl font-semibold text-gray-900 mb-4'>
                  Bar Services
                </h4>
                <ul className='space-y-3 text-gray-700'>
                  <li className='flex items-center space-x-2'>
                    <span className='text-pink-500'>•</span>
                    <span>Custom drink menus</span>
                  </li>
                  <li className='flex items-center space-x-2'>
                    <span className='text-pink-500'>•</span>
                    <span>Quality spirits and mixers</span>
                  </li>
                  <li className='flex items-center space-x-2'>
                    <span className='text-pink-500'>•</span>
                    <span>Professional bartending</span>
                  </li>
                </ul>
              </div>

              <div className='bg-white/60 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow'>
                <h4 className='text-xl font-semibold text-gray-900 mb-4'>
                  Event Specialties
                </h4>
                <ul className='space-y-3 text-gray-700'>
                  <li className='flex items-center space-x-2'>
                    <span className='text-pink-500'>•</span>
                    <span>Luxury wedding celebrations</span>
                  </li>
                  <li className='flex items-center space-x-2'>
                    <span className='text-pink-500'>•</span>
                    <span>Corporate event packages</span>
                  </li>
                  <li className='flex items-center space-x-2'>
                    <span className='text-pink-500'>•</span>
                    <span>Private party experiences</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Call to Action */}
            <div className='bg-gradient-to-r from-pink-50 to-pink-100/50 rounded-xl p-8 text-center'>
              <h4 className='text-2xl font-semibold text-gray-900 mb-4'>
                Interested in Our Services?
              </h4>
              <p className='text-gray-700 mb-6 max-w-2xl mx-auto'>
                We'd love to discuss how we can help with your next event. Get
                in touch to learn more about our mobile bar services and
                availability.
              </p>
              <a
                href='/contact_us'
                className='inline-block bg-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-600 transition-colors'
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Gallery
