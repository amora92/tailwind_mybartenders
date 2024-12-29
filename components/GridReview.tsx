import React from 'react'

const GridReview = () => {
  return (
    <div>
      <section
        className='bg-gradient-to-b from-white via-pink-50/30 to-white'
        aria-label='Customer Testimonials'
      >
        <div className='mx-auto max-w-screen-xl px-4 py-24 sm:px-6 lg:px-8 lg:py-24'>
          <div className='md:flex md:items-end md:justify-between'>
            <div className='max-w-xl'>
              <h2 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
                What Our <span className='text-pink-500'>Cocktail</span>{' '}
                Enthusiasts Say About Our{' '}
                <span className='text-pink-500'>Services</span> 🍸
              </h2>

              <p className='mt-6 max-w-lg leading-relaxed text-gray-700'>
                Join hundreds of satisfied clients who have experienced our
                award-winning mixology services in{' '}
                <span className='text-pink-500'>Northampton</span> and beyond.
                ✨
              </p>
            </div>
          </div>

          <div className='mt-12 grid grid-cols-1 gap-6 md:grid-cols-3'>
            <blockquote className='flex h-full flex-col justify-between bg-white p-6 shadow-lg rounded-xl transition-all duration-300 hover:scale-105 hover:bg-pink-50/30 border border-pink-100/50 sm:p-8'>
              <div>
                <div className='flex gap-0.5 text-pink-400'>
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i} className='text-2xl'>
                      ★
                    </span>
                  ))}
                </div>

                <div className='mt-4'>
                  <p className='text-2xl font-bold text-pink-500 sm:text-3xl'>
                    Pure Magic in Every Glass 🪄
                  </p>

                  <p className='mt-4 leading-relaxed text-gray-700'>
                    "The attention to detail was extraordinary! Each cocktail
                    was a masterpiece - from the hand-carved ice to the
                    carefully selected garnishes. The mixologist's expertise and
                    passion shone through as they explained every drink's story.
                    Our corporate event in Northampton was elevated beyond our
                    expectations!"
                  </p>
                </div>
              </div>

              <footer className='mt-6 text-sm font-medium text-gray-700'>
                &mdash; Jeff D. from{' '}
                <span className='text-pink-500'>London</span>
              </footer>
            </blockquote>

            <blockquote className='flex h-full flex-col justify-between bg-white p-6 shadow-lg rounded-xl transition-all duration-300 hover:scale-105 hover:bg-pink-50/30 border border-pink-100/50 sm:p-8'>
              <div>
                <div className='flex gap-0.5 text-pink-400'>
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i} className='text-2xl'>
                      ★
                    </span>
                  ))}
                </div>

                <div className='mt-4'>
                  <p className='text-2xl font-bold text-pink-500 sm:text-3xl'>
                    Beyond Expectations! 🎯
                  </p>

                  <p className='mt-4 leading-relaxed text-gray-700'>
                    "The bespoke menu they created for my wife's 40th birthday
                    matched our theme perfectly. Their molecular mixology
                    demonstrations were the highlight of the evening - the
                    smoking cocktails and creative presentations had everyone
                    amazed. Professional service from start to finish!"
                  </p>
                </div>
              </div>

              <footer className='mt-6 text-sm font-medium text-gray-700'>
                &mdash; Richard L. from{' '}
                <span className='text-pink-500'>Northamptonshire</span>
              </footer>
            </blockquote>

            <blockquote className='flex h-full flex-col justify-between bg-white p-6 shadow-lg rounded-xl transition-all duration-300 hover:scale-105 hover:bg-pink-50/30 border border-pink-100/50 sm:p-8'>
              <div>
                <div className='flex gap-0.5 text-pink-400'>
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i} className='text-2xl'>
                      ★
                    </span>
                  ))}
                </div>

                <div className='mt-4'>
                  <p className='text-2xl font-bold text-pink-500 sm:text-3xl'>
                    Expert Mixology Training! 🎓
                  </p>

                  <p className='mt-4 leading-relaxed text-gray-700'>
                    "Their mixology masterclass was transformative! I learned
                    professional techniques, fascinating flavor combinations,
                    and insider tips. The hands-on experience with premium
                    ingredients and equipment was invaluable. Now I'm confident
                    creating signature cocktails for my own events!"
                  </p>
                </div>
              </div>

              <footer className='mt-6 text-sm font-medium text-gray-700'>
                &mdash; Karen G. from{' '}
                <span className='text-pink-500'>London</span>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GridReview
