const readline = require('readline-sync');
console.log(`Multiply of numbers`);

const a = Number(readline.question(`Please enter a value of a : `));
const b = Number(readline.question(`Please enter a value of b : `));
 console.log(`value of ${a} is ${typeof a}`);
 console.log(`value of ${b} is ${typeof b}`);

 const sum = a * b;

 console.log(`Sum of ${a} - ${b} = sum ${sum}`);

