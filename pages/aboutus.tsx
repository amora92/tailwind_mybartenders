// pages/aboutus.tsx

import Head from 'next/head'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import About_Us_Media from '@/components/About_Us_Media'
import '../app/globals.css'

// Import the Inter font
const inter = Inter({ subsets: ['latin'] })

const AboutUs = () => {
  return (
    <div className={`${inter.className}`}>
      <Head>
        <title>About Us | Premier Mobile Bartending Services</title>
        <meta
          name='description'
          content='Learn about MYBARTENDERS.CO.UK, our history, services, and dedicated team of professional bartenders committed to making your events unforgettable.'
        />
      </Head>

      <Navbar />

      <main className='container mx-auto px-6 py-12 mt-20'>
        <section className='grid gap-12 mb-12'>
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <About_Us_Media />
          </div>

          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-4'>
              Our History
            </h2>
            <p className='text-lg text-gray-600'>
              Founded in 2024, MYBARTENDERS.CO.UK has grown from a small team of
              passionate bartenders to a renowned service provider in the event
              industry. Our journey began with a love for cocktails and a
              commitment to quality, which continues to drive us today.
            </p>
          </div>

          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-4'>
              Our Services
            </h2>
            <ul className='list-disc pl-5 text-lg text-gray-600'>
              <li className='mb-4'>
                <strong>Private Cocktail Bartender Hire:</strong> Our
                experienced bartenders will come to your location and create a
                bespoke cocktail experience for you and your guests. Whether
                it's a small gathering or a large party, our bartenders will
                ensure that your event is memorable with custom cocktails and
                exceptional service.
              </li>
              <li className='mb-4'>
                <strong>Mobile Bar Services:</strong> We offer fully equipped
                mobile bars that can be set up at any venue, providing a stylish
                and functional bar area for your event. Our mobile bars come
                with all the necessary equipment and a wide selection of premium
                spirits, mixers, and garnishes.
              </li>
              <li className='mb-4'>
                <strong>Event Hire for Weddings and Parties:</strong> Make your
                special day even more memorable with our professional bartending
                services. From intimate weddings to large celebrations, we cater
                to events of all sizes, offering personalized service and custom
                cocktail menus tailored to your preferences.
              </li>
              <li className='mb-4'>
                <strong>Custom Cocktail Menu Creation:</strong> Our team of
                mixologists will work with you to create a unique cocktail menu
                that reflects your tastes and the theme of your event. We take
                into account your favorite flavors, preferred spirits, and any
                special requests to craft a menu that will delight your guests.
              </li>
              <li className='mb-4'>
                <strong>Mixology Workshops and Classes:</strong> Learn the art
                of mixology with our hands-on workshops and classes. Perfect for
                team-building events, parties, or simply for those who want to
                enhance their cocktail-making skills. Our expert bartenders will
                guide you through the process of creating classic cocktails and
                modern masterpieces.
              </li>
            </ul>
          </div>
        </section>

        <section className='bg-white p-6 rounded-lg shadow-lg'>
          <h2 className='text-2xl font-semibold text-gray-800 mb-4'>
            Our Team
          </h2>
          <p className='text-lg text-gray-600 mb-8'>
            Our team of professional bartenders is passionate about delivering
            exceptional service. With years of experience and a deep knowledge
            of mixology, we are dedicated to making your event special.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='flex flex-col items-center p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
              <img
                src='/pineapple5.jpg'
                alt='Team Member 1'
                className='w-32 h-32 rounded-full mb-4 object-cover'
              />
              <h3 className='text-xl font-bold text-gray-800'>A.M.</h3>
              <p className='text-gray-600'>Head Bartender</p>
            </div>
            <div className='flex flex-col items-center p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
              <img
                src='/pineapple_2.svg'
                alt='Team Member 2'
                className='w-32 h-32 rounded-full mb-4 object-cover'
              />
              <h3 className='text-xl font-bold text-gray-800'>L.V.</h3>
              <p className='text-gray-600'>Event Coordinator</p>
            </div>
            <div className='flex flex-col items-center p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
              <img
                src='/pineapple_4.svg'
                alt='Team Member 3'
                className='w-32 h-32 rounded-full mb-4 object-cover'
              />
              <h3 className='text-xl font-bold text-gray-800'>M.B.</h3>
              <p className='text-gray-600'>Mixologist</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default AboutUs
