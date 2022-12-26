/*console.log("hello");
console.log("welcome to my world")

// const readline = require("readline-sync"); // may not work for chalk
// type this in package.json -->( ES5 | ES6 ("type" : "module")_^^^//import chalk from "chalk";) //
*/  

import chalk from "chalk";

console.log(chalk.bgRed("hello"));
console.log(chalk.red("welcome to my world"));
console.log(chalk.blue ("Advance"));
console.log(chalk.bgRed("Happy New Year"));

function myownoutput() {
    console.log("Shaik");
    console.log("Sharuf");
    console.log("Plz make it ");
    console.log("happens")
}
myownoutput();


var numberone = 11
var numbertwo = 12
var output = numberone + numbertwo
console.log (output);


    function Addition (inputOne, inputTwo)
{
console.log ("User Calling for Addition.....");
console.log (chalk.bgRed(inputOne));
console.log (chalk.bgBlue(inputTwo)); 
const output = inputOne + inputTwo ;
console.log(chalk.bgGreen(output));
}
Addition(2,8); 


    function Division (inputOne , inputTwo) 
{
    console.log("User calling for Division");
    console.log (chalk.bgRed(inputOne));
    console.log (chalk.bgBlue(inputTwo));
    const output = inputOne / inputTwo ;
    console.log(chalk.bgGreen(output));    
}
Division (100 , 5);


    function Multiplication (inputOne , inputTwo) 
{
    console.log ("User calling for Multiplication");
    console.log (chalk.bgRed(inputOne));
    console.log (chalk.bgBlue (inputTwo));
    const output = inputOne * inputTwo ;
    console.log (chalk.bgGreen(output));
}
 Multiplication (15 , 2);


 function Subraction (inputOne , inputTwo)
{
    console.log ("Users calling for Subraction")
    console.log (chalk.bgRed(inputOne));
    console.log (chalk.bgBlue(inputTwo));
    const output = inputOne - inputTwo ;
    console.log(chalk.bgGreen(output));  
}
Subraction (50 , 10)


function Module (inputOne , inputTwo) 
{ 
    console.log ("User calling for Module");
    console.log (chalk.bgRed(inputOne));
    console.log (chalk.bgBlue(inputTwo));
    const output = inputOne % inputTwo ;
    console.log (chalk.bgGreen(output));
}

Module ( 50000 , 111)