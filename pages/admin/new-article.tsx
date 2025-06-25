import { useState } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { withAuth } from '@/components/withAuth'
import { AdminHeader } from '@/components/admin/Header'
import Link from 'next/link'
import { useRouter } from 'next/router'
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })
import 'react-quill/dist/quill.snow.css'

interface ContentSection {
  id: string
  type: 'text' | 'image' | 'video'
  content: string
}

interface SEOData {
  metaTitle: string
  metaDescription: string
  keywords: string[]
  ogImage: string
  canonicalUrl?: string
  structuredData?: {
    type: string
    author: string
    datePublished: string
    dateModified: string
  }
}

const getYouTubeVideoId = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)
  return match && match[2].length === 11 ? match[2] : null
}

const NewArticlePage = () => {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [category, setCategory] = useState('')
  const [slug, setSlug] = useState('')
  const [publishedAt, setPublishedAt] = useState('')
  const [contentSections, setContentSections] = useState<ContentSection[]>([
    { id: '1', type: 'text', content: '' }
  ])
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [seoData, setSeoData] = useState<SEOData>({
    metaTitle: '',
    metaDescription: '',
    keywords: [],
    ogImage: '',
    canonicalUrl: '',
    structuredData: {
      type: 'Article',
      author: 'mybartenders.co.uk',
      datePublished: new Date().toISOString(),
      dateModified: new Date().toISOString()
    }
  })

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      if (!imageUrl) {
        setError('Please add a main image URL')
        return
      }

      const textContent = contentSections
        .filter(section => section.type === 'text')
        .map(section => section.content)
        .join(' ')
      const wordCount = textContent.split(/\s+/).length
      const readTimeMinutes = Math.max(1, Math.ceil(wordCount / 200))

      const newArticle = {
        title,
        description,
        imageUrl,
        slug,
        publishedAt: new Date(publishedAt).toISOString(),
        category: category || 'General',
        contentSections,
        author: {
          name: 'mybartenders.co.uk',
          avatar: '/pineapple.svg'
        },
        readTime: `${readTimeMinutes} min read`,
        seo: {
          ...seoData,
          metaTitle: seoData.metaTitle || title,
          metaDescription: seoData.metaDescription || description,
          ogImage: seoData.ogImage || imageUrl,
          structuredData: {
            ...seoData.structuredData,
            datePublished: new Date(publishedAt).toISOString(),
            dateModified: new Date().toISOString()
          }
        }
      }

      console.log('Submitting article:', newArticle)

      const res = await fetch('/api/articles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newArticle)
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Failed to create article')
      }

      console.log('Article created successfully:', data)
      setSuccess('Article created successfully!')

      // Wait a moment to show the success message
      setTimeout(() => {
        router.push('/admin')
      }, 1000)
    } catch (error: unknown) {
      console.error('Error creating article:', error)
      setError(
        error instanceof Error ? error.message : 'Failed to create article'
      )
    }
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      <Head>
        <meta name='robots' content='noindex, nofollow' />
        <title>Create New Article - Admin</title>
      </Head>

      <AdminHeader />

      <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center mb-8'>
          <h1 className='text-3xl font-bold text-gray-900'>
            Create New Article
          </h1>
          <Link
            href='/admin'
            className='px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700'
          >
            Back to Dashboard
          </Link>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {/* Editor Panel */}
          <div className='bg-white rounded-lg shadow-lg p-6'>
            <form onSubmit={handleSubmit} className='space-y-6'>
              {error && <p className='text-red-500 mb-4'>{error}</p>}
              {success && <p className='text-green-500 mb-4'>{success}</p>}

              <div>
                <label className='block mb-2'>Main Image URL (Thumbnail)</label>
                <input
                  type='text'
                  value={imageUrl}
                  onChange={e => setImageUrl(e.target.value)}
                  className='w-full p-2 border rounded'
                  required
                />
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt='Preview'
                    className='mt-2 max-h-48 object-contain'
                  />
                )}
              </div>

              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <label
                    htmlFor='title'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Title
                  </label>
                  <input
                    type='text'
                    id='title'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    className='mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500'
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor='slug'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Slug
                  </label>
                  <input
                    type='text'
                    id='slug'
                    value={slug}
                    onChange={e => setSlug(e.target.value)}
                    className='mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500'
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='description'
                  className='block text-sm font-medium text-gray-700'
                >
                  Description
                </label>
                <textarea
                  id='description'
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  rows={3}
                  className='mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500'
                  required
                />
              </div>

              <div className='space-y-4'>
                {contentSections.map((section, index) => (
                  <div
                    key={section.id}
                    className='p-4 border rounded-lg bg-white shadow-sm'
                  >
                    <div className='flex justify-between items-center mb-2'>
                      <span className='font-medium'>
                        Section {index + 1} ({section.type})
                      </span>
                      <button
                        type='button'
                        onClick={() => removeSection(section.id)}
                        className='text-red-500 hover:text-red-700'
                      >
                        Remove
                      </button>
                    </div>

                    {section.type === 'text' ? (
                      <ReactQuill
                        value={section.content}
                        onChange={content => updateSection(section.id, content)}
                        className='h-64 mb-12'
                      />
                    ) : section.type === 'image' ? (
                      <div className='space-y-2'>
                        <input
                          type='text'
                          value={section.content}
                          onChange={e =>
                            updateSection(section.id, e.target.value)
                          }
                          placeholder='Image URL'
                          className='w-full p-2 border rounded'
                        />
                        {section.content && (
                          <img
                            src={section.content}
                            alt='Preview'
                            className='max-h-48 object-contain'
                          />
                        )}
                      </div>
                    ) : (
                      <div className='space-y-2'>
                        <input
                          type='text'
                          value={section.content}
                          onChange={e =>
                            updateSection(section.id, e.target.value)
                          }
                          placeholder='YouTube Video URL'
                          className='w-full p-2 border rounded'
                        />
                        {section.content && getYouTubeVideoId(section.content) && (
                          <div className='aspect-w-16 aspect-h-9'>
                            <iframe
                              src={`https://www.youtube.com/embed/${getYouTubeVideoId(
                                section.content
                              )}`}
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

              <div className='flex space-x-4 mb-6'>
                <button
                  type='button'
                  onClick={() => addSection('text')}
                  className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600'
                >
                  Add Text Section
                </button>
                <button
                  type='button'
                  onClick={() => addSection('image')}
                  className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
                >
                  Add Image
                </button>
                <button
                  type='button'
                  onClick={() => addSection('video')}
                  className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'
                >
                  Add YouTube Video
                </button>
              </div>

              <div className='mb-4'>
                <label
                  htmlFor='publishedAt'
                  className='block text-sm font-medium text-gray-700'
                >
                  Publication Date
                </label>
                <input
                  type='datetime-local'
                  id='publishedAt'
                  value={publishedAt}
                  onChange={e => setPublishedAt(e.target.value)}
                  className='mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500'
                  required
                />
              </div>

              <div className='mb-4'>
                <label
                  htmlFor='category'
                  className='block text-sm font-medium text-gray-700'
                >
                  Category
                </label>
                <input
                  type='text'
                  id='category'
                  value={category}
                  onChange={e => setCategory(e.target.value)}
                  className='mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500'
                  required
                />
              </div>

              <div className='border-t pt-6 mt-8'>
                <h2 className='text-xl font-semibold mb-4'>SEO Settings</h2>
                <div className='mb-4'>
                  <label
                    htmlFor='metaTitle'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Meta Title
                  </label>
                  <input
                    type='text'
                    id='metaTitle'
                    value={seoData.metaTitle}
                    onChange={e =>
                      setSeoData(prev => ({
                        ...prev,
                        metaTitle: e.target.value
                      }))
                    }
                    className='mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500'
                  />
                </div>
                <div className='mb-4'>
                  <label
                    htmlFor='metaDescription'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Meta Description
                  </label>
                  <textarea
                    id='metaDescription'
                    value={seoData.metaDescription}
                    onChange={e =>
                      setSeoData(prev => ({
                        ...prev,
                        metaDescription: e.target.value
                      }))
                    }
                    rows={3}
                    className='mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500'
                  />
                </div>
                <div className='mb-4'>
                  <label
                    htmlFor='keywords'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Keywords (comma separated)
                  </label>
                  <input
                    type='text'
                    id='keywords'
                    value={seoData.keywords.join(', ')}
                    onChange={e =>
                      setSeoData(prev => ({
                        ...prev,
                        keywords: e.target.value.split(',').map(k => k.trim())
                      }))
                    }
                    className='mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500'
                  />
                </div>
                <div className='mb-4'>
                  <label
                    htmlFor='ogImage'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Open Graph Image URL
                  </label>
                  <input
                    type='text'
                    id='ogImage'
                    value={seoData.ogImage}
                    onChange={e =>
                      setSeoData(prev => ({ ...prev, ogImage: e.target.value }))
                    }
                    className='mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500'
                  />
                </div>
                <div className='mb-4'>
                  <label
                    htmlFor='canonicalUrl'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Canonical URL
                  </label>
                  <input
                    type='text'
                    id='canonicalUrl'
                    value={seoData.canonicalUrl || ''}
                    onChange={e =>
                      setSeoData(prev => ({
                        ...prev,
                        canonicalUrl: e.target.value
                      }))
                    }
                    className='mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500'
                  />
                </div>
              </div>

              <button
                type='submit'
                className='w-full py-3 bg-gold-600 text-white font-bold rounded hover:bg-gold-700 transition duration-300'
              >
                Publish Article
              </button>
            </form>
          </div>

          {/* Preview Panel */}
          <div className='bg-white rounded-lg shadow-lg p-6 overflow-auto'>
            <h2 className='text-2xl font-bold mb-4'>
              {title || 'Article Title'}
            </h2>
            <p className='mb-4 text-gray-700'>
              {description || 'Article description...'}
            </p>
            {imageUrl && (
              <img
                src={imageUrl}
                alt='Article Main Image'
                className='mb-4 max-h-72 object-contain'
              />
            )}
            <div className='space-y-6'>
              {contentSections.map(section => {
                if (section.type === 'text') {
                  return (
                    <div
                      key={section.id}
                      className='prose max-w-none'
                      dangerouslySetInnerHTML={{ __html: section.content }}
                    />
                  )
                }
                if (section.type === 'image') {
                  return (
                    <img
                      key={section.id}
                      src={section.content}
                      alt='Article Section Image'
                      className='max-h-96 object-contain'
                    />
                  )
                }
                if (
                  section.type === 'video' &&
                  getYouTubeVideoId(section.content)
                ) {
                  return (
                    <div key={section.id} className='aspect-w-16 aspect-h-9'>
                      <iframe
                        src={`https://www.youtube.com/embed/${getYouTubeVideoId(
                          section.content
                        )}`}
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                        className='w-full h-full'
                      />
                    </div>
                  )
                }
                return null
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withAuth(NewArticlePage)
