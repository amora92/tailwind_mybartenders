import Link from 'next/link'
import { NAV_LINKS } from '@/constants'
import BrandLockup from './BrandLockup'
import MobileNav from './MobileNav'
import { getBookingYear } from '@/constants/siteConfig'

const linkClassName =
  'relative rounded-full px-5 py-3 text-sm font-medium text-white/80 transition-colors duration-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-gray-950'

export default function Navbar () {
  return (
    <nav
      className='fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-gray-950/78 py-3 shadow-lg shadow-black/10 backdrop-blur-lg supports-[backdrop-filter]:bg-gray-950/58'
      role='navigation'
      aria-label='Main navigation'
    >
      <div className='container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8'>
        <Link
          href='/'
          className='group flex items-center gap-3'
          aria-label='MyBartenders home'
        >
          <BrandLockup compact />
        </Link>

        <div className='hidden items-center gap-1 lg:flex'>
          {NAV_LINKS.map(link => (
            <Link
              href={link.href}
              key={link.key}
              className={`${linkClassName} group`}
            >
              {link.label}
              <span className='absolute bottom-1.5 left-5 right-5 h-0.5 origin-left scale-x-0 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 transition-transform duration-300 group-hover:scale-x-100' />
            </Link>
          ))}
        </div>

        <div className='hidden items-center gap-4 lg:flex'>
          <div className='hidden items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs xl:flex'>
            <span className='relative flex h-2 w-2'>
              <span className='relative inline-flex h-2 w-2 rounded-full bg-green-500' />
            </span>
            <span className='text-white/70'>Booking {getBookingYear()}</span>
          </div>

          <Link
            href='/contact_us'
            className='group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-2.5'
          >
            <span className='absolute inset-0 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 transition-all duration-300 group-hover:scale-105' />
            <span className='absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transition-all duration-700 group-hover:translate-x-full group-hover:opacity-20' />
            <span className='relative text-sm font-semibold text-white'>
              Get a Quote
            </span>
            <svg
              className='relative h-4 w-4 text-white transition-transform duration-300 group-hover:translate-x-0.5'
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
        </div>

        <MobileNav />
      </div>
    </nav>
  )
}
