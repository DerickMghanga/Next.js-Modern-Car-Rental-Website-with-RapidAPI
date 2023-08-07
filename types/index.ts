import { CarCard, SearchManufacturer } from "@/components";
import { MouseEventHandler } from "react";

// used to add props to the CustomButton.tsx Component
export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

// used to add props to the SearchManufacturer.tsx Component
export interface SearchManufacturerProps {
    manufacturer: string;

    setManufacturer: (manufacturer: string) => void;
    // the function above takes manufacturer as a string 
    // and doesnt return anything it just a state setter
}

// use to create interface props for CarCardProps in CarCard component
export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}

// use it to add props to fetchCars function in utils folder and use it in page.tsx
export interface FilterProps {
    manufacturer: string,
    year: number,
    fuel: string,
    limit: number,
    model: string
}

// used to add props to 'options' property in the CustomFilterProps
export interface OptionsProps {
    title: string;
    value: string;
}

// used to add props to the CustomFilter Component
export interface CustomFilterProps {
    title: string;
    options: OptionsProps[];
}