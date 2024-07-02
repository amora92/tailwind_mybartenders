import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '../app/globals.css'

// Import the Inter font
const inter = Inter({ subsets: ['latin'] })

const AboutUs = () => {
  return (
    <div className={inter.className}>
      <Navbar />
      <main className='relative overflow-hidden'>
        <section className='container mx-auto px-6 lg:px-20 py-12'>
          <h1 className='text-4xl font-bold mb-8'>About Us</h1>

          <div className='mb-12'>
            <h2 className='text-2xl font-semibold mb-4'>Our Mission</h2>
            <p className='text-lg leading-8 text-gray-600'>
              At MYBARTENDERS.CO.UK, our mission is to provide top-notch
              bartending services that elevate your events and create
              unforgettable experiences. We specialize in mobile mixology,
              cocktail crafting, and bartending for weddings and special
              occasions.
            </p>
          </div>

          <div className='mb-12'>
            <h2 className='text-2xl font-semibold mb-4'>Our History</h2>
            <p className='text-lg leading-8 text-gray-600'>
              Founded in 2024, MYBARTENDERS.CO.UK has grown from a small team of
              passionate bartenders to a renowned service provider in the event
              industry. Our journey began with a love for cocktails and a
              commitment to quality, which continues to drive us today.
            </p>
          </div>

          <div className='mb-12'>
            <h2 className='text-2xl font-semibold mb-4'>Our Services</h2>
            <ul className='list-disc pl-5 text-lg leading-8 text-gray-600'>
              <li>Private Cocktail Bartender Hire</li>
              <li>Mobile Bar Services</li>
              <li>Event Hire for Weddings and Parties</li>
              <li>Custom Cocktail Menu Creation</li>
              <li>Mixology Workshops and Classes</li>
            </ul>
          </div>

          <div>
            <h2 className='text-2xl font-semibold mb-4'>Our Team</h2>
            <p className='text-lg leading-8 text-gray-600'>
              Our team of professional bartenders is passionate about delivering
              exceptional service. With years of experience and a deep knowledge
              of mixology, we are dedicated to making your event special.
            </p>
            <div className='lg:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:pb-20 sm: mt-10'>
              <div className='flex flex-col items-center'>
                <img
                  src='/pineapple5.jpg'
                  alt='Team Member 1'
                  className='w-32 h-32 rounded-full mb-4'
                />
                <h3 className='text-xl font-bold'>John Doe</h3>
                <p className='text-gray-600'>Head Bartender</p>
              </div>
              <div className='flex flex-col items-center'>
                <img
                  src='/pineapple_2.svg'
                  alt='Team Member 2'
                  className='w-32 h-32 rounded-full mb-4'
                />
                <h3 className='text-xl font-bold'>Jane Smith</h3>
                <p className='text-gray-600'>Event Coordinator</p>
              </div>
              <div className='flex flex-col items-center'>
                <img
                  src='/pineapple_4.svg'
                  alt='Team Member 3'
                  className='w-32 h-32 rounded-full mb-4'
                />
                <h3 className='text-xl font-bold'>Michael Brown</h3>
                <p className='text-gray-600'>Mixologist</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default AboutUs
