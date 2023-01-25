 // [] .push => (dot push) anay method only Array meda matramay apply cheyagalam.
//To define multiple values in memory we can use array [] Square Brackets.
/*
[
    Value1, // String ,
    Value2, // Number ,
    Value3, // Boolean,
    Value4, // Null ,
    Value5, // [],
    Value6, // {},
    Value7, // function () {},
    Value8, / () => {} --> Arrow function, 
]
*/
const raju = 'Raju';
const students = ['syed','sharu','Sharuf',raju];

// check how many values are represent in array (. length property)
// Ways to access property on object (here object is array)
// .(dot) notation
// [] (Bracket) notation
console.log (`total Number of students are ${students.length}`);


// Add new value to the end of the array (.push () method)
students.push('kiran'); // we can push single value 
students.push ('Shaik','Siddik'); // we can also push multiple values

printTotalStudents();
console.log(students)

// How to access a value in array
// .(dot) notation 
// we can't use .dot notation on array because index values are in number 
// [] (Bracket) notation
console.log (students[1]);
console.log (students[2]);

console.log(`Total leghth of students are ${students.length}`);

// Access the last value of array by using array length -1
console.log (students[students.length]);
// console.log (students [7-1]);
// console.log(students[6]);

// Repalcing the value based on index
students[3] = "Shaik Sharuf";
console.log(students);


// Helper function to get the total students in array
function printTotalStudents() {
    console.log (`Total Number of students are ${students.length}`);
}
