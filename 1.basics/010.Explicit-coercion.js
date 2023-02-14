// Strings to (Number '1' -> 1)
// -> ( typeof '1' //String )
// -> (typeof 1 // Number )
Number ('1'); // 1
Number ('2Shaik'); // NaN -->Not a Number
Number('12'); // 12
Number(12); // 12
Number(true); // 1
Number(false); // 0
Number ('  a'); // NaN
Number('12.999'); // 12.999
parseInt('19.95'); // 19
parseInt(99.08); // 99
parseInt(''); // NaN
parseInt(99); // 99
parseInt(.99); // 0
parseInt(true); // NaN
Number('5Shaik'); // NaN
parseInt('9Shaik'); // 9
parseInt('99shaik89'); // 99
parseInt('shaik99'); // NaN
parseInt('true'); // NaN
  // converting string to Floating number '89.99 feet'
parseFloat('89.99 feet') // 89.99 
parseFloat('99.9 feet') // 99.9
parseFloat('22.01 Inches') // 22.01
parseFloat(true) // NaN

     //Numbers to Strings

     typeof String('1') // String
     String(2) // ('2')
     String('Shaik') // ('Shaik')
     String('Shaik Sharuf') // ('Shaik Sharuf') 
     75 + '' // '75'
     89.99 +'' // 89.99
     true+ '' // 'true'
     false +'' // 'false'
     '9908' // '9908'
     +'9908' // 9908


console.log("Class__Notes")

/*

// Strings to Number '1' -> 1
// typeof '1' // string
// typeof 1 // number
Number('1') // 1
Number('abc') // NaN (Not a Number)


Number('12') // 12
Number('') // 0
Number('   ') // 0
Number('   a') // NaN

Number('12.999') // 12.999

// Floating point string plain integer '12.999' -> 12
parseInt('12.999'); // 12
parseInt('67.890'); // 67
parseInt(''); // NaN
parseInt(true); // NaN

parseInt('123abc'); // 123
parseInt('123abc456'); // 123
parseInt('abc456'); // NaN
parseInt(56.78); // 56
parseInt(29.01); // 29
parseInt(29.99); // 29

// converting string to floating number '12.5 feet'
parseFloat('33.5 inches'); // 33.5

Number('');
parseInt('');
parseFloat();

// Shortcut +VALUE -> +'2' -> 2

// Numbers to Strings
String(2); // '2'
String(true); // 'true'
String(false); // 'false'

// ShortCut -> VALUE + '' -> 'VALUE'
2 + ''; // '2'
true + ''; // 'true'
false + ''; // 'false'

*/