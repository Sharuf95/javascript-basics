// const readline = require('readline-sync');

// import readline from 'readline-sync';

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



console.log("Class_Notes");

/*
// const readline = require('readline-sync');
import readline from 'readline-sync';

const firstValue = +readline.question(`Please enter the value of a = `); // string -> number
const secondValue = Number(readline.question(`Please enter the value of b = `)); // string -> number

// declaring a function
function maths(valueOne, valueTwo) {
  console.log(`Value of a is ${valueOne}`);
  console.log(`Value of b is ${valueTwo}`);

  const addition = valueOne + valueTwo;
  const subtraction = valueOne - valueTwo;
  const multiply = valueOne * valueTwo;
  const division = valueOne / valueTwo;
  const modulo = valueOne % valueTwo;

  console.log(`Addition of ${valueOne} and ${valueTwo} is ${addition}`);
  console.log(`Subtraction of ${valueOne} and ${valueTwo} is ${subtraction}`);
  console.log(`Multiply of ${valueOne} and ${valueTwo} is ${multiply}`);
  console.log(`Division of ${valueOne} and ${valueTwo} is ${division}`);
  console.log(`Modulo of ${valueOne} and ${valueTwo} is ${modulo}`);
}

maths(firstValue, secondValue);
*/