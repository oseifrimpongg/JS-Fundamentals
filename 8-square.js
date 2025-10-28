const number = process.argv[2];
const value = parseInt(number);

if (isNaN(value))
{
   console.log("Missing size");
}
else if (value >= 1)
{
   let output = "";

   for (let i = 0; i < value; i++)
   {
      for (let j = 0; j < value; j++)
      {
         if (j == value - 1)
         {
            output += "x\n";
         }
         else
         {
            output += "x";
         }
      }
   }
   console.log(output);
}