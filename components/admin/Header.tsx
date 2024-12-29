import { useRouter } from 'next/router'
import Link from 'next/link'

export const AdminHeader = () => {
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
      router.push('/admin/login')
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  return (
    <header className='bg-white shadow'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
        <div className='flex justify-between items-center'>
          <Link href='/admin' className='text-xl font-bold text-gray-900'>
            Admin Dashboard
          </Link>
          <button
            onClick={handleLogout}
            className='px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors'
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  )
}
