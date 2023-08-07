"use client" ;

import { useState, Fragment } from 'react';
import Image from 'next/image';
import { Combobox, Transition } from '@headlessui/react';

import { manufacturers } from '@/constants';
import { SearchManufacturerProps } from '@/types'
import React from 'react'

// Accept the states from SearchBar.tsx Component and props exported from types folder(index.ts)
const SearchManufacturer = ( {manufacturer, setManufacturer}: SearchManufacturerProps ) => {

    const [query, setQuery] = useState('')

    const filteredManufacturers = 
    query === "" ? manufacturers : manufacturers.filter((item) => 
                // change the items in manufacturers to lowercase in order to filter a specific one easily
                (item.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))))

    // This will be a Combobox that
    //  auto-Completes the name of Manufacturer using Headless UI
  return (
    <div className='search-manufacturer'>
        <Combobox value={manufacturer} onChange={setManufacturer}>
            <div className='relative w-full'>
                <Combobox.Button className='absolute top-[14px]'>
                    <Image 
                        src="/car-logo.svg"
                        width={20}
                        height={20}
                        className='ml-4'
                        alt="Car Logo"
                    />
                </Combobox.Button>
                
                <Combobox.Input
                // Self-closing input tag
                    className='search-manufacturer__input'
                    placeholder="Volkswagen"

                    // CallBack Function that takes the Value and displays the Value
                    displayValue={(manufacturer: string)=>(manufacturer)}

                    // changes the value once it is typed and selected
                    onChange={(e)=> setQuery(e.target.value)}
                />

                <Transition as={Fragment} leave='transition ease-in duration-100' 
                leaveFrom='opacity-100' leaveTo='opacity-0' 
                afterLeave={()=> setQuery('')}>

                    <Combobox.Options>
                    {/* Filter Function show the possible options or items to be selected */}
                    {filteredManufacturers.map((item) => (
                        <Combobox.Option 
                            key={item} 

                            // ComboBox.Option allows us to pass a function as a 
                            // className that styles the active ones differently from the none-active
                            // using template string (``) ie `.... ${active ? : } ....`
                            className={({ active }) => 
                            `relative search-manufacturer__option ${active ? 
                                'bg-primary-blue text-white' : 'text-gray-900'}
                            `}
                            value={item}
                        >
                            {({ selected, active }) => (
                                // Opened a block to display the selected items
                                <>
                                    <span
                                        className={`block truncate ${
                                            selected ? 'font-medium' : 'font-normal'
                                        }`}
                                        >
                                        {item}
                                    </span>
                                    {selected ? (
                                    <span
                                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                        active ? 'text-white' : 'text-teal-600'
                                        }`}
                                    >
                                        
                                    </span>
                                    ) : null}
                                </>
                            )}
                        </Combobox.Option>
                    ))}

                    </Combobox.Options>
                </Transition>
            </div>
        </Combobox>
    </div>
  )
}

export default SearchManufacturer