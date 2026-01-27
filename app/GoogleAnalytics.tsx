'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'

const GA_TRACKING_ID = 'G-ZBM8HLM8DZ'
const COOKIE_PREFERENCES_KEY = 'cookie_preferences'
// Delay GA loading to ensure LCP is complete first (3 seconds)
const GA_LOAD_DELAY = 3000

export default function GoogleAnalytics() {
  const [shouldLoadGA, setShouldLoadGA] = useState(false)

  useEffect(() => {
    // Defer GA loading until after LCP is likely complete
    // Use requestIdleCallback if available, otherwise setTimeout
    const loadGA = () => setShouldLoadGA(true)

    // Wait for LCP to complete, then load during idle time
    const timeoutId = setTimeout(() => {
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(loadGA, { timeout: 2000 })
      } else {
        loadGA()
      }
    }, GA_LOAD_DELAY)

    return () => clearTimeout(timeoutId)
  }, [])

  useEffect(() => {
    if (!shouldLoadGA) return

    // Check saved preferences on mount and update consent
    const savedPrefs = localStorage.getItem(COOKIE_PREFERENCES_KEY)
    if (savedPrefs) {
      const prefs = JSON.parse(savedPrefs)
      if (prefs.analytics === true && typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('consent', 'update', {
          'analytics_storage': 'granted'
        })
      }
    }

    // Listen for consent updates
    const handleConsentUpdate = (event: CustomEvent) => {
      if (event.detail.analytics === true && typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('consent', 'update', {
          'analytics_storage': 'granted'
        })
      }
    }

    window.addEventListener('cookieConsentUpdate', handleConsentUpdate as EventListener)
    return () => window.removeEventListener('cookieConsentUpdate', handleConsentUpdate as EventListener)
  }, [shouldLoadGA])

  // Don't render scripts until after LCP delay
  if (!shouldLoadGA) return null

  return (
    <>
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id='gtag-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied'
            });
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
              anonymize_ip: true
            });
          `
        }}
      />
    </>
  )
}
