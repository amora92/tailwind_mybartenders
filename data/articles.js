import { useRouter } from 'next/router'
import { articles } from '../../data/articles' // Import your articles
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const ArticlePage = () => {
  const router = useRouter()
  const { slug } = router.query

  const article = articles.find(article => article.slug === slug)

  if (!article) {
    return (
      <div className='min-h-screen'>
        <p>Article not found</p>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <header className='relative'>
        <img
          src={article.image}
          alt={article.title}
          className='w-full h-96 object-cover'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70'></div>
        <h1 className='absolute bottom-8 left-8 text-5xl font-bold text-white'>
          {article.title}
        </h1>
      </header>

      {/* Article Content */}
      <main className='py-12 px-6'>
        <Navbar />
        <div className='max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg'>
          <p className='text-sm text-gray-600 mb-4'>
            Published on <time dateTime={article.date}>{article.date}</time> | 5
            min read
          </p>
          <p className='text-lg text-gray-700 mb-6'>{article.description}</p>
          <h2 className='text-2xl font-semibold text-pastel-blue mb-4'>
            What is a Mobile Cocktail Bar?
          </h2>
          <p className='text-lg text-gray-700 mb-6'>{article.content}</p>
        </div>
      </main>

      {/* Call to Action */}
      <section className='py-12'>
        <div className='max-w-4xl mx-auto text-center bg-gradient-to-r from-pastel-blue to-pastel-pink p-8 rounded-xl shadow-lg'>
          <h2 className='text-4xl font-bold text-black mb-4'>
            Bring the Bar to Your Guests!
          </h2>
          <p className='text-lg text-black mb-6'>
            Contact us now to hire your mobile cocktail bar and make your event
            one to remember.
          </p>
          <a
            href='/contact_us'
            className='inline-block bg-white text-pastel-pink font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-200 transition'
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  )
}

export default ArticlePage
