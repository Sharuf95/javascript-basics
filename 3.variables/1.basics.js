// 1. Declaration 
// No value assinged to myName identifier (variable)
var myName;


// 2. Assigning value (any datatype) to myName identifier
myName = "Shaik Sharuf";

// Declaring varibale and assigning value to it 
var fullName = 'Shaik Sharuf' ;

var firstName  = 'Shaik';
var middleName = 'Sharuf';
var lastName   = 'Ash';


// Process -> 
var myfullName = firstName + middleName + lastName; 
'ShaikSharufAsh'

// Process one ->
var myfullName = firstName + ' ' + middleName + ' ' + lastName;
'Shaik Sharuf Ash' 

// process two ->
var myName = `${firstName} ${middleName} ${lastName}`;
'Shaik Sharuf Ash'


var city = "Ongole";
var state = "Andhrapradesh";
var country = "India";

Process One -> 
var address = city + ' ' + state + ' ' + country;
'Ongole Andhrapradesh India'

Process Two ->
var addressone = `${city} ${state} ${country}`;
'Ongole Andhrapradesh India'


// lowercase (small letter) x
var x = 200 + 99; -> // x = 299

// Uppercase (CAPITAL LETTER)
var X = 89 * 78 / 10; -> // X = 694.2

// Process one ->
var output =  '5' + 10; // '510'

// Process two ->
var outputtwo = `${Number('5') + 10 }`; // 15

// Process three ->
var outputthree = `${+'5' + 10 }`; // 15


console.log("Class__Notes");

/*
// 1. Declartation
// No value assigned to myName identifier (variable)
var myName;

// 2. Assigning value (any datatype) to myName identifier
myName = "Syed Zakeer Hussain";


// Declaring variable and assigning value to it
var fullName = 'Zakeer Hussain, Syed';


var firstName = 'Zakeer';
var middleName = 'Hussain';
var lastName = 'Syed';


var myFullname = firstName + middleName + lastName;

var fullName = "firstName" + "middleName" + "lastName";

//var myName = firstName + " " + middleName + " " + lastName;
var myName = `${firstName} ${middleName}, ${lastName}`


var city = 'Guntur';
var state = "AP";
var country = "India";

var address = `${city}, ${state} ${country}`;

// lowercase (small letter) x
var x = 200 * 99;

// uppercase (Capital letter) X
var X = 89 * 78 / 10;

// '5' + 10 -> '510'
// `${ '5' + 10 }`

var output = `${'5' + 10}`; // '510'
var outputOne = `${Number('5') + 10}`; // '15'
var outputTwo = `${+'5' + 10}`; // '15'


*/