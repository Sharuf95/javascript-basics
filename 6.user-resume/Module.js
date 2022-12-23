const readline = require(`readline-sync`);

console.log(`Module of Numbers`);

const a = +readline.question(`please enter a value : `);
const b = Number(readline.question(`please enter a value : `));

console.log(`value of ${a} is ${typeof a}`);
console.log(`value of ${b} is ${typeof b}`);

const Sum = a % b;

console.log(`sum of ${a} % ${b} = Sum ${Sum}`);