function reducecurrentspeed () {
    car.currentspeed = car.currentspeed - 10;
}
const car = {
    // properties
    name : "BMW",
    year : 2021,
    Isrunning : false,
    currentspeed : 0,

    // Methods ()
    startEngine : function () {
    car.Isrunning = true
    },
    stopEngine : function () {
        car.Isrunning = false
    },

    increasespeed : () => {
        car.currentspeed = car.currentspeed + 10; 
    },
    decreasespeed : reducecurrentspeed,
    printdetails : () => {
        console.log(`
        car detail info
        ----------------------------------------------------- 
        name : ${car.name},
        year : ${car.year},
        running : ${car.Isrunning},
        speed : ${car.currentspeed}
        `)
    }

}

console.log (`car,detail`,car)
car.printdetails();

car.startEngine();
car.printdetails();

car.increasespeed();
car.increasespeed();
car.increasespeed();
car.printdetails();

car.decreasespeed();
car.decreasespeed();
car.printdetails();


// Answer
/*
car,detail {
  name: 'BMW',
  year: 2021,
  Isrunning: false,
  currentspeed: 0,
  startEngine: [Function: startEngine],
  stopEngine: [Function: stopEngine],
  increasespeed: [Function: increasespeed],
  decreasespeed: [Function: reducecurrentspeed],
  printdetails: [Function: printdetails]
}

        car detail info
        -----------------------------------------------------
        name : BMW,
        year : 2021,
        running : false,
        speed : 0


        car detail info
        -----------------------------------------------------
        name : BMW,
        year : 2021,
        running : true,
        speed : 0


        car detail info
        -----------------------------------------------------
        name : BMW,
        year : 2021,
        running : true,
        speed : 30


        car detail info
        -----------------------------------------------------
        name : BMW,
        year : 2021,
        running : true,
        speed : 10 
        */



console.log("Class__Notes");

/*

// We develop our program (solutions) based on available Values 

// String
// Number
// Boolean
// undefined
// null

// Object { key: value, key2: value2 }
// Array [ value, value2, value3, {}, [], function() {} ]

// function(value, value2, value3, ...) {}


// function add(a, b, c) {
//   return a + b + c;
// }

// console.log(add(1, 2, 3));

function multiply(x, y, z) {
  const total = x * y * z;
  return total;
}

console.log(multiply(1, 2, 3));

function add(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    }
  }
}

var singleResult = add(10)(20)(30);
console.log(`Executing return functions in one single `, singleResult);
console.log(`Executing return functions in one single typeof`, typeof singleResult);

var callOne = add(10);
console.log(`typeof callOne is `, typeof callOne);
var callTwo = callOne(20);
console.log(`typeof callTwo is `, typeof callTwo);
var result = callTwo(30);
console.log(`typeof result is `, typeof result);


function welcome(name) {
  return `Welcome ${name}`;
}

function execute(param) {
  const value = param();
  return value;
}

console.log(welcome('Syed'));

execute(() => { }); // here we are passing arrow function as parameter to execute function
execute(welcome); // here we are passing welcome function as parameter to execute function


*/