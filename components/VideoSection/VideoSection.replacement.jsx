import Image from 'next/image'
import Link from 'next/link'
import { COMPANY_STATS, SITE_IMAGES } from '@/constants/siteConfig'

const VIDEO_POSTER = '/corporate.webp'

const heroStats = [
  {
    value: COMPANY_STATS.yearsExperience,
    label: 'Years of Mixology Experience'
  },
  {
    value: COMPANY_STATS.eventsServed,
    label: 'Weddings, Parties and Corporate Events'
  },
  {
    value: COMPANY_STATS.cocktailsMade,
    label: 'Cocktails Served Across the UK'
  },
  {
    value: COMPANY_STATS.googleRating,
    label: 'Google Review Rating'
  }
]

const trustPoints = [
  'Private Bartender and Mixologist Hire',
  'Tailored Cocktail Menus',
  'Nationwide Event Coverage'
]

const VideoSection = () => {
  return (
    <section className='relative flex min-h-screen items-center overflow-hidden bg-gray-950'>
      <div className='absolute inset-0 bg-black'>
        <Image
          src={VIDEO_POSTER}
          alt=''
          fill
          priority
          quality={68}
          sizes='100vw'
          aria-hidden='true'
          className='absolute inset-0 h-full w-full object-cover brightness-[0.38] saturate-125'
        />

        <div className='absolute inset-0 hidden lg:block motion-reduce:hidden'>
          <video
            poster={VIDEO_POSTER}
            autoPlay
            muted
            loop
            playsInline
            preload='none'
            aria-hidden='true'
            tabIndex={-1}
            className='absolute inset-0 h-full w-full object-cover brightness-[0.38] saturate-125'
          >
            <source
              src={SITE_IMAGES.heroVideo}
              type='video/mp4'
              media='(min-width: 768px) and (prefers-reduced-motion: no-preference)'
            />
          </video>
        </div>

        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.2),transparent_30%)]' />
        <div className='absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90' />
      </div>

      <div className='pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/40 to-transparent' />
      <div className='pointer-events-none absolute left-[-6rem] top-24 h-72 w-72 rounded-full bg-rose-500/10 blur-3xl' />
      <div className='pointer-events-none absolute bottom-16 right-[-5rem] h-80 w-80 rounded-full bg-amber-400/10 blur-3xl' />

      <div className='relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 pb-28 pt-28 sm:px-8 lg:px-12'>
        <div className='grid items-center gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]'>
          <div className='max-w-3xl'>
            <div className='mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md'>
              <span className='relative flex h-2 w-2'>
                <span className='relative inline-flex h-2 w-2 rounded-full bg-pink-500' />
              </span>
              <span className='text-sm font-medium text-white/90'>
                Private Bartender Hire and Mobile Bar Service in Northampton and Beyond
              </span>
            </div>

            <h1 className='text-5xl font-bold leading-[1.02] text-white sm:text-6xl lg:text-7xl'>
              Private Bartender Hire
              <span className='mt-2 block bg-gradient-to-r from-pink-300 via-rose-300 to-amber-200 bg-clip-text text-transparent'>
                and Luxury Mobile Bar Service
              </span>
            </h1>

            <p className='mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl'>
              Hire experienced private bartenders and mixologists for weddings,
              house parties, brand activations and corporate events, with
              bespoke cocktail menus and a polished full-service mobile bar
              setup across Northamptonshire and the UK.
            </p>

            <div className='mt-10 flex flex-col gap-4 sm:flex-row'>
              <Link
                href='/contact_us'
                className='group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-pink-500/30 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-pink-500/40'
              >
                Check Availability
                <svg
                  className='h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17 8l4 4m0 0l-4 4m4-4H3'
                  />
                </svg>
              </Link>

              <Link
                href='/services'
                className='inline-flex items-center justify-center gap-3 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/20'
              >
                Explore Services
              </Link>
            </div>
          </div>

          <div className='hidden lg:grid lg:grid-cols-2 lg:gap-4'>
            {heroStats.map(stat => (
              <div
                key={stat.label}
                className='rounded-[1.75rem] border border-white/10 bg-white/10 p-6 backdrop-blur-md transition-colors duration-300 hover:bg-white/20'
              >
                <div className='text-3xl font-bold text-white'>{stat.value}</div>
                <p className='mt-2 text-sm leading-relaxed text-white/70'>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className='border-t border-white/10 pt-6'>
          <div className='flex flex-col gap-4 text-sm text-white/70 lg:flex-row lg:items-center lg:justify-between'>
            <div className='flex flex-wrap items-center justify-center gap-3 lg:justify-start'>
              {trustPoints.map(point => (
                <span
                  key={point}
                  className='inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-center'
                >
                  <svg
                    className='h-4 w-4 flex-shrink-0 text-emerald-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                      clipRule='evenodd'
                  />
                </svg>
                  <span className='min-w-0 break-words'>{point}</span>
                </span>
              ))}
            </div>

            <div className='flex w-full max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-center sm:w-auto sm:flex-nowrap sm:justify-start sm:py-1.5'>
              {[0, 1, 2, 3, 4].map(index => (
                <svg
                  key={index}
                  className='h-4 w-4 text-amber-400'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>
              ))}
              <span className='min-w-0 break-words'>
                {COMPANY_STATS.googleRating} Google Review Rating
              </span>
            </div>
          </div>
        </div>
      </div>

      <a
        href='#next-section'
        className='group absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-white/70 transition-colors hover:text-white'
        aria-label='Discover More and scroll to the next section'
      >
        <span className='flex flex-col items-center gap-2'>
          <span className='text-xs font-medium uppercase tracking-[0.3em] text-white/70'>
            Discover More
          </span>
          <span className='flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm motion-safe:animate-bounce'>
            <svg
              className='h-5 w-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 14l-7 7m0 0l-7-7m7 7V3'
              />
            </svg>
          </span>
        </span>
      </a>
    </section>
  )
}

export default VideoSection
