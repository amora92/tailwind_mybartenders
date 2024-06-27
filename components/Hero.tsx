import Image from 'next/image'
import Button_Find_Out_More from './Button_Find_Out_More'
import Carousel from './Carousel'
import Hero_Cta_Left from './Hero_Cta_Left'
import Button_Get_In_Touch from './Button_Get_In_Touch'

const Hero = () => {
  return (
    <section className='max-container padding-container flex flex-col gap-20 py-5 md:gap-28  xl:flex-row h-full'>
      <div className='relative z-20 flex flex-1 flex-col justify-center items-center xl:w-1/2 h-full'>
        <h1 className='bold-49 lg:bold-64 font-bold sm:bold-52'>
          Mobile Bar Hire
        </h1>
        <p className='bold-16 text-gray-30 p-3 xl:max-w-[520px]'>
          Elevate your next event with MyBartenders.co.uk's premier mobile bar
          hire services. Whether you're planning a wedding, corporate gathering,
          or private party, our professional bartenders are dedicated to
          crafting the perfect drink experience for you and your guests. Our
        </p>
        <p className='bold-16 text-gray-30 p-3 xl:max-w-[520px]'>
          Elevate your next event with MyBartenders.co.uk's premier mobile bar
          hire services. Whether you're planning a wedding, corporate gathering,
          or private party, our professional bartenders are dedicated to
        </p>
        <div className='flex flex-wrap p-3 gap-5'>
          <div className='flex items-center gap-2'>
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src='/star.svg'
                  key={index}
                  alt='star'
                  width={24}
                  height={24}
                />
              ))}
          </div>

          <p className='bold-16 lg:bold-20 text-blue-70'>
            Award Winning Service
          </p>
        </div>
        <Hero_Cta_Left />

        <div className='flex py-1 my-11 flex-col w-full gap-3 sm:flex-row justify-center items-center'>
          <a
            href='#contact'
            className='hover:bg-green-600 hover:text-white transition duration-300 ease-in-out'
          >
            <Button_Find_Out_More />
          </a>
          <a
            href='#more-info'
            className='hover:bg-green-600 hover:text-white transition duration-300 ease-in-out'
          >
            <Button_Get_In_Touch />
          </a>
        </div>
      </div>

      <div className='relative flex flex-1 h-full mx-11'>
        <Carousel />
      </div>
    </section>
  )
}

export default Hero
