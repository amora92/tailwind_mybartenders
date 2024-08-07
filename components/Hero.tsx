import Carousel from './Carousel'
import Hero_Cta_Left from './Hero_Cta_Left'

const Hero = () => {
  return (
    <section className='container mx-auto pt-20 px-2 md:px-4 lg:px-6 flex flex-col gap-10 py-5 md:gap-10 mt-8 xl:flex-row h-full'>
      <div className='relative z-20 flex flex-1 flex-col justify-center items-center xl:w-1/2 h-full'>
        <Hero_Cta_Left />
      </div>

      <div className='relative flex flex-1 h-full mb-10'>
        <Carousel />
      </div>
    </section>
  )
}

export default Hero
