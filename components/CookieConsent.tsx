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

      {/* Main Banner */}
      <div className='fixed bottom-0 left-0 right-0 z-[9999] p-4'>
        <div className='max-w-4xl mx-auto'>
          <div className='bg-gray-900 border border-white/10 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden'>
            {!showSettings ? (
              // Simple Banner View
              <div className='p-6'>
                <div className='flex flex-col md:flex-row md:items-start gap-6'>
                  <div className='flex-1'>
                    <div className='flex items-center gap-3 mb-3'>
                      <div className='w-10 h-10 bg-pink-500/20 rounded-xl flex items-center justify-center'>
                        <svg className='w-5 h-5 text-pink-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' />
                        </svg>
                      </div>
                      <h3 className='text-lg font-semibold text-white'>Cookie Preferences</h3>
                    </div>
                    <p className='text-gray-400 text-sm leading-relaxed'>
                      We use cookies to enhance your browsing experience, analyse site traffic, and personalise content.
                      By clicking "Accept All", you consent to our use of cookies as described in our{' '}
                      <Link href='/privacy-policy' className='text-pink-400 hover:text-pink-300 underline'>
                        Privacy Policy
                      </Link>
                      . You can manage your preferences or withdraw consent at any time.
                    </p>
                  </div>

                  <div className='flex flex-col sm:flex-row gap-3 md:flex-col lg:flex-row'>
                    <button
                      onClick={() => setShowSettings(true)}
                      className='px-5 py-2.5 bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 rounded-xl text-sm font-medium transition-all'
                    >
                      Manage Settings
                    </button>
                    <button
                      onClick={acceptNecessary}
                      className='px-5 py-2.5 bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 rounded-xl text-sm font-medium transition-all'
                    >
                      Necessary Only
                    </button>
                    <button
                      onClick={acceptAll}
                      className='px-5 py-2.5 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl text-sm font-semibold shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-all'
                    >
                      Accept All
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              // Detailed Settings View
              <div className='p-6'>
                <div className='flex items-center justify-between mb-6'>
                  <h3 className='text-xl font-semibold text-white'>Cookie Settings</h3>
                  <button
                    onClick={() => setShowSettings(false)}
                    className='text-gray-400 hover:text-white transition-colors'
                  >
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                    </svg>
                  </button>
                </div>

                <p className='text-gray-400 text-sm mb-6'>
                  Under the UK GDPR and PECR regulations, we need your consent to use certain cookies.
                  Please select your preferences below. You can change these settings at any time.
                </p>

                <div className='space-y-4 mb-6'>
                  {/* Necessary Cookies */}
                  <div className='p-4 bg-gray-800/50 rounded-xl border border-white/5'>
                    <div className='flex items-center justify-between mb-2'>
                      <div className='flex items-center gap-3'>
                        <span className='text-white font-medium'>Strictly Necessary</span>
                        <span className='px-2 py-0.5 bg-green-500/20 text-green-400 text-xs font-medium rounded-full'>
                          Always Active
                        </span>
                      </div>
                      <div className='w-12 h-6 bg-green-500 rounded-full relative cursor-not-allowed'>
                        <div className='absolute right-1 top-1 w-4 h-4 bg-white rounded-full' />
                      </div>
                    </div>
                    <p className='text-gray-500 text-sm'>
                      Essential for the website to function properly. These cannot be disabled.
                      Includes session cookies, security tokens, and basic functionality.
                    </p>
                  </div>

                  {/* Analytics Cookies */}
                  <div className='p-4 bg-gray-800/50 rounded-xl border border-white/5'>
                    <div className='flex items-center justify-between mb-2'>
                      <span className='text-white font-medium'>Analytics & Performance</span>
                      <button
                        onClick={() => setPreferences(p => ({ ...p, analytics: !p.analytics }))}
                        className={`w-12 h-6 rounded-full relative transition-colors ${
                          preferences.analytics ? 'bg-pink-500' : 'bg-gray-600'
                        }`}
                      >
                        <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
                          preferences.analytics ? 'right-1' : 'left-1'
                        }`} />
                      </button>
                    </div>
                    <p className='text-gray-500 text-sm'>
                      Help us understand how visitors interact with our website by collecting and
                      reporting information anonymously. We use Google Analytics with IP anonymisation.
                    </p>
                  </div>

                  {/* Marketing Cookies */}
                  <div className='p-4 bg-gray-800/50 rounded-xl border border-white/5'>
                    <div className='flex items-center justify-between mb-2'>
                      <span className='text-white font-medium'>Marketing & Advertising</span>
                      <button
                        onClick={() => setPreferences(p => ({ ...p, marketing: !p.marketing }))}
                        className={`w-12 h-6 rounded-full relative transition-colors ${
                          preferences.marketing ? 'bg-pink-500' : 'bg-gray-600'
                        }`}
                      >
                        <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
                          preferences.marketing ? 'right-1' : 'left-1'
                        }`} />
                      </button>
                    </div>
                    <p className='text-gray-500 text-sm'>
                      Used to track visitors across websites to display relevant advertisements.
                      Currently not in use on this website.
                    </p>
                  </div>
                </div>

                <div className='flex flex-col sm:flex-row gap-3'>
                  <button
                    onClick={acceptNecessary}
                    className='flex-1 px-5 py-3 bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 rounded-xl text-sm font-medium transition-all'
                  >
                    Reject All Optional
                  </button>
                  <button
                    onClick={savePreferences}
                    className='flex-1 px-5 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl text-sm font-semibold shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-all'
                  >
                    Save Preferences
                  </button>
                </div>

                <p className='text-gray-500 text-xs mt-4 text-center'>
                  For more information, please read our{' '}
                  <Link href='/privacy-policy' className='text-pink-400 hover:text-pink-300 underline'>
                    Privacy Policy
                  </Link>
                  {' '}and{' '}
                  <Link href='/cookie-policy' className='text-pink-400 hover:text-pink-300 underline'>
                    Cookie Policy
                  </Link>
                  .
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
