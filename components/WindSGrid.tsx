import React from 'react'

const WindSGrid = () => {
  return (
    <div>
      <section>
        <div className='px-8 py-24 mx-auto md:px-12 lg:px-32'>
          <div>
            <h1 className='text-4xl font-semibold tracking-tighter text-gray-900 lg:text-6xl text-balance'>
              Adventurous & Unique Mixtures,
              <span className='text-lime-500'>wherever and anywhere</span>
            </h1>
            <p className='mt-4 text-base font-medium text-gray-500 text-balance'>
              Embark on a mixology masterclass and unlock the secrets of
              crafting exquisite cocktails. Elevate your bartending skills and
              indulge in a delightful hands-on experience. Unforgettable and
              enriching!
            </p>
          </div>
          <div className='space-y-2'>
            <div className='grid gap-2 mt-12 lg:grid-flow-col-dense lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-3'>
              <div className='max-w-lg min-w-full mx-auto'>
                <div className='flex h-full'>
                  <div className='flex flex-col justify-center p-8 border bg-gray-10 rounded-3xl max-w-none'>
                    <h2 className='font-medium text-gray-900'>
                      Don't compromise.
                    </h2>
                    <p className='mt-4 text-sm font-medium text-gray-500 text-pretty'>
                      Premium alcohol offers unparalleled quality, crafted with
                      meticulous attention to detail and superior ingredients.
                      Its refined taste, smooth finish, and distinctive
                      character elevate any drinking experience. From nuanced
                      flavors to exceptional craftsmanship, premium alcohol
                      ensures an indulgent and memorable journey for
                      connoisseurs.
                    </p>
                    <p className='mt-4 text-sm font-medium text-gray-500 text-pretty'>
                      Premium alcohol offers unparalleled quality, crafted with
                      meticulous attention to detail and superior ingredients.
                      Its refined taste, smooth finish, and distinctive
                      character elevate any drinking experience. From nuanced
                      flavors to exceptional craftsmanship, premium alcohol
                      ensures an indulgent and memorable journey for
                      connoisseurs.
                    </p>
                  </div>
                </div>
              </div>
              <div className='lg:col-span-2'>
                <div className='relative h-full p-2 overflow-hidden border rounded-3xl'>
                  <img
                    src='/cocktail_red_fine.jpg'
                    className='object-cover h-full border shadow-2xl rounded-2xl'
                    alt='Placeholder'
                  />
                </div>
              </div>
            </div>
            <div className='grid gap-2 lg:grid-flow-col-dense lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-3'>
              <div className='max-w-lg min-w-full mx-auto lg:col-start-3'>
                <div className='flex h-full'>
                  <div className='flex flex-col justify-center p-8 border bg-gray-10 rounded-3xl max-w-none'>
                    <h2 className='font-medium text-gray-900'>
                      Nutritionally balanced.
                    </h2>
                    <p className='mt-4 text-sm font-medium text-gray-500 text-pretty'>
                      We pride ourselves on using the finest, freshest, and
                      naturally sourced ingredients in our offerings. Our
                      commitment to quality ensures that every sip reflects the
                      best choice for flavor, sustainability, and customer
                      satisfaction.
                    </p>
                  </div>
                </div>
              </div>
              <div className='lg:col-start-1 lg:col-span-2'>
                <div className='relative h-full p-2 overflow-hidden border rounded-3xl'>
                  <img
                    src='/cocktail_color_fine.jpg'
                    className='object-cover h-full border shadow-2xl rounded-2xl'
                    alt='Placeholder'
                  />
                </div>
              </div>
            </div>
            <div className='grid gap-2 lg:grid-flow-col-dense lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-3'>
              <div className='max-w-lg min-w-full mx-auto'>
                <div className='flex h-full'>
                  <div className='flex flex-col justify-center p-8 border bg-gray-10 rounded-3xl max-w-none'>
                    <h2 className='font-medium text-gray-900'>
                      All drink solutions.
                    </h2>
                    <p className='mt-4 text-sm font-medium text-gray-500 text-pretty'>
                      Our mocktails and smoothies blend vibrant flavors with
                      health-conscious ingredients, offering a refreshing
                      alternative. Crafted with care, each sip delivers a burst
                      of taste and vitality, perfect for any occasion.
                    </p>
                  </div>
                </div>
              </div>
              <div className='lg:col-span-2'>
                <div className='relative h-full p-2 overflow-hidden border rounded-3xl'>
                  <img
                    src='/cocktail_foam.jpg'
                    className='object-cover h-full border shadow-2xl rounded-2xl'
                    alt='Placeholder'
                  />
                </div>
              </div>
            </div>
            <div className='grid gap-2 mt-2 text-center md:grid-cols-3'>
              <div className='p-2 overflow-hidden border rounded-3xl'>
                <img
                  src='https://images.unsplash.com/photo-1506802913710-40e2e66339c9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='Placeholder'
                  className='w-full h-full mx-auto rounded-2xl'
                />
              </div>
              <div className='p-2 overflow-hidden border rounded-3xl'>
                <img
                  src='https://images.unsplash.com/photo-1481671703460-040cb8a2d909?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='Placeholder'
                  className='w-full h-full mx-auto rounded-2xl'
                />
              </div>
              <div className='p-2 overflow-hidden border rounded-3xl'>
                <img
                  src='https://images.unsplash.com/photo-1560179304-6fc1d8749b23?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='Placeholder'
                  className='w-full h-full mx-auto rounded-2xl'
                />
              </div>
              <div className='mt-4'>
                <p className='font-medium text-gray-900'>Blended drinks</p>
                <p className='mt-2 text-sm text-gray-500'>
                  Blended drinks offer a refreshing fusion of flavors, combining
                  fruits, ice, and spirits into a smooth, enjoyable concoction
                  perfect for any occasion.
                </p>
              </div>
              <div className='px-8 mt-4'>
                <p className='font-medium text-gray-900'>Themed Solutions</p>
                <p className='mt-2 text-sm text-gray-500'>
                  Themed drinks are crafted with meticulous attention to detail,
                  tailored precisely to your preferences and occasion. Each sip
                  promises a unique and unforgettable experience, perfectly
                  suited to elevate any gathering.
                </p>
              </div>
              <div className='px-8 mt-4'>
                <p className='font-medium text-gray-900'>Collaboration</p>
                <p className='mt-2 text-sm text-gray-500'>
                  Collaborating with other food operators enriches our offerings
                  with diverse flavors and expertise, ensuring a culinary
                  experience that transcends expectations. Together, we create
                  memorable occasions that delight and inspire.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WindSGrid
