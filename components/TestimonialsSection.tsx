const testimonials = [
  {
    id: 1,
    rating: 5,
    quote:
      'The attention to detail was extraordinary. Each cocktail was a masterpiece, and our corporate event felt elevated from start to finish.',
    author: 'Jeff Davidson',
    role: 'Marketing Director',
    company: 'London Tech Summit'
  },
  {
    id: 2,
    rating: 5,
    quote:
      "The bespoke menu they created for my wife's 40th matched our theme perfectly. The service felt premium without feeling stiff.",
    author: 'Richard Lawrence',
    role: 'Private Client',
    company: 'Northamptonshire'
  },
  {
    id: 3,
    rating: 5,
    quote:
      'Their mixology masterclass was transformative. The team brought energy, expertise, and real polish to the whole evening.',
    author: 'Karen Griffiths',
    role: 'Event Planner',
    company: 'Celebrations London'
  },
  {
    id: 4,
    rating: 5,
    quote:
      'From the initial consultation to the last drink served, everything was flawless. Our wedding guests are still talking about it.',
    author: 'Sarah & James',
    role: 'Wedding Clients',
    company: 'Milton Keynes'
  }
]

const TestimonialsSection = () => {
  return (
    <section className='relative overflow-hidden bg-gray-50 py-16 sm:py-24 lg:py-32'>
      <div className='absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-pink-50 to-transparent' />
      <div className='absolute bottom-0 left-0 h-64 w-64 rounded-full bg-amber-100/30 blur-3xl sm:h-96 sm:w-96' />

      <div className='relative container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='mb-10 max-w-3xl sm:mb-16 lg:mb-20'>
          <span className='mb-4 inline-block rounded-full bg-pink-100 px-4 py-1.5 text-sm font-medium text-pink-600 sm:mb-6'>
            Client Stories
          </span>
          <h2 className='mb-4 text-3xl font-bold text-gray-900 sm:mb-6 sm:text-4xl md:text-5xl'>
            Trusted by Hundreds of
            <span className='block bg-gradient-to-r from-pink-500 to-amber-500 bg-clip-text text-transparent'>
              Happy Clients
            </span>
          </h2>
          <p className='text-lg text-gray-700 sm:text-xl'>
            Real feedback from weddings, corporate events, private parties, and
            cocktail experiences we&apos;ve helped shape.
          </p>
        </div>

        <div className='mb-10 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:gap-10'>
          <div className='grid gap-6 md:grid-cols-2'>
            {testimonials.map(testimonial => (
              <article
                key={testimonial.id}
                className='rounded-3xl border border-gray-100 bg-white p-6 shadow-sm'
              >
                <div className='mb-4 flex gap-1'>
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <svg key={index} className='w-5 h-5 text-amber-400' fill='currentColor' viewBox='0 0 20 20'>
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                  ))}
                </div>
                <blockquote className='mb-6 text-base leading-relaxed text-gray-800 sm:text-lg'>
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <div className='flex items-center gap-3'>
                  <div className='flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-rose-500 text-lg font-bold text-white'>
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className='min-w-0'>
                    <p className='truncate font-semibold text-gray-900'>
                      {testimonial.author}
                    </p>
                    <p className='truncate text-sm text-gray-600'>
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside className='rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-white sm:p-10'>
            <div className='mb-8 text-center'>
              <div className='mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2'>
                <svg className='w-5 h-5 text-amber-400' fill='currentColor' viewBox='0 0 20 20'>
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>
                <span className='text-sm font-medium text-white/80'>Client Reviews</span>
              </div>
              <div className='mb-2 text-6xl font-bold'>5.0</div>
              <div className='mb-4 flex justify-center gap-1'>
                {[...Array(5)].map((_, index) => (
                  <svg key={index} className='w-6 h-6 text-amber-400' fill='currentColor' viewBox='0 0 20 20'>
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                  </svg>
                ))}
              </div>
              <p className='text-white/60'>Based on 100+ reviews</p>
            </div>

            <div className='space-y-4'>
              <div className='rounded-2xl border border-white/10 bg-white/5 p-4'>
                <p className='mb-1 text-sm font-semibold text-white'>Private parties</p>
                <p className='text-sm text-white/60'>Stylish service that feels organised and memorable.</p>
              </div>
              <div className='rounded-2xl border border-white/10 bg-white/5 p-4'>
                <p className='mb-1 text-sm font-semibold text-white'>Weddings</p>
                <p className='text-sm text-white/60'>Signature drinks and polished hospitality for the whole day.</p>
              </div>
              <div className='rounded-2xl border border-white/10 bg-white/5 p-4'>
                <p className='mb-1 text-sm font-semibold text-white'>Corporate events</p>
                <p className='text-sm text-white/60'>Guest-facing drinks service that reflects your brand well.</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
