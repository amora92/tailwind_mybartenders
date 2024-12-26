import { useRouter } from 'next/router'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const ArticlePage = () => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <header className='relative'>
        <img
          src='/images/featured-article.jpg' // Replace with actual image
          alt='Article Banner'
          className='w-full h-96 object-cover'
        />
        {/* Gradient on top of the image */}
        <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70'></div>
        <h1 className='absolute bottom-8 left-8 text-5xl font-bold text-white'>
          Why Mobile Cocktail Bar Hire is the Perfect Addition to Your Event
        </h1>
      </header>

      {/* Article Content */}
      <main className='py-12 px-6'>
        <Navbar />
        <div className='max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg'>
          <p className='text-sm text-gray-600 mb-4'>
            Published on <time dateTime='2024-12-26'>December 26, 2024</time> |
            5 min read
          </p>
          <p className='text-lg text-gray-700 mb-6'>
            Hosting an unforgettable event is an art, and the drinks are often
            the masterpiece. Whether it’s a wedding, corporate party, or
            birthday celebration, a mobile cocktail bar brings an unbeatable
            touch of class and excitement. Discover why this trend is
            revolutionizing events across the UK.
          </p>
          <h2 className='text-2xl font-semibold text-pastel-blue mb-4'>
            What is a Mobile Cocktail Bar?
          </h2>
          <p className='text-lg text-gray-700 mb-6'>
            A mobile cocktail bar is a fully equipped bar service that comes to
            your event location. Perfect for unconventional settings, it ensures
            your guests enjoy premium cocktails crafted on the spot.
          </p>
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
            href='/contact'
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
