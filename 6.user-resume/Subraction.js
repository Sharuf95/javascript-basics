console.log(`Subraction of Numbers`);

const readline = require(`readline-sync`);

const a =  readline.question(`please enter value of a : `);
const b =  readline.question(`please enter value of b : `);
const c = Number(readline.question(`please enter value of c : `));

console.log(`value of ${a} is ${typeof a}`);
console.log(`value of ${b} is ${typeof b}`);
console.log(`value of ${c} is ${typeof c}`);

const sum = a-b-c;

console.log(`Sum of ${a} - ${b} - ${c} = sum ${sum} `);


