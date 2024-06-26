import Image from 'next/image'
import Button from './Button'
import Carousel from './Carousel'
import Cta_Features from './Cta_Features'

const Hero = () => {
  return (
    <section className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row h-full'>
      <div className='relative z-20 flex flex-1 flex-col justify-center items-center xl:w-1/2 h-full'>
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
        <p className='regular-16 mt-6 text-gray-30 xl:max-w-[520px]'>
          Elevate your next event with MyBartenders.co.uk's premier mobile bar
          hire services. Whether you're planning a wedding, corporate gathering,
          or private party, our professional bartenders are dedicated to
        </p>
        <h2></h2>
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

          <p className='bold-16 lg:bold-20 text-blue-70'>
            Award Winning Cocktails
          </p>
        </div>

        <div className='flex flex-col w-full gap-3 sm:flex-row justify-center items-center'>
          <Button type='button' title='Get in touch' variant='btn_green' />
          <Button type='button' title='Find Out More' variant='btn_green' />
        </div>
      </div>

      <div className='relative flex flex-1 h-full'>
        <Carousel />
      </div>
    </section>
  )
}

export default Hero
