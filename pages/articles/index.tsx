import Link from 'next/link'
import { useState } from 'react'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '../../app/globals.css'

const articles = [
  {
    slug: 'mobile-cocktail-bar-hire',
    title: 'Mobile Cocktail Bar Hire for Your Event',
    description:
      'Elevate your event with a mobile cocktail bar that combines style, convenience, and unforgettable drinks.',
    image:
      'https://cdn.pixabay.com/photo/2017/03/27/14/09/cocktail-2171329_960_720.jpg' // Pixabay image
  },
  {
    slug: 'mobile-cocktail-bar-hire',
    title: 'Mobile Cocktail Bar Hire for Your Event',
    description:
      'Elevate your event with a mobile cocktail bar that combines style, convenience, and unforgettable drinks.',
    image:
      'https://cdn.pixabay.com/photo/2017/08/02/01/44/drink-2578750_960_720.jpg' // Pixabay image
  },
  {
    slug: 'mobile-cocktail-bar-hire',
    title: 'Mobile Cocktail Bar Hire for Your Event',
    description:
      'Elevate your event with a mobile cocktail bar that combines style, convenience, and unforgettable drinks.',
    image:
      'https://cdn.pixabay.com/photo/2016/03/27/20/51/cocktail-1275091_960_720.jpg' // Pixabay image
  },
  {
    slug: 'mobile-cocktail-bar-hire',
    title: 'Mobile Cocktail Bar Hire for Your Event',
    description:
      'Elevate your event with a mobile cocktail bar that combines style, convenience, and unforgettable drinks.',
    image:
      'https://cdn.pixabay.com/photo/2017/08/31/02/44/drinks-2697975_960_720.jpg' // Pixabay image
  },
  {
    slug: 'mobile-cocktail-bar-hire',
    title: 'Mobile Cocktail Bar Hire for Your Event',
    description:
      'Elevate your event with a mobile cocktail bar that combines style, convenience, and unforgettable drinks.',
    image:
      'https://cdn.pixabay.com/photo/2016/10/09/09/46/cocktails-1723919_960_720.jpg' // Pixabay image
  },
  {
    slug: 'cocktail-ideas-for-weddings',
    title: 'Top 10 Cocktail Ideas for Weddings',
    description:
      'Discover unique cocktail ideas to make your wedding celebration truly special.',
    image:
      'https://cdn.pixabay.com/photo/2016/04/29/19/56/cocktail-1416739_960_720.jpg' // Pixabay image
  },
  {
    slug: 'how-to-plan-a-corporate-event',
    title: 'How to Plan a Corporate Event with Flair',
    description:
      'Impress your clients and employees with a well-planned event featuring signature cocktails.',
    image:
      'https://cdn.pixabay.com/photo/2017/11/22/12/35/cocktail-2974409_960_720.jpg' // Pixabay image
  }
]

const ArticlesPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const articlesPerPage = 6
  const totalArticles = articles.length

  // Slice the articles to show only the current page's articles
  const indexOfLastArticle = currentPage * articlesPerPage
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  )

  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <div className='bg-white min-h-screen'>
      {/* Hero Section */}
      <header className='py-16 text-center mt-16 bg-white'>
        <h1 className='text-5xl font-extrabold text-gold mb-4'>
          Discover Our Articles
        </h1>
        <p className='text-lg text-gray-700 max-w-2xl mx-auto'>
          Dive into our expert tips and creative ideas for hosting memorable
          events with our mobile cocktail bar services.
        </p>
      </header>

      {/* Article Grid */}
      <section className='py-12 px-6'>
        <Navbar />
        <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
          {currentArticles.map(article => (
            <Link key={article.slug} href={`/articles/${article.slug}`}>
              <div className='group relative cursor-pointer bg-white rounded-3xl shadow-lg overflow-hidden hover:scale-105 transform transition-all'>
                {/* Article Image */}
                <div className='h-64 overflow-hidden'>
                  <img
                    src={article.image}
                    alt={article.title}
                    className='w-full h-full object-cover group-hover:opacity-90 transition-all'
                  />
                </div>
                {/* Content */}
                <div className='p-6'>
                  <h2 className='text-3xl font-bold text-gray-800 group-hover:text-gold transition duration-300'>
                    {article.title}
                  </h2>
                  <p className='text-gray-600 mt-2'>{article.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className='flex justify-center mt-8'>
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className='px-4 py-2 bg-gold text-black font-semibold rounded-lg shadow-md disabled:opacity-50'
          >
            Previous
          </button>
          <span className='px-4 py-2 text-xl font-semibold'>
            Page {currentPage}
          </span>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage * articlesPerPage >= totalArticles}
            className='px-4 py-2 bg-gold text-black font-semibold rounded-lg shadow-md disabled:opacity-50'
          >
            Next
          </button>
        </div>
      </section>

      {/* Call to Action */}
      <section className='bg-white py-16'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-4xl font-extrabold text-gray-800 mb-6'>
            Ready to Plan Your Perfect Event?
          </h2>
          <p className='text-lg text-gray-600 mb-8'>
            Contact us today to learn how we can make your next event truly
            unforgettable with our mobile cocktail bar services.
          </p>
          <a
            href='/contact'
            className='inline-block bg-gold text-black font-bold py-4 px-8 rounded-full shadow-xl transform hover:scale-105 transition-all'
          >
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ArticlesPage
