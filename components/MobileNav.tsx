'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { createPortal } from 'react-dom'
import { NAV_LINKS } from '@/constants'
import { getBookingYear } from '@/constants/siteConfig'

const MOBILE_MENU_ID = 'mobile-menu'
const DESKTOP_BREAKPOINT = '(min-width: 1024px)'

export default function MobileNav () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [navOffset, setNavOffset] = useState(72)
  const menuRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const navbar = document.querySelector<HTMLElement>('[data-site-navbar="true"]')
    if (!navbar) return

    const updateOffset = () => {
      setNavOffset(Math.max(64, Math.ceil(navbar.getBoundingClientRect().height)))
    }

    updateOffset()

    const mediaQuery = window.matchMedia(DESKTOP_BREAKPOINT)
    const handleDesktopChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsMenuOpen(false)
      }
      updateOffset()
    }

    mediaQuery.addEventListener('change', handleDesktopChange)
    window.addEventListener('resize', updateOffset, { passive: true })

    let resizeObserver: ResizeObserver | null = null
    if ('ResizeObserver' in window) {
      resizeObserver = new ResizeObserver(updateOffset)
      resizeObserver.observe(navbar)
    }

    return () => {
      mediaQuery.removeEventListener('change', handleDesktopChange)
      window.removeEventListener('resize', updateOffset)
      resizeObserver?.disconnect()
    }
  }, [])

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

    const handleClickOutside = (event: PointerEvent) => {
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

    document.addEventListener('pointerdown', handleClickOutside)
    return () => document.removeEventListener('pointerdown', handleClickOutside)
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

  const mobileMenuSheet = (
    <>
      <div
        className={`fixed inset-x-0 bottom-0 z-[10001] bg-black/72 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        style={{ top: `${navOffset}px` }}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden='true'
      />

      <div
        ref={menuRef}
        id={MOBILE_MENU_ID}
        role='dialog'
        aria-modal='true'
        aria-label='Mobile navigation menu'
        className={`fixed inset-x-0 bottom-0 z-[10002] overflow-y-auto overscroll-contain border-t border-white/10 bg-[#070507] shadow-[0_-20px_40px_rgba(0,0,0,0.45)] transition-all duration-300 lg:hidden ${
          isMenuOpen
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-6 opacity-0'
        }`}
        style={{
          top: `${navOffset}px`,
          maxHeight: `calc(100dvh - ${navOffset}px)`
        }}
      >
        <nav className='mx-auto flex min-h-full w-full max-w-lg flex-col px-4 pb-[calc(env(safe-area-inset-bottom)+2rem)] pt-4'>
          <div className='mb-4 flex items-center justify-between border-b border-white/10 pb-4'>
            <div>
              <p className='text-xs font-semibold uppercase tracking-[0.32em] text-amber-200/70'>
                Mobile Cocktail Bar
              </p>
              <p className='mt-1 text-sm text-white/75'>
                Private bartender hire, quotes and event info
              </p>
            </div>
            <button
              type='button'
              onClick={() => setIsMenuOpen(false)}
              className='flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition-colors hover:bg-white/10 hover:text-white'
              aria-label='Close mobile navigation'
            >
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
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>

          <ul className='space-y-2'>
            {NAV_LINKS.map((link, index) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  className='group flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.04] px-4 py-3.5 text-white/85 transition-all hover:border-pink-500/30 hover:bg-white/[0.08] hover:text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-gray-950'
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className='h-2 w-2 rounded-full bg-pink-500/70 transition-colors group-hover:bg-pink-400' />
                  <span className='text-base font-medium'>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className='mt-6 rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-4'>
            <div className='mb-4 flex items-center gap-2 text-sm text-white/70'>
              <span className='relative flex h-2 w-2'>
                <span className='relative inline-flex h-2 w-2 rounded-full bg-green-500' />
              </span>
              <span>Now Booking for {getBookingYear()}</span>
            </div>

            <Link
              href='/contact_us'
              className='flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-pink-500/20'
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

            <div className='mt-4 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/60'>
              Tap any page above or use the quote button to jump straight into booking.
            </div>
          </div>
        </nav>
      </div>
    </>
  )

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
      {isMounted ? createPortal(mobileMenuSheet, document.body) : null}
    </>
  )
}
