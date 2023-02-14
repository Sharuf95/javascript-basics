/*
// 1.
function multiply(x,y,z) {
    return (1*2*3);
}
console.log (multiply(1,2,3));

// 2.
function multiplication(a,b,c) {
    const total = 2*3*4;
    return total;
}
console.log (multiplication(2,3,4));

// 3.
function add (x) {
     function nested (y) {
        }
        return nested;
}


// 4.
function add (x) {
    function edd (y) {
        return x+y;
        
    }
    return edd;
    
}
var addreturn = add(100);
var result = addreturn(200);
console.log(result);


// 5.
function add (x) {
    function edd(y) {
        return x/y;
    }
    return edd;
}

var addition = add (123);
var total = addition (100);
console.log (total);

*/


// 1.First time practice (Addition)
console.log(`First time********************************************************************`);
add(10)(20)(30);

function add(x) {
    return function (y) {
        return function (z) {
            return x + y + z;
        }
        
    }
    
}
 var singleResult = add(10)(20)(30);
 //console.log(singleResult);
 console.log(`Executing return functions in one single`,singleResult);
 console.log(`Executing return functions in one single typeof`, typeof singleResult);
var callone = add(10);
console.log(`typeof callone is`,typeof callone);
var calltwo = callone(20);
console.log(`typeof calltwo is`,typeof calltwo);
var result = calltwo(30);
console.log(`typeof result is`,typeof result);


// 2. Second time practice (Subraction)
console.log(`Second time********************************************************************`);
subraction(20)(10)(50);
function subraction(x) {
    return function (y) {
        return function (z) {
            return x - y - z;
        }
    }
}

var SingleResult1 = subraction(20)(10)(50);

// console.log ( SingleResult1);
console.log(`Executing return function in one single`,SingleResult1);
console.log(`Executing return function in one single typeof`, typeof SingleResult1);

var callone = subraction(20);
console.log(`typeof callone is`, typeof callone);
var calltwo = callone(10);
console.log(`typeof calltwo is`, typeof calltwo);
var result = calltwo(50);
console.log(`typeof result is`, typeof result);



//3. Third time practice (Multiplication)
console.log(`Third time********************************************************************`);
multiply(10)(10)(10);
function multiply(a) {
    return function (b) {
        return function (c) {
            return a * b * c;
        }
    }
}
var SingleStatementResult = multiply(10)(10)(10);
// console.log(SingleStatementResult);
console.log(`Executing return function in one single`,SingleStatementResult);
console.log(`Executing return function in one single typeof`,typeof SingleStatementResult);
var callOne = multiply(10);
console.log(`typeof callOne is`,typeof callOne);
var callTwo = callOne(10);
console.log(`typeof StatementTwo is`,typeof StatementTwo);
var result = callTwo(10);
console.log(`typeof result is`,typeof result);


//4. Fourth time practice (Division)
console.log(`Fourth time********************************************************************`);
Division(5)(10)(15)
function Division (a) {
    return function (b) {
        return function (c) {
            return  a + b + c;
        }
    }
}
var Divisonstatement = Division(5)(10)(15);
// console.log(Division(5)(10)(15));
console.log(`Executing return function in one single`, Divisonstatement);
console.log(`Executing return function in one single typeof `,typeof Divisonstatement);
var Divone = Division(5);
console.log(`typeof Divone is`, typeof Divone);
var divtwo = Divone(10);
console.log(`typeof divtwo is`, typeof Divone);
var result = divtwo (15);
console.log(`typeof result is`, typeof result);




console.log("Class__Notes");

/*

function execute(paramOne, paramTwo) {
  const valueOne = paramOne();
  const valueTwo = paramTwo();
  return {
    valueOne: valueOne,
    valueTwo: valueTwo
  }
}

function addition() {
  return 100 + 300;
}

function multiply() {
  return 100 * 300;
}

const result = execute(addition, multiply); // ? { valueOne: 400, valueTwo: 30000 }
console.log(result);

const anotherResult = execute(
  () => {
    return 20 * 10;
  },
  () => {
    return 56 + 44;
  }
); // { valueOne: 200, valueTwo: 100 }
// execute( () => { return 20*10 }, () => { return 56+44 } );

console.log(anotherResult);

*/
