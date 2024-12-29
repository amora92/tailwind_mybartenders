import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { NextPage } from 'next'

export function withAuth (WrappedComponent: NextPage) {
  return (props: any) => {
    const router = useRouter()
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      const checkAuth = async () => {
        try {
          const res = await fetch('/api/auth/verify')
          const data = await res.json()

          if (res.ok && data.authenticated) {
            setIsAuthenticated(true)
          } else {
            router.replace('/admin/login')
          }
        } catch (err) {
          console.error('Auth check failed:', err)
          router.replace('/admin/login')
        } finally {
          setIsLoading(false)
        }
      }

      checkAuth()
    }, [router])

    if (isLoading) {
      return (
        <div className='min-h-screen flex items-center justify-center'>
          <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold-600'></div>
        </div>
      )
    }

    if (!isAuthenticated) {
      return null
    }

    return <WrappedComponent {...props} />
  }
}
