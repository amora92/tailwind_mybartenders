'use client'

import React, { useCallback, useEffect, useState } from 'react'
import styles from './VideoSection.module.css'

const VideoSection = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  const scrollToNextSection = useCallback(() => {
    const nextSection = document.getElementById('next-section')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <section className='relative w-full h-screen overflow-hidden flex items-center justify-center text-center text-white'>
      <div className={`${styles.videoContainer} bg-black`}>
        <video
          src='/Branding_Video_2.compressed.mp4'
          type='video/mp4'
          autoPlay
          muted
          loop
          playsInline
          preload='auto'
          onCanPlay={() => setIsVideoLoaded(true)}
          className='absolute inset-0 w-full h-full object-cover'
          style={{
            filter: 'brightness(0.8)',
            transform: 'scale(1.01)',
            opacity: isVideoLoaded ? 1 : 0.5,
            transition: 'opacity 0.5s ease-in-out'
          }}
        />
        <div className={styles.gradientOverlay} />
      </div>

      <div
        className={`absolute inset-0 flex flex-col items-center justify-center z-10 px-4 sm:px-6 lg:px-8 
        opacity-100 translate-y-0`}
      >
        <div className='max-w-6xl mx-auto text-center space-y-8 lg:space-y-10'>
          <div className={styles.glowContainer}>
            <h1
              className='text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-tight
              backdrop-blur-sm bg-black/10 p-4 rounded-lg shadow-2xl'
            >
              <span className={styles.textGradient}>
                Mobile Bar Hire, Mixology, Weddings,
              </span>
              <br />
              <span className={styles.textGradient}>
                Cocktail Masterclasses, Hen Parties
              </span>
              <span className='block mt-4 text-gold-400 text-2xl md:text-4xl lg:text-5xl font-medium'>
                Northampton & Nationwide
              </span>
            </h1>
          </div>

          <div
            className={`space-y-6 backdrop-blur-sm bg-black/10 p-6 rounded-lg 
            shadow-xl ${styles.fadeInUp}`}
          >
            <h2
              className='text-2xl md:text-3xl lg:text-4xl font-medium leading-tight
              bg-gradient-to-r from-white via-gold-200 to-white bg-clip-text text-transparent'
            >
              Bringing You the Best Cocktail Experience
            </h2>

            <h3
              className='text-xl md:text-2xl lg:text-3xl font-light leading-relaxed
              text-gray-200'
            >
              Fine Cocktails & Bespoke Event Solutions
            </h3>

            <div className='text-xl md:text-2xl lg:text-3xl font-light'>
              <span className='font-medium'>Phone: </span>
              <a
                href='tel:+4473655822959'
                className='text-gold-400 hover:text-gold-300 transition-all duration-300
                  hover:scale-105 inline-block'
              >
                +44 7365 5822 959
              </a>
            </div>
            <div className='text-xl md:text-2xl lg:text-3xl font-light'>
              <span className='font-medium'>Email: </span>
              <a
                href='mailto:contact@mybartenders.co.uk'
                className='text-gold-400 hover:text-gold-300 transition-all duration-300
                  hover:scale-105 inline-block'
              >
                contact@mybartenders.co.uk
              </a>
            </div>
          </div>
        </div>

        <button
          onClick={scrollToNextSection}
          className={`absolute bottom-8 text-white/80 hover:text-gold-400 
            focus:outline-none transition-all duration-300 transform hover:scale-110
            ${styles.floatingButton}`}
          aria-label='Scroll to next section'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className='w-10 h-10 sm:w-12 sm:h-12'
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
    </section>
  )
}

export default VideoSection
