import { useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { withAuth } from '@/components/withAuth'
import { AdminHeader } from '@/components/admin/Header'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })
import 'react-quill/dist/quill.snow.css'

interface GalleryImage {
  url: string
  caption?: string
}

interface ContentSection {
  id: string
  type: 'text' | 'image' | 'video' | 'quote' | 'code' | 'cta' | 'gallery'
  content: string
  caption?: string
  author?: string // For quotes
  language?: string // For code blocks
  buttonText?: string // For CTA
  buttonUrl?: string // For CTA
  images?: GalleryImage[] // For gallery
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

const generateSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
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
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(false)
  const [publishedAt, setPublishedAt] = useState('')
  const [tags, setTags] = useState<string[]>([])
  const [tagInput, setTagInput] = useState('')
  const [contentSections, setContentSections] = useState<ContentSection[]>([
    { id: '1', type: 'text', content: '' }
  ])
  const [status, setStatus] = useState<'draft' | 'published'>('published')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [saving, setSaving] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [uploadingSection, setUploadingSection] = useState<string | null>(null)
  const featuredImageInputRef = useRef<HTMLInputElement>(null)

  // Upload image file
  const uploadImage = async (file: File): Promise<string | null> => {
    const formData = new FormData()
    formData.append('file', file)

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      })

      if (!res.ok) {
        throw new Error('Upload failed')
      }

      const data = await res.json()
      return data.url
    } catch (err) {
      console.error('Upload error:', err)
      setError('Failed to upload image. Please try again.')
      return null
    }
  }

  // Handle featured image upload
  const handleFeaturedImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    const url = await uploadImage(file)
    if (url) {
      setImageUrl(url)
    }
    setUploading(false)
  }

  // Handle content section image upload
  const handleSectionImageUpload = async (sectionId: string, file: File) => {
    setUploadingSection(sectionId)
    const url = await uploadImage(file)
    if (url) {
      updateSection(sectionId, 'content', url)
    }
    setUploadingSection(null)
  }

  // Add tag
  const addTag = () => {
    const trimmedTag = tagInput.trim().toLowerCase()
    if (trimmedTag && !tags.includes(trimmedTag)) {
      setTags([...tags, trimmedTag])
      setTagInput('')
    }
  }

  // Remove tag
  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove))
  }

  // Handle tag input key press
  const handleTagKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault()
      addTag()
    }
  }

  // Auto-generate slug from title
  useEffect(() => {
    if (!slugManuallyEdited && title) {
      setSlug(generateSlug(title))
    }
  }, [title, slugManuallyEdited])

  // Set default date to now
  useEffect(() => {
    const now = new Date()
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset())
    setPublishedAt(now.toISOString().slice(0, 16))
  }, [])

  const handleSlugChange = (value: string) => {
    setSlugManuallyEdited(true)
    setSlug(generateSlug(value))
  }

  const addSection = (type: ContentSection['type']) => {
    const newSection: ContentSection = { id: Date.now().toString(), type, content: '' }
    if (type === 'code') {
      newSection.language = 'javascript'
    }
    if (type === 'cta') {
      newSection.buttonText = 'Learn More'
      newSection.buttonUrl = ''
    }
    if (type === 'gallery') {
      newSection.images = []
    }
    setContentSections(prev => [...prev, newSection])
  }

  // Add image to gallery section
  const addGalleryImage = (sectionId: string, url: string, caption?: string) => {
    setContentSections(prev =>
      prev.map(section => {
        if (section.id === sectionId && section.type === 'gallery') {
          const images = section.images || []
          return { ...section, images: [...images, { url, caption: caption || '' }] }
        }
        return section
      })
    )
  }

  // Remove image from gallery section
  const removeGalleryImage = (sectionId: string, imageIndex: number) => {
    setContentSections(prev =>
      prev.map(section => {
        if (section.id === sectionId && section.type === 'gallery') {
          const images = [...(section.images || [])]
          images.splice(imageIndex, 1)
          return { ...section, images }
        }
        return section
      })
    )
  }

  // Update gallery image caption
  const updateGalleryImageCaption = (sectionId: string, imageIndex: number, caption: string) => {
    setContentSections(prev =>
      prev.map(section => {
        if (section.id === sectionId && section.type === 'gallery') {
          const images = [...(section.images || [])]
          if (images[imageIndex]) {
            images[imageIndex] = { ...images[imageIndex], caption }
          }
          return { ...section, images }
        }
        return section
      })
    )
  }

  // Handle gallery image upload
  const handleGalleryImageUpload = async (sectionId: string, file: File) => {
    setUploadingSection(sectionId)
    const url = await uploadImage(file)
    if (url) {
      addGalleryImage(sectionId, url)
    }
    setUploadingSection(null)
  }

  const removeSection = (id: string) => {
    setContentSections(prev => prev.filter(section => section.id !== id))
  }

  const updateSection = (id: string, field: string, value: string) => {
    setContentSections(prev =>
      prev.map(section =>
        section.id === id ? { ...section, [field]: value } : section
      )
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSaving(true)

    try {
      if (!imageUrl) {
        setError('Please add a main image URL')
        setSaving(false)
        return
      }

      if (!slug) {
        setError('Please add a slug')
        setSaving(false)
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
        tags,
        status,
        author: {
          name: 'MyBartenders',
          avatar: '/admin-avatar.svg'
        },
        readTime: readTimeMinutes
      }

      const res = await fetch('/api/articles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newArticle)
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Failed to create article')
      }

      setSuccess('Article created successfully!')
      setTimeout(() => {
        router.push('/admin')
      }, 1000)
    } catch (error: unknown) {
      console.error('Error creating article:', error)
      setError(
        error instanceof Error ? error.message : 'Failed to create article'
      )
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className='min-h-screen bg-gray-950'>
      <Head>
        <meta name='robots' content='noindex, nofollow' />
        <title>Create New Article | Admin</title>
      </Head>

      <AdminHeader />

      <div className='max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8'>
        {/* Page Header */}
        <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-8'>
          <div>
            <h1 className='text-3xl font-bold text-white mb-2'>Create New Article</h1>
            <p className='text-gray-400'>Fill in the details below to publish a new article</p>
          </div>
          <Link
            href='/admin'
            className='mt-4 md:mt-0 inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-gray-300 hover:text-white rounded-xl transition-all'
          >
            <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 19l-7-7m0 0l7-7m-7 7h18' />
            </svg>
            Back to Dashboard
          </Link>
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
                      value={title}
                      onChange={e => setTitle(e.target.value)}
                      className='w-full px-4 py-3 bg-gray-800 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent'
                      placeholder='Enter article title'
                      required
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-gray-300 mb-2'>
                      Slug *
                      <span className='text-gray-500 font-normal ml-2'>(auto-generated from title)</span>
                    </label>
                    <input
                      type='text'
                      value={slug}
                      onChange={e => handleSlugChange(e.target.value)}
                      className='w-full px-4 py-3 bg-gray-800 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent font-mono text-sm'
                      placeholder='article-url-slug'
                      required
                    />
                    <p className='mt-1 text-xs text-gray-500'>URL: /articles/{slug || 'your-slug'}</p>
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-gray-300 mb-2'>
                      Description *
                    </label>
                    <textarea
                      value={description}
                      onChange={e => setDescription(e.target.value)}
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
                  <div className='flex flex-wrap gap-2'>
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
                    <button
                      type='button'
                      onClick={() => addSection('quote')}
                      className='px-3 py-1.5 bg-purple-500/20 text-purple-400 text-sm font-medium rounded-lg hover:bg-purple-500/30 transition-colors'
                    >
                      + Quote
                    </button>
                    <button
                      type='button'
                      onClick={() => addSection('code')}
                      className='px-3 py-1.5 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-lg hover:bg-cyan-500/30 transition-colors'
                    >
                      + Code
                    </button>
                    <button
                      type='button'
                      onClick={() => addSection('cta')}
                      className='px-3 py-1.5 bg-orange-500/20 text-orange-400 text-sm font-medium rounded-lg hover:bg-orange-500/30 transition-colors'
                    >
                      + CTA
                    </button>
                    <button
                      type='button'
                      onClick={() => addSection('gallery')}
                      className='px-3 py-1.5 bg-indigo-500/20 text-indigo-400 text-sm font-medium rounded-lg hover:bg-indigo-500/30 transition-colors'
                    >
                      + Gallery
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
                              : section.type === 'video'
                              ? 'bg-red-500/20 text-red-400'
                              : section.type === 'quote'
                              ? 'bg-purple-500/20 text-purple-400'
                              : section.type === 'code'
                              ? 'bg-cyan-500/20 text-cyan-400'
                              : section.type === 'gallery'
                              ? 'bg-indigo-500/20 text-indigo-400'
                              : 'bg-orange-500/20 text-orange-400'
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
                            onChange={content => updateSection(section.id, 'content', content)}
                            className='bg-gray-900 rounded-lg'
                            theme='snow'
                          />
                        </div>
                      ) : section.type === 'image' ? (
                        <div className='space-y-3'>
                          {/* File Upload for content images */}
                          <div className='flex gap-2'>
                            <input
                              type='file'
                              accept='image/*'
                              onChange={e => {
                                const file = e.target.files?.[0]
                                if (file) handleSectionImageUpload(section.id, file)
                              }}
                              className='hidden'
                              id={`file-upload-${section.id}`}
                            />
                            <label
                              htmlFor={`file-upload-${section.id}`}
                              className='flex-1 py-2 px-4 bg-blue-500/20 border border-blue-500/30 text-blue-400 text-sm font-medium rounded-lg hover:bg-blue-500/30 transition-colors flex items-center justify-center gap-2 cursor-pointer'
                            >
                              {uploadingSection === section.id ? (
                                <>
                                  <svg className='w-4 h-4 animate-spin' fill='none' viewBox='0 0 24 24'>
                                    <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
                                    <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z' />
                                  </svg>
                                  Uploading...
                                </>
                              ) : (
                                <>
                                  <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12' />
                                  </svg>
                                  Upload
                                </>
                              )}
                            </label>
                          </div>
                          <input
                            type='text'
                            value={section.content}
                            onChange={e => updateSection(section.id, 'content', e.target.value)}
                            placeholder='Or enter image URL'
                            className='w-full px-4 py-2 bg-gray-900 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
                          />
                          {section.content && (
                            <div className='relative h-48 rounded-lg overflow-hidden bg-gray-900'>
                              <img
                                src={section.content}
                                alt='Preview'
                                className='w-full h-full object-contain'
                              />
                              <button
                                type='button'
                                onClick={() => updateSection(section.id, 'content', '')}
                                className='absolute top-2 right-2 p-1.5 bg-red-500/80 text-white rounded-full hover:bg-red-600 transition-colors'
                              >
                                <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                                </svg>
                              </button>
                            </div>
                          )}
                          {/* Image Caption */}
                          <input
                            type='text'
                            value={section.caption || ''}
                            onChange={e => updateSection(section.id, 'caption', e.target.value)}
                            placeholder='Image caption (optional)'
                            className='w-full px-4 py-2 bg-gray-900 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm'
                          />
                        </div>
                      ) : section.type === 'video' ? (
                        <div className='space-y-3'>
                          <input
                            type='text'
                            value={section.content}
                            onChange={e => updateSection(section.id, 'content', e.target.value)}
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
                      ) : section.type === 'quote' ? (
                        <div className='space-y-3'>
                          <textarea
                            value={section.content}
                            onChange={e => updateSection(section.id, 'content', e.target.value)}
                            placeholder='Enter quote text'
                            rows={3}
                            className='w-full px-4 py-3 bg-gray-900 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none italic'
                          />
                          <input
                            type='text'
                            value={section.author || ''}
                            onChange={e => updateSection(section.id, 'author', e.target.value)}
                            placeholder='Quote author (optional)'
                            className='w-full px-4 py-2 bg-gray-900 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm'
                          />
                          {/* Preview */}
                          {section.content && (
                            <div className='p-4 bg-purple-500/10 border-l-4 border-purple-500 rounded-r-lg'>
                              <p className='text-gray-200 italic'>&ldquo;{section.content}&rdquo;</p>
                              {section.author && (
                                <p className='text-purple-400 text-sm mt-2'>— {section.author}</p>
                              )}
                            </div>
                          )}
                        </div>
                      ) : section.type === 'code' ? (
                        <div className='space-y-3'>
                          <select
                            value={section.language || 'javascript'}
                            onChange={e => updateSection(section.id, 'language', e.target.value)}
                            className='px-4 py-2 bg-gray-900 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500'
                          >
                            <option value='javascript'>JavaScript</option>
                            <option value='typescript'>TypeScript</option>
                            <option value='python'>Python</option>
                            <option value='html'>HTML</option>
                            <option value='css'>CSS</option>
                            <option value='bash'>Bash</option>
                            <option value='json'>JSON</option>
                          </select>
                          <textarea
                            value={section.content}
                            onChange={e => updateSection(section.id, 'content', e.target.value)}
                            placeholder='Enter code...'
                            rows={6}
                            className='w-full px-4 py-3 bg-gray-900 border border-white/10 rounded-lg text-cyan-400 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 font-mono text-sm resize-none'
                          />
                        </div>
                      ) : section.type === 'cta' ? (
                        <div className='space-y-3'>
                          <textarea
                            value={section.content}
                            onChange={e => updateSection(section.id, 'content', e.target.value)}
                            placeholder='CTA text/description'
                            rows={2}
                            className='w-full px-4 py-3 bg-gray-900 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none'
                          />
                          <div className='grid grid-cols-2 gap-3'>
                            <input
                              type='text'
                              value={section.buttonText || ''}
                              onChange={e => updateSection(section.id, 'buttonText', e.target.value)}
                              placeholder='Button text'
                              className='px-4 py-2 bg-gray-900 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm'
                            />
                            <input
                              type='text'
                              value={section.buttonUrl || ''}
                              onChange={e => updateSection(section.id, 'buttonUrl', e.target.value)}
                              placeholder='Button URL'
                              className='px-4 py-2 bg-gray-900 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm'
                            />
                          </div>
                          {/* Preview */}
                          {section.content && (
                            <div className='p-6 bg-gradient-to-r from-orange-500/20 to-pink-500/20 border border-orange-500/30 rounded-xl text-center'>
                              <p className='text-gray-200 mb-4'>{section.content}</p>
                              <span className='inline-block px-6 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-medium rounded-lg'>
                                {section.buttonText || 'Button'}
                              </span>
                            </div>
                          )}
                        </div>
                      ) : section.type === 'gallery' ? (
                        <div className='space-y-4'>
                          {/* Upload buttons */}
                          <div className='flex flex-wrap gap-2'>
                            <input
                              type='file'
                              accept='image/*'
                              multiple
                              onChange={e => {
                                const files = e.target.files
                                if (files) {
                                  Array.from(files).forEach(file => {
                                    handleGalleryImageUpload(section.id, file)
                                  })
                                }
                              }}
                              className='hidden'
                              id={`gallery-upload-${section.id}`}
                            />
                            <label
                              htmlFor={`gallery-upload-${section.id}`}
                              className='py-2 px-4 bg-indigo-500/20 border border-indigo-500/30 text-indigo-400 text-sm font-medium rounded-lg hover:bg-indigo-500/30 transition-colors flex items-center gap-2 cursor-pointer'
                            >
                              {uploadingSection === section.id ? (
                                <>
                                  <svg className='w-4 h-4 animate-spin' fill='none' viewBox='0 0 24 24'>
                                    <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
                                    <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z' />
                                  </svg>
                                  Uploading...
                                </>
                              ) : (
                                <>
                                  <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12' />
                                  </svg>
                                  Upload Images
                                </>
                              )}
                            </label>
                            <span className='text-gray-500 text-sm py-2'>or add URL below</span>
                          </div>

                          {/* Add image by URL */}
                          <div className='flex gap-2'>
                            <input
                              type='text'
                              placeholder='Enter image URL'
                              className='flex-1 px-4 py-2 bg-gray-900 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm'
                              onKeyDown={e => {
                                if (e.key === 'Enter') {
                                  e.preventDefault()
                                  const input = e.target as HTMLInputElement
                                  if (input.value.trim()) {
                                    addGalleryImage(section.id, input.value.trim())
                                    input.value = ''
                                  }
                                }
                              }}
                            />
                            <button
                              type='button'
                              onClick={e => {
                                const input = (e.target as HTMLElement).previousElementSibling as HTMLInputElement
                                if (input?.value.trim()) {
                                  addGalleryImage(section.id, input.value.trim())
                                  input.value = ''
                                }
                              }}
                              className='px-4 py-2 bg-indigo-500/20 text-indigo-400 rounded-lg hover:bg-indigo-500/30 transition-colors text-sm font-medium'
                            >
                              Add
                            </button>
                          </div>

                          {/* Gallery grid preview */}
                          {section.images && section.images.length > 0 ? (
                            <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
                              {section.images.map((img, imgIndex) => (
                                <div key={imgIndex} className='relative group'>
                                  <div className='aspect-square rounded-lg overflow-hidden bg-gray-900'>
                                    <img
                                      src={img.url}
                                      alt={img.caption || `Gallery image ${imgIndex + 1}`}
                                      className='w-full h-full object-cover'
                                    />
                                  </div>
                                  <button
                                    type='button'
                                    onClick={() => removeGalleryImage(section.id, imgIndex)}
                                    className='absolute top-2 right-2 p-1.5 bg-red-500/80 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600'
                                  >
                                    <svg className='w-3 h-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                                    </svg>
                                  </button>
                                  <input
                                    type='text'
                                    value={img.caption || ''}
                                    onChange={e => updateGalleryImageCaption(section.id, imgIndex, e.target.value)}
                                    placeholder='Caption'
                                    className='mt-2 w-full px-2 py-1 bg-gray-900 border border-white/10 rounded text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-xs'
                                  />
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className='p-8 border-2 border-dashed border-white/10 rounded-lg text-center'>
                              <svg className='w-10 h-10 text-gray-600 mx-auto mb-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' />
                              </svg>
                              <p className='text-gray-500 text-sm'>No images in gallery. Upload or add URLs above.</p>
                            </div>
                          )}

                          {/* Gallery title/caption */}
                          <input
                            type='text'
                            value={section.content}
                            onChange={e => updateSection(section.id, 'content', e.target.value)}
                            placeholder='Gallery title (optional)'
                            className='w-full px-4 py-2 bg-gray-900 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm'
                          />
                        </div>
                      ) : null}
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
                  {/* Draft/Published Toggle */}
                  <div>
                    <label className='block text-sm font-medium text-gray-300 mb-2'>
                      Status
                    </label>
                    <div className='flex gap-2'>
                      <button
                        type='button'
                        onClick={() => setStatus('draft')}
                        className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                          status === 'draft'
                            ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                            : 'bg-gray-800 text-gray-400 border border-white/10 hover:text-white'
                        }`}
                      >
                        Draft
                      </button>
                      <button
                        type='button'
                        onClick={() => setStatus('published')}
                        className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                          status === 'published'
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                            : 'bg-gray-800 text-gray-400 border border-white/10 hover:text-white'
                        }`}
                      >
                        Published
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-gray-300 mb-2'>
                      Category *
                    </label>
                    <select
                      value={category}
                      onChange={e => setCategory(e.target.value)}
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
                      value={publishedAt}
                      onChange={e => setPublishedAt(e.target.value)}
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
                        Publishing...
                      </>
                    ) : (
                      <>
                        <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                        </svg>
                        Publish Article
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Featured Image Card */}
              <div className='bg-gray-900 border border-white/10 rounded-2xl p-6'>
                <h2 className='text-lg font-semibold text-white mb-6'>Featured Image</h2>

                <div className='space-y-4'>
                  {/* File Upload */}
                  <input
                    ref={featuredImageInputRef}
                    type='file'
                    accept='image/*'
                    onChange={handleFeaturedImageUpload}
                    className='hidden'
                  />
                  <button
                    type='button'
                    onClick={() => featuredImageInputRef.current?.click()}
                    disabled={uploading}
                    className='w-full py-3 px-4 bg-blue-500/20 border border-blue-500/30 text-blue-400 font-medium rounded-xl hover:bg-blue-500/30 transition-colors flex items-center justify-center gap-2 disabled:opacity-50'
                  >
                    {uploading ? (
                      <>
                        <svg className='w-5 h-5 animate-spin' fill='none' viewBox='0 0 24 24'>
                          <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
                          <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z' />
                        </svg>
                        Uploading...
                      </>
                    ) : (
                      <>
                        <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12' />
                        </svg>
                        Upload Image
                      </>
                    )}
                  </button>

                  {/* Or enter URL */}
                  <div className='relative'>
                    <div className='absolute inset-0 flex items-center'>
                      <div className='w-full border-t border-white/10' />
                    </div>
                    <div className='relative flex justify-center'>
                      <span className='px-3 bg-gray-900 text-gray-500 text-sm'>or enter URL</span>
                    </div>
                  </div>

                  <input
                    type='text'
                    value={imageUrl}
                    onChange={e => setImageUrl(e.target.value)}
                    className='w-full px-4 py-3 bg-gray-800 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent'
                    placeholder='Enter image URL'
                  />

                  {imageUrl ? (
                    <div className='relative h-48 rounded-xl overflow-hidden bg-gray-800'>
                      <img
                        src={imageUrl}
                        alt='Featured preview'
                        className='w-full h-full object-contain'
                      />
                      <button
                        type='button'
                        onClick={() => setImageUrl('')}
                        className='absolute top-2 right-2 p-1.5 bg-red-500/80 text-white rounded-full hover:bg-red-600 transition-colors'
                      >
                        <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                        </svg>
                      </button>
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

              {/* Tags Card */}
              <div className='bg-gray-900 border border-white/10 rounded-2xl p-6'>
                <h2 className='text-lg font-semibold text-white mb-6'>Tags</h2>

                <div className='space-y-4'>
                  <div className='flex gap-2'>
                    <input
                      type='text'
                      value={tagInput}
                      onChange={e => setTagInput(e.target.value)}
                      onKeyDown={handleTagKeyPress}
                      className='flex-1 px-4 py-2 bg-gray-800 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent'
                      placeholder='Add tag and press Enter'
                    />
                    <button
                      type='button'
                      onClick={addTag}
                      className='px-4 py-2 bg-pink-500/20 text-pink-400 rounded-xl hover:bg-pink-500/30 transition-colors'
                    >
                      Add
                    </button>
                  </div>

                  {tags.length > 0 && (
                    <div className='flex flex-wrap gap-2'>
                      {tags.map(tag => (
                        <span
                          key={tag}
                          className='inline-flex items-center gap-1 px-3 py-1 bg-white/5 border border-white/10 text-gray-300 text-sm rounded-full'
                        >
                          #{tag}
                          <button
                            type='button'
                            onClick={() => removeTag(tag)}
                            className='text-gray-500 hover:text-red-400 transition-colors'
                          >
                            <svg className='w-3 h-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                            </svg>
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* SEO Preview Card */}
              <div className='bg-gray-900 border border-white/10 rounded-2xl p-6'>
                <h2 className='text-lg font-semibold text-white mb-6'>SEO Preview</h2>

                <div className='space-y-3 p-4 bg-white rounded-xl'>
                  <p className='text-blue-600 text-sm truncate'>
                    mybartenders.co.uk/articles/{slug || 'your-article-slug'}
                  </p>
                  <h3 className='text-blue-800 text-lg font-medium line-clamp-2'>
                    {title || 'Article Title'} | MyBartenders
                  </h3>
                  <p className='text-gray-600 text-sm line-clamp-2'>
                    {description || 'Article description will appear here...'}
                  </p>
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

export default withAuth(NewArticlePage)
