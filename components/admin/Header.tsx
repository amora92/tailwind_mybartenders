import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

export const AdminHeader = () => {
  const router = useRouter()

  const handleLogout = async () => {
    try {
      localStorage.removeItem('token')
      await fetch('/api/auth/logout', { method: 'POST' })
      router.push('/admin/login')
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  return (
    <header className='bg-gray-950 border-b border-white/10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-4'>
            <Link href='/admin' className='flex items-center gap-3'>
              <div className='w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-amber-500 flex items-center justify-center'>
                <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' />
                </svg>
              </div>
              <div>
                <span className='text-lg font-bold text-white'>MyBartenders</span>
                <span className='ml-2 px-2 py-0.5 text-xs font-medium bg-pink-500/20 text-pink-400 rounded-full'>
                  Admin
                </span>
              </div>
            </Link>
          </div>

          <nav className='hidden md:flex items-center gap-6'>
            <Link
              href='/'
              className='text-gray-400 hover:text-white text-sm font-medium transition-colors'
            >
              View Site
            </Link>
            <Link
              href='/articles'
              className='text-gray-400 hover:text-white text-sm font-medium transition-colors'
            >
              View Articles
            </Link>
          </nav>

          <button
            onClick={handleLogout}
            className='flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-red-500/20 border border-white/10 hover:border-red-500/30 text-gray-300 hover:text-red-400 rounded-lg transition-all text-sm font-medium'
          >
            <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1' />
            </svg>
            Logout
          </button>
        </div>
      </div>
    </header>
  )
}
