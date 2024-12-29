import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export function withAuth (WrappedComponent: React.ComponentType) {
  return function WithAuthComponent (props: any) {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      async function verifyAuth () {
        try {
          console.log('Verifying authentication...')
          const token = localStorage.getItem('token')

          if (!token) {
            console.log('No token found, redirecting to login...')
            throw new Error('No token found')
          }

          console.log('Token found, verifying...')
          const res = await fetch('/api/auth/verify', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })

          console.log('Verify response status:', res.status)
          const data = await res.json()
          console.log('Verify response data:', data)

          if (!res.ok || !data.authenticated) {
            throw new Error('Not authenticated')
          }

          console.log('Authentication verified')
          setIsLoading(false)
        } catch (error) {
          console.error('Auth error:', error)
          localStorage.removeItem('token')
          await router.push('/admin/login')
        }
      }

      verifyAuth()
    }, [router])

    if (isLoading) {
      return (
        <div className='min-h-screen flex items-center justify-center'>
          <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold-600'></div>
        </div>
      )
    }

    return <WrappedComponent {...props} />
  }
}
