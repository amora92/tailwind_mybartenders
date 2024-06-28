import Image from 'next/image'
import Button_Find_Out_More from './Button_Find_Out_More'
import Carousel from './Carousel'
import Hero_Cta_Left from './Hero_Cta_Left'
import Button_Get_In_Touch from './Button_Get_In_Touch'

const Hero = () => {
  return (
    <section className='max-container pt-20 padding-container flex flex-col gap-20 py-5 md:gap-28 mt-8 xl:flex-row h-full'>
      <div className='relative z-20 flex flex-1 flex-col justify-center items-center xl:w-1/2 h-full'>
        <Hero_Cta_Left />
      </div>

      <div className='relative flex flex-1 h-full mx-11'>
        <Carousel />
      </div>
    </section>
  )
}

export default Hero
