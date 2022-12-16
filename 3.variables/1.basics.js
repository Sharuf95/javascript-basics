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
