const argv = process.argv.slice(2);
const data = require("./data/data");

if (argv.filter) {
  const pattern = argv[0].split("=")[1];
  const filteredData = JSON.stringify(filteredAnimals(data, pattern), null, 2);
  console.log(filteredData);
}

function filteredAnimals(data, pattern) {
  let filteredData = [];
  for (const parent of data) {
    const filteredGroup = { name: parent.name, people: [] };
    for (const people of parent.people) {
      const filteredPeople = { name: people.name, animals: [] };
      for (const animal of people.animals) {
        if (animal.name.includes(pattern)) {
          filteredPeople.animals.push({ name: animal.name });
        }
      }
      if (filteredPeople.animals.length > 0) {
        filteredGroup.people.push(filteredPeople);
      }
    }
    if (filteredGroup.people.length > 0) {
      filteredData.push(filteredGroup);
    }
  }
  return filteredData;
}
