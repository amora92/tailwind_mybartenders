'use client'

import { useState, useEffect } from 'react'
import styles from './ImageRotator.module.css'

const ImageRotator = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

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
    }
    // ... rest of your images array
  ]

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length)
  }

  const handlePrev = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  return (
    <section id='next-section' className='container mx-auto px-6 lg:px-8 py-32'>
      {/* Section Header */}
      <div
        className={`${styles.sectionHeader} ${isVisible ? styles.visible : ''}`}
      >
        <div className='relative w-full flex items-center justify-center mb-16'>
          <div className='absolute inset-0 flex items-center'>
            <div className='w-full border-t border-gray-200'></div>
          </div>
          <h2 className='relative px-8 text-3xl font-bold text-gray-900 bg-white'>
            Why Us
          </h2>
          <div className={styles.glowLine}></div>
        </div>

        <div className='text-center mb-16'>
          <p
            className={`text-2xl font-medium text-gray-700 ${styles.fadeInUp}`}
          >
            It's not just award-winning cocktails
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className='flex flex-col md:flex-row items-center justify-between gap-16 w-full mb-24'>
        {/* Image Carousel */}
        <div className='w-full md:w-1/2 flex justify-center relative'>
          <div className={`${styles.imageContainer} group`}>
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].title}
              className={styles.carouselImage}
            />
            <div className={styles.imageOverlay}></div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className={`${styles.navButton} left-4`}
              aria-label='Previous image'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
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
              className={`${styles.navButton} right-4`}
              aria-label='Next image'
            >
              <svg
                className='w-6 h-6'
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
            </button>
          </div>
        </div>

        {/* Content Card */}
        <div className={`w-full md:w-1/2 ${styles.contentCard}`}>
          <h3 className={styles.cardTitle}>{images[currentIndex].title}</h3>
          <p className={styles.cardDescription}>
            {images[currentIndex].description}
          </p>

          <ul className={styles.featureList}>
            {images[currentIndex].additionalDescription.map((item, index) => (
              <li key={index} className={styles.featureItem}>
                {item}
              </li>
            ))}
          </ul>

          <a href='/contact_us' className={styles.contactButton}>
            Want to know more? Contact Us
          </a>
        </div>
      </div>

      {/* How to Book Section */}
      <div className={styles.bookingSection}>
        <h2 className={styles.bookingTitle}>How to Book the Perfect Party</h2>
        <div className={styles.bookingSteps}>
          <div className={styles.step}>
            <span className={styles.stepNumber}>1</span>
            <h4>Choose Your Date</h4>
            <p>Select a date and time that works for you and your guests</p>
          </div>

          <div className={styles.step}>
            <span className={styles.stepNumber}>2</span>
            <h4>Get in Touch</h4>
            <p>
              Call us at{' '}
              <a href='tel:+4473655822959' className={styles.phoneLink}>
                +44 7365 5822 959
              </a>
            </p>
          </div>

          <div className={styles.step}>
            <span className={styles.stepNumber}>3</span>
            <h4>Customize Your Event</h4>
            <p>Work with us to create your perfect menu</p>
          </div>

          <div className={styles.step}>
            <span className={styles.stepNumber}>4</span>
            <h4>Confirm Booking</h4>
            <p>Secure your date with a deposit</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImageRotator
