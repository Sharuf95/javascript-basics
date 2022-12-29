//const readline = require('readline-sync');

import readline from 'readline-sync';

const firstvalue = +readline.question(`please enter the value of a = `);
const secondvalue = Number(readline.question(`please enter the value of b =`));

//declaring a function

function maths (valueone , valuetwo)
{
console.log (`value of a ${valueone}`);
console.log (`value of b ${valuetwo}`);

const addition = valueone + valuetwo;
const subraction = valueone -valuetwo;
const multiplication = valueone * valuetwo;
const division = valueone / valuetwo;
const module = valueone % valuetwo;

console.log (`addition of       ${valueone} and ${valuetwo} is ${addition}`);
console.log (`subraction of     ${valueone} and ${valuetwo} is ${subraction}`);
console.log (`multiplication of ${valueone} and ${valuetwo} is ${multiplication}`);
console.log (`division of       ${valueone} and ${valuetwo} is ${division}`);
console.log (`module of         ${valueone} and ${valuetwo} is ${module}`);
}

maths (firstvalue, secondvalue);