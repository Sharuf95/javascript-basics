const readline = require('readline-sync');

console.log(`Division of Numbers`);

 const a = Number(readline.question(`please enter value of a :`));
 const b = Number(readline.question(`please enter value of b :`));
 
 console.log(`console.log ${a} is ${typeof a}`);
 console.log(`console.log ${b} is ${typeof b}`);

 const Sum = a / b;


 console.log(`sum of ${a} / ${b} = Sum ${Sum}`);