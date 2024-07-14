// pages/services.js

import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '../app/globals.css'
import Services_Info from '@/components/Services_Info'
import Service_Daisy from '@/components/Service_Daisy'

const Services = () => {
  return (
    <div>
      <Head>
        <title>Mobile Bar Hire & Mixology | Hire Bartenders</title>
        <meta
          name='description'
          content='Explore our mobile bar hire services, including professional bartending, cocktail hire, and event bar solutions in the UK.'
        />
        <link rel='canonical' href='https://www.mybartenders.co.uk/services' />
      </Head>

      <Navbar />

      <main className='container mx-auto px-4 py-8'>
        <h1 className='text-4xl font-bold text-center mb-8 lg:mt-20 md:mt-20 mt-20'>
          Professional Mobile Bar Hire & Mixology Services in the UK
        </h1>
        <Service_Daisy />
        <Services_Info />
        <section className='mb-12'>
          <h2 className='text-3xl font-semibold text-center mb-8'>
            Our Services
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {/* Service Details */}
            <div className='bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:scale-105'>
              <h3 className='text-xl font-semibold mb-2'>
                Event Planning & Coordination
              </h3>
              <p className='text-gray-600 mb-4'>
                From concept to execution, we handle every detail of your event
                to ensure perfection.
              </p>
            </div>

            <div className='bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:scale-105'>
              <h3 className='text-xl font-semibold mb-2'>
                Customized Menus & Catering
              </h3>
              <p className='text-gray-600 mb-4'>
                Crafted menus featuring exquisite dishes and drinks tailored to
                your preferences.
              </p>
            </div>

            <div className='bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:scale-105'>
              <h3 className='text-xl font-semibold mb-2'>
                Professional Bartending Services
              </h3>
              <p className='text-gray-600 mb-4'>
                Expert bartenders delivering exceptional service with a variety
                of beverages and cocktails.
              </p>
            </div>

            <div className='bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:scale-105'>
              <h3 className='text-xl font-semibold mb-2'>
                Mobile Bar Setup & Rentals
              </h3>
              <p className='text-gray-600 mb-4'>
                Complete mobile bar solutions for any venue, ensuring
                convenience and style.
              </p>
            </div>

            <div className='bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:scale-105'>
              <h3 className='text-xl font-semibold mb-2'>
                Venue Decoration & Styling
              </h3>
              <p className='text-gray-600 mb-4'>
                Transforming spaces into captivating settings with our creative
                decor solutions.
              </p>
            </div>

            <div className='bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:scale-105'>
              <h3 className='text-xl font-semibold mb-2'>
                Entertainment & Event Staffing
              </h3>
              <p className='text-gray-600 mb-4'>
                Providing entertainment options and experienced staffing to
                enhance your event atmosphere.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials/Gallery Section */}
      </main>

      <Footer />
    </div>
  )
}

export default Services
