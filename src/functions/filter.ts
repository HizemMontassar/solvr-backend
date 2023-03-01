import { Country, People } from "../types";

export const filteredAnimals = (
  data: Country[],
  pattern: string
): Country[] | string => {
  let filteredData: Country[] = [];
  for (const country of data) {
    const filteredCountry: Country = { name: country.name, people: [] };
    for (const people of country.people) {
      const filteredPeople: People = { name: people.name, animals: [] };
      for (const animal of people.animals) {
        if (animal.name.includes(pattern)) {
          filteredPeople.animals.push({ name: animal.name });
        }
      }
      if (filteredPeople.animals.length > 0) {
        filteredCountry.people.push(filteredPeople);
      }
    }
    if (filteredCountry.people.length > 0) {
      filteredData.push(filteredCountry);
    }
  }
  if (filteredData.length === 0) {
    return "No animal matching this pattern";
  }
  return filteredData;
};
