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


console.log("Class_Notes")

/* 
// Implicit Conversion (Conversion done automatically by Javascript complier/engine)
100 == "100"; // true (100 == "100" -> "100" == "100" -> true)

// Implicit conversion to string
'25' + 15; // '2515'

// Implicit conversions to a number
23 * '2';   // 46
23 - true;  // 22  // true is converted into 1
true - null; // 1
false + undefined;  // NaN  // undefined into NaN

// conversion to string using String()
String(2 - true);  // '1'
'56' === String(56);  // true

// conversion to number using Number()
Number('23') + 7;  // 30

// conversion to Boolean Explicitly
Boolean(''); // false
Boolean(2) == true;  //true



*/