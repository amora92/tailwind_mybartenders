import { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Login failed')
      }

      if (data.success && data.token) {
        localStorage.setItem('token', data.token)
        await router.push('/admin')
      } else {
        setError('Login failed - No token received')
      }
    } catch (err: any) {
      console.error('Login error:', err)
      setError(err.message || 'An error occurred during login')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Head>
        <meta name='robots' content='noindex, nofollow' />
        <title>Admin Login | MyBartenders</title>
      </Head>

      <div className='min-h-screen bg-gray-950 flex flex-col'>
        {/* Background decoration */}
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black' />
        <div className='absolute top-20 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl' />
        <div className='absolute bottom-20 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl' />

        <div className='relative flex-1 flex items-center justify-center px-4 py-12'>
          <div className='w-full max-w-md'>
            {/* Logo/Brand */}
            <div className='text-center mb-8'>
              <Link href='/' className='inline-flex items-center gap-3 mb-6'>
                <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-amber-500 flex items-center justify-center'>
                  <svg className='w-7 h-7 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' />
                  </svg>
                </div>
              </Link>
              <h1 className='text-3xl font-bold text-white mb-2'>Admin Login</h1>
              <p className='text-gray-400'>Sign in to manage your content</p>
            </div>

            {/* Login Card */}
            <div className='bg-gray-900 border border-white/10 rounded-2xl p-8'>
              <form onSubmit={handleSubmit} className='space-y-6'>
                {error && (
                  <div className='p-4 bg-red-500/10 border border-red-500/20 rounded-xl'>
                    <div className='flex items-center gap-3'>
                      <svg className='w-5 h-5 text-red-400 flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                      </svg>
                      <p className='text-red-400 text-sm'>{error}</p>
                    </div>
                  </div>
                )}

                <div>
                  <label htmlFor='username' className='block text-sm font-medium text-gray-300 mb-2'>
                    Username
                  </label>
                  <input
                    id='username'
                    name='username'
                    type='text'
                    required
                    className='w-full px-4 py-3 bg-gray-800 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all'
                    placeholder='Enter your username'
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor='password' className='block text-sm font-medium text-gray-300 mb-2'>
                    Password
                  </label>
                  <input
                    id='password'
                    name='password'
                    type='password'
                    required
                    className='w-full px-4 py-3 bg-gray-800 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all'
                    placeholder='Enter your password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>

                <button
                  type='submit'
                  disabled={loading}
                  className='w-full py-3 px-4 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white font-semibold rounded-xl shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2'
                >
                  {loading ? (
                    <>
                      <svg className='w-5 h-5 animate-spin' fill='none' viewBox='0 0 24 24'>
                        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
                        <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z' />
                      </svg>
                      Signing in...
                    </>
                  ) : (
                    <>
                      Sign In
                      <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Back to site link */}
            <div className='text-center mt-6'>
              <Link
                href='/'
                className='text-gray-400 hover:text-white text-sm font-medium transition-colors inline-flex items-center gap-2'
              >
                <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 19l-7-7m0 0l7-7m-7 7h18' />
                </svg>
                Back to website
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
