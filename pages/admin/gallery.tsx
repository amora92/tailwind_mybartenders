import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { withAuth } from '@/components/withAuth'
import { AdminHeader } from '@/components/admin/Header'

interface GalleryImage {
  _id: string
  src: string
  alt: string
  category: 'cocktails' | 'events' | 'setup'
  span?: string
  createdAt: string
}

const CATEGORIES = [
  { value: 'cocktails', label: 'Cocktails' },
  { value: 'events', label: 'Events' },
  { value: 'setup', label: 'Setup' }
]

const SPAN_OPTIONS = [
  { value: '', label: 'Normal' },
  { value: 'md:col-span-2', label: 'Wide' },
  { value: 'md:col-span-2 md:row-span-2', label: 'Featured (Large)' }
]

const AdminGallery = () => {
  const [images, setImages] = useState<GalleryImage[]>([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const fileInputRef = useRef<HTMLInputElement>(null)

  // New image form
  const [newImage, setNewImage] = useState({
    src: '',
    alt: '',
    category: 'cocktails',
    span: ''
  })

  useEffect(() => {
    fetchImages()
  }, [])

  const fetchImages = async () => {
    try {
      const res = await fetch('/api/gallery')
      const data = await res.json()
      setImages(Array.isArray(data) ? data : [])
    } catch (err) {
      console.error('Error fetching gallery:', err)
    } finally {
      setLoading(false)
    }
  }

  const uploadFile = async (file: File): Promise<string | null> => {
    const formData = new FormData()
    formData.append('file', file)

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      })

      if (!res.ok) throw new Error('Upload failed')
      const data = await res.json()
      return data.url
    } catch (err) {
      console.error('Upload error:', err)
      setError('Failed to upload file')
      return null
    }
  }

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) return

    setUploading(true)
    setError('')
    setSuccess('')

    try {
      for (const file of Array.from(files)) {
        const url = await uploadFile(file)
        if (url) {
          // Auto-generate alt from filename
          const altText = file.name
            .replace(/\.[^/.]+$/, '')
            .replace(/[-_]/g, ' ')
            .replace(/\b\w/g, l => l.toUpperCase())

          // Add to gallery database
          const res = await fetch('/api/gallery', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              src: url,
              alt: altText,
              category: 'cocktails',
              span: ''
            })
          })

          if (res.ok) {
            const newImg = await res.json()
            setImages(prev => [newImg, ...prev])
          }
        }
      }
      setSuccess(`Successfully uploaded ${files.length} image(s)`)
    } catch (err) {
      setError('Failed to upload images')
    } finally {
      setUploading(false)
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    }
  }

  const handleAddUrl = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newImage.src || !newImage.alt) {
      setError('Image URL and description are required')
      return
    }

    setError('')
    setSuccess('')

    try {
      const res = await fetch('/api/gallery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newImage)
      })

      if (!res.ok) throw new Error('Failed to add image')

      const addedImage = await res.json()
      setImages(prev => [addedImage, ...prev])
      setNewImage({ src: '', alt: '', category: 'cocktails', span: '' })
      setSuccess('Image added successfully')
    } catch (err) {
      setError('Failed to add image')
    }
  }

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this image?')) return

    try {
      const res = await fetch(`/api/gallery?id=${id}`, {
        method: 'DELETE'
      })

      if (!res.ok) throw new Error('Failed to delete')

      setImages(prev => prev.filter(img => img._id !== id))
      setSuccess('Image deleted successfully')
    } catch (err) {
      setError('Failed to delete image')
    }
  }

  const filteredImages = selectedCategory === 'all'
    ? images
    : images.filter(img => img.category === selectedCategory)

  if (loading) {
    return (
      <div className='min-h-screen bg-gray-950'>
        <Head>
          <meta name='robots' content='noindex, nofollow' />
          <title>Gallery Management | Admin</title>
        </Head>
        <AdminHeader />
        <div className='max-w-7xl mx-auto py-12 px-4'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
              <div key={i} className='aspect-square bg-gray-800 rounded-xl animate-pulse' />
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-gray-950'>
      <Head>
        <meta name='robots' content='noindex, nofollow' />
        <title>Gallery Management | Admin</title>
      </Head>

      <AdminHeader />

      <div className='max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-8'>
          <div>
            <h1 className='text-3xl font-bold text-white mb-2'>Gallery Management</h1>
            <p className='text-gray-400'>Upload and manage gallery images</p>
          </div>
          <div className='mt-4 md:mt-0 flex items-center gap-3'>
            <Link
              href='/gallery'
              className='inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-gray-300 hover:text-white rounded-xl transition-all'
            >
              <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
              </svg>
              View Gallery
            </Link>
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

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Upload Section */}
          <div className='lg:col-span-1 space-y-6'>
            {/* File Upload Card */}
            <div className='bg-gray-900 border border-white/10 rounded-2xl p-6'>
              <h2 className='text-lg font-semibold text-white mb-4'>Upload Images</h2>

              <input
                ref={fileInputRef}
                type='file'
                accept='image/*'
                multiple
                onChange={handleFileUpload}
                className='hidden'
                id='gallery-file-upload'
              />

              <label
                htmlFor='gallery-file-upload'
                className={`block w-full p-8 border-2 border-dashed rounded-xl text-center cursor-pointer transition-colors ${
                  uploading
                    ? 'border-pink-500/50 bg-pink-500/5'
                    : 'border-white/20 hover:border-pink-500/50 hover:bg-white/5'
                }`}
              >
                {uploading ? (
                  <div className='flex flex-col items-center gap-3'>
                    <svg className='w-10 h-10 text-pink-400 animate-spin' fill='none' viewBox='0 0 24 24'>
                      <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
                      <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z' />
                    </svg>
                    <span className='text-pink-400 font-medium'>Uploading...</span>
                  </div>
                ) : (
                  <div className='flex flex-col items-center gap-3'>
                    <svg className='w-10 h-10 text-gray-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12' />
                    </svg>
                    <div>
                      <span className='text-white font-medium'>Click to upload</span>
                      <span className='text-gray-500'> or drag and drop</span>
                    </div>
                    <span className='text-gray-500 text-sm'>PNG, JPG, WEBP up to 10MB</span>
                  </div>
                )}
              </label>
            </div>

            {/* Add by URL Card */}
            <div className='bg-gray-900 border border-white/10 rounded-2xl p-6'>
              <h2 className='text-lg font-semibold text-white mb-4'>Add by URL</h2>

              <form onSubmit={handleAddUrl} className='space-y-4'>
                <div>
                  <label className='block text-sm font-medium text-gray-300 mb-2'>Image URL *</label>
                  <input
                    type='url'
                    value={newImage.src}
                    onChange={e => setNewImage(prev => ({ ...prev, src: e.target.value }))}
                    placeholder='https://...'
                    className='w-full px-4 py-3 bg-gray-800 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500'
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-300 mb-2'>Description *</label>
                  <input
                    type='text'
                    value={newImage.alt}
                    onChange={e => setNewImage(prev => ({ ...prev, alt: e.target.value }))}
                    placeholder='Describe the image...'
                    className='w-full px-4 py-3 bg-gray-800 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500'
                  />
                </div>

                <div className='grid grid-cols-2 gap-4'>
                  <div>
                    <label className='block text-sm font-medium text-gray-300 mb-2'>Category</label>
                    <select
                      value={newImage.category}
                      onChange={e => setNewImage(prev => ({ ...prev, category: e.target.value }))}
                      className='w-full px-4 py-3 bg-gray-800 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-pink-500'
                    >
                      {CATEGORIES.map(cat => (
                        <option key={cat.value} value={cat.value} className='bg-gray-800'>
                          {cat.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-gray-300 mb-2'>Size</label>
                    <select
                      value={newImage.span}
                      onChange={e => setNewImage(prev => ({ ...prev, span: e.target.value }))}
                      className='w-full px-4 py-3 bg-gray-800 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-pink-500'
                    >
                      {SPAN_OPTIONS.map(opt => (
                        <option key={opt.value} value={opt.value} className='bg-gray-800'>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type='submit'
                  className='w-full py-3 px-4 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white font-semibold rounded-xl shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-all'
                >
                  Add Image
                </button>
              </form>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className='lg:col-span-2'>
            <div className='bg-gray-900 border border-white/10 rounded-2xl p-6'>
              <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6'>
                <div className='flex items-center gap-3'>
                  <h2 className='text-lg font-semibold text-white'>Gallery Images</h2>
                  <span className='px-2.5 py-1 bg-pink-500/20 text-pink-400 text-xs font-medium rounded-full'>
                    {filteredImages.length}
                  </span>
                </div>

                {/* Category Filter */}
                <div className='flex gap-2'>
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                      selectedCategory === 'all'
                        ? 'bg-pink-500/20 text-pink-400'
                        : 'bg-white/5 text-gray-400 hover:text-white'
                    }`}
                  >
                    All
                  </button>
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat.value}
                      onClick={() => setSelectedCategory(cat.value)}
                      className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                        selectedCategory === cat.value
                          ? 'bg-pink-500/20 text-pink-400'
                          : 'bg-white/5 text-gray-400 hover:text-white'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {filteredImages.length === 0 ? (
                <div className='py-12 text-center'>
                  <svg className='w-16 h-16 text-gray-600 mx-auto mb-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' />
                  </svg>
                  <p className='text-gray-500'>No images yet. Upload some above!</p>
                </div>
              ) : (
                <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                  {filteredImages.map(image => (
                    <div key={image._id} className='group relative aspect-square rounded-xl overflow-hidden bg-gray-800'>
                      <img
                        src={image.src}
                        alt={image.alt}
                        className='w-full h-full object-cover'
                      />

                      {/* Overlay */}
                      <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity'>
                        <div className='absolute bottom-0 left-0 right-0 p-3'>
                          <p className='text-white text-sm font-medium line-clamp-2 mb-2'>
                            {image.alt}
                          </p>
                          <div className='flex items-center justify-between'>
                            <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                              image.category === 'cocktails'
                                ? 'bg-blue-500/30 text-blue-300'
                                : image.category === 'events'
                                ? 'bg-green-500/30 text-green-300'
                                : 'bg-purple-500/30 text-purple-300'
                            }`}>
                              {image.category}
                            </span>
                            <button
                              onClick={() => handleDelete(image._id)}
                              className='p-1.5 bg-red-500/80 text-white rounded-lg hover:bg-red-600 transition-colors'
                              title='Delete image'
                            >
                              <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16' />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withAuth(AdminGallery)
