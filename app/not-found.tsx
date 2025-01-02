import { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found | mybartenders',
  description: 'The page you are looking for could not be found.'
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
}

export default function NotFound () {
  // ... your not found page content
}
