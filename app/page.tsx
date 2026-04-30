import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import VideoSection from '@/components/VideoSection/VideoSection.replacement'
import AboutSection from '@/components/AboutSection'
import GalleryPreview from '@/components/GalleryPreview'
import TestimonialsSection from '@/components/TestimonialsSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import FreqQ from '@/components/FreqQ'
import FinalCtaSection from '@/components/FinalCtaSection'

const ServicesSection = dynamic(() => import('@/components/ServicesSection'))

export default function Home () {
  return (
    <>
      <Navbar />
      <main className='relative overflow-hidden'>
        <VideoSection />
        <div className='deferred-section'>
          <ServicesSection />
        </div>
        <div className='deferred-section'>
          <AboutSection />
        </div>
        <div className='deferred-section'>
          <GalleryPreview />
        </div>
        <div className='deferred-section'>
          <TestimonialsSection />
        </div>
        <div className='deferred-section'>
          <HowItWorksSection />
        </div>
        <div className='deferred-section'>
          <FreqQ />
        </div>
        <div className='deferred-section'>
          <FinalCtaSection />
        </div>
      </main>
      <Footer />
    </>
  )
}
