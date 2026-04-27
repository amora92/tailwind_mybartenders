'use client'

import { useEffect, useRef, useState } from 'react'
import Script from 'next/script'

const GA_TRACKING_ID = 'G-ZBM8HLM8DZ'
const COOKIE_PREFERENCES_KEY = 'cookie_preferences'

export default function GoogleAnalytics () {
  const [shouldLoadGA, setShouldLoadGA] = useState(false)
  const idleCallbackId = useRef<number | null>(null)

  useEffect(() => {
    const queueAnalyticsLoad = () => {
      if (shouldLoadGA) return

      if ('requestIdleCallback' in window) {
        idleCallbackId.current = (window as Window & {
          requestIdleCallback: (
            callback: IdleRequestCallback,
            options?: IdleRequestOptions
          ) => number
        }).requestIdleCallback(() => {
          setShouldLoadGA(true)
        }, { timeout: 1500 })
        return
      }

      setShouldLoadGA(true)
    }

    const updateConsent = (analyticsEnabled: boolean) => {
      if (analyticsEnabled) {
        queueAnalyticsLoad()
      }

      if ((window as any).gtag) {
        (window as any).gtag('consent', 'update', {
          analytics_storage: analyticsEnabled ? 'granted' : 'denied'
        })
      }
    }

    const syncStoredPreferences = () => {
      const savedPrefs = localStorage.getItem(COOKIE_PREFERENCES_KEY)
      if (!savedPrefs) return

      try {
        const prefs = JSON.parse(savedPrefs)
        updateConsent(prefs.analytics === true)
      } catch {
        // Keep analytics disabled if stored data cannot be parsed.
      }
    }

    const handleConsentUpdate = (
      event: CustomEvent<{ analytics?: boolean }>
    ) => {
      updateConsent(event.detail?.analytics === true)
    }

    syncStoredPreferences()
    window.addEventListener(
      'cookieConsentUpdate',
      handleConsentUpdate as EventListener
    )

    return () => {
      if (idleCallbackId.current !== null && 'cancelIdleCallback' in window) {
        (window as Window & {
          cancelIdleCallback: (handle: number) => void
        }).cancelIdleCallback(idleCallbackId.current)
      }

      window.removeEventListener(
        'cookieConsentUpdate',
        handleConsentUpdate as EventListener
      )
    }
  }, [shouldLoadGA])

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
