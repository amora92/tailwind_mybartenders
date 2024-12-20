'use client'
import React, { useState } from 'react'

const ServicesSection = () => {
  const services = [
    {
      title: 'Masterclass',
      description:
        'Join our masterclass to learn the art of cocktail making from experienced mixologists. Perfect for enthusiasts and professionals alike.',
      image: 'masterclass.webp',
      price: '£ Custom',
      options:
        'Prohibition Style Cocktails, Modern Cocktails, Party Cocktails, Spirits Masterclass, Shots, Vodka & Caviar, Cocktail History & More',
      additionalInfo: 'Includes all necessary equipment and ingredients.',
      capacity: 'Up to 50 participants',
      lengthOfService: 'Minimum 1 hour'
    },
    {
      title: 'Wedding',
      description:
        'Make your special day even more memorable with our bespoke wedding cocktail service. Tailored drinks that match your theme and style.',
      image: 'wedding.webp',
      price: '£ Custom',
      options:
        'Champagne Tower, Her & His Bespoke Cocktails, Custom Menu for the evening.',
      additionalInfo: 'Customized cocktail menu and professional bartenders.',
      capacity: 'Up to 250 guests',
      lengthOfService: 'Flexible duration'
    },
    {
      title: 'Tasting Session',
      description:
        'Experience a variety of exquisite cocktails through our guided tasting sessions. Discover new flavors and enjoy the perfect sip.',
      image: 'closeup.webp',
      price: '£ Custom',
      options: 'A flight of cocktails, Spirit & Shot Tasting, Mocktails',
      additionalInfo: 'Guided tasting with a selection of premium cocktails.',
      capacity: 'Up to 30 participants',
      lengthOfService: 'Minimum 3 hours'
    },
    {
      title: 'Private Party',
      description:
        'Elevate your private party with custom cocktails and professional bartending service. Enjoy a unique and unforgettable experience.',
      image: 'party_cocktails.webp',
      price: '£ Custom',
      options: 'From Welcome Drinks to Shots, Sharers & fine Cocktails.',
      additionalInfo: 'Personalized cocktail menu and dedicated bartender.',
      capacity: 'Up to 250 guests',
      lengthOfService: 'Minimum 4 hours'
    },
    {
      title: 'Birthday Bash',
      description:
        'Celebrate your birthday with our exclusive cocktail service. Choose from a range of birthday themed cocktails and enjoy the party!',
      image: 'birthday.webp',
      price: '£ Custom',
      options: 'Themed and custom menu, celebratory concotions.',
      additionalInfo:
        'Tailored cocktails for your birthday theme. A huge shot menu to choose from.',
      capacity: 'Up to 200 guests',
      lengthOfService: 'Minimum 2 hours'
    },
    {
      title: 'Corporate Event',
      description:
        'Enhance your corporate event with our professional cocktails. Impress your guests with our premium selection, branding, decorations and the bar for maximum impact!',
      image: 'corporate.webp',
      price: '£ Custom',
      options: 'Branded drinks & presentation, custom bar decorations.',
      additionalInfo:
        'Customized cocktail menu, corporate branding, branded menu development.',
      capacity: 'Up to 200 guests',
      lengthOfService: 'Minimum 2 hours'
    }
  ]

  const [selectedServiceIndex, setSelectedServiceIndex] = useState(0)

  const handleNextService = () => {
    setSelectedServiceIndex(prevIndex => (prevIndex + 1) % services.length)
  }

  const handlePrevService = () => {
    setSelectedServiceIndex(prevIndex =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    )
  }

  const selectedService = services[selectedServiceIndex]

  return (
    <section
      id='next-section'
      className='container mx-auto px-2 md:px-4 lg:px-6 relative flex flex-col'
    >
      <div className='px-6 flex items-center mt-16 md:mt-10'>
        <div className='flex-grow border-b border-gray-300'></div>
        <span className='mx-4 text-lg font-semibold pt-16'>What We Do</span>
        <div className='flex-grow border-b border-gray-300'></div>
      </div>
      <div className='max-w-full p-4'>
        <div className='flex flex-wrap justify-center space-around xl:mb-10 gap-4 md:gap-8 md:mb-5 sm:mb-5 mb-8'>
          {services.map((service, index) => (
            <button
              key={index}
              className={`group inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[1px] sm:p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75 ${
                index === selectedServiceIndex
                  ? 'bg-opacity-100 shadow-lg shadow-gold transition duration-300'
                  : 'bg-opacity-50'
              }`}
              onClick={() => setSelectedServiceIndex(index)}
            >
              <span className='block rounded-full bg-white px-4 py-2 text-xs sm:px-6 sm:py-2 sm:text-sm font-medium group-hover:bg-transparent'>
                {service.title}
              </span>
            </button>
          ))}
        </div>
        <div className='flex flex-col md:flex-row'>
          <div className='relative w-full md:w-1/2 h-[50vh] bg-gray-300 flex items-center justify-center mb-5 md:mb-0 rounded-lg overflow-hidden'>
            <img
              src={selectedService.image}
              alt={selectedService.title}
              className='w-full h-full object-contain'
            />
            <button
              className='absolute left-4 md:left-0 top-1/2 transform -translate-y-1/2 bg-transparent text-white px-3 py-1 rounded-l-md hover:text-yellow-400 focus:outline-none animate-bounce'
              onClick={handlePrevService}
              aria-label='Scroll to previous'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                className='w-12 h-12'
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
              className='absolute right-4 md:right-0 top-1/2 transform -translate-y-1/2 bg-transparent text-white px-3 py-1 rounded-r-md hover:text-yellow-400 focus:outline-none animate-bounce'
              onClick={handleNextService}
              aria-label='Scroll to next'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                className='w-12 h-12'
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
          <div className='w-full md:w-1/2 h-[50vh] bg-gray-100 flex items-center p-4 md:p-6 rounded-lg'>
            <div className='w-full font-sans'>
              <h3 className='text-xl md:text-2xl font-bold mb-2 text-pink-600'>
                {selectedService.title}
              </h3>
              <p className='text-base md:text-lg mb-2 text-gray-700'>
                {selectedService.description}
              </p>
              <div className='my-4'>
                <h4 className='text-lg font-semibold text-red-500'>Details:</h4>
                <p className='mb-1'>
                  <span className='font-bold text-yellow-600'>Price:</span>{' '}
                  {selectedService.price}
                </p>
                <p className='mb-1'>
                  <span className='font-bold text-yellow-600'>Options:</span>{' '}
                  {selectedService.options}
                </p>
                <p className='mb-1'>
                  <span className='font-bold text-yellow-600'>Capacity:</span>{' '}
                  {selectedService.capacity}
                </p>
                <p>
                  <span className='font-bold text-yellow-600'>
                    Length of Service:
                  </span>{' '}
                  {selectedService.lengthOfService}
                </p>
                <p className='mt-4'>
                  <span className='text-sm text-gray-500'>
                    {selectedService.additionalInfo}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
