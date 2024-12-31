import { useRouter } from 'next/router'
import { useEffect, ComponentType } from 'react'

export const withAuth = (WrappedComponent: ComponentType) => {
  return function WithAuthComponent (props: any) {
    const router = useRouter()

    useEffect(() => {
      // Add your authentication check here
      const isAuthenticated = true // Replace with your actual auth check

      if (!isAuthenticated) {
        router.push('/login')
      }
    }, [router])

    return <WrappedComponent {...props} />
  }
}
