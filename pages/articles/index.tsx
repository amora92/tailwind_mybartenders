import React, { useEffect, useState } from 'react'
import Link from 'next/link' // Import Link to handle navigation
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '../../app/globals.css'

const Articles = () => {
  const [articles, setArticles] = useState([]) // Initialize articles as an empty array

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch('/api/articles')
      const data = await response.json()

      // Check if the response data is an array before updating state
      if (Array.isArray(data)) {
        setArticles(data)
      } else {
        setArticles([])
      }
    }

    fetchArticles()
  }, [])

  return (
    <div>
      {/* Add Navbar */}
      <Navbar />

      <h1 className='text-center text-4xl font-extrabold my-12'>Articles</h1>

      {/* Articles Grid Layout */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 px-6'>
        {Array.isArray(articles) && articles.length > 0 ? (
          articles.map(article => (
            <Link key={article.slug} href={`/articles/${article.slug}`}>
              <div className='bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-all'>
                <h2 className='text-2xl font-bold mb-4'>{article.title}</h2>
                <p className='text-gray-600'>{article.description}</p>
              </div>
            </Link>
          ))
        ) : (
          <p>No articles found.</p>
        )}
      </div>

      {/* Add Footer */}
      <Footer />
    </div>
  )
}

export default Articles
