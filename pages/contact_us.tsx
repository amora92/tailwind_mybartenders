// pages/contactus.js

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '../app/globals.css'

const ContactUs = () => {
  const handleSubmit = event => {
    event.preventDefault()
    // Handle form submission logic here
    alert('Form submitted!')
  }

  return (
    <div className='bg-gray-100'>
      <Navbar />

      <main className='container mx-auto px-4 py-8'>
        <h1 className='text-3xl font-bold text-center mb-8'>Contact Us</h1>

        <section className='bg-white rounded-lg shadow-md p-6 mb-8'>
          <h2 className='text-xl font-semibold mb-4'>Get In Touch</h2>
          <p className='text-gray-600 mb-4'>
            Fill out the form below and we'll get back to you as soon as
            possible.
          </p>

          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label
                htmlFor='name'
                className='block text-gray-700 font-semibold mb-2'
              >
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                className='border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500'
                required
              />
            </div>

            <div className='mb-4'>
              <label
                htmlFor='email'
                className='block text-gray-700 font-semibold mb-2'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                className='border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500'
                required
              />
            </div>

            <div className='mb-4'>
              <label
                htmlFor='message'
                className='block text-gray-700 font-semibold mb-2'
              >
                Message
              </label>
              <textarea
                id='message'
                name='message'
                rows='4'
                className='border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500'
                required
              ></textarea>
            </div>

            <button
              type='submit'
              className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md'
            >
              Submit
            </button>
          </form>
        </section>

        <section className='bg-white rounded-lg shadow-md p-6'>
          <h2 className='text-xl font-semibold mb-4'>Contact Information</h2>
          <p className='text-gray-600 mb-4'>
            For any inquiries, please contact us via the following methods:
          </p>

          <ul className='list-disc list-inside'>
            <li className='mb-2'>
              <span className='font-semibold'>Email:</span>{' '}
              <a href='mailto:contact@mybartenders.co.uk'>
                contact@mybartenders.co.uk
              </a>
            </li>
            <li className='mb-2'>
              <span className='font-semibold'>Phone:</span> +1 234 567 890
            </li>
            <li className='mb-2'>
              <span className='font-semibold'>Address:</span> 123 Main St, City,
              Country
            </li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default ContactUs
