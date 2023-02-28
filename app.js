const argv = process.argv.slice(2);
const data = require("./data/data");

const argument = argv[0].slice(2);
if (argument.includes("filter")) {
  const pattern = argv[0].split("=")[1];
  const filteredData = JSON.stringify(filteredAnimals(data, pattern), null, 2);
  console.log(filteredData);
}
if (argument.includes("count")) {
  const countData = JSON.stringify(countChildren(data), null, 2);
  console.log(countData);
}

function filteredAnimals(data, pattern) {
  let filteredData = [];
  for (const parent of data) {
    const filteredParent = { name: parent.name, people: [] };
    for (const people of parent.people) {
      const filteredPeople = { name: people.name, animals: [] };
      for (const animal of people.animals) {
        if (animal.name.includes(pattern)) {
          filteredPeople.animals.push({ name: animal.name });
        }
      }
      if (filteredPeople.animals.length > 0) {
        filteredParent.people.push(filteredPeople);
      }
    }
    if (filteredParent.people.length > 0) {
      filteredData.push(filteredParent);
    }
  }
  if (filteredData.length === 0) {
    return "No animal matching this pattern";
  }
  return filteredData;
}

function countChildren(data) {
  let newData = [];
  for (const parent of data) {
    const countParent = {
      name: "",
      people: [],
    };
    let parentChildrenCount = parent.people.length;
    for (const people of parent.people) {
      const countPeople = {
        name: `${people.name} [${people.animals.length}]`,
        animals: [],
      };
      for (const animal of people.animals) {
        parentChildrenCount += 1;
        countPeople.animals.push({ name: animal.name });
      }
      countParent.people.push(countPeople);
      countParent.name = `${parent.name} [${parentChildrenCount}]`;
    }
    newData.push(countParent);
  }
  return newData;
}

module.exports.filteredAnimals = filteredAnimals;
module.exports.countChildren = countChildren;
