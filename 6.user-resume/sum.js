const readline = require("readline-sync");

console.log("Sum of Numbers");

const a = +readline.question("please enter the value of a : ");
const b = Number(readline.question("please enter the value of b : "));
const c = +readline.question("please enter the value of c : ")
console.log(`value of ${a} is ${typeof a}`);
console.log(`value of ${b} is ${typeof b}`);
console.log(`value of ${c} is ${typeof c}`);

const Sum =  a+b+c;

console.log (`Sum of ${a} + ${b} + ${c} = Sum ${Sum} `);
