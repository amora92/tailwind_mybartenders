import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import '../app/globals.css'

// Dynamically import CookieConsent to avoid SSR issues
const CookieConsent = dynamic(() => import('@/components/CookieConsent'), {
  ssr: false
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <CookieConsent />
    </>
  )
}

export default MyApp
