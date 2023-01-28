console.log("Type One----------------------------------------------------------------------------------")
const Children = [
    "Kumar",
    "Pranav",
    "Ravi",
    "Teja",
];
let first_index = 0;
const last_index  = 4;
while (first_index < last_index ) {
console.log(`Welcome Children ${Children[first_index]}`)
first_index++ 
};


console.log("Type One with while loop------------------------------------------------------------------");
const Students_Names = [
    "Shaik",       // 0
    "Sharuf",     // 1
    "Sharu",     // 2
    "Syed",     // 3
    "Zakeer",  // 4
    "Hussain" // 5
];
// console.log(Students_Names);
// console.log(`Welcome ${Students_Names[1]}`);
// console.log(`Welcome ${Students_Names[2]}`);
// Iterating values using LOOPS

let index = 0;
const Names_length =Students_Names.length
//        0  <   3  => true
while (index < Names_length) { // while condition 0 < 3  => true
console.log(`Welcome ${Students_Names[index]}`)
index++; // index = index + 1
};

console.log("Type two with for loop--------------------------------------------------------------------");
for (

 let i = 0;i < Names_length; i++) {
 console.log(`Hey ${Students_Names[i]}`)
};



console.log("Type One with arrow function Iterating Array----------------------------------------------");
// Iterating Array values using ARRAY.method()
// [].method_Name ()

// .forEach method
// [].forEach ==>> .forEach method only use on only Array []
// "".forEach (x)
// {}.forEach (x)


function loopItems() {}
// ex students.forEach( () => {});
// [].forEach (function () {});
// [].forEach(loopItems);

//looping array through forEach callbackfunction 
const students= [
    "Hari",    // 0
    "Sai",    // 1
    "Kiran", // 2
    "Manoj" // 3
]
// students lo first name tisukuntundi; Ex:- students.forEach( (first,second,third) => {console})
students.forEach((value,index,third) => {
    console.log(`Im Iterating through Array_function`,value,index,third)});


console.log("Type Two with function declaration Iterating Array----------------------------------------");

//looping function declaration through forEach callbackfunction 
const students_names= [
    "krishna",    // 0
    "teja",      // 1
    "Prasanna", // 2
    "Manu"     // 3
];
students_names.forEach(function (value,index) {
    console.log(`Im Iterating through`, value,index)
});

console.log("Three types of table with function declaration--------------------------------------------");

students_names.forEach(function(first, second , third ) {
    console.log("--------------------------------------------------------------------------------------");
    console.log(`Im Iterating through .forEach method`)
    console.log(`first param = `,  first), // first param always prefer to VALUE in array
    console.log(`second param = `, second), // second param always prefer to INDEX of VALUE
    console.log(`third param = `,  third) // Third param is original Array
});
console.log("type one function declaration ------------------------------------------------------------");
let students_marks = [
    40,
    50,
    60,
    70,
    80,
    90
];
students_marks.forEach(function(value){  // function declaration fornumla
    console.log(value)
});

console.log("type two function Expression---------------------------------------------------------------");
    const marks_list = students_marks.forEach(function(value,index) { // function Expression fornumla
        console.log(`Index = ${index} | MARKS = ${value}`)
    })

 console.log("type three Arrow function-----------------------------------------------------------------");
 students_marks.forEach ((value,index,third) => { // Arrow function fornumla
    console.log(value,index,third)
});
    

function iterateMarks(v,i,arr) {
    console.log(`Marks : ${v} at index of ${i}`);
}
students.forEach(iterateMarks);


const loop = function(value) {
    console.log (`Loop value ${value}`)
}
const number = [10,20,30];
number.forEach(loop)
