"use client" ; 

import { useState } from 'react';
import Image from 'next/image';

import { CarProps } from '@/types';
import CustomButton from './CustomButton';
import { calculateCarRent, generateCarImageUrl } from '@/utils';
import CarDetails from './CarDetails';

// Import props from types(index.ts) folder and create an interface 
interface CarCardProps {
    car: CarProps;
}

const CarCard = ( {car}: CarCardProps) => {
    const {city_mpg, year, drive, make, model, transmission} = car;
    // enables us to use props, example: 'year' instead of 'car.year'

    const [isOpen, setIsOpen] = useState(false);
    // To be used to open and close the Dialog box that displays CarDetails.tsx component

    const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className='car-card group'>
        <div className='car-card__content'>
            <h2 className='car-card__content-title'>
                {make} {model}
            </h2>
        </div>

        <p className='flex mt-6 text-[32px] font-extrabold'>
            <span className='self-start text-[14px] font-semibold'>
                $
            </span>
            {carRent}
            <span className='self-end text-[14px] font-medium'>
                /day
            </span>
        </p>

        <div className='relative w-full h-40 my-3 object-contain'>
            <Image src={generateCarImageUrl(car)} alt='car' fill priority className='object-contain'/>
        </div>

        <div className='relative flex w-full mt-2'>
            <div className='flex group-hover:invisible w-full justify-between text-gray'>

                <div className='flex flex-col justify-center items-center gap-2'>
                    <Image src="/steering-wheel.svg" width={20} height={20} alt='steering wheel'/>
                    <p className='text-[14px]'>
                        {transmission === 'a' ? 'Automatic' : 'Manual'}
                    </p>
                </div>

                <div className='flex flex-col justify-center items-center gap-2'>
                    <Image src="/tire.svg" width={20} height={20} alt='tire'/>
                    <p className='text-[14px]'>
                        {drive.toUpperCase()}
                    </p>
                </div>

                <div className='flex flex-col justify-center items-center gap-2'>
                    <Image src="/gas.svg" width={20} height={20} alt='steering wheel'/>
                    <p className='text-[14px]'>
                        {city_mpg} MPG
                    </p>
                </div>
            </div>

            <div className='car-card__btn-container'>
                <CustomButton title='View more' 
                containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
                textStyles='text-white text-[14px] leading-[17px] font-bold'
                rightIcon='/right-arrow.svg'
                handleClick={() => setIsOpen(true)}
                // The handleClick opens the CarDetails Modal/Component details when clicked
                />
            </div>
        </div>

        <CarDetails isOpen={isOpen} closeModal={()=>
            setIsOpen(false)
            // This will toggle it off/makes the component invisible unless the handleClick activated
            }
            car={car}
        />

    </div>
  )
}

export default CarCard