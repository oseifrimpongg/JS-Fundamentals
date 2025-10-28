const arguments = process.argv;

if (arguments.length == 2)
{
   console.log("No argument");
}
else if (arguments.length == 3)
{
   console.log("Argument found");
}
else if (arguments.length > 3)
{
   console.log("Arguments found");
}