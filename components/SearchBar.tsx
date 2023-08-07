"use client" ;

import React, { useState } from "react";
import { useRouter} from "next/navigation";

import Image from "next/image";

import { SearchManufacturer } from "./";


// Re-Usable Search button to be used only in the SearchBar component
const SearchButton = ({ otherClasses } : {otherClasses: string}) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="magnifying glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
)

const SearchBar = () => {

    const [ manufacturer, setManufacturer] = useState('');
    const [model, setModel] = useState('');
    const router = useRouter();


    // React.FormEvent<HTMLFormElement> helps us use the form elements in the <input />  tag and 
    // also "submit" event in the SearchButton <button> html element
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // Prevents the browser from reloading since we are using React

      if(manufacturer === '' && model === '') {
        return alert("Please Fill the Search Bar")
      }

      updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase())
    }

    const updateSearchParams = (model: string, manufacturer: string) => {
      const searchParams = new URLSearchParams(window.location.search);
      // This enables us to get the current path with the current parameters
      // if there was something previously we need to know it and store it.

      // update new searchParams model or delete a previous model
      if(model) {
        searchParams.set('model', model)
      } else {
        searchParams.delete('model')
      }

      // update new searchParams manufacturer or delete a previous manufacturer
      if(manufacturer) {
        searchParams.set('manufacturer', manufacturer)
      } else {
        searchParams.delete('manufacturer')
      }

      // this sets the new pathname or final URL with the new parameters
      const newPathname = `${window.location.pathname}?${searchParams.toString()}`

      router.push(newPathname)
    }

  

  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className='searchbar__item'>
            <SearchManufacturer
                // Pass the states as props in this component
                manufacturer = {manufacturer}
                setManufacturer = {setManufacturer}
            />

            {/* This Button Will be used to Submit the car selected */}
            <SearchButton otherClasses='sm:hidden'/>
        </div>

        <div className="searchbar__item">
          <Image 
            src="/model-icon.png"
            width={25}
            height={25}
            className="absolute w-[20px] h-[20px] ml-4"
            alt="car model"
          />

          <input
            type="text"
            name="model"
            value={model} 
            onChange={(e) => setModel(e.target.value)}
            placeholder="Tiguan"
            className="searchbar__input"
          />
          <SearchButton otherClasses="sm:hidden" />
        </div>
        <SearchButton otherClasses="max-sm:hidden" />

    </form>
  )
}

export default SearchBar