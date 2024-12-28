import { useState } from 'react'
import { withAuth } from '../../components/withAuth'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'
import { Tab } from '@headlessui/react'
import { EyeIcon, PencilIcon } from '@heroicons/react/24/outline'

// Dynamic import of ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

const AdminPage = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState('')
  const [slug, setSlug] = useState('')
  const [date, setDate] = useState('')
  const [category, setCategory] = useState('General')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [previewMode, setPreviewMode] = useState(false)

  // Quill editor configurations
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['blockquote', 'code-block'],
      ['link', 'image'],
      ['clean']
    ]
  }

  const categories = [
    'General',
    'Technology',
    'Programming',
    'Design',
    'Business',
    'Lifestyle',
    'Tutorial'
  ]

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
  }

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value
    setTitle(newTitle)
    setSlug(generateSlug(newTitle))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const newArticle = {
      title,
      description,
      content,
      imageUrl: image,
      slug,
      publishedAt: new Date(date).toISOString(),
      category,
      author: {
        name: 'Admin',
        avatar: '/default-avatar.png'
      },
      readTime: `${Math.max(
        1,
        Math.ceil(content.split(' ').length / 200)
      )} min read`
    }

    try {
      const res = await fetch('/api/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newArticle)
      })

      const data = await res.json()

      if (res.status === 201) {
        setSuccess('Article added successfully')
        // Keep the form data for quick editing if needed
        setTimeout(() => setSuccess(''), 3000)
      } else {
        setError(data.error || 'Something went wrong')
      }
    } catch (error) {
      console.error('Error while submitting:', error)
      setError('Failed to add article')
    }
  }

  const ArticlePreview = () => (
    <div className='prose max-w-none'>
      <h1>{title || 'Article Title'}</h1>
      {image && (
        <img
          src={image}
          alt={title}
          className='w-full h-64 object-cover rounded-lg mb-6'
        />
      )}
      <p className='lead'>
        {description || 'Article description will appear here'}
      </p>
      <div
        dangerouslySetInnerHTML={{
          __html: content || 'Article content will appear here'
        }}
      />
    </div>
  )

  return (
    <div className='max-w-4xl mx-auto py-16 px-4'>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold mb-2'>Create New Article</h1>
        <p className='text-gray-600'>
          Fill in the details below to create a new article
        </p>
      </div>

      <Tab.Group>
        <Tab.List className='flex space-x-4 mb-8'>
          <Tab
            className={({ selected }) =>
              `${
                selected
                  ? 'bg-gold-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gold-50'
              } flex items-center px-4 py-2 rounded-lg font-medium transition-colors`
            }
          >
            <PencilIcon className='w-5 h-5 mr-2' />
            Editor
          </Tab>
          <Tab
            className={({ selected }) =>
              `${
                selected
                  ? 'bg-gold-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gold-50'
              } flex items-center px-4 py-2 rounded-lg font-medium transition-colors`
            }
          >
            <EyeIcon className='w-5 h-5 mr-2' />
            Preview
          </Tab>
        </Tab.List>

        <Tab.Panels>
          <Tab.Panel>
            <form onSubmit={handleSubmit} className='space-y-6'>
              {error && (
                <div className='bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded relative'>
                  {error}
                </div>
              )}
              {success && (
                <div className='bg-green-50 border border-green-400 text-green-700 px-4 py-3 rounded relative'>
                  {success}
                </div>
              )}

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Title
                  </label>
                  <input
                    type='text'
                    value={title}
                    onChange={handleTitleChange}
                    className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent'
                    required
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Slug
                  </label>
                  <input
                    type='text'
                    value={slug}
                    onChange={e => setSlug(e.target.value)}
                    className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent bg-gray-50'
                    required
                  />
                </div>
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent'
                  rows={3}
                  required
                />
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Category
                  </label>
                  <select
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                    className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent'
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Publication Date
                  </label>
                  <input
                    type='datetime-local'
                    value={date}
                    onChange={e => setDate(e.target.value)}
                    className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent'
                    required
                  />
                </div>
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Featured Image URL
                </label>
                <input
                  type='text'
                  value={image}
                  onChange={e => setImage(e.target.value)}
                  placeholder='https://source.unsplash.com/random/800x600'
                  className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent'
                  required
                />
                {image && (
                  <div className='mt-2'>
                    <img
                      src={image}
                      alt='Preview'
                      className='w-full h-48 object-cover rounded-lg'
                    />
                  </div>
                )}
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Content
                </label>
                <ReactQuill
                  value={content}
                  onChange={setContent}
                  modules={modules}
                  className='bg-white rounded-lg'
                />
              </div>

              <div className='flex justify-end space-x-4'>
                <button
                  type='button'
                  onClick={() => {
                    setTitle('')
                    setDescription('')
                    setContent('')
                    setImage('')
                    setSlug('')
                    setDate('')
                    setCategory('General')
                  }}
                  className='px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors'
                >
                  Clear Form
                </button>
                <button
                  type='submit'
                  className='px-6 py-3 bg-gold-600 text-white font-semibold rounded-lg hover:bg-gold-700 transition-colors'
                >
                  Publish Article
                </button>
              </div>
            </form>
          </Tab.Panel>

          <Tab.Panel>
            <div className='bg-white p-8 rounded-lg shadow'>
              <ArticlePreview />
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default withAuth(AdminPage)
