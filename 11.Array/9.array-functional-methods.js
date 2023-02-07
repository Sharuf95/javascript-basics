console.log("CLASSNOTES----------------------------------------------------");

// [].push(VALUE);
// [].splice(INDEX, END_INDEX);


// [].forEach;  => undefined
// [].map;      => SAME LENGTH OF ARRAY
// [].filter;   => LESS OR EQUAL LENGTH OF ARRAT
// [].reduce;   => SINGLE VALUE
// [].some;
// [].find;


// manam single value (Index value 2 ) ni function chesthunam
const marks = [
    45, // 0
    66, // 1
    37, // 2
    97, // 3
    56, // 4
    45, // 5
    79  // 6
];

function doublemarks (marksvalue) {
 const value = marksvalue * 2;
 console.log(value);
 return value;
};
const return_double_value = doublemarks(marks[2]);
console.log(return_double_value);



console.log("First time--------------------------------------------------");
const Narayana_Marks = [
    35, // 0
    45, // 1
    55, // 2
    65, // 3
    86 //  4
];
// manam single value (Index value 3 ) ni function chesthunam
function Doublemarks(marksValue) {
const value = marksValue * 3
console.log(value);
return value
};
const Narayana_return_value = Doublemarks(Narayana_Marks[3]);
console.log(Narayana_return_value);

console.log("------------------------------");
const Sharuf_Marks = [
    91,     // 0
    92,    // 1
    93,   // 2
    94,  // 3
    95, // 4
    96 // 5
];
// manam single value (Index value 0 ) ni function chesthunam
function doublE_Marks (marks) {
const value = marks * 2;
console.log (value);
return value
};
const Sharuf_Return_value = doublE_Marks(Sharuf_Marks[0])
console.log(Sharuf_Return_value);


console.log("Second time with forEach Method------------------------------");
const Bhashyam_marks = [
    10,
    20,
    30,
    40,
    50,
    60
];
function DOUBLEmarks(marksvalue) {
    const value = marksvalue * 5
    console.log (value);
    return value
};
const Bhashyam_School = Bhashyam_marks.forEach(DOUBLEmarks);

console.log("Third time with .map Method--------------------------------");
const Chaitanya_Marks = [
    20,
    30,
    40,
    50,
    60,
    70
];
function double_marks (marksvalue) {
const value = marksvalue * 6
console.log(value);
return value
};
const Chaitanya_School_map_method = Chaitanya_Marks.map(double_marks)
console.log(Chaitanya_School_map_method);


const numbers = [ 1,2,3,4,5,6,7,8,9,10 ];
const doubleNumbers = numbers.map((value) => {return value * 2});
console.log(doubleNumbers);

const numbering = [1,2,3,4,5,6,7,8,9,10,11]
const DoublingNumbers = numbering.map(value => value * 3);
console.log( DoublingNumbers);

console.log("First time with filter Method--------------------------------");

const number = [1,2,3,4,5,6,7,8,9];

const even_numbers = number.filter(value => value % 2 === 0 );
console.log(even_numbers); // [ 2, 4, 6, 8 ]

const Odd_numbers = number.filter(value => value % 2 !== 0 );
console.log(Odd_numbers); // [ 1, 3, 5, 7, 9 ]

const users = ['Suresh','Ramesh','Kiran','Mani','Kanta'];
const K_letter_user = users.filter(value => value[0] === 'K')
console.log(K_letter_user); // [ 'Kiran', 'Kanta' ]

const R_letter_user = users.filter(value => value[0] === 'R')
console.log(R_letter_user); //  [ 'Ramesh' ]

const S_letter_user = users.filter(value => value[0] === 'S')
console.log(S_letter_user); //  [ 'Suresh' ]

const M_letter_users = users.filter(value => value[0] === 'M')
console.log(M_letter_users); // [ 'Mani' ]

const M_letter_user = users.filter(value => value[0] !== 'M')
console.log(M_letter_user) // [ 'Suresh', 'Ramesh', 'Kiran', 'Kanta' ]