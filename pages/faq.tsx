import FAQ from '@/components/FAQ'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const FAQPage = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <Navbar />
      <div className='pt-20'>
        <FAQ />
      </div>
      <Footer />
    </div>
  )
}

export default FAQPage
