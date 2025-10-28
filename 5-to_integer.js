const number = process.argv[2];
const value = parseInt(number);

if (value == NaN)
{
   console.log("Not a number");
}
else 
{
   console.log(value);
}