'use client'

import { useEffect, useState } from 'react'
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
  const [hasStoredConsent, setHasStoredConsent] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false
  })

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY)

    if (!consent) {
      setHasStoredConsent(false)

      const timer = setTimeout(() => setShowBanner(true), 500)
      return () => clearTimeout(timer)
    }

    setHasStoredConsent(true)

    const savedPrefs = localStorage.getItem(COOKIE_PREFERENCES_KEY)
    if (savedPrefs) {
      try {
        setPreferences(JSON.parse(savedPrefs))
      } catch {
        // Ignore invalid stored preferences and keep defaults.
      }
    }
  }, [])

  const enableAnalytics = () => {
    const gtagWindow = window as Window & {
      gtag?: (...args: unknown[]) => void
    }

    if (gtagWindow.gtag) {
      gtagWindow.gtag('consent', 'update', {
        analytics_storage: 'granted'
      })
    }
  }

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'true')
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(prefs))

    setPreferences(prefs)
    setHasStoredConsent(true)
    setShowBanner(false)
    setShowSettings(false)

    window.dispatchEvent(
      new CustomEvent('cookieConsentUpdate', { detail: prefs })
    )

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

  const openSettingsPanel = () => {
    setShowBanner(true)
    setShowSettings(true)
  }

  const closeSettingsPanel = () => {
    setShowSettings(false)

    if (hasStoredConsent) {
      setShowBanner(false)
    }
  }

  if (!showBanner && !hasStoredConsent) {
    return null
  }

  return (
    <>
      {showBanner && (
        <div
          className={`fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            showSettings ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
          onClick={closeSettingsPanel}
          aria-hidden='true'
        />
      )}

      {showBanner && (
        <div className='fixed bottom-0 left-0 right-0 z-[9999] p-3 md:p-4'>
          <div className='mx-auto max-w-5xl'>
            <div
              className='overflow-hidden rounded-xl border border-white/10 bg-gray-900/95 shadow-2xl shadow-black/50 backdrop-blur-md'
              role='dialog'
              aria-modal={showSettings || undefined}
              aria-label={showSettings ? undefined : 'Cookie preferences'}
              aria-labelledby={showSettings ? 'cookie-settings-title' : undefined}
            >
              {!showSettings ? (
                <div className='px-4 py-3 md:px-5 md:py-4'>
                  <div className='flex flex-col gap-3 sm:flex-row sm:items-center md:gap-4'>
                    <div className='flex min-w-0 flex-1 items-center gap-3'>
                      <div className='hidden h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500/20 to-rose-500/20 sm:flex'>
                        <svg
                          className='h-4 w-4 text-pink-400'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                        >
                          <path d='M10 2a8 8 0 100 16 8 8 0 000-16zM5.94 5.5c.944-.945 2.56-.276 2.56 1.06V8h5V6.56c0-1.336 1.616-2.005 2.56-1.06l1.44 1.44V8.5a1.5 1.5 0 01-1.5 1.5h-10A1.5 1.5 0 014.5 8.5V6.94l1.44-1.44zM4 12.5A1.5 1.5 0 015.5 11h9a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 014 15.5v-3z' />
                        </svg>
                      </div>
                      <p className='text-xs text-gray-300 md:text-sm'>
                        We use cookies to improve your experience.{' '}
                        <Link
                          href='/privacy-policy'
                          className='text-pink-400 hover:text-pink-300'
                        >
                          Read our privacy and cookie details
                        </Link>
                      </p>
                    </div>

                    <div className='flex flex-shrink-0 items-center gap-2'>
                      <button
                        type='button'
                        onClick={openSettingsPanel}
                        className='px-3 py-1.5 text-xs font-medium text-gray-400 transition-colors hover:text-white'
                      >
                        Settings
                      </button>
                      <button
                        type='button'
                        onClick={acceptNecessary}
                        className='rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-300 transition-all hover:bg-white/10 hover:text-white'
                      >
                        Decline
                      </button>
                      <button
                        type='button'
                        onClick={acceptAll}
                        className='rounded-lg bg-gradient-to-r from-pink-500 to-rose-500 px-4 py-1.5 text-xs font-semibold text-white shadow-lg shadow-pink-500/20 transition-all hover:shadow-pink-500/30'
                      >
                        Accept All
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className='max-h-[80vh] overflow-y-auto p-4 md:p-5'>
                  <div className='mb-4 flex items-center justify-between'>
                    <h3
                      id='cookie-settings-title'
                      className='text-lg font-semibold text-white'
                    >
                      Cookie Settings
                    </h3>
                    <button
                      type='button'
                      onClick={closeSettingsPanel}
                      className='p-1 text-gray-400 transition-colors hover:text-white'
                      aria-label='Close cookie settings'
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

                  <div className='mb-4 space-y-3'>
                    <div className='flex items-center justify-between rounded-lg border border-white/5 bg-gray-800/50 p-3'>
                      <div className='flex items-center gap-2'>
                        <span className='text-sm font-medium text-white'>
                          Necessary
                        </span>
                        <span className='rounded bg-green-500/20 px-1.5 py-0.5 text-[10px] font-medium text-green-400'>
                          Required
                        </span>
                      </div>
                      <div className='relative h-5 w-10 cursor-not-allowed rounded-full bg-green-500 opacity-70'>
                        <div className='absolute right-0.5 top-0.5 h-4 w-4 rounded-full bg-white' />
                      </div>
                    </div>

                    <div className='flex items-center justify-between rounded-lg border border-white/5 bg-gray-800/50 p-3'>
                      <div>
                        <span className='text-sm font-medium text-white'>
                          Analytics
                        </span>
                        <p className='mt-0.5 text-xs text-gray-500'>
                          Help us improve our site
                        </p>
                      </div>
                      <button
                        type='button'
                        onClick={() =>
                          setPreferences(current => ({
                            ...current,
                            analytics: !current.analytics
                          }))
                        }
                        className={`relative h-5 w-10 rounded-full transition-colors ${
                          preferences.analytics ? 'bg-pink-500' : 'bg-gray-600'
                        }`}
                        aria-pressed={preferences.analytics}
                        aria-label='Toggle analytics cookies'
                      >
                        <div
                          className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition-all ${
                            preferences.analytics ? 'right-0.5' : 'left-0.5'
                          }`}
                        />
                      </button>
                    </div>

                    <div className='flex items-center justify-between rounded-lg border border-white/5 bg-gray-800/50 p-3'>
                      <div>
                        <span className='text-sm font-medium text-white'>
                          Marketing
                        </span>
                        <p className='mt-0.5 text-xs text-gray-500'>
                          Personalised ads (not in use)
                        </p>
                      </div>
                      <button
                        type='button'
                        onClick={() =>
                          setPreferences(current => ({
                            ...current,
                            marketing: !current.marketing
                          }))
                        }
                        className={`relative h-5 w-10 rounded-full transition-colors ${
                          preferences.marketing ? 'bg-pink-500' : 'bg-gray-600'
                        }`}
                        aria-pressed={preferences.marketing}
                        aria-label='Toggle marketing cookies'
                      >
                        <div
                          className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition-all ${
                            preferences.marketing ? 'right-0.5' : 'left-0.5'
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  <div className='flex gap-2'>
                    <button
                      type='button'
                      onClick={acceptNecessary}
                      className='flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-gray-300 transition-all hover:bg-white/10 hover:text-white'
                    >
                      Decline Optional
                    </button>
                    <button
                      type='button'
                      onClick={savePreferences}
                      className='flex-1 rounded-lg bg-gradient-to-r from-pink-500 to-rose-500 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-pink-500/20 transition-all hover:shadow-pink-500/30'
                    >
                      Save
                    </button>
                  </div>

                  <p className='mt-3 text-center text-[10px] text-gray-500'>
                    <Link
                      href='/privacy-policy'
                      className='text-pink-400 hover:text-pink-300'
                    >
                      Privacy
                    </Link>
                    {' '}&bull;{' '}
                    <Link
                      href='/privacy-policy'
                      className='text-pink-400 hover:text-pink-300'
                    >
                      Cookie details
                    </Link>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {hasStoredConsent && !showBanner && (
        <div className='fixed bottom-3 right-3 z-[9997] md:bottom-4 md:right-4'>
          <button
            type='button'
            onClick={openSettingsPanel}
            className='inline-flex items-center gap-2 rounded-full border border-white/10 bg-gray-900/90 px-3 py-2 text-xs font-medium text-gray-200 shadow-lg shadow-black/30 backdrop-blur-md transition-colors hover:bg-gray-800'
            aria-label='Open cookie settings'
          >
            <span className='h-2 w-2 rounded-full bg-pink-400' />
            Cookie Settings
          </button>
        </div>
      )}
    </>
  )
}
