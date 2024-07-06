import React from 'react'
import Cta_Features from './Cta_Features'
import GridImageL from './GridImageL'
import GridReview from './GridReview'
import WindSGrid from './WindSGrid'
const Camp = () => {
  return (
    <section className=' 2xl:max-container relative flex flex-col'>
      <Cta_Features />
      <GridImageL />
      <GridReview />
      <WindSGrid />
    </section>
  )
}

export default Camp
