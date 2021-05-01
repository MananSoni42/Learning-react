import React, { useState, useEffect} from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./Dropdown"

const SearchParams = () => {
    const [location,  setLocation] = useState("Seattle, WA");
    const [breeds, setBreeds] = useState([]);

    const [animal, AnimalDropdown, setAnimal] = useDropdown("Animal", "Dog", ANIMALS);
    const [breed,   BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);

    useEffect(() => {
        setBreeds([]);
        setBreed("");

        pet.breeds(animal).then( ({breeds}) => {
            const breed_str = breeds.map(({name}) => name);
            setBreeds(breed_str);
        }, console.error);

    }, [animal, setBreed, setBreeds]);

    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input type="text" id="location" value={location} placeholder="location"
                    onChange= { e => setLocation(e.target.value) }/>
                </label>
                <AnimalDropdown/>
                <BreedDropdown/>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default SearchParams;
