const number = process.argv[2];
const value = parseInt(number);

if (isNaN(value))
{
   console.log("Missing number of occurrences");
}
else if (value >= 1)
{
   for (let index = 0; index < value; index++)
   {
      console.log("C is fun");
   }
}