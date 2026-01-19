'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS } from '@/constants'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const menuId = 'mobile-menu'

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
    <nav className='fixed top-0 left-0 right-0 z-30 bg-white shadow-md' role='navigation' aria-label='Main navigation'>
      <div className='container mx-auto flex items-center justify-between py-2 px-4 md:px-6 lg:px-8'>
        <div className='flex items-center'>
          <Link
            href='/'
            className='flex items-center'
            aria-label='Return to homepage'
          >
            <Image
              src='/mybartenders.co.uk_logo_svg.svg'
              alt='logo mybartenders.co.uk'
              width={29}
              height={40}
              priority={true}
            />
            <span className='ml-2 text-gray-800 font-semibold'>
              mybartenders
            </span>
          </Link>
        </div>

        <div className='hidden lg:flex justify-center gap-6 flex-grow'>
          {NAV_LINKS.map(link => (
            <Link
              href={link.href}
              key={link.key}
              className='text-gray-600 hover:text-gold-600 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 rounded px-2 py-1'
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div>
          <Link
            href='/contact_us'
            className='group inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[1px] sm:p-[2px] hover:text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 active:text-opacity-75'
          >
            <span className='block rounded-full bg-white px-4 py-2 text-xs sm:px-8 sm:py-3 sm:text-sm font-medium group-hover:bg-transparent'>
              Get A Quote
            </span>
          </Link>
        </div>

        <button
          ref={menuButtonRef}
          className='lg:hidden p-2 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 rounded'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls={menuId}
        >
          <Image
            src='/menu.svg'
            alt=''
            width={32}
            height={32}
            className='cursor-pointer'
            aria-hidden='true'
          />
        </button>
      </div>

      {isMenuOpen && (
        <div
          ref={menuRef}
          id={menuId}
          className='absolute top-full left-0 right-0 bg-white lg:hidden shadow-md px-4'
          role='menu'
          aria-label='Mobile navigation menu'
        >
          <ul className='flex flex-col items-center gap-4 py-4'>
            {NAV_LINKS.map(link => (
              <li key={link.key} role='none'>
                <Link
                  href={link.href}
                  className='text-gray-600 hover:text-gold-600 focus:outline-none focus:ring-2 focus:ring-gold-500 rounded px-4 py-2 block'
                  onClick={() => setIsMenuOpen(false)}
                  role='menuitem'
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
