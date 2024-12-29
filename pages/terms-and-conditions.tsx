import Link from 'next/link'

const TermsAndConditions = () => {
  return (
    <div className='bg-gradient-to-b from-white via-pink-50/30 to-white'>
      <div className='container mx-auto px-4 py-16 max-w-4xl'>
        <h1 className='text-4xl font-bold mb-6 text-gray-900'>
          Terms and <span className='text-pink-500'>Conditions</span>
        </h1>

        <p className='text-lg mb-8 text-gray-700'>
          These Terms and Conditions outline the general agreement between
          MyBartenders and our clients for mobile bartending services in the UK.
          Specific arrangements can be discussed and agreed upon during the
          booking process.
        </p>

        <section className='mb-8'>
          <h2 className='text-2xl font-semibold mb-4 text-gray-900'>
            1. Bookings
          </h2>
          <div className='space-y-4 text-gray-700'>
            <p>
              • A deposit may be required to secure your booking, with the
              amount to be agreed upon during consultation
            </p>
            <p>
              • Payment terms will be clearly outlined in your booking
              confirmation
            </p>
            <p>
              • We're happy to discuss flexible payment arrangements for your
              event
            </p>
          </div>
        </section>

        <section className='mb-8'>
          <h2 className='text-2xl font-semibold mb-4 text-gray-900'>
            2. Changes and Cancellations
          </h2>
          <div className='space-y-4 text-gray-700'>
            <p>
              • We understand plans can change - please let us know as soon as
              possible if you need to modify your booking
            </p>
            <p>
              • Cancellation terms will be provided with your booking
              confirmation
            </p>
            <p>• We'll always try to accommodate date changes where possible</p>
          </div>
        </section>

        <section className='mb-8'>
          <h2 className='text-2xl font-semibold mb-4 text-gray-900'>
            3. Service Delivery
          </h2>
          <div className='space-y-4 text-gray-700'>
            <p>
              • We follow responsible service of alcohol guidelines to ensure
              everyone's safety and enjoyment
            </p>
            <p>• We operate in accordance with UK licensing requirements</p>
            <p>
              • Our team will work with you to ensure smooth service delivery
            </p>
          </div>
        </section>

        <section className='mb-8'>
          <h2 className='text-2xl font-semibold mb-4 text-gray-900'>
            4. Setup Requirements
          </h2>
          <div className='space-y-4 text-gray-700'>
            <p>
              • We'll discuss specific setup requirements during the planning
              process
            </p>
            <p>
              • Basic requirements include access to water and power where
              needed
            </p>
            <p>
              • We're happy to work with your venue to meet any specific
              requirements
            </p>
          </div>
        </section>

        <section className='mb-8'>
          <h2 className='text-2xl font-semibold mb-4 text-gray-900'>
            5. Insurance
          </h2>
          <div className='space-y-4 text-gray-700'>
            <p>• We maintain appropriate insurance coverage for our services</p>
            <p>• Details of our insurance can be provided upon request</p>
          </div>
        </section>

        <section className='mb-8'>
          <h2 className='text-2xl font-semibold mb-4 text-gray-900'>
            6. Service Hours
          </h2>
          <div className='space-y-4 text-gray-700'>
            <p>• Service duration will be agreed upon during booking</p>
            <p>
              • Extensions may be possible during the event, subject to staff
              availability
            </p>
          </div>
        </section>

        <section className='mb-8'>
          <h2 className='text-2xl font-semibold mb-4 text-gray-900'>
            7. Menu Selection
          </h2>
          <div className='space-y-4 text-gray-700'>
            <p>
              • We'll work with you to create the perfect menu for your event
            </p>
            <p>
              • Menu adjustments can be made based on availability and
              requirements
            </p>
          </div>
        </section>

        <section className='mb-8'>
          <h2 className='text-2xl font-semibold mb-4 text-gray-900'>
            8. Privacy
          </h2>
          <div className='space-y-4 text-gray-700'>
            <p>
              • We respect your privacy and handle your data in accordance with
              our{' '}
              <Link
                href='/privacy-policy'
                className='text-pink-500 hover:text-pink-600'
              >
                Privacy Policy
              </Link>
            </p>
            <p>
              • We're happy to discuss any specific privacy requirements for
              your event
            </p>
          </div>
        </section>

        <section className='mb-8'>
          <h2 className='text-2xl font-semibold mb-4 text-gray-900'>
            9. Contact Us
          </h2>
          <div className='space-y-4 text-gray-700'>
            <p>
              We're here to help! For any questions about these terms or to
              discuss your specific requirements, please contact us at:{' '}
              <Link
                href='mailto:contact@mybartenders.co.uk'
                className='text-pink-500 hover:text-pink-600'
              >
                contact@mybartenders.co.uk
              </Link>
            </p>
          </div>
        </section>

        <div className='mt-12 p-4 bg-pink-50/50 rounded-xl border border-pink-100'>
          <p className='text-sm text-gray-600 text-center'>
            Last updated: February 2025
          </p>
        </div>
      </div>
    </div>
  )
}

export default TermsAndConditions
