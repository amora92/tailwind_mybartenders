'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { NAV_LINKS } from '@/constants'
import { getBookingYear } from '@/constants/siteConfig'

const MOBILE_MENU_ID = 'mobile-menu'

export default function MobileNav () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMenuOpen])

  useEffect(() => {
    if (!isMenuOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(target)
      ) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMenuOpen])

  useEffect(() => {
    if (!isMenuOpen || !menuRef.current) return

    const focusableElements = menuRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])'
    )
    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    const handleTabKey = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement?.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement?.focus()
      }
    }

    document.addEventListener('keydown', handleTabKey)
    firstElement?.focus()

    return () => document.removeEventListener('keydown', handleTabKey)
  }, [isMenuOpen])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <>
      <button
        ref={menuButtonRef}
        type='button'
        className='relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition-colors hover:bg-white/20 lg:hidden'
        onClick={() => setIsMenuOpen(current => !current)}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMenuOpen}
        aria-controls={MOBILE_MENU_ID}
      >
        <div className='flex h-4 w-5 flex-col justify-between'>
          <span
            className={`h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
              isMenuOpen ? 'translate-y-1.5 rotate-45' : ''
            }`}
          />
          <span
            className={`h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
              isMenuOpen ? '-translate-y-1.5 -rotate-45' : ''
            }`}
          />
        </div>
      </button>

      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        style={{ top: '60px' }}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden='true'
      />

      <div
        ref={menuRef}
        id={MOBILE_MENU_ID}
        className={`fixed left-0 right-0 top-[60px] max-h-[calc(100vh-60px)] overflow-y-auto border-t border-white/10 bg-gray-950/98 transition-all duration-300 lg:hidden ${
          isMenuOpen
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-4 opacity-0'
        }`}
        aria-label='Mobile navigation'
      >
        <nav className='container mx-auto px-4 py-6'>
          <ul className='space-y-1'>
            {NAV_LINKS.map((link, index) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  className='group flex items-center gap-3 rounded-xl px-4 py-3 text-white/80 transition-colors hover:bg-white/5 hover:text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-gray-950'
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className='h-1.5 w-1.5 rounded-full bg-pink-500/50 transition-colors group-hover:bg-pink-500' />
                  <span className='font-medium'>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className='mt-6 border-t border-white/10 pt-6'>
            <Link
              href='/contact_us'
              className='flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 px-6 py-4 font-semibold text-white'
              onClick={() => setIsMenuOpen(false)}
            >
              Get Your Free Quote
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
                  d='M17 8l4 4m0 0l-4 4m4-4H3'
                />
              </svg>
            </Link>

            <div className='mt-4 flex items-center justify-center gap-2 text-sm text-white/50'>
              <span className='relative flex h-2 w-2'>
                <span className='relative inline-flex h-2 w-2 rounded-full bg-green-500' />
              </span>
              <span>Now Booking for {getBookingYear()}</span>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
