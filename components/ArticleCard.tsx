// components/ArticleCard.js

import React from 'react'
import Link from 'next/link'

const ArticleCard = ({ article }) => {
  return (
    <div className='bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out'>
      <img
        src={article.image}
        alt={article.title}
        className='w-full h-32 object-cover'
      />
      <div className='p-4'>
        <h2 className='text-xl font-semibold mb-2'>{article.title}</h2>
        <p className='text-gray-600 mb-4'>
          {article.author} | {article.date}
        </p>
        <p className='text-gray-700'>{article.excerpt}</p>
        <Link href={`/articles/${article.id}`}>
          <a className='mt-4 block text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out'>
            Read more
          </a>
        </Link>
      </div>
    </div>
  )
}

export default ArticleCard
