const arguments = process.argv.slice(2, process.argv.length);
const values = arguments.map(value => Number(value));

console.log(values[0] + values[1]);