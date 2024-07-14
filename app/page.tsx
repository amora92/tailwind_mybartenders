import Head from 'next/head'
import Camp from '@/components/Camp'
import Companies from '@/components/Companies'
import Hero from '@/components/Hero'
import ServicesSection from '@/components/ServicesSection'
import VideoSection from '@/components/VideoSection/VideoSection'

export default function Home () {
  return (
    <>
      <Head>
        <link rel='canonical' href='https://www.mybartenders.co.uk/' />
        <title>Mobile Bar Hire Northampton</title>
        <meta
          name='description'
          content='Explore premier mobile bar hire services in Northampton. Hire professional bartenders for weddings, parties, and events. Get bespoke cocktail bartending, mobile bars, and mixologist services tailored to your needs.'
        />
      </Head>
      <VideoSection />
      <ServicesSection />
      <Hero />
      <Camp />
    </>
  )
}
