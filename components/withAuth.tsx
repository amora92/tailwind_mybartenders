import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { NextPage } from 'next'

export function withAuth (WrappedComponent: NextPage) {
  return (props: any) => {
    const router = useRouter()

    useEffect(() => {
      // Check if we're on the client side
      if (typeof window !== 'undefined') {
        const checkAuth = async () => {
          try {
            const res = await fetch('/api/auth/verify')
            if (!res.ok) {
              router.replace('/admin/login')
            }
          } catch (err) {
            router.replace('/admin/login')
          }
        }
        checkAuth()
      }
    }, [])

    return <WrappedComponent {...props} />
  }
}
