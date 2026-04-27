import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Lazy load heavy components with loading skeletons to reduce initial JS bundle.
// Keep homepage content server-rendered so search engines receive the full landing page HTML.
const VideoSection = dynamic(
  () => import('@/components/VideoSection/VideoSection.replacement'),
  {
    loading: () => (
      <div className='w-full h-screen bg-gray-900 flex items-center justify-center'>
        <div className='w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin' />
      </div>
    ),
    ssr: true
  }
)

// Below-fold sections stay code-split, but can still render on the server for SEO.
const ServicesSection = dynamic(
  () => import('@/components/ServicesSection'),
  {
    loading: () => (
      <div className='w-full h-[600px] bg-gray-950 animate-pulse' />
    )
  }
)

const AboutSection = dynamic(
  () => import('@/components/AboutSection'),
  {
    loading: () => (
      <div className='w-full h-[500px] bg-gray-900 animate-pulse' />
    )
  }
)

const GalleryPreview = dynamic(
  () => import('@/components/GalleryPreview'),
  {
    loading: () => (
      <div className='w-full h-96 bg-gray-950 animate-pulse' />
    )
  }
)

const TestimonialsSection = dynamic(
  () => import('@/components/TestimonialsSection'),
  {
    loading: () => (
      <div className='w-full h-96 bg-white animate-pulse' />
    )
  }
)

const HowItWorksSection = dynamic(
  () => import('@/components/HowItWorksSection'),
  {
    loading: () => (
      <div className='w-full h-[400px] bg-gray-900 animate-pulse' />
    )
  }
)

const FreqQ = dynamic(
  () => import('@/components/FreqQ'),
  {
    loading: () => (
      <div className='w-full h-[500px] bg-gray-950 animate-pulse' />
    )
  }
)

const FinalCtaSection = dynamic(
  () => import('@/components/FinalCtaSection'),
  {
    loading: () => (
      <div className='w-full h-96 bg-gray-900 animate-pulse' />
    )
  }
)

export default function Home () {
  return (
    <>
      <Navbar />
      <main className='relative overflow-hidden'>
        <VideoSection />
        <ServicesSection />
        <AboutSection />
        <GalleryPreview />
        <TestimonialsSection />
        <HowItWorksSection />
        <FreqQ />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  )
}
