"use client"; 
// marks this element as to be used in client side

import Image from 'next/image';
import CustomButton from './CustomButton';

const Hero = () => {

  const handleScroll = () => {

  }

  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
              Find, Book or Rent a car Quick and Easy!
            </h1>

            <p className='hero__subtitle'>
              Streamline your car rental experience with our effortless booking process.
            </p>

            <CustomButton 
              title="Explore Cars" containerStyles="bg-primary-blue text-wwhite rounded-full mt-10"
              handleClick={handleScroll}
            />
        </div>

        <div className='hero__image-container'>
          <div className='hero__image'>
            <img src='/hero.png' alt='hero' className='object-contain' />

          </div>
          <div className='hero__image-overlay'/>
        </div>
    </div>
  )
}

export default Hero