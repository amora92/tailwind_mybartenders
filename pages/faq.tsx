'use client'

import FAQ from '@/components/FAQ'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Head from 'next/head'
import { SEO_DEFAULTS } from '@/constants/brandStyles'
import '../app/globals.css'

const FAQPage = () => {
  return (
    <>
      <Head>
        <title>FAQ - Your Mobile Bar Questions Answered | MyBartenders UK</title>
        <meta
          name='description'
          content='Find answers to common questions about our premium mobile bar services, event booking, cocktail masterclasses, and more. Expert bartenders for any occasion.'
        />
        <meta
          name='keywords'
          content='mobile bar FAQ, cocktail services, event bartenders, cocktail masterclass, mobile bar hire, Northampton bartenders'
        />
        <link rel='canonical' href={`${SEO_DEFAULTS.siteUrl}/faq`} />
      </Head>
      <div className='min-h-screen bg-gray-950'>
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
