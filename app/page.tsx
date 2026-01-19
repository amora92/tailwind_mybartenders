import Head from 'next/head'
import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ServicesSection from '@/components/ServicesSection'
import AboutSection from '@/components/AboutSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import FreqQ from '@/components/FreqQ'

// Lazy load heavy components with loading skeletons
const VideoSection = dynamic(
  () => import('@/components/VideoSection/VideoSection'),
  {
    loading: () => (
      <div className='w-full h-screen bg-gray-900 flex items-center justify-center'>
        <div className='w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin' />
      </div>
    ),
    ssr: true
  }
)

const GalleryPreview = dynamic(
  () => import('@/components/GalleryPreview'),
  {
    loading: () => (
      <div className='w-full h-96 bg-gray-950 animate-pulse' />
    ),
    ssr: true
  }
)

const TestimonialsSection = dynamic(
  () => import('@/components/TestimonialsSection'),
  {
    loading: () => (
      <div className='w-full h-96 bg-white animate-pulse' />
    ),
    ssr: true
  }
)

const FinalCtaSection = dynamic(
  () => import('@/components/FinalCtaSection'),
  {
    loading: () => (
      <div className='w-full h-96 bg-gray-900 animate-pulse' />
    ),
    ssr: true
  }
)

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
      <AboutSection />
      <GalleryPreview />
      <TestimonialsSection />
      <HowItWorksSection />
      <FreqQ />
      <FinalCtaSection />
    </>
  )
}
