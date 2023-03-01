import { Country, People } from "../types";

export const countChildren = (data: Country[]) => {
  let newData: Country[] = [];
  for (const country of data) {
    const countCountry: Country = {
      name: "",
      people: [],
    };
    let parentChildrenCount = country.people.length;
    for (const people of country.people) {
      const countPeople: People = {
        name: `${people.name} [${people.animals.length}]`,
        animals: [],
      };
      for (const animal of people.animals) {
        parentChildrenCount += 1;
        countPeople.animals.push({ name: animal.name });
      }
      countCountry.people.push(countPeople);
      countCountry.name = `${country.name} [${parentChildrenCount}]`;
    }
    newData.push(countCountry);
  }
  return newData;
};
