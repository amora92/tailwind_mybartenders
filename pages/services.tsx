// pages/services.js

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '../app/globals.css'

const Services = () => {
  return (
    <div>
      <Navbar />

      <main className='container mx-auto px-4 py-8'>
        {/* Service Overview Section */}
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
        <section className='bg-gray-100 mb-12 py-8'>
          <h2 className='text-3xl font-semibold text-center mb-8'>Gallery</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {/* Event 1 */}
            <img
              src='https://images.pexels.com/photos/434295/pexels-photo-434295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Event 1'
              className='w-full h-72 object-cover rounded-lg shadow-md mb-4 hover:shadow-lg'
            />

            {/* Event 2 */}
            <img
              src='https://images.pexels.com/photos/16408/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Event 2'
              className='w-full h-72 object-cover rounded-lg shadow-md mb-4 hover:shadow-lg'
            />

            {/* Event 3 */}
            <img
              src='https://plus.unsplash.com/premium_photo-1681841634786-3f887cd2659d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGV2ZW50fGVufDB8fDB8fHww'
              alt='Event 3'
              className='w-full h-72 object-cover rounded-lg shadow-md mb-4 hover:shadow-lg'
            />

            {/* Event 4 */}
            <img
              src='https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Event 4'
              className='w-full h-72 object-cover rounded-lg shadow-md mb-4 hover:shadow-lg'
            />

            {/* Event 5 */}
            <img
              src='https://images.pexels.com/photos/6314327/pexels-photo-6314327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Event 5'
              className='w-full h-72 object-cover rounded-lg shadow-md mb-4 hover:shadow-lg'
            />

            {/* Event 6 */}
            <img
              src='https://images.pexels.com/photos/2466320/pexels-photo-2466320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Event 6'
              className='w-full h-72 object-cover rounded-lg shadow-md mb-4 hover:shadow-lg'
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Services
