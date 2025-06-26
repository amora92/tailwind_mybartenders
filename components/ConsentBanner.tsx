import { useEffect, useState } from 'react'

export default function ConsentBanner () {
  const [consent, setConsent] = useState<boolean | null>(null)

  useEffect(() => {
    const savedConsent = localStorage.getItem('ga_consent')
    if (savedConsent === 'true') setConsent(true)
    else if (savedConsent === 'false') setConsent(false)
    else setConsent(null)
  }, [])

  const acceptConsent = () => {
    localStorage.setItem('ga_consent', 'true')
    setConsent(true)
  }

  const declineConsent = () => {
    localStorage.setItem('ga_consent', 'false')
    setConsent(false)
  }

  if (consent !== null) return null

  return (
    <div style={styles.banner}>
      <p style={styles.text}>
        We use cookies to enhance your experience. By clicking{' '}
        <strong>Accept</strong>, you agree to our use of Google Analytics.
      </p>
      <div style={styles.buttons}>
        <button
          onClick={acceptConsent}
          style={{ ...styles.button, ...styles.accept }}
        >
          Accept
        </button>
        <button
          onClick={declineConsent}
          style={{ ...styles.button, ...styles.decline }}
        >
          Decline
        </button>
      </div>
    </div>
  )
}

const styles = {
  banner: {
    position: 'fixed' as const,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#111',
    color: '#eee',
    padding: '1rem 1.5rem',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '0.75rem',
    boxShadow: '0 -2px 10px rgba(0,0,0,0.7)',
    zIndex: 9999,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  },
  text: {
    margin: 0,
    fontSize: '1rem',
    textAlign: 'center' as const,
    maxWidth: '600px'
  },
  buttons: {
    display: 'flex',
    gap: '1rem'
  },
  button: {
    padding: '0.5rem 1.5rem',
    fontSize: '1rem',
    fontWeight: '600',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.25s ease'
  },
  accept: {
    backgroundColor: '#4caf50',
    color: '#fff'
  },
  decline: {
    backgroundColor: '#f44336',
    color: '#fff'
  }
}
