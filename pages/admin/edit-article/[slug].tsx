import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { withAuth } from '@/components/withAuth'
import { AdminHeader } from '@/components/admin/Header'
import Head from 'next/head'
import Link from 'next/link'
import dynamic from 'next/dynamic'
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })
import 'react-quill/dist/quill.snow.css'

interface ContentSection {
  id: string
  type: 'text' | 'image' | 'video'
  content: string
}

const CATEGORY_OPTIONS = [
  'Wedding',
  'Educational',
  'Entertainment',
  'News',
  'Cocktails',
  'Events',
  'Tips & Tricks',
  'Behind the Scenes',
]

const getYouTubeVideoId = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)
  return match && match[2].length === 11 ? match[2] : null
}

const EditArticle = () => {
  const router = useRouter()
  const { slug } = router.query
  const [article, setArticle] = useState({
    title: '',
    description: '',
    imageUrl: '',
    publishedAt: '',
    category: '',
    author: { name: '', avatar: '' },
    readTime: '' as string | number,
    views: 0
  })
  const [contentSections, setContentSections] = useState<ContentSection[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  useEffect(() => {
    if (slug) {
      fetchArticle()
    }
  }, [slug])

  const fetchArticle = async () => {
    try {
      const response = await fetch(`/api/articles/${slug}`)
      if (!response.ok) throw new Error('Article not found')
      const data = await response.json()

      setContentSections(data.contentSections || [])
      const publishedDate = new Date(data.publishedAt)
      publishedDate.setMinutes(publishedDate.getMinutes() - publishedDate.getTimezoneOffset())

      setArticle({
        ...data,
        publishedAt: publishedDate.toISOString().slice(0, 16)
      })
      setLoading(false)
    } catch (error) {
      setError('Failed to fetch article')
      setLoading(false)
    }
  }

  const addSection = (type: 'text' | 'image' | 'video') => {
    setContentSections(prev => [
      ...prev,
      { id: Date.now().toString(), type, content: '' }
    ])
  }

  const removeSection = (id: string) => {
    setContentSections(prev => prev.filter(section => section.id !== id))
  }

  const updateSection = (id: string, content: string) => {
    setContentSections(prev =>
      prev.map(section =>
        section.id === id ? { ...section, content } : section
      )
    )
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setSaving(true)

    try {
      const textContent = contentSections
        .filter(section => section.type === 'text')
        .map(section => section.content)
        .join(' ')
      const wordCount = textContent.split(/\s+/).length
      const readTimeMinutes = Math.max(1, Math.ceil(wordCount / 200))

      const response = await fetch(`/api/articles/${slug}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...article,
          contentSections,
          readTime: readTimeMinutes,
          author: {
            name: 'MyBartenders',
            avatar: '/admin-avatar.svg'
          }
        })
      })

      if (!response.ok) throw new Error('Failed to update article')

      setSuccess('Article updated successfully!')
      setTimeout(() => {
        router.push('/admin')
      }, 1000)
    } catch (error) {
      setError('Failed to update article')
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className='min-h-screen bg-gray-950'>
        <Head>
          <meta name='robots' content='noindex, nofollow' />
          <title>Edit Article | Admin</title>
        </Head>
        <AdminHeader />
        <div className='max-w-7xl mx-auto py-12 px-4 flex items-center justify-center'>
          <div className='text-white'>Loading article...</div>
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-gray-950'>
      <Head>
        <meta name='robots' content='noindex, nofollow' />
        <title>Edit: {article.title} | Admin</title>
      </Head>

      <AdminHeader />

      <div className='max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8'>
        {/* Page Header */}
        <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-8'>
          <div>
            <h1 className='text-3xl font-bold text-white mb-2'>Edit Article</h1>
            <p className='text-gray-400'>Update the article details below</p>
          </div>
          <div className='mt-4 md:mt-0 flex items-center gap-3'>
            <Link
              href={`/articles/${slug}`}
              className='inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-gray-300 hover:text-white rounded-xl transition-all'
            >
              <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
              </svg>
              View Live
            </Link>
            <Link
              href='/admin'
              className='inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-gray-300 hover:text-white rounded-xl transition-all'
            >
              <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 19l-7-7m0 0l7-7m-7 7h18' />
              </svg>
              Back
            </Link>
          </div>
        </div>

        {/* Stats Badge */}
        <div className='mb-6 flex items-center gap-4'>
          <div className='inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-xl'>
            <svg className='w-4 h-4 text-amber-400' fill='currentColor' viewBox='0 0 20 20'>
              <path d='M10 12a2 2 0 100-4 2 2 0 000 4z' />
              <path fillRule='evenodd' d='M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z' clipRule='evenodd' />
            </svg>
            <span className='text-amber-400 font-medium'>{(article.views || 0).toLocaleString()} views</span>
          </div>
        </div>

        {/* Alerts */}
        {error && (
          <div className='mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl'>
            <div className='flex items-center gap-3'>
              <svg className='w-5 h-5 text-red-400 flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
              </svg>
              <p className='text-red-400'>{error}</p>
            </div>
          </div>
        )}

        {success && (
          <div className='mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl'>
            <div className='flex items-center gap-3'>
              <svg className='w-5 h-5 text-green-400 flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
              </svg>
              <p className='text-green-400'>{success}</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {/* Main Editor */}
            <div className='lg:col-span-2 space-y-6'>
              {/* Basic Info Card */}
              <div className='bg-gray-900 border border-white/10 rounded-2xl p-6'>
                <h2 className='text-lg font-semibold text-white mb-6'>Basic Information</h2>

                <div className='space-y-5'>
                  <div>
                    <label className='block text-sm font-medium text-gray-300 mb-2'>
                      Title *
                    </label>
                    <input
                      type='text'
                      value={article.title}
                      onChange={e => setArticle(prev => ({ ...prev, title: e.target.value }))}
                      className='w-full px-4 py-3 bg-gray-800 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent'
                      placeholder='Enter article title'
                      required
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-gray-300 mb-2'>
                      Description *
                    </label>
                    <textarea
                      value={article.description}
                      onChange={e => setArticle(prev => ({ ...prev, description: e.target.value }))}
                      rows={3}
                      className='w-full px-4 py-3 bg-gray-800 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none'
                      placeholder='Brief description for SEO and article previews'
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Content Sections Card */}
              <div className='bg-gray-900 border border-white/10 rounded-2xl p-6'>
                <div className='flex items-center justify-between mb-6'>
                  <h2 className='text-lg font-semibold text-white'>Content Sections</h2>
                  <div className='flex gap-2'>
                    <button
                      type='button'
                      onClick={() => addSection('text')}
                      className='px-3 py-1.5 bg-green-500/20 text-green-400 text-sm font-medium rounded-lg hover:bg-green-500/30 transition-colors'
                    >
                      + Text
                    </button>
                    <button
                      type='button'
                      onClick={() => addSection('image')}
                      className='px-3 py-1.5 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-lg hover:bg-blue-500/30 transition-colors'
                    >
                      + Image
                    </button>
                    <button
                      type='button'
                      onClick={() => addSection('video')}
                      className='px-3 py-1.5 bg-red-500/20 text-red-400 text-sm font-medium rounded-lg hover:bg-red-500/30 transition-colors'
                    >
                      + Video
                    </button>
                  </div>
                </div>

                <div className='space-y-4'>
                  {contentSections.map((section, index) => (
                    <div
                      key={section.id}
                      className='p-4 bg-gray-800 border border-white/5 rounded-xl'
                    >
                      <div className='flex items-center justify-between mb-3'>
                        <div className='flex items-center gap-2'>
                          <span className='w-6 h-6 bg-white/10 rounded-full flex items-center justify-center text-xs text-gray-400'>
                            {index + 1}
                          </span>
                          <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                            section.type === 'text'
                              ? 'bg-green-500/20 text-green-400'
                              : section.type === 'image'
                              ? 'bg-blue-500/20 text-blue-400'
                              : 'bg-red-500/20 text-red-400'
                          }`}>
                            {section.type}
                          </span>
                        </div>
                        {contentSections.length > 1 && (
                          <button
                            type='button'
                            onClick={() => removeSection(section.id)}
                            className='text-gray-500 hover:text-red-400 transition-colors'
                          >
                            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16' />
                            </svg>
                          </button>
                        )}
                      </div>

                      {section.type === 'text' ? (
                        <div className='quill-dark'>
                          <ReactQuill
                            value={section.content}
                            onChange={content => updateSection(section.id, content)}
                            className='bg-gray-900 rounded-lg'
                            theme='snow'
                          />
                        </div>
                      ) : section.type === 'image' ? (
                        <div className='space-y-3'>
                          <input
                            type='text'
                            value={section.content}
                            onChange={e => updateSection(section.id, e.target.value)}
                            placeholder='Enter image URL'
                            className='w-full px-4 py-2 bg-gray-900 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
                          />
                          {section.content && (
                            <div className='relative h-48 rounded-lg overflow-hidden bg-gray-900'>
                              <img
                                src={section.content}
                                alt='Preview'
                                className='w-full h-full object-contain'
                              />
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className='space-y-3'>
                          <input
                            type='text'
                            value={section.content}
                            onChange={e => updateSection(section.id, e.target.value)}
                            placeholder='Enter YouTube URL'
                            className='w-full px-4 py-2 bg-gray-900 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500'
                          />
                          {section.content && getYouTubeVideoId(section.content) && (
                            <div className='aspect-video rounded-lg overflow-hidden'>
                              <iframe
                                src={`https://www.youtube.com/embed/${getYouTubeVideoId(section.content)}`}
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                allowFullScreen
                                className='w-full h-full'
                              />
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className='space-y-6'>
              {/* Publish Card */}
              <div className='bg-gray-900 border border-white/10 rounded-2xl p-6'>
                <h2 className='text-lg font-semibold text-white mb-6'>Publish</h2>

                <div className='space-y-5'>
                  <div>
                    <label className='block text-sm font-medium text-gray-300 mb-2'>
                      Category *
                    </label>
                    <select
                      value={article.category}
                      onChange={e => setArticle(prev => ({ ...prev, category: e.target.value }))}
                      className='w-full px-4 py-3 bg-gray-800 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent'
                      required
                    >
                      <option value='' className='bg-gray-800'>Select a category</option>
                      {CATEGORY_OPTIONS.map(cat => (
                        <option key={cat} value={cat} className='bg-gray-800'>{cat}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-gray-300 mb-2'>
                      Publication Date *
                    </label>
                    <input
                      type='datetime-local'
                      value={article.publishedAt}
                      onChange={e => setArticle(prev => ({ ...prev, publishedAt: e.target.value }))}
                      className='w-full px-4 py-3 bg-gray-800 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent'
                      required
                    />
                  </div>

                  <button
                    type='submit'
                    disabled={saving}
                    className='w-full py-3 px-4 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white font-semibold rounded-xl shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2'
                  >
                    {saving ? (
                      <>
                        <svg className='w-5 h-5 animate-spin' fill='none' viewBox='0 0 24 24'>
                          <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
                          <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z' />
                        </svg>
                        Saving...
                      </>
                    ) : (
                      <>
                        <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                        </svg>
                        Save Changes
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Featured Image Card */}
              <div className='bg-gray-900 border border-white/10 rounded-2xl p-6'>
                <h2 className='text-lg font-semibold text-white mb-6'>Featured Image</h2>

                <div className='space-y-4'>
                  <input
                    type='text'
                    value={article.imageUrl}
                    onChange={e => setArticle(prev => ({ ...prev, imageUrl: e.target.value }))}
                    className='w-full px-4 py-3 bg-gray-800 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent'
                    placeholder='Enter image URL'
                    required
                  />

                  {article.imageUrl ? (
                    <div className='relative h-48 rounded-xl overflow-hidden bg-gray-800'>
                      <img
                        src={article.imageUrl}
                        alt='Featured preview'
                        className='w-full h-full object-cover'
                      />
                    </div>
                  ) : (
                    <div className='h-48 rounded-xl bg-gray-800 border-2 border-dashed border-white/10 flex items-center justify-center'>
                      <div className='text-center'>
                        <svg className='w-10 h-10 text-gray-600 mx-auto mb-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' />
                        </svg>
                        <p className='text-gray-500 text-sm'>No image selected</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      <style jsx global>{`
        .quill-dark .ql-toolbar {
          background: rgb(17 24 39);
          border-color: rgba(255 255 255 / 0.1) !important;
          border-radius: 0.5rem 0.5rem 0 0;
        }
        .quill-dark .ql-container {
          background: rgb(17 24 39);
          border-color: rgba(255 255 255 / 0.1) !important;
          border-radius: 0 0 0.5rem 0.5rem;
          min-height: 200px;
        }
        .quill-dark .ql-editor {
          color: white;
          min-height: 200px;
        }
        .quill-dark .ql-editor.ql-blank::before {
          color: rgb(107 114 128);
        }
        .quill-dark .ql-stroke {
          stroke: rgb(156 163 175) !important;
        }
        .quill-dark .ql-fill {
          fill: rgb(156 163 175) !important;
        }
        .quill-dark .ql-picker-label {
          color: rgb(156 163 175) !important;
        }
        .quill-dark .ql-picker-options {
          background: rgb(31 41 55) !important;
          border-color: rgba(255 255 255 / 0.1) !important;
        }
        .quill-dark .ql-picker-item {
          color: rgb(156 163 175) !important;
        }
        .quill-dark .ql-picker-item:hover {
          color: white !important;
        }
      `}</style>
    </div>
  )
}

export default withAuth(EditArticle)
