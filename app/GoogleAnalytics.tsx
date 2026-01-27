'use client'

import { useEffect } from 'react'
import Script from 'next/script'

const GA_TRACKING_ID = 'G-ZBM8HLM8DZ'
const COOKIE_PREFERENCES_KEY = 'cookie_preferences'

export default function GoogleAnalytics() {
  useEffect(() => {
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
  }, [])

  // Always load GA scripts, but with consent denied by default
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
