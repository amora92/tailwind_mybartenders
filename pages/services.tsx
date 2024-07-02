// pages/services.js

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '../app/globals.css'

const Services = () => {
  return (
    <div className='bg-gray-100'>
      <Navbar />

      <main className='container mx-auto px-4 py-8'>
        <h1 className='text-3xl font-bold text-center mb-8'>Our Services</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {/* Service Card 1 */}
          <div className='bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:scale-105'>
            <h2 className='text-xl font-semibold mb-2'>Basic Package</h2>
            <p className='text-gray-600 mb-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className='flex justify-between items-center mt-4'>
              <span className='text-gray-700 font-semibold'>$100</span>
              <button className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded'>
                Book Now
              </button>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className='bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:scale-105'>
            <h2 className='text-xl font-semibold mb-2'>Premium Package</h2>
            <p className='text-gray-600 mb-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className='flex justify-between items-center mt-4'>
              <span className='text-gray-700 font-semibold'>$200</span>
              <button className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded'>
                Book Now
              </button>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className='bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:scale-105'>
            <h2 className='text-xl font-semibold mb-2'>Luxury Package</h2>
            <p className='text-gray-600 mb-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className='flex justify-between items-center mt-4'>
              <span className='text-gray-700 font-semibold'>$300</span>
              <button className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded'>
                Book Now
              </button>
            </div>
          </div>

          {/* Service Card 4 (Optional) */}
          <div className='bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:scale-105 hidden md:block'>
            <h2 className='text-xl font-semibold mb-2'>Custom Package</h2>
            <p className='text-gray-600 mb-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className='flex justify-between items-center mt-4'>
              <span className='text-gray-700 font-semibold'>$Custom</span>
              <button className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded'>
                Book Now
              </button>
            </div>
          </div>

          {/* Add more service cards as needed */}
        </div>

        <section className='mt-12'>
          <h2 className='text-2xl font-bold mb-4'>Why Choose Us?</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='bg-white rounded-lg shadow-md p-6'>
              <h3 className='text-xl font-semibold mb-2'>
                Professional Bartenders
              </h3>
              <p className='text-gray-600'>
                Our team consists of highly skilled bartenders with years of
                experience.
              </p>
            </div>
            <div className='bg-white rounded-lg shadow-md p-6'>
              <h3 className='text-xl font-semibold mb-2'>
                Premium Quality Ingredients
              </h3>
              <p className='text-gray-600'>
                We use only the finest ingredients to ensure the best taste for
                your cocktails.
              </p>
            </div>
            <div className='bg-white rounded-lg shadow-md p-6'>
              <h3 className='text-xl font-semibold mb-2'>
                Customizable Services
              </h3>
              <p className='text-gray-600'>
                Tailor your event with our customizable service options to meet
                your needs.
              </p>
            </div>
            <div className='bg-white rounded-lg shadow-md p-6'>
              <h3 className='text-xl font-semibold mb-2'>
                Exceptional Customer Service
              </h3>
              <p className='text-gray-600'>
                We are committed to providing outstanding customer service from
                start to finish.
              </p>
            </div>
          </div>
        </section>

        <section className='mt-12'>
          <div className='bg-white rounded-lg shadow-md p-6'>
            <h2 className='text-2xl font-bold mb-4'>Additional Information</h2>
            <p className='text-gray-600'>
              We offer a range of customizable packages to suit your specific
              needs and preferences. From classic cocktails to innovative
              creations, our bartenders use only the finest ingredients to
              deliver top-notch drinks. We also handle all the setup and
              cleanup, so you can relax and enjoy your event without any hassle.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Services
