
var abc = 123;
let xyz = 345;
const dob = 15081947;

abc = abc * 2;
xyz = 999;
// dob = 15081947; // Here we can't change value of const variable

console.log(`Total value of abc = ${abc}`);
console.log(xyz);
console.log(dob);

const marks_list = [
    64,    // 0
    81,   // 1
    52,  // 2
    94, // 3
    43 // 4
  ];
  console.log(marks_list);

 
 /*
 we can't able change the direct value of const variable
 marks_list = [
    64,
    81,
    52,
    94,
    43
];
 */


marks_list[1] = 99; // Here we are not replace the variable value
marks_list[2] = 100
console.log(marks_list);


// Now lets talk about freeze (means on one able to modify the value of object/array)
//              0  1   2   3   4   5
const marks = [51,101,151,201,301,351];
Object.freeze(marks); // with freeze option
// marks[0] = 51,
// marks[1] = 101,
// marks[2] = 151,
// marks[3] = 201
// marks[ marks.length ] = 301 // Im adding in marks---> Array[] 301,we cant chnage when it is freeze option
// marks [marks.length ] = 351 // Im adding in marks---> Array[] 351
console.log(`Total Marks = ${marks}`);
// marks[0] = 999; // ERROR: Cannot assign to read only property '0' of object '[object Array]'

//Total answer for upper programm
/*
Total value of abc = 246
999
15081947
[ 64, 81, 52, 94, 43 ]
[ 64, 99, 100, 94, 43 ]
Total Marks = 51,101,151,201,301,351
*/


console.log('--------------------------------------------------------------------------------');

const marks_memo = [52,102,152,202,];
// Object.freeze(marks); // without freeze option
marks_memo[0] = 52,
marks_memo[1] = 102,
marks_memo[2] = 152,
marks_memo[3] = 202
marks_memo[marks_memo.length ] = 302 // Im adding in marks---> Array[] 302
marks_memo[marks_memo.length ] = 352 // Im adding in marks---> Array[] 352
console.log(marks_memo);



console.log('--------------------------------------------------------------------------------');

const values = ([
  100,                 // 0
  200,                // 1
 'Shaik',             // 2 
  true,             // 3
  [99, 999, 9999], // 4
  { a: 1, b: 2 }  // 5

]);

console.log(values);
values[2] = "Sharuf"; // In place of Shaik replaced Sharuf
console.log(values);

console.log(values[4].length); // 3
console.log(values[values.length - 1].length); // undefined

values[1] = 101
console.log(values);

values[5].a = 222;
values [5].b = 333
console.log(values)

//Total answer for upper programm

/*
 [ 100, 200, 'Shaik', true, [ 99, 999, 9999 ], { a: 1, b: 2 } ]
[ 100, 200, 'Sharuf', true, [ 99, 999, 9999 ], { a: 1, b: 2 } ]
3
undefined
[ 100, 101, 'Sharuf', true, [ 99, 999, 9999 ], { a: 1, b: 2 } ]
[ 100, 101, 'Sharuf', true, [ 99, 999, 9999 ], { a: 222, b: 333 } ]
 */








