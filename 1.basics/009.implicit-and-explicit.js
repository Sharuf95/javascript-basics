// Implicit Conversation(Conversation done automatically by javascript Complier & Engine)
100 == "100"; // true -> (100 == "100"->"100" == "100" -> true)

// Implicit conversationt to a string
'25' + 15; // '2515'

Implicit conversation to a Number
23 * '2'; // 46
23 - true; // 22// true is converted into 1
true - Null ; // 1 
false * undefined; // NaN // Udefined into NaN

conversation to boolean Explicity
Number('23') + 7; // 30

conversation to boolean Explicity
boolean (''); // false
boolean (2) ==true; // true