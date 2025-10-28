const arguments = process.argv.slice(2, process.argv.length);
const value = arguments.map(number => Number(number))[0];

console.log(Factorial(value));

function Factorial(value)
{
   if (isNaN(value) || value == 0)
   {
      return 1;
   }
   else return value * Factorial(value - 1);
}