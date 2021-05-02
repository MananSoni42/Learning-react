import React, { useState, useEffect, useContext } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./Dropdown";
import Results from "./Results";
import ThemeContext from "./ThemeContext";

const SearchParams = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [pets, setPets] = useState([]);
  const [animal, AnimalDropdown, setAnimal] = useDropdown(
    "Animal",
    "Dog",
    ANIMALS
  );
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal,
    });

    setPets(animals || []);
  }

  useEffect(() => {
    setBreeds([]);
    setBreed("");

    pet.breeds(animal).then(({ breeds }) => {
      const breed_str = breeds.map(({ name }) => name);
      setBreeds(breed_str);
    }, console.error);
  }, [animal, setBreed, setBreeds]);

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            value={location}
            placeholder="location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <label htmlFor="theme">
          Theme
          <select
            id="theme"
            onClick={(e) => setTheme(JSON.parse(e.target.value))}
          >
            <option value={JSON.stringify({ bg: "white", txt: "darkgray" })}>
              {" "}
              Light{" "}
            </option>
            <option value={JSON.stringify({ bg: "darkgray", txt: "white" })}>
              {" "}
              Dark{" "}
            </option>
          </select>
        </label>
        <button style={{ backgroundColor: theme.bg, color: theme.txt }}>
          Submit
        </button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
