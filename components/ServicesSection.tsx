// components/ServicesSection.tsx
'use client'
import React, { useState } from 'react'

const ServicesSection = () => {
  const services = [
    {
      title: 'Masterclass',
      description:
        'Join our masterclass to learn the art of cocktail making from experienced mixologists. Perfect for enthusiasts and professionals alike.',
      image:
        'https://images.unsplash.com/photo-1509710398975-6454dcdf049f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: '£ Custom',
      additionalInfo: 'Includes all necessary equipment and ingredients.',
      capacity: 'Up to 50 participants',
      lengthOfService: 'Minimum 1 hour'
    },
    {
      title: 'Wedding',
      description:
        'Make your special day even more memorable with our bespoke wedding cocktail service. Tailored drinks that match your theme and style.',
      image:
        'https://images.pexels.com/photos/22086472/pexels-photo-22086472/free-photo-of-tables-at-a-wedding-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      price: '£ Custom',
      additionalInfo: 'Customized cocktail menu and professional bartenders.',
      capacity: 'Up to 250 guests',
      lengthOfService: 'Flexible duration'
    },
    {
      title: 'Tasting Session',
      description:
        'Experience a variety of exquisite cocktails through our guided tasting sessions. Discover new flavors and enjoy the perfect sip.',
      image:
        'https://images.pexels.com/photos/17494020/pexels-photo-17494020/free-photo-of-close-up-of-fruit-cocktail.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      price: '£ Custom',
      additionalInfo: 'Guided tasting with a selection of premium cocktails.',
      capacity: 'Up to 30 participants',
      lengthOfService: 'Minimum 3 hours'
    },
    {
      title: 'Private Party',
      description:
        'Elevate your private party with custom cocktails and professional bartending service. Enjoy a unique and unforgettable experience.',
      image:
        'https://images.pexels.com/photos/12645180/pexels-photo-12645180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      price: '£ Custom',
      additionalInfo: 'Personalized cocktail menu and dedicated bartender.',
      capacity: 'Up to 250 guests',
      lengthOfService: 'Minimum 4 hours'
    },
    {
      title: 'Birthday Bash',
      description:
        'Celebrate your birthday with our exclusive cocktail service. Choose from a range of birthday themed cocktails and enjoy the party!',
      image:
        'https://images.pexels.com/photos/5947092/pexels-photo-5947092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      price: '£ Custom',
      additionalInfo:
        'Tailored cocktails for your birthday theme. A huge shot menu to choose from.',
      capacity: 'Up to 200 guests',
      lengthOfService: 'Minimum 2 hours'
    },
    {
      title: 'Corporate Event',
      description:
        'Enhance your corporate event with our professional cocktail catering. Impress your guests with our premium selection, brand the offering, decorations and the bar for maximum impact!',
      image:
        'https://images.pexels.com/photos/6405771/pexels-photo-6405771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      price: '£ Custom',
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
      <div className='max-w-full p-4'>
        <div className='flex flex-wrap justify-center space-around xl:mt-5 xl:mb-10 gap-4 md:gap-8 md:mb-5 sm:mb-5 '>
          {services.map((service, index) => (
            <button
              key={index}
              className={`group inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[1px] sm:p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75 ${
                index === selectedServiceIndex
                  ? 'bg-opacity-100'
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
          <div className='relative w-full md:w-1/2 h-[80vh] bg-gray-300 flex items-center justify-center'>
            <img
              src={selectedService.image}
              alt={selectedService.title}
              className='w-full h-full object-cover'
            />
            <button
              className='absolute left-4 md:left-0 top-1/2 transform -translate-y-1/2 bg-transparent text-white px-3 py-1 rounded-l-md hover:text-yellow-400 focus:outline-none animate-bounce'
              onClick={handlePrevService}
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
          <div className='w-full md:w-1/2 h-[80vh] bg-gray-100 p-8 flex items-center'>
            <div className='w-full'>
              <h2 className='text-2xl font-bold mb-4'>
                {selectedService.title}
              </h2>
              <p className='text-lg mb-2'>{selectedService.description}</p>
              <div className='my-4'>
                <h3 className='text-lg font-semibold'>Details:</h3>
                <p>{selectedService.additionalInfo}</p>
                <p>
                  <strong>Price:</strong> {selectedService.price}
                </p>
                <p>
                  <strong>Capacity:</strong> {selectedService.capacity}
                </p>
                <p>
                  <strong>Length of Service:</strong>{' '}
                  {selectedService.lengthOfService}
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
