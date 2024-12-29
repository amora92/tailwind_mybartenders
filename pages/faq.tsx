import FAQ from '@/components/FAQ'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Head from 'next/head'

const FAQPage = () => {
  return (
    <>
      <Head>
        <title>
          FAQ - Your Mixology Service Questions Answered | Cocktail Company
        </title>
        <meta
          name='description'
          content='Find answers to common questions about our premium mixology services, event booking, cocktail masterclasses, and more. Expert bartenders for any occasion.'
        />
        <meta
          name='keywords'
          content='mixology FAQ, cocktail services, event bartenders, cocktail masterclass, mobile bar hire, London bartenders'
        />
      </Head>
      <div className='min-h-screen bg-gradient-to-b from-white to-gray-50'>
        <Navbar />
        <div className='pt-20'>
          <FAQ />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default FAQPage
