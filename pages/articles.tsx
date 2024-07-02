// pages/articles.tsx

import React from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import articlesData from '../data/articles.json' // Adjust the path as necessary
import '../app/globals.css'

interface Article {
  id: number
  title: string
  author: string
  date: string
  excerpt: string
}

const ArticleCard: React.FC<Article> = ({
  id,
  title,
  author,
  date,
  excerpt
}) => (
  <Link href={`/articles/${id}`} passHref>
    <div className='cursor-pointer bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105'>
      <div className='p-4'>
        <h2 className='text-xl font-semibold mb-2'>{title}</h2>
        <p className='text-gray-600 mb-2'>
          By {author} | {date}
        </p>
        <p className='text-gray-700'>{excerpt}</p>
      </div>
    </div>
  </Link>
)

const Articles: React.FC = () => {
  // Assuming articlesData is an array of articles fetched from articles.json
  const [articles, setArticles] = React.useState<Article[]>([])

  React.useEffect(() => {
    // Simulating fetching articles from JSON file
    setArticles(articlesData)
  }, [])

  return (
    <div className='min-h-screen bg-gray-100'>
      <Navbar />
      <main className='container mx-auto px-6 lg:px-20 py-12'>
        <h1 className='text-4xl font-bold mb-8 text-center'>Articles</h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:pb-10'>
          {articles.map(article => (
            <ArticleCard
              key={article.id}
              id={article.id}
              title={article.title}
              author={article.author}
              date={article.date}
              excerpt={article.excerpt}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Articles
