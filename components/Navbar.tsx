'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS } from '@/constants'
import { getBookingYear } from '@/constants/siteConfig'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const menuId = 'mobile-menu'

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMenuOpen])

  // Trap focus within menu when open
  useEffect(() => {
    if (!isMenuOpen || !menuRef.current) return

    const focusableElements = menuRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])'
    )
    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault()
        lastElement?.focus()
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault()
        firstElement?.focus()
      }
    }

    document.addEventListener('keydown', handleTabKey)
    firstElement?.focus()

    return () => document.removeEventListener('keydown', handleTabKey)
  }, [isMenuOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-gray-950/95 backdrop-blur-lg shadow-lg shadow-black/10 py-2'
          : 'bg-transparent py-4'
      }`}
      role='navigation'
      aria-label='Main navigation'
    >
      <div className='container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8'>
        {/* Logo */}
        <Link
          href='/'
          className='flex items-center gap-3 group'
          aria-label='Return to homepage'
        >
          <div className='relative'>
            <Image
              src='/mybartenders.co.uk_logo_svg.svg'
              alt='MyBartenders Logo'
              width={32}
              height={44}
              priority={true}
              className='transition-all duration-300'
              style={{
                filter: 'brightness(0) saturate(100%) invert(73%) sepia(47%) saturate(537%) hue-rotate(359deg) brightness(94%) contrast(84%)'
              }}
            />
          </div>
          <span
            className='font-bold text-xl tracking-wide transition-colors duration-300 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300'
          >
            MyBartenders
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className='hidden lg:flex items-center gap-1'>
          {NAV_LINKS.map(link => (
            <Link
              href={link.href}
              key={link.key}
              className={`relative px-5 py-3 text-sm font-medium transition-colors duration-300 rounded-full group focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-gray-950 ${
                isScrolled
                  ? 'text-gray-300 hover:text-white'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
              <span className='absolute bottom-1.5 left-5 right-5 h-0.5 bg-gradient-to-r from-pink-500 to-rose-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full' />
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className='hidden lg:flex items-center gap-4'>
          {/* Booking Badge */}
          <div className='hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs'>
            <span className='relative flex h-2 w-2'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-2 w-2 bg-green-500'></span>
            </span>
            <span className='text-white/70'>
              Booking {getBookingYear()}
            </span>
          </div>

          {/* CTA Button */}
          <Link
            href='/contact_us'
            className='group relative inline-flex items-center gap-2 px-6 py-2.5 overflow-hidden rounded-full'
          >
            {/* Gradient background */}
            <span className='absolute inset-0 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 transition-all duration-300 group-hover:scale-105' />
            {/* Shine effect */}
            <span className='absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-700' />
            <span className='relative text-white text-sm font-semibold'>
              Get a Quote
            </span>
            <svg
              className='relative w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-0.5'
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

        {/* Mobile Menu Button */}
        <button
          ref={menuButtonRef}
          className='lg:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/10 text-white hover:bg-white/20 transition-colors'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls={menuId}
        >
          <div className='w-5 h-4 flex flex-col justify-between'>
            <span
              className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            />
            <span
              className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        id={menuId}
        className={`lg:hidden absolute top-full left-0 right-0 bg-gray-950/98 backdrop-blur-xl border-t border-white/10 transition-all duration-300 ${
          isMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
        aria-label='Mobile navigation'
      >
        <nav className='container mx-auto px-4 py-6'>
          <ul className='space-y-1'>
            {NAV_LINKS.map((link, index) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  className='flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-colors group focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-gray-950'
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className='w-1.5 h-1.5 rounded-full bg-pink-500/50 group-hover:bg-pink-500 transition-colors' />
                  <span className='font-medium'>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile CTA */}
          <div className='mt-6 pt-6 border-t border-white/10'>
            <Link
              href='/contact_us'
              className='flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white font-semibold rounded-full'
              onClick={() => setIsMenuOpen(false)}
            >
              Get Your Free Quote
              <svg
                className='w-5 h-5'
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

            {/* Mobile Booking Badge */}
            <div className='flex items-center justify-center gap-2 mt-4 text-sm text-white/50'>
              <span className='relative flex h-2 w-2'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
                <span className='relative inline-flex rounded-full h-2 w-2 bg-green-500'></span>
              </span>
              <span>Now Booking for {getBookingYear()}</span>
            </div>
          </div>
        </nav>
      </div>
    </nav>
  )
}

export default Navbar
