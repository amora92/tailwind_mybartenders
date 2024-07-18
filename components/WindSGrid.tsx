import React from 'react'

const WindSGrid = () => {
  return (
    <div>
      <section>
        <div className='px-8 py-24 mx-auto md:px-12 lg:px-32'>
          <div>
            <h2 className='text-4xl font-semibold tracking-tighter text-gray-900 lg:text-6xl text-balance'>
              Adventurous & Unique Mixtures,
              <span className='text-lime-500'> wherever and anywhere</span>
            </h2>
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
                    <h2 className='font-semibold text-gray-900'>
                      Only the best spirits.
                    </h2>
                    <p className='mt-4 text-sm font-medium text-gray-500 text-pretty'>
                      Premium alcohol offers unparalleled quality, crafted with
                      meticulous attention to detail and superior ingredients.
                    </p>
                    <h3 className='mt-4 font-semibold text-gray-800'>
                      Quality Assurance
                    </h3>
                    <p className='text-sm text-gray-500'>
                      We ensure every bottle meets our high standards of
                      excellence. Our selection process guarantees only the
                      finest spirits make it to your glass.
                    </p>
                    <h3 className='mt-4 font-semibold text-gray-800'>
                      Superior Ingredients
                    </h3>
                    <p className='text-sm text-gray-500'>
                      Using only the best ingredients, our premium alcohol is
                      crafted to perfection. Experience the true essence of
                      quality with every sip.
                    </p>
                  </div>
                </div>
              </div>
              <div className='lg:col-span-2'>
                <div className='relative h-full p-2 overflow-hidden border rounded-3xl'>
                  <img
                    src='/cocktail_red_fine.webp'
                    alt='Red Cocktail with Fine Details'
                    className='object-cover h-full border shadow-2xl rounded-2xl'
                    width={800} // Set the width
                    height={600} // Set the height
                    loading='lazy'
                  />
                </div>
              </div>
            </div>

            <div className='grid gap-2 lg:grid-flow-col-dense lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-3'>
              <div className='max-w-lg min-w-full mx-auto lg:col-start-3'>
                <div className='flex h-full'>
                  <div className='flex flex-col justify-center p-8 border bg-gray-10 rounded-3xl max-w-none'>
                    <h2 className='font-semibold text-gray-900'>
                      Real ingredients, real flavour!
                    </h2>
                    <p className='mt-4 text-sm font-medium text-gray-500 text-pretty'>
                      We pride ourselves on using the finest, freshest, and
                      naturally sourced ingredients in our offerings.
                    </p>
                    <h3 className='mt-4 font-semibold text-gray-800'>
                      Health Conscious
                    </h3>
                    <p className='text-sm text-gray-500'>
                      Every ingredient is selected for its health benefits,
                      ensuring you get a drink that's not just tasty but also
                      good for you.
                    </p>
                    <h3 className='mt-4 font-semibold text-gray-800'>
                      Fresh Ingredients
                    </h3>
                    <p className='text-sm text-gray-500'>
                      Our commitment to freshness means using only the best
                      produce, enhancing flavor and nutritional value.
                    </p>
                  </div>
                </div>
              </div>
              <div className='lg:col-start-1 lg:col-span-2'>
                <div className='relative h-full p-2 overflow-hidden border rounded-3xl'>
                  <img
                    src='/cocktail_color_fine.webp'
                    alt='Colorful Cocktail with Fine Details'
                    className='object-cover h-full border shadow-2xl rounded-2xl'
                    width={800} // Set the width
                    height={600} // Set the height
                    loading='lazy'
                  />
                </div>
              </div>
            </div>

            <div className='grid gap-2 lg:grid-flow-col-dense lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-3'>
              <div className='max-w-lg min-w-full mx-auto'>
                <div className='flex h-full'>
                  <div className='flex flex-col justify-center p-8 border bg-gray-10 rounded-3xl max-w-none'>
                    <h2 className='font-semibold text-gray-900'>
                      All drink solutions.
                    </h2>
                    <p className='mt-4 text-sm font-medium text-gray-500 text-pretty'>
                      Our mocktails and smoothies blend vibrant flavors with
                      health-conscious ingredients, offering a refreshing
                      alternative.
                    </p>
                    <h3 className='mt-4 font-semibold text-gray-800'>
                      Mocktails
                    </h3>
                    <p className='text-sm text-gray-500'>
                      Delight in our handcrafted mocktails, where taste meets
                      creativity. Perfect for any occasion and for those who
                      prefer non-alcoholic options.
                    </p>
                    <h3 className='mt-4 font-semibold text-gray-800'>
                      Smoothies
                    </h3>
                    <p className='text-sm text-gray-500'>
                      Our smoothies are not just beverages; they're a blend of
                      nutrition and flavor, ideal for a healthy lifestyle.
                    </p>
                  </div>
                </div>
              </div>
              <div className='lg:col-span-2'>
                <div className='relative h-full p-2 overflow-hidden border rounded-3xl'>
                  <img
                    src='/cocktail_foam.webp'
                    alt='Foamy Cocktail'
                    className='object-cover h-full border shadow-2xl rounded-2xl'
                    width={800} // Set the width
                    height={600} // Set the height
                    loading='lazy'
                  />
                </div>
              </div>
            </div>

            <div className='grid gap-2 mt-2 text-center md:grid-cols-3'>
              <div className='p-2 overflow-hidden border rounded-3xl'>
                <img
                  src='cocktail_webp.webp'
                  alt='Blended Drinks'
                  className='w-full h-full mx-auto rounded-2xl'
                  width={800} // Set the width
                  height={600} // Set the height
                  loading='lazy'
                />
              </div>
              <div className='p-2 overflow-hidden border rounded-3xl'>
                <img
                  src='cocktail_webp_2.webp'
                  alt='Themed Solutions'
                  className='w-full h-full mx-auto rounded-2xl'
                  width={800} // Set the width
                  height={600} // Set the height
                  loading='lazy'
                />
              </div>
              <div className='p-2 overflow-hidden border rounded-3xl'>
                <img
                  src='cocktail_webp_3.webp'
                  alt='Collaboration'
                  className='w-full h-full mx-auto rounded-2xl'
                  width={800} // Set the width
                  height={600} // Set the height
                  loading='lazy'
                />
              </div>
              <div className='mt-4'>
                <p className='font-semibold text-gray-900'>Blended drinks</p>
                <p className='mt-2 text-sm text-gray-500'>
                  Blended drinks offer a refreshing fusion of flavors, combining
                  fruits, ice, and spirits into a smooth, enjoyable concoction.
                </p>
                <h3 className='mt-4 font-semibold text-gray-800'>
                  Versatile Flavors
                </h3>
                <p className='text-sm text-gray-500'>
                  Whether you crave something fruity, creamy, or a combination
                  of both, our blended drinks are sure to satisfy your taste
                  buds.
                </p>
              </div>
              <div className='px-8 mt-4'>
                <p className='font-semibold text-gray-900'>Themed Solutions</p>
                <p className='mt-2 text-sm text-gray-500'>
                  Themed drinks are crafted with meticulous attention to detail,
                  tailored precisely to your preferences and occasion.
                </p>
                <h3 className='mt-4 font-semibold text-gray-800'>
                  Event-Specific Creations
                </h3>
                <p className='text-sm text-gray-500'>
                  Our themed solutions include drinks specially designed for
                  weddings, corporate events, and private parties, adding a
                  unique touch to every gathering.
                </p>
              </div>
              <div className='px-8 mt-4'>
                <p className='font-semibold text-gray-900'>Collaboration</p>
                <p className='mt-2 text-sm text-gray-500'>
                  Collaborating with other food operators enriches our offerings
                  with diverse flavors and expertise, ensuring a culinary
                  experience that transcends expectations.
                </p>
                <h3 className='mt-4 font-semibold text-gray-800'>
                  Innovative Partnerships
                </h3>
                <p className='text-sm text-gray-500'>
                  By working with top chefs and mixologists, we bring you an
                  innovative range of drinks that showcase the best of culinary
                  and beverage arts.
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
