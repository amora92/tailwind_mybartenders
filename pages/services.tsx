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
            <h2 className='text-xl font-semibold mb-2'>Basic Bar Package</h2>
            <p className='text-gray-600 mb-4'>
              Perfect for small gatherings, our Basic Bar Package includes a
              selection of classic cocktails, mocktails, and a professional
              bartender.
            </p>
            <div className='flex justify-between items-center mt-4'>
              <span className='text-gray-700 font-semibold'>£100</span>
              <button className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded'>
                Book Now
              </button>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className='bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:scale-105'>
            <h2 className='text-xl font-semibold mb-2'>Premium Bar Package</h2>
            <p className='text-gray-600 mb-4'>
              Upgrade your event with our Premium Bar Package, featuring an
              extensive cocktail menu, premium spirits, and personalized
              service.
            </p>
            <div className='flex justify-between items-center mt-4'>
              <span className='text-gray-700 font-semibold'>£200</span>
              <button className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded'>
                Book Now
              </button>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className='bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:scale-105'>
            <h2 className='text-xl font-semibold mb-2'>Luxury Bar Package</h2>
            <p className='text-gray-600 mb-4'>
              Experience the ultimate luxury with our Luxury Bar Package, which
              includes a bespoke cocktail menu, high-end spirits, and a
              dedicated bar team.
            </p>
            <div className='flex justify-between items-center mt-4'>
              <span className='text-gray-700 font-semibold'>£300</span>
              <button className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded'>
                Book Now
              </button>
            </div>
          </div>

          {/* Service Card 4 */}
          <div className='bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:scale-105 hidden md:block'>
            <h2 className='text-xl font-semibold mb-2'>Custom Bar Package</h2>
            <p className='text-gray-600 mb-4'>
              Tailor your event to perfection with our Custom Bar Package.
              Choose your preferred drinks, theme, and more for a personalized
              experience.
            </p>
            <div className='flex justify-between items-center mt-4'>
              <span className='text-gray-700 font-semibold'>£Custom</span>
              <button className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded'>
                Book Now
              </button>
            </div>
          </div>

          {/* Service Card 5 */}
          <div className='bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:scale-105'>
            <h2 className='text-xl font-semibold mb-2'>Cocktail Masterclass</h2>
            <p className='text-gray-600 mb-4'>
              Learn the art of cocktail making with our Cocktail Masterclass.
              Perfect for team building or a fun night with friends.
            </p>
            <div className='flex justify-between items-center mt-4'>
              <span className='text-gray-700 font-semibold'>£150</span>
              <button className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded'>
                Book Now
              </button>
            </div>
          </div>

          {/* Service Card 6 */}
          <div className='bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:scale-105'>
            <h2 className='text-xl font-semibold mb-2'>Cocktail Tastings</h2>
            <p className='text-gray-600 mb-4'>
              Sample a range of expertly crafted cocktails with our Cocktail
              Tastings package, guided by a professional mixologist.
            </p>
            <div className='flex justify-between items-center mt-4'>
              <span className='text-gray-700 font-semibold'>£120</span>
              <button className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded'>
                Book Now
              </button>
            </div>
          </div>

          {/* Service Card 7 */}
          <div className='bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:scale-105'>
            <h2 className='text-xl font-semibold mb-2'>Corporate Events</h2>
            <p className='text-gray-600 mb-4'>
              Make your corporate events memorable with our bespoke cocktail
              services. Ideal for office parties, product launches, and client
              entertaining.
            </p>
            <div className='flex justify-between items-center mt-4'>
              <span className='text-gray-700 font-semibold'>£250</span>
              <button className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded'>
                Book Now
              </button>
            </div>
          </div>

          {/* Service Card 8 */}
          <div className='bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:scale-105'>
            <h2 className='text-xl font-semibold mb-2'>Private Events</h2>
            <p className='text-gray-600 mb-4'>
              Whether it's a wedding, birthday, or any private event, our
              professional bartenders will make it unforgettable with custom
              cocktails and top-notch service.
            </p>
            <div className='flex justify-between items-center mt-4'>
              <span className='text-gray-700 font-semibold'>£220</span>
              <button className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded'>
                Book Now
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Services
