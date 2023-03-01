import { filteredAnimals, countChildren } from './functions';

const filter = process.argv.find((arg) => arg.includes('--filter='));
const count = process.argv.find((arg) => arg.includes('--count'));
let data = require('../data');

if (filter) {
  const pattern = filter.split('=')[1];
  const filteredData = JSON.stringify(filteredAnimals(data, pattern), null, 2);
  console.log(filteredData);
}
if (count) {
  const countData = JSON.stringify(countChildren(data), null, 2);
  console.log(countData);
}

export { filteredAnimals, countChildren };
