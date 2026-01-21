import React from 'react'

const testimonials = [
  {
    rating: 5,
    title: 'Exceptional Service',
    quote: 'The attention to detail was extraordinary. Each cocktail was a masterpiece - from the hand-carved ice to the carefully selected garnishes. Our corporate event was elevated beyond expectations.',
    author: 'Jeff D.',
    location: 'London'
  },
  {
    rating: 5,
    title: 'Beyond Expectations',
    quote: 'The bespoke menu they created for my wife\'s 40th matched our theme perfectly. The molecular mixology demonstrations were the highlight - smoking cocktails had everyone amazed.',
    author: 'Richard L.',
    location: 'Northamptonshire'
  },
  {
    rating: 5,
    title: 'Expert Training',
    quote: 'Their mixology masterclass was transformative. I learned professional techniques and insider tips. Now I\'m confident creating signature cocktails for my own events.',
    author: 'Karen G.',
    location: 'London'
  }
]

const GridReview = () => {
  return (
    <section className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <span className='inline-block px-4 py-1.5 bg-pink-100 text-pink-600 text-sm font-medium rounded-full mb-4'>
            Testimonials
          </span>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            What Our Clients Say
          </h2>
          <p className='text-lg text-gray-600'>
            Join hundreds of satisfied clients who have experienced our award-winning service.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8'>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className='bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300'
            >
              {/* Stars */}
              <div className='flex gap-1 mb-4'>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className='w-5 h-5 text-amber-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                  </svg>
                ))}
              </div>

              {/* Title */}
              <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                {testimonial.title}
              </h3>

              {/* Quote */}
              <p className='text-gray-600 leading-relaxed mb-6'>
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center'>
                  <span className='text-pink-600 font-semibold text-sm'>
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className='font-medium text-gray-900'>{testimonial.author}</p>
                  <p className='text-sm text-gray-500'>{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GridReview
