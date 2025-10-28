const number = process.argv[2];
const value = parseInt(number);

if (isNaN(value))
{
   console.log("Not a number");
}
else 
{
   console.log(`My number: ${value}`);
}