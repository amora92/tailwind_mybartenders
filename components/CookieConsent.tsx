'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

const COOKIE_CONSENT_KEY = 'cookie_consent'
const COOKIE_PREFERENCES_KEY = 'cookie_preferences'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always required
    analytics: false,
    marketing: false
  })

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!consent) {
      // Small delay to prevent flash
      const timer = setTimeout(() => setShowBanner(true), 500)
      return () => clearTimeout(timer)
    } else {
      // Load saved preferences
      const savedPrefs = localStorage.getItem(COOKIE_PREFERENCES_KEY)
      if (savedPrefs) {
        setPreferences(JSON.parse(savedPrefs))
      }
    }
  }, [])

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'true')
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(prefs))
    setPreferences(prefs)
    setShowBanner(false)
    setShowSettings(false)

    // Dispatch event for analytics components to listen to
    window.dispatchEvent(new CustomEvent('cookieConsentUpdate', { detail: prefs }))

    // If analytics accepted, enable GA
    if (prefs.analytics) {
      enableAnalytics()
    }
  }

  const acceptAll = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true
    })
  }

  const acceptNecessary = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false
    })
  }

  const savePreferences = () => {
    saveConsent(preferences)
  }

  const enableAnalytics = () => {
    // Enable Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'granted'
      })
    }
  }

  if (!showBanner) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998] transition-opacity duration-300 ${
          showSettings ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setShowSettings(false)}
      />

      {/* Main Banner - Compact Design */}
      <div className='fixed bottom-0 left-0 right-0 z-[9999] p-3 md:p-4'>
        <div className='max-w-5xl mx-auto'>
          <div className='bg-gray-900/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl shadow-black/50 overflow-hidden'>
            {!showSettings ? (
              // Simple Compact Banner View
              <div className='px-4 py-3 md:px-5 md:py-4'>
                <div className='flex flex-col sm:flex-row sm:items-center gap-3 md:gap-4'>
                  {/* Icon + Text */}
                  <div className='flex items-center gap-3 flex-1 min-w-0'>
                    <div className='hidden sm:flex w-9 h-9 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-lg items-center justify-center flex-shrink-0'>
                      <svg className='w-4 h-4 text-pink-400' fill='currentColor' viewBox='0 0 20 20'>
                        <path d='M10 2a8 8 0 100 16 8 8 0 000-16zM5.94 5.5c.944-.945 2.56-.276 2.56 1.06V8h5V6.56c0-1.336 1.616-2.005 2.56-1.06l1.44 1.44V8.5a1.5 1.5 0 01-1.5 1.5h-10A1.5 1.5 0 014.5 8.5V6.94l1.44-1.44zM4 12.5A1.5 1.5 0 015.5 11h9a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 014 15.5v-3z' />
                      </svg>
                    </div>
                    <p className='text-gray-300 text-xs md:text-sm'>
                      We use cookies to improve your experience.{' '}
                      <Link href='/privacy-policy' className='text-pink-400 hover:text-pink-300'>
                        Learn more
                      </Link>
                    </p>
                  </div>

                  {/* Buttons - Horizontal on mobile too */}
                  <div className='flex items-center gap-2 flex-shrink-0'>
                    <button
                      onClick={() => setShowSettings(true)}
                      className='px-3 py-1.5 text-gray-400 hover:text-white text-xs font-medium transition-colors'
                    >
                      Settings
                    </button>
                    <button
                      onClick={acceptNecessary}
                      className='px-3 py-1.5 bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg text-xs font-medium transition-all'
                    >
                      Decline
                    </button>
                    <button
                      onClick={acceptAll}
                      className='px-4 py-1.5 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg text-xs font-semibold shadow-lg shadow-pink-500/20 hover:shadow-pink-500/30 transition-all'
                    >
                      Accept All
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              // Detailed Settings View - Compact
              <div className='p-4 md:p-5 max-h-[80vh] overflow-y-auto'>
                <div className='flex items-center justify-between mb-4'>
                  <h3 className='text-lg font-semibold text-white'>Cookie Settings</h3>
                  <button
                    onClick={() => setShowSettings(false)}
                    className='p-1 text-gray-400 hover:text-white transition-colors'
                  >
                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                    </svg>
                  </button>
                </div>

                <div className='space-y-3 mb-4'>
                  {/* Necessary Cookies */}
                  <div className='flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-white/5'>
                    <div className='flex items-center gap-2'>
                      <span className='text-white text-sm font-medium'>Necessary</span>
                      <span className='px-1.5 py-0.5 bg-green-500/20 text-green-400 text-[10px] font-medium rounded'>
                        Required
                      </span>
                    </div>
                    <div className='w-10 h-5 bg-green-500 rounded-full relative cursor-not-allowed opacity-70'>
                      <div className='absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full' />
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div className='flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-white/5'>
                    <div>
                      <span className='text-white text-sm font-medium'>Analytics</span>
                      <p className='text-gray-500 text-xs mt-0.5'>Help us improve our site</p>
                    </div>
                    <button
                      onClick={() => setPreferences(p => ({ ...p, analytics: !p.analytics }))}
                      className={`w-10 h-5 rounded-full relative transition-colors ${
                        preferences.analytics ? 'bg-pink-500' : 'bg-gray-600'
                      }`}
                    >
                      <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all ${
                        preferences.analytics ? 'right-0.5' : 'left-0.5'
                      }`} />
                    </button>
                  </div>

                  {/* Marketing Cookies */}
                  <div className='flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-white/5'>
                    <div>
                      <span className='text-white text-sm font-medium'>Marketing</span>
                      <p className='text-gray-500 text-xs mt-0.5'>Personalised ads (not in use)</p>
                    </div>
                    <button
                      onClick={() => setPreferences(p => ({ ...p, marketing: !p.marketing }))}
                      className={`w-10 h-5 rounded-full relative transition-colors ${
                        preferences.marketing ? 'bg-pink-500' : 'bg-gray-600'
                      }`}
                    >
                      <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all ${
                        preferences.marketing ? 'right-0.5' : 'left-0.5'
                      }`} />
                    </button>
                  </div>
                </div>

                <div className='flex gap-2'>
                  <button
                    onClick={acceptNecessary}
                    className='flex-1 px-4 py-2 bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg text-xs font-medium transition-all'
                  >
                    Decline Optional
                  </button>
                  <button
                    onClick={savePreferences}
                    className='flex-1 px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg text-xs font-semibold shadow-lg shadow-pink-500/20 hover:shadow-pink-500/30 transition-all'
                  >
                    Save
                  </button>
                </div>

                <p className='text-gray-500 text-[10px] mt-3 text-center'>
                  <Link href='/privacy-policy' className='text-pink-400 hover:text-pink-300'>Privacy</Link>
                  {' '}&bull;{' '}
                  <Link href='/cookie-policy' className='text-pink-400 hover:text-pink-300'>Cookies</Link>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
