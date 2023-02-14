/**
A function is a piece of code that can be called during the lifecycle of the app to perform a task or return a value. 
A function declaration can be broken down into the following pieces.
  - Name.
  - Parameters. A list of inputs that can be passed into a function.
  - Body. The logic or statements that perform the computation.
1. A function declaration on its own does not do anything. 
2. You make use of functions by calling them. 
3. The return value of the function can be assigned to a variable.
  - Function call. Executes the code inside the function body.
  - Arguments. The values are to be used as parameters in the function.
  - Return value. By default, functions will return undefined but can return the result of computation when the body contains a return statement.
*/
// Function declaration


console.log("Practice  first time (1).......................................................................");
function mathoperation (a,b){
    console.log (`value of a = ${a}`);
    console.log (`value of b = ${b}`);
    const addition = a + b ;
    const subraction = a - b ;
    const multiplication = a * b ;
    const division = a / b ;
    const module = a % b ;

    console.log (addition);
    console.log (subraction);
    console.log (multiplication);
    console.log (division);
    console.log (module);
    }
console.log ("calling mathoperation function with no arguements");
    mathoperation ();

    console.log ("Calling mathoperation function with one arguement");
    mathoperation (10);


console.log ("Calling mathoperation function with two opeations");
mathoperation(500 , 21);




console.log("Practice  first time (1).......................................................................");
function maths (c, d) {

console.log(`value of c = ${c}`);
console.log(`value of d = ${d}`);

const addition       = c + d ;
const subraction     = c - d ;
const multiplication = c * d ;
const division       = c / d ;
const module         = c % d ; 



    console.log (addition);
    console.log (subraction);
    console.log (multiplication);
    console.log (division);
    console.log (module);
}


console.log ("Calling maths function with no arguement")
maths();
console.log ("Calling maths function with one arguement")
maths(9876);
console.log ("Calling maths function with one arguement")
maths (9876 , 6789);



console.log("Practice  Second time (2).......................................................................");
function Operations(e, f) {
console.log(`value of e = ${e}`);
console.log (`value of f = ${f}`);

const addition = e + f;
const subraction = e - f;
const multiplication = e * f ;
const division = e / f ;
const module = e % f ;

console.log (addition);
console.log (subraction);
console.log (multiplication);
console.log (division);
console.log (module);

}


// invoking / calling declared function
console.log ("Calling Operations function with no arguement");
Operations();

console.log ("Calling Operations function with one arguement");
Operations(9998);

console.log("Calling Opeartions functions with two arguements");
Operations (9998, 8899);

console.log("Class__Notes")

/* 
/**
A function is a piece of code that can be called during the lifecycle of the app to perform a task or return a value. 
A function declaration can be broken down into the following pieces.
  - Name.
  - Parameters. A list of inputs that can be passed into a function.
  - Body. The logic or statements that perform the computation.
1. A function declaration on its own does not do anything. 
2. You make use of functions by calling them. 
3. The return value of the function can be assigned to a variable.
  - Function call. Executes the code inside the function body.
  - Arguments. The values are to be used as parameters in the function.
  - Return value. By default, functions will return undefined but can return the result of computation when the body contains a return statement.


// Function declaration 
function mathOperations(a, b) { // Here a , b are two parameters
  console.log(`value of a = ${a}`);
  console.log(`value of b = ${b}`);
  const addition = a + b;
  const subtraction = a - b;
  const multiply = a * b;
  const division = a / b;
  const modulo = a % b;

  console.log(addition);
  console.log(subtraction);
  console.log(multiply);
  console.log(division);
  console.log(modulo);
}

// invoking / calling declared function 
console.log("Calling mathOperations function with no arguments")
mathOperations(); // We are not pass any arguments 

console.log("Calling mathOperations function with one argument");
mathOperations(78);

console.log("Calling mathOperations function with two arguments");
mathOperations(100, 56);
*/