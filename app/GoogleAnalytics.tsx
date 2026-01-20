'use client'

import { useState, useEffect } from 'react'
import Script from 'next/script'

const GA_TRACKING_ID = 'G-ZBM8HLM8DZ'
const COOKIE_PREFERENCES_KEY = 'cookie_preferences'

export default function GoogleAnalytics() {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false)

  useEffect(() => {
    // Check saved preferences on mount
    const savedPrefs = localStorage.getItem(COOKIE_PREFERENCES_KEY)
    if (savedPrefs) {
      const prefs = JSON.parse(savedPrefs)
      setAnalyticsEnabled(prefs.analytics === true)
    }

    // Listen for consent updates
    const handleConsentUpdate = (event: CustomEvent) => {
      setAnalyticsEnabled(event.detail.analytics === true)
    }

    window.addEventListener('cookieConsentUpdate', handleConsentUpdate as EventListener)
    return () => window.removeEventListener('cookieConsentUpdate', handleConsentUpdate as EventListener)
  }, [])

  // Only load GA scripts if analytics consent given
  if (!analyticsEnabled) return null

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
              'analytics_storage': 'granted',
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
