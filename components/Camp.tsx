import React from 'react'
import Cta_Features from './Cta_Features'
import GridImageL from './GridImageL'
import GridReview from './GridReview'
import WindSGrid from './WindSGrid'
import FreqQ from './FreqQ'

const Camp = () => {
  return (
    <section className='container mx-auto px-2 md:px-4 lg:px-6 relative flex flex-col'>
      <Cta_Features />
      {/* <GridImageL /> */}
      <GridReview />
      <FreqQ />
      {/* <WindSGrid /> */}
    </section>
  )
}

export default Camp
