import Image from 'next/image'
import Button from './Button'
import Carousel from './Carousel'

const Hero = () => {
  return (
    <section className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row'>
      {/* <div className='hero-map' /> */}

      <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
        <Carousel />
        {/* <Image
          src='/pineapple_4.svg'
          alt='camp'
          width={50}
          height={50}
          className='absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]'
        /> */}

        <h1 className='bold-49 lg:bold-88'>Mobile Bar Hire</h1>
        <p className='regular-16 mt-6 text-gray-30 xl:max-w-[520px]'>
          Elevate your next event with MyBartenders.co.uk's premier mobile bar
          hire services. Whether you're planning a wedding, corporate gathering,
          or private party, our professional bartenders are dedicated to
          crafting the perfect drink experience for you and your guests. Our
          fully equipped mobile bars bring a touch of sophistication and flair
          to any occasion, featuring custom cocktail creations and a wide
          selection of beverages tailored to your taste. With a commitment to
          excellence and a passion for hospitality, MyBartenders.co.uk ensures
          that every event is unforgettable, leaving a lasting impression on
          your guests. Let us bring the bar to you and make your celebration
          truly extraordinary.
        </p>

        <div className='my-11 flex flex-wrap gap-5'>
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

          <p className='bold-16 lg:bold-20 text-blue-70'>Star Service</p>
        </div>

        <div className='flex flex-col w-full gap-3 sm:flex-row'>
          <Button type='button' title='Get in touch' variant='btn_green' />
          <Button
            type='button'
            title='Gallery'
            icon='/play.svg'
            variant='btn_white_text'
          />
        </div>
      </div>

      {/* <div className='relative flex flex-1 items-start'>
        <div className='relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8'>
          <div className='flex flex-col'>
            <div className='flexBetween'>
              <p className='regular-16 text-gray-20'>Location</p>
              <Image src='/close.svg' alt='close' width={24} height={24} />
            </div>
            <p className='bold-20 text-white'>Aguas Calientes</p>
          </div>

          <div className='flexBetween'>
            <div className='flex flex-col'>
              <p className='regular-16 block text-gray-20'>Distance</p>
              <p className='bold-20 text-white'>173.28 mi</p>
            </div>
            <div className='flex flex-col'>
              <p className='regular-16 block text-gray-20'>Elevation</p>
              <p className='bold-20 text-white'>2.040 km</p>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  )
}

export default Hero
