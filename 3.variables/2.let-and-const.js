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


console.log("Class__Notes");

/*
// before ES6 version, there is only one way to create 
// variable in javasript is using var keyword
var myVariable = "Some data";

//in ES6 version, let and const are introduce to create
// variables

// var declaration with value
var myName = "Syed";

// var redeclaration with same variable identifier
var myName = "Syed Zakeer";


// let declaration with value
let myHomeTown = "Guntur";

// we can't redeclare let variable again
// let myHomeTown = "ongole"; // Javascript will throw error

// But we can reassign new value to var or let
myName = "Syed Zakeer Hussain"
myHomeTown = "Hyderabad"


// for var and let we can reassign values (remove old value and update new value)

// for const we need to declare and assign the value
// we can't reassign const value
const DOB = "29/01/1999";

DOB = "12/12/2022";

*/