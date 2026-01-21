import { useRouter } from 'next/router'
import { useEffect, useState, ComponentType } from 'react'

export const withAuth = (WrappedComponent: ComponentType) => {
  return function WithAuthComponent (props: any) {
    const router = useRouter()
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)

    useEffect(() => {
      const verifyAuth = async () => {
        try {
          const response = await fetch('/api/auth/verify', {
            method: 'GET',
            credentials: 'include'
          })

          if (response.ok) {
            setIsAuthenticated(true)
          } else {
            setIsAuthenticated(false)
            router.push('/login')
          }
        } catch (error) {
          setIsAuthenticated(false)
          router.push('/login')
        }
      }

      verifyAuth()
    }, [router])

    // Show loading state while verifying
    if (isAuthenticated === null) {
      return (
        <div className='min-h-screen flex items-center justify-center'>
          <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold-500'></div>
        </div>
      )
    }

    // Don't render the component if not authenticated
    if (!isAuthenticated) {
      return null
    }

    return <WrappedComponent {...props} />
  }
}
