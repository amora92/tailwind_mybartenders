// pages/aboutus.tsx

import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '../app/globals.css'

// Import the Inter font
const inter = Inter({ subsets: ['latin'] })

const AboutUs = () => {
  return (
    <div className={`${inter.className} `}>
      <Navbar />
      <section>
        <div className='mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:pt-10 lg:mt-10'>
            <div className='bg-blue-600 p-8 md:p-12 lg:px-16 lg:py-24 max-h-96 overflow-y-auto'>
              <div className='mx-auto max-w-xl text-center'>
                <h2 className='text-2xl font-bold text-white md:text-3xl'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit
                </h2>

                <p className='hidden text-white/90 sm:mt-4 sm:block'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                  egestas tempus tellus etiam sed. Quam a scelerisque amet
                  ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
                  quisque ut interdum tincidunt duis.
                </p>

                <div className='mt-4 md:mt-8'>
                  <a
                    href='#'
                    className='inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-blue-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400'
                  >
                    Get Started Today
                  </a>
                </div>
              </div>
            </div>

            <div className='grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2'>
              <img
                alt=''
                src='https://images.unsplash.com/photo-1621274790572-7c32596bc67f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80'
                className='h-40 w-full object-cover sm:h-56 md:h-full'
              />

              <img
                alt=''
                src='https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
                className='h-40 w-full object-cover sm:h-56 md:h-full'
              />
            </div>
          </div>
        </div>
      </section>

      <main className='container mx-auto px-6 py-12 mt-20'>
        <section className='text-center mb-12'>
          <p className='text-lg text-gray-600'>
            Discover our mission, history, services, and meet our dedicated
            team. Currently not taking new clients.
          </p>
        </section>

        <section className='grid gap-12 mb-12'>
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-4'>
              Our Mission
            </h2>
            <p className='text-lg text-gray-600'>
              At MYBARTENDERS.CO.UK, our mission is to provide top-notch
              bartending services that elevate your events and create
              unforgettable experiences. We specialize in mobile mixology,
              cocktail crafting, and bartending for weddings and special
              occasions.
            </p>
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
            <div className='flex flex-col items-center p-4  rounded-lg shadow-sm hover:shadow-md transition-shadow'>
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
