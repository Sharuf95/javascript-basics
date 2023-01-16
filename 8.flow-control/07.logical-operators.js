/*
Comparision Operator (return boolean)
==
===
>=
>
<=
<
!=
!==

*/

// Logical Operators AND ,OR ,NOT 
// AND --> &&
// OR  --> ||
// NOT --> ! 

// 12 > 8  ==> true
// 12 && 8 ==> 8
// 12 || 8 ==> 

console.log (`AND OPERATOR true && true`,true && true);
console.log (`AND OPERATOR false && false`,false && false);
console.log (`AND OPERATOR true && false`,true && false);
console.log (`AND OPERATOR false && true`,false && true);

// true && true 
// 1. true --> true

// false && false =>
// 1.false

// true && false 
// 1.true --> false 

//false && true 
// 1. false

console.log (true && true && true && true)
console.log (1 && 1 && 1 && 1)

console.log (10 > 3 && 5 < 2 && 1 < 9 );
console.log ( true && false && true);

import readline from 'readline-sync';

const userage = readline.questionInt(`Please enter your age :`);
const MIN_AGE = 18;
const MAX_AGE = 50;

if (userage >= MIN_AGE && userage <= MAX_AGE ) {
console.log (`Your are Allowed`)
}else {
    console.log (`Your are not Allowed`)
}

// OR Operation it only checks for single true
console.log (true && true && true);
console.log (true || true || true);

console.log (45 < 35 || 100 !== 100);
console.log (false || false )

console.log ("Shaik" || "Sharuf");
console.log ("" || "Sharuf");

console.log ("shaik" && "sharuf");
console.log ("" && "Sharuf");


console.log (!true) // false 
console.log (!false) // true

console.log (!0); // true
console.log (!78); // false
console.log (!"shaik sharuf "); // false 
console.log (!""); // true
console.log (!undefined); // true
console.log (!!undefined); // false 

console.log (!!1); // true


/* 

$ node 07.logical-operators.js 
AND OPERATOR true && true true
AND OPERATOR false && false false
AND OPERATOR true && false false
AND OPERATOR false && true false
true
1
false
false
Please enter your age :20
Your are Allowed
true
true
false
false
Shaik
Sharuf
sharuf

false
true
true
false
false
true
true
false
true

*/




