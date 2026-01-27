import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Lazy load heavy components with loading skeletons to reduce initial JS bundle
// VideoSection is SSR'd for good LCP, all below-fold sections are client-only
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

// Below-fold sections - load lazily to reduce initial bundle size
const ServicesSection = dynamic(
  () => import('@/components/ServicesSection'),
  {
    loading: () => (
      <div className='w-full h-[600px] bg-gray-950 animate-pulse' />
    ),
    ssr: false
  }
)

const AboutSection = dynamic(
  () => import('@/components/AboutSection'),
  {
    loading: () => (
      <div className='w-full h-[500px] bg-gray-900 animate-pulse' />
    ),
    ssr: false
  }
)

const GalleryPreview = dynamic(
  () => import('@/components/GalleryPreview'),
  {
    loading: () => (
      <div className='w-full h-96 bg-gray-950 animate-pulse' />
    ),
    ssr: false
  }
)

const TestimonialsSection = dynamic(
  () => import('@/components/TestimonialsSection'),
  {
    loading: () => (
      <div className='w-full h-96 bg-white animate-pulse' />
    ),
    ssr: false
  }
)

const HowItWorksSection = dynamic(
  () => import('@/components/HowItWorksSection'),
  {
    loading: () => (
      <div className='w-full h-[400px] bg-gray-900 animate-pulse' />
    ),
    ssr: false
  }
)

const FreqQ = dynamic(
  () => import('@/components/FreqQ'),
  {
    loading: () => (
      <div className='w-full h-[500px] bg-gray-950 animate-pulse' />
    ),
    ssr: false
  }
)

const FinalCtaSection = dynamic(
  () => import('@/components/FinalCtaSection'),
  {
    loading: () => (
      <div className='w-full h-96 bg-gray-900 animate-pulse' />
    ),
    ssr: false
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
