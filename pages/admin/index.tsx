import { useState } from 'react'
import { articles } from '../../data/articles' // Import the articles array

const AdminPage = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState('')
  const [slug, setSlug] = useState('')
  const [date, setDate] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    const newArticle = {
      slug,
      title,
      description,
      content,
      image,
      date
    }

    // You could push to the articles array here or ideally save to an API
    articles.push(newArticle)
    alert('Article added successfully!')
  }

  return (
    <div className='max-w-2xl mx-auto py-16'>
      <h1 className='text-3xl font-bold mb-8'>Add New Article</h1>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label htmlFor='title' className='block text-gray-700'>
            Title
          </label>
          <input
            type='text'
            id='title'
            value={title}
            onChange={e => setTitle(e.target.value)}
            className='w-full p-4 border border-gray-300 rounded-lg'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='slug' className='block text-gray-700'>
            Slug
          </label>
          <input
            type='text'
            id='slug'
            value={slug}
            onChange={e => setSlug(e.target.value)}
            className='w-full p-4 border border-gray-300 rounded-lg'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='description' className='block text-gray-700'>
            Description
          </label>
          <textarea
            id='description'
            value={description}
            onChange={e => setDescription(e.target.value)}
            className='w-full p-4 border border-gray-300 rounded-lg'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='content' className='block text-gray-700'>
            Content
          </label>
          <textarea
            id='content'
            value={content}
            onChange={e => setContent(e.target.value)}
            className='w-full p-4 border border-gray-300 rounded-lg'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='image' className='block text-gray-700'>
            Image URL
          </label>
          <input
            type='text'
            id='image'
            value={image}
            onChange={e => setImage(e.target.value)}
            className='w-full p-4 border border-gray-300 rounded-lg'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='date' className='block text-gray-700'>
            Date (YYYY-MM-DD)
          </label>
          <input
            type='text'
            id='date'
            value={date}
            onChange={e => setDate(e.target.value)}
            className='w-full p-4 border border-gray-300 rounded-lg'
            required
          />
        </div>
        <button
          type='submit'
          className='px-6 py-3 bg-gold text-black font-semibold rounded-lg'
        >
          Add Article
        </button>
      </form>
    </div>
  )
}

export default AdminPage
