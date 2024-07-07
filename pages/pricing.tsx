// pages/pricing.js

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '../app/globals.css'
import Pricing_Cta from '@/components/Pricing_Cta'

const Pricing = () => {
  return (
    <div>
      <Navbar />

      <main className='container mx-auto px-4 py-8 lg:mt-20'>
        <h1 className='text-3xl font-bold text-center mb-8'>
          Our Pricing Plans
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
          {/* Pricing Card 1 */}
          <div className='bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg'>
            <h2 className='text-xl font-semibold mb-2'>Standard Package</h2>
            <p className='text-gray-600 mb-4'>
              Portable bar hire, bartender, setup & dismantling, standard menu.
            </p>
            <div className='flex justify-center items-center mt-4'>
              <span className='text-gray-700 font-semibold'>from £BCpp</span>
              <a
                href='https://www.mybartenders.co.uk/contact_us'
                target='_blank'
                rel='noopener noreferrer'
                className=' bg-main_buttons_1 hover:bg-lime-600 text-white py-2 px-4 rounded ml-4 inline-block'
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Pricing Card 2 */}
          <div className='bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg'>
            <h2 className='text-xl font-semibold mb-2'>Premium Package</h2>
            <p className='text-gray-600 mb-4'>
              Our Premium Package offers full-service mobile bartending with a
              stocked bar, professional bartenders, custom drink menus, themes,
              setup/cleanup, and event coordination, ensuring a hassle-free,
              luxurious experience for your event.
            </p>
            <div className='flex justify-center items-center mt-4'>
              <span className='text-gray-700 font-semibold'>from £ABpp</span>
              <a
                href='https://www.mybartenders.co.uk/contact_us'
                target='_blank'
                rel='noopener noreferrer'
                className=' bg-main_buttons_1 hover:bg-lime-500 text-white py-2 px-4 rounded ml-4 inline-block'
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Pricing Card 3 */}
          <div className='bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg'>
            <h2 className='text-xl font-semibold mb-2'>Platinum Package</h2>
            <p className='text-gray-600 mb-4'>
              Tailored for large events, our Platinum Package ensures all needs
              are met. We provide comprehensive bartending services, customized
              to perfection. Anything is possible.
            </p>
            <div className='flex justify-center items-center mt-4'>
              <span className='text-gray-700 font-semibold'>Free Quote</span>
              <a
                href='https://www.mybartenders.co.uk/contact_us'
                target='_blank'
                rel='noopener noreferrer'
                className=' bg-main_buttons_1 hover:bg-lime-500 text-white py-2 px-4 rounded ml-4 inline-block'
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        <section className='mt-12 bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg'>
          <h2 className='text-2xl font-bold mb-4'>Why us?</h2>
          <ul className='list-disc list-inside text-center'>
            <li className='text-gray-600'>Award winning service!</li>
            <li className='text-gray-600'>
              Highly experienced, professional staff.
            </li>
            <li className='text-gray-600'>Reliable</li>
          </ul>
        </section>

        <section className='mt-12 lg:pb-20'>
          <div className='bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg'>
            <h2 className='text-2xl font-bold mb-4'>Customize Your Plan</h2>
            <p className='text-gray-600'>
              Have specific requirements? Contact us for custom plan options
              tailored to your needs.
            </p>
            <a
              href='https://www.mybartenders.co.uk/contact_us'
              target='_blank'
              rel='noopener noreferrer'
              className=' bg-main_buttons_1 hover:bg-lime-500 text-white py-2 px-4 mt-4 rounded inline-block'
            >
              Contact Us
            </a>
            <Pricing_Cta />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Pricing
