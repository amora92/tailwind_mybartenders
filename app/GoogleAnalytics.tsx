'use client'

import { useState, useEffect } from 'react'
import Script from 'next/script'

const GA_TRACKING_ID = 'G-ZBM8HLM8DZ'

function ConsentBanner ({
  onAccept,
  onDecline
}: {
  onAccept: () => void
  onDecline: () => void
}) {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        background: '#222',
        color: 'white',
        padding: '1rem',
        textAlign: 'center',
        zIndex: 1000
      }}
    >
      <p style={{ margin: '0 0 0.5rem 0' }}>
        We use cookies to improve your experience. By clicking "Accept", you
        agree to our use of Google Analytics.
      </p>
      <button
        onClick={onAccept}
        style={{
          marginRight: '1rem',
          padding: '0.5rem 1rem',
          cursor: 'pointer'
        }}
      >
        Accept
      </button>
      <button
        onClick={onDecline}
        style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}
      >
        Decline
      </button>
    </div>
  )
}

export default function GoogleAnalytics () {
  const [consent, setConsent] = useState<'accepted' | 'declined' | null>(null)

  useEffect(() => {
    const savedConsent = localStorage.getItem('ga_consent')
    if (savedConsent === 'true') setConsent('accepted')
    else if (savedConsent === 'false') setConsent('declined')
    else setConsent(null)
  }, [])

  const handleAccept = () => {
    localStorage.setItem('ga_consent', 'true')
    setConsent('accepted')
  }

  const handleDecline = () => {
    localStorage.setItem('ga_consent', 'false')
    setConsent('declined')
  }

  if (consent !== 'accepted') {
    // Not accepted, show banner or nothing
    return consent === null ? (
      <ConsentBanner onAccept={handleAccept} onDecline={handleDecline} />
    ) : null
  }

  // Consent accepted, load GA scripts
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
