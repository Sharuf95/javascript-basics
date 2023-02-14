/* 
Three types of functions
1.function add () {
} // function declaration

2.const multiplication = function () {
} // function expression

const division = () => {
} Arrow function
*/

// 1. Function declaration
            // here `a` and `b` are parameters of add function

function add(a,b) {
return (a+b);
}
// function () {}


 // 2. Function expression
const subtraction = function (a,b) {
return (a-b);
}

// 3. Arrow function (ES6 -> EcmaScript 6) (Expression function)
const multiply = (a,b) => {
return (a*b);
}




               // `56` and `99` are values 
                              // or also know as passing arguments to add function


const addition = add(100,50);
console.log(`addition of 100 and 50 is ${addition}`);

  // Parameters (Variables defined in function)
              // Arguments (Are actual values pass to function)



const minus= subtraction(100,50); 
console.log(`subtraction of 100 and 50 is ${minus}`);


const twomultiplication= multiply(25,25) ;
console.log(`multiplication of 25 and 25 is ${twomultiplication}`);


// What happend if we dont pass arguments // NaN

const addOne = add();
console.log(`addition of value is ${addOne}`);

const additionn = add (10,1);
console.log(`addition of 10 and 1 value is ${additionn}`);



/*
function printdata(firstname,lastname, work ) {
  return firstname,lastname, work
    }
  const newdata = printdata('Shaik', 'Sharuf', 'Sharu');
  console.log (newdata);
   // undefined 
  
  
  function printdata(firstname,lastname, work ) {
  return firstname,lastname, work
    }
  const newdata = printdata('Shaik, Sharuf, Sharu');
  console.log (newdata);
  */


 console.log("Class__Notes");

 /*

// 1. Function declaration
            // here `a` and `b` are parameters of add function
function add(a, b) {
  return a + b;
}

// 2. Function expression
const subtraction = function (a, b) {
  return a - b;
}

// 3. Arrow function (ES6 -> EcmaScript 6) (Expression function)
const multiply = (a, b) => {
  return a * b;
}
                // `56` and `99` are values 
                // or also know as passing arguments to add function
const addition = add(56, 99);
console.log(`Addition value is ${addition}`);
// Parameters (Variables defined in function)
// Arguments (Are actual values pass to function)

const minus = subtraction(100, 56);
console.log(`Minus of 100 and 56 is ${minus}`);

const twoMultiply = multiply(2, 99);
console.log(`Mutliple of 2 and 99 is ${twoMultiply}`);

// What happend if we dont pass arguments
const addOne = add();
console.log(`Calling add function without arguments = ${addOne}`)

 */