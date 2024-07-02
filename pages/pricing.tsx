// pages/pricing.js

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '../app/globals.css'

const Pricing = () => {
  return (
    <div className='bg-gray-100'>
      <Navbar />

      <main className='container mx-auto px-4 py-8'>
        <h1 className='text-3xl font-bold text-center mb-8'>
          Our Pricing Plans
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {/* Pricing Card 1 */}
          <div className='bg-white rounded-lg shadow-md p-6'>
            <h2 className='text-xl font-semibold mb-2'>Standard Package</h2>
            <p className='text-gray-600 mb-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className='flex justify-between items-center mt-4'>
              <span className='text-gray-700 font-semibold'>$100</span>
              <button className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded'>
                Choose Plan
              </button>
            </div>
          </div>

          {/* Pricing Card 2 */}
          <div className='bg-white rounded-lg shadow-md p-6'>
            <h2 className='text-xl font-semibold mb-2'>Premium Package</h2>
            <p className='text-gray-600 mb-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className='flex justify-between items-center mt-4'>
              <span className='text-gray-700 font-semibold'>$200</span>
              <button className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded'>
                Choose Plan
              </button>
            </div>
          </div>

          {/* Pricing Card 3 */}
          <div className='bg-white rounded-lg shadow-md p-6'>
            <h2 className='text-xl font-semibold mb-2'>Enterprise Package</h2>
            <p className='text-gray-600 mb-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className='flex justify-between items-center mt-4'>
              <span className='text-gray-700 font-semibold'>$300</span>
              <button className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded'>
                Choose Plan
              </button>
            </div>
          </div>
        </div>

        <section className='mt-12'>
          <h2 className='text-2xl font-bold mb-4'>Features Included</h2>
          <ul className='list-disc list-inside'>
            <li className='text-gray-600'>
              Feature 1: Lorem ipsum dolor sit amet
            </li>
            <li className='text-gray-600'>
              Feature 2: Consectetur adipiscing elit
            </li>
            <li className='text-gray-600'>
              Feature 3: Sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua
            </li>
          </ul>
        </section>

        <section className='mt-12'>
          <div className='bg-white rounded-lg shadow-md p-6'>
            <h2 className='text-2xl font-bold mb-4'>Customize Your Plan</h2>
            <p className='text-gray-600'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mt-4 rounded'>
              Contact Us
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Pricing
