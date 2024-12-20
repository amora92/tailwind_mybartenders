import React from 'react'

const About_Us_Media = () => {
  return (
    <div>
      <section className='bg-white text-black'>
        <div className='px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
          <div>
            <h1 className='text-3xl font-bold text-gray-800 mb-6'>
              About Our Mobile Bar Hire and Cocktail Bartender Services
            </h1>
            <h2 className='text-3xl font-bold sm:text-4xl'>
              What Makes Us Special
            </h2>
            <p className='mt-4 text-black'>
              Ready to elevate your event? Our mobile bar hire service is your
              ticket to an unforgettable experience! With a team of industry
              experts, we blend creativity and professionalism to bring your
              event to life. Whether it's a wedding, a private party, or a chic
              cocktail soirée, we ensure your celebration stands out. Let’s
              shake things up and create extraordinary moments together!
            </p>
          </div>

          <div className='mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3'>
            {/* Feature 1 */}
            <div className='flex items-start gap-4'>
              <span className='shrink-0 rounded-lg bg-gray-100 p-4'>
                <svg
                  className='h-5 w-5 text-gray-800'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 122.879 117.188'
                >
                  <path d='M64.395,1.969l15.713,36.79l39.853,3.575c1.759,0.152,3.06,1.701,2.907,3.459c-0.073,0.857-0.479,1.604-1.079,2.129l0.002,0.001L91.641,74.25l8.917,39.021c0.395,1.723-0.683,3.439-2.406,3.834c-0.883,0.203-1.763,0.018-2.466-0.441L61.441,96.191L27.087,116.73c-1.516,0.906-3.48,0.412-4.387-1.104c-0.441-0.736-0.55-1.58-0.373-2.355h-0.003l8.918-39.021L1.092,47.924c-1.329-1.163-1.463-3.183-0.301-4.512c0.591-0.676,1.405-1.042,2.235-1.087l39.748-3.566l15.721-36.81c0.692-1.627,2.572-2.384,4.199-1.692C63.494,0.597,64.084,1.225,64.395,1.969z' />
                </svg>
              </span>
              <div>
                <h2 className='text-lg font-bold'>Impeccable Reputation</h2>
                <p className='mt-1 text-sm text-black'>
                  Your satisfaction is our priority. We listen to your unique
                  needs and provide personalized solutions. Our dedicated
                  support fosters long-lasting relationships built on trust and
                  reliability.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className='flex items-start gap-4'>
              <span className='shrink-0 rounded-lg bg-gray-100 p-4'>
                <img
                  src='business-team-icon.svg'
                  alt='Business Team Icon'
                  className='h-5 w-5'
                />
              </span>
              <div>
                <h2 className='text-lg font-bold'>Professional Staff</h2>
                <p className='mt-1 text-sm text-black'>
                  Our team consists of carefully picked, highly trained
                  professionals from the service industry. Whether it's a garden
                  party or a high-profile event, we deliver excellence.
                </p>
              </div>
            </div>

            {/* Additional Features */}
            {/* Repeat similar structure for other features */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About_Us_Media
