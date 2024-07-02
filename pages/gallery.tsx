import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '../app/globals.css'

// Import the Inter font
const inter = Inter({ subsets: ['latin'] })

const Gallery = () => {
  return (
    <div className={inter.className}>
      <Navbar />
      <main className='relative overflow-hidden'>
        <section className='container mx-auto px-6 lg:px-20 py-12'>
          <h1 className='text-4xl font-bold mb-8 text-center'>Gallery</h1>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {/* Gallery Item 1 */}
            <div className='relative overflow-hidden rounded-lg shadow-md'>
              <img
                src='/IMG-20240224-WA0027.jpg'
                alt='Gallery Image 1'
                className='w-full h-full object-cover transform transition duration-300 hover:scale-105'
              />
            </div>

            {/* Gallery Item 2 */}
            <div className='relative overflow-hidden rounded-lg shadow-md'>
              <img
                src='/IMG-20240224-WA0048.jpg'
                alt='Gallery Image 2'
                className='w-full h-full object-cover transform transition duration-300 hover:scale-105'
              />
            </div>

            {/* Gallery Item 3 */}
            <div className='relative overflow-hidden rounded-lg shadow-md'>
              <img
                src='/IMG-20240224-WA0053.jpg'
                alt='Gallery Image 3'
                className='w-full h-full object-cover transform transition duration-300 hover:scale-105'
              />
            </div>

            {/* Gallery Item 4 */}
            <div className='relative overflow-hidden rounded-lg shadow-md'>
              <img
                src='/IMG-20240224-WA0056.jpg'
                alt='Gallery Image 4'
                className='w-full h-full object-cover transform transition duration-300 hover:scale-105'
              />
            </div>

            {/* Gallery Item 5 */}
            <div className='relative overflow-hidden rounded-lg shadow-md'>
              <img
                src='/IMG_20220323_122115_003.jpg'
                alt='Gallery Image 5'
                className='w-full h-full object-cover transform transition duration-300 hover:scale-105'
              />
            </div>

            {/* Gallery Item 6 */}
            <div className='relative overflow-hidden rounded-lg shadow-md'>
              <img
                src='/fire.jpg'
                alt='Gallery Image 6'
                className='w-full h-full object-cover transform transition duration-300 hover:scale-105'
              />
            </div>
            <div className='relative overflow-hidden rounded-lg shadow-md'>
              <img
                src='/20220528_173621.jpg'
                alt='Gallery Image 6'
                className='w-full h-full object-cover transform transition duration-300 hover:scale-105'
              />
            </div>
            <div className='relative overflow-hidden rounded-lg shadow-md'>
              <img
                src='/20220528_183404.jpg'
                alt='Gallery Image 6'
                className='w-full h-full object-cover transform transition duration-300 hover:scale-105'
              />
            </div>
            <div className='relative overflow-hidden rounded-lg shadow-md'>
              <img
                src='/20220528_173609.jpg'
                alt='Gallery Image 6'
                className='w-full h-full object-cover transform transition duration-300 hover:scale-105'
              />
            </div>
            <div className='relative overflow-hidden rounded-lg shadow-md'>
              <img
                src='/20220510_184836.jpg'
                alt='Gallery Image 6'
                className='w-full h-full object-cover transform transition duration-300 hover:scale-105'
              />
            </div>
            <div className='relative overflow-hidden rounded-lg shadow-md'>
              <img
                src='/20190720_012709.jpg'
                alt='Gallery Image 6'
                className='w-full h-full object-cover transform transition duration-300 hover:scale-105'
              />
            </div>
            <div className='relative overflow-hidden rounded-lg shadow-md'>
              <img
                src='/20210612_175631.jpg'
                alt='Gallery Image 6'
                className='w-full h-full object-cover transform transition duration-300 hover:scale-105'
              />
            </div>
            <div className='relative overflow-hidden rounded-lg shadow-md'>
              <img
                src='/20150428_230641.jpg'
                alt='Gallery Image 6'
                className='w-full h-full object-cover transform transition duration-300 hover:scale-105'
              />
            </div>
            <div className='relative overflow-hidden rounded-lg shadow-md'>
              <img
                src='/IMG-20240224-WA0005.jpg'
                alt='Gallery Image 6'
                className='w-full h-full object-cover transform transition duration-300 hover:scale-105'
              />
            </div>
            <div className='relative overflow-hidden rounded-lg shadow-md'>
              <img
                src='/20160126_210840.jpg'
                alt='Gallery Image 6'
                className='w-full h-full object-cover transform transition duration-300 hover:scale-105'
              />
            </div>
            <div className='relative overflow-hidden rounded-lg shadow-md'>
              <img
                src='/20160604_194711.jpg'
                alt='Gallery Image 6'
                className='w-full h-full object-cover transform transition duration-300 hover:scale-105'
              />
            </div>
            <div className='relative overflow-hidden rounded-lg shadow-md'>
              <img
                src='/IMG-20240224-WA0054.jpg'
                alt='Gallery Image 6'
                className='w-full h-full object-cover transform transition duration-300 hover:scale-105'
              />
            </div>
            <div className='relative overflow-hidden rounded-lg shadow-md'>
              <img
                src='/IMG-20240224-WA0052.jpg'
                alt='Gallery Image 6'
                className='w-full h-full object-cover transform transition duration-300 hover:scale-105'
              />
            </div>
            <div className='relative overflow-hidden rounded-lg shadow-md'>
              <img
                src='/IMG_20210626_130609_709.jpg'
                alt='Gallery Image 6'
                className='w-full h-full object-cover transform transition duration-300 hover:scale-105'
              />
            </div>
            <div className='relative overflow-hidden rounded-lg shadow-md'>
              <img
                src='/daiq.png'
                alt='Gallery Image 6'
                className='w-full h-full object-cover transform transition duration-300 hover:scale-105'
              />
            </div>
            <div className='relative overflow-hidden rounded-lg shadow-md'>
              <img
                src='/20220526_194220.jpg'
                alt='Gallery Image 6'
                className='w-full h-full object-cover transform transition duration-300 hover:scale-105'
              />
            </div>
            <div className='relative overflow-hidden rounded-lg shadow-md'>
              <img
                src='/20210525_215905.jpg'
                alt='Gallery Image 6'
                className='w-full h-full object-cover transform transition duration-300 hover:scale-105'
              />
            </div>
            <div className='relative overflow-hidden rounded-lg shadow-md'>
              <img
                src='/SmartSelect_20190720-013659_Facebook.jpg'
                alt='Gallery Image 6'
                className='w-full h-full object-cover transform transition duration-300 hover:scale-105'
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Gallery
