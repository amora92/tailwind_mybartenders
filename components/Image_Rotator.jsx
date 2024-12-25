import { useState } from 'react'

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

  return (
    <section id='next-section' className='container mx-auto px-6 lg:px-8 py-32'>
      {/* Decorative Line for Why Us */}
      <div className='relative w-full flex items-center justify-center mb-12'>
        <div className='absolute inset-0 flex items-center'>
          <div className='w-full border-t border-gray-300'></div>
        </div>
        <span className='relative bg-white px-6 text-2xl font-semibold text-gray-800 uppercase tracking-wider'>
          <span className='inline-block transform transition-transform duration-500 hover:scale-110'>
            Why Us
          </span>
        </span>
        <div className='absolute -bottom-6 w-20 h-1 bg-pink-500 rounded-full animate-pulse'></div>
      </div>

      <div className='relative w-full flex items-center justify-center mt-8 mb-16'>
        <span className='relative bg-white px-6 text-2xl font-semibold text-gray-800 uppercase tracking-wider'>
          <span className='inline-block transform transition-transform duration-500 hover:scale-110'>
            It's not just award-winning cocktails
          </span>
        </span>
      </div>

      {/* Content Section */}
      <div className='flex flex-col md:flex-row items-center justify-between gap-16 w-full mb-24'>
        {/* Left Content - Animated Image Rotator */}
        <div className='w-full md:w-1/2 flex justify-center relative'>
          <div className='relative w-full max-w-3xl h-96 overflow-hidden rounded-lg shadow-lg'>
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].title}
              className='absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-100'
              key={currentIndex}
            />
          </div>
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-100 p-2 rounded-full shadow-lg hover:bg-pink-500 hover:text-white focus:outline-none'
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-100 p-2 rounded-full shadow-lg hover:bg-pink-500 hover:text-white focus:outline-none'
          >
            →
          </button>
        </div>

        {/* Right Content - Interactive Text */}
        <div className='w-full md:w-1/2 bg-white border border-gray-200 rounded-lg p-8 shadow-lg text-gray-700 space-y-6 mt-8 md:mt-0'>
          <h2 className='text-3xl font-semibold text-gray-900'>
            {images[currentIndex].title}
          </h2>
          <p
            className={`text-lg transition-all duration-300 ${
              isExpanded ? 'max-h-full' : 'max-h-20 overflow-hidden'
            }`}
          >
            {images[currentIndex].description}
          </p>

          {/* Additional Description Below Image */}
          <div className='mt-6 text-sm text-gray-600'>
            <ul className='list-disc pl-6'>
              {images[currentIndex].additionalDescription.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className='mt-6'>
            <a
              href='/contact_us'
              className='text-pink-500 hover:text-pink-700 font-semibold focus:outline-none transition-transform duration-300'
            >
              Want to know more? Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Line for How to Book the Perfect Party */}
      <div className='relative w-full flex items-center justify-center mt-32 mb-12'>
        <div className='absolute inset-0 flex items-center'>
          <div className='w-full border-t border-gray-300'></div>
        </div>
        <span className='relative bg-white px-6 text-2xl font-semibold text-gray-800 uppercase tracking-wider'>
          <span className='inline-block transform transition-transform duration-500 hover:scale-110'>
            How to Book the Perfect Party
          </span>
        </span>
        <div className='absolute -bottom-6 w-20 h-1 bg-pink-500 rounded-full animate-pulse'></div>
      </div>

      {/* How to Book the Perfect Party Section */}
      <div className='w-full'>
        <div className='bg-white border border-gray-200 rounded-lg p-8 shadow-lg'>
          <h3 className='text-2xl font-bold text-gray-800 mb-4'>
            How to Book the Perfect Party
          </h3>
          <p className='text-gray-700 text-lg mb-6'>
            Booking the perfect party is easier than you think! Follow these
            steps to ensure your event is a success:
          </p>
          <ul className='list-disc list-inside space-y-2 text-gray-700'>
            <li>
              <strong>1. Decide on a date:</strong> Decide on a date and time
              that works for you and your guests.
            </li>
            <li>
              <strong>
                2. Get in touch!{' '}
                <a href='tel:+4473655822959' className='text-pink-500'>
                  +44 7365 5822 959
                </a>
              </strong>{' '}
              Fill out our form or phone / text our dedicated party number!
            </li>
            <li>
              <strong>3. Customize the Menu:</strong> Work with us to select the
              perfect drinks and menu items for your event.
            </li>
            <li>
              <strong>4. Secure Your Booking:</strong> Complete the booking
              process and confirm your reservation with a deposit.
            </li>
            <li>
              <strong>5. Sit Back and Relax:</strong> Let us handle the rest,
              from setup to cleanup. Enjoy your event!
            </li>
          </ul>
          <div className='mt-6'>
            <a
              href='/contact_us'
              className='text-pink-500 hover:text-pink-700 font-semibold focus:outline-none transition-transform duration-300'
            >
              Ready to Book? Contact Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImageRotator
