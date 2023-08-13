// Below Function is used to make a call to the API

import { CarDetails } from "@/components";
import { manufacturers } from "@/constants";
import { CarProps, FilterProps } from "@/types";

// It is a utility function we can use it across different files
// We added the FilterProps for the function to know what to expect
export async function fetchCars(filters: FilterProps) {

    const { manufacturer, year, model, limit, fuel } = filters;
    // destructure to help make a specific request in fetch url below
    // using template strings(``)

    const headers = {
        'X-RapidAPI-Key': '273be5a5e2msh0ea9877184bbfabp188cccjsn7ee14e241f50',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, 
    {headers: headers, });
    // By Default this is a GET request to fetch all cars.

    const result = await response.json();
    // parse the response as JSON. JSON parsing is the process of converting a JSON object
    // in text format to a Javascript object that can be used inside a program.

    return result;
    // This are the actual cars from the API
}

// calculate Car rent rates per day in the CarCard.tsx component
export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
};

// enables to generate car images in the CarDetails component.
export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL ('https://cdn.imagin.studio/getImage');

    const { make, year, model } = car;

    url.searchParams.append('customer', 'hrjavascript-mastery');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(' ')[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    url.searchParams.append('angle', `${angle}`);

    return `${url}`;
}

// we call this function in the CustomFilter.tsx component
//  to generate a more specific pathname with manufacturer, model, fuel and year car details
export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    // this get the current path name with the manufacturer and model details
    // Check and confirm from SearchBar.tsx Component

    searchParams.set(type, value)

    // this sets the new pathname or final URL 
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`

    return newPathname;
    }