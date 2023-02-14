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


console.log("Class__Notes");

/*
const readline = require('readline-sync');

console.log("Sum of Two Numbers");

// COnvert value to number
// 1. Number(value) 
// 2. +value

const a = +readline.question('Please enter the value of a: ');
const b = Number( readline.question('Please enter the value of b: ') );
console.log(`Value of ${a} is ${typeof a}`);
console.log(`Value of ${b} is ${typeof b}`);
const sum = a+b;

console.log(`SUM OF ${a} plus ${b} = ${sum}`);
*/