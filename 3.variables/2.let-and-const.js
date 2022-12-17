// before ES6 version,there is only one way to create 
// variable in javascript is using var keywords
var myvariable = "somedata" // <--(Example)

// in ES6 version , let and const are introduce to create 
// variables 

// var declaration with value 
var myName = "Shaik"; // <-- Process One 

// var redeclaration with same variable identifier
var myName = "Shaik Sharuf"; // <-- Process Two


// let declaration with value
let myHomeTown = "Ongole";

// we can't redeclare let variable again 
// EX:- If u enter let myHomeTown = "Vizag"; // Javascript will throw error bcoz value is already assigned as "Vizag"
// But we can reassign or redeclare new value to without using var or let,
// Example :-  
myHomeTown = "Vizag" // <-- we can directly use this format(myHomeTown = "Vizag") // Vizag

// for var and let we can reassign values (remove old value and update new value )


// for const we need to declare and assign the value 
// we can't reassign const value 
const DOB = "27/12/1995";