const marks = [
      45, // 0
      66, // 1
      37, // 2
      97, // 3
      56, // 4
      45, // 5
      79  // 6
];
 // 45 + 66 + 37 + 97 + 56 + 45 + 79;


 let totalvalue = 0;
 let index = 0
 while (index < marks.length) {
      const currentvalue = marks[index];
      totalvalue = totalvalue + currentvalue;
      index++;
 };
 console.log(`Sum of numbers using WHILE LOOP`,totalvalue)

 console.log("---------------------------------------------------------------------");

 let total = 0;
 let i = 0;
 while(i < marks.length) {
 const Current_value = marks[i]
 total = total + Current_value
 i++
 };
 console.log(`The Sum of Numbers Using While Loop`,total);

 console.log("---------------------------------------------------------------------");

 let total_VAlue = 0;
 for (let inde = 0;inde < marks.length; inde++) {
      const Currnt_Value = marks[inde];
      total_VAlue = total_VAlue + Currnt_Value
 };
 console.log(`The Sum of Number using For Loop`,total_VAlue)

 console.log("---------------------------------------------------------------------");

 const results = [
      30,
      40,
      50,
      60,
      70,
      80
 ];

 let indx = 0;
 let total_Value = 0;

 while (indx < results.length) {
      const Cur_value = results[indx];
      total_Value = total_Value + Cur_value
      indx++
 }
 console.log(`The Sum of Numbers Using While Loop`,total_Value)

 console.log("---------------------------------------------------------------------");

 let Total = 0;
 for (i = 0; i < results.length; i++ ) {
      const Currntvalue = results[i];
      Total = Total + Currntvalue
 };
 console.log(`The Sum of Numbers Using for Loop`,Total);


 console.log("---------------------------------------------------------------------");

 /*
 [
  45,  66,  37,  97,  56,  45,  79
 ];
 */
 const SumofValues = marks.reduce( function (
 previousValue,
 currentValue
 // currentIndex,
 // originalArray
) {
    // console.log(`Previous Value = `, previousValue);
   // console.log(`Current Value = `, currentValue);
  // console.log(`Current Index = `, currentIndex);
 // console.log(`Original Array = `, originalArray);


 return previousValue + currentValue
})
 console.log(`Sum of values using reduce method`,SumofValues);


 const studentsMarks = [
      [45, 89, 76, 56, 45, 99], // 410
      [89, 78, 90, 45, 77, 56], // 435
      [87, 47, 38, 65, 88, 51], // 376
      [45, 77, 56, 45, 89, 76], // 388
      [78, 90, 45, 76, 38, 65], // 392
    ];
  
  
       // const totalMarksOfStudents = [
      //   410,
     //   435,
    //   376,
   //   388,
  //   392
 // ];

 // 1
 const totalMarks = studentsMarks.map( function(Arrayvalue) {
 return Arrayvalue.reduce((pre,curr) => pre + curr)
    });
 console.log("---------------------------------------------------------------------");
 console.log("Total marks of Student Using reduce method");
 console.log(totalMarks);


 // 2
 const Class_Student_marks = studentsMarks.map(function (Array) {
 return Array.reduce((pre,curr) => pre + curr);
 });
 console.log("---------------------------------------------------------------------");
 console.log("Total Class Student Marks Using reduce method");
 console.log(Class_Student_marks);
 console.log("---------------------------------------------------------------------");


 // 3
 const Class_Student_Marks = studentsMarks.map(function (value) {
 return value.reduce((pre,curr) => pre + curr);
 });
 console.log("---------------------------------------------------------------------");
 console.log(`Student Marks Using reduce method:`)
 console.log(Class_Student_Marks);


 // 4
 const averagemarks = totalMarks.map((value) => value / 600 * 100)
 console.log(averagemarks);
 console.log("---------------------------------------------------------------------");


 // 5
 const averageMarks = totalMarks.map ((value) => value / 600 * 100)
 console.log(averageMarks)
 console.log("---------------------------------------------------------------------");
 
 
 // 6
 const avgMarks = totalMarks.map( (value) => // for single value parantis avasaram ledu
 value / 600 * 100
 )
 console.log(avgMarks)
 console.log("---------------------------------------------------------------------");


 // 7
 const average_student_marks = totalMarks.map ((value) => value / 600 * 100);
 console.log(average_student_marks)
 console.log("---------------------------------------------------------------------");


 // 8
 const avgstudentmarks = totalMarks.map ((value) => value / 600 * 100);
 console.log(avgstudentmarks);
 console.log("---------------------------------------------------------------------");


 // 9
 console.log("Using With parseInt---------------------------------------------------");
 const convertToInteger = averageMarks.map(value => parseInt(value) + "%");
 console.log(convertToInteger);
 console.log("Using With parseInt---------------------------------------------------");

 // 10
 const ConverttoInt = averagemarks.map((value) => parseInt(value) + "%")
 console.log(ConverttoInt)
 console.log("Using With parseInt---------------------------------------------------");

 // 11
 const AvgInt = avgMarks.map((value) => parseInt (value) + "%");
 console.log(AvgInt)
 console.log("Using with parseInt---------------------------------------------------");

 // 12 
 const convert_Int = average_student_marks.map( (value) => parseInt( value) + "%")
 console.log(convert_Int);
 
 console.log("Using with .filter-----------------------------------------------------");

 // 13
 const markAbove65Percentage = averageMarks.filter((value) => {
 const valueInInterger = parseInt(value);
 return valueInInterger > 65;
});
 console.log(markAbove65Percentage);


 // 14
 const Marksabove65percentage = averagemarks.filter ( (value) => {
 const valueinteger = parseInt(value);
 return  valueinteger > 65
 });
 console.log(Marksabove65percentage);


 // 15
 const Above65Percentage = averagemarks.filter( (value) => {
 const valuent = parseInt(value)
 return valuent > 65
 });
 console.log( Above65Percentage)


 // 16
 const Above65 = averagemarks.filter( (value) => {
 const int = parseInt(value) 
 return int > 65
 });
 console.log(Above65);


 // 17 
 const Above_65_percentage = averagemarks.filter( (value) => {
 const Integer = parseInt(value);
 return Integer > 65
 })
 console.log(Above_65_percentage);


 // 18
 const Above_65percentage = averageMarks.filter( (value) => {
 const Integer = parseInt(value);
 return Integer > 65
 });
 console.log(Above_65percentage);





 /*
 Output :-
$ node 10.Array-functional-reduce-method.js 
Sum of numbers using WHILE LOOP 425
---------------------------------------------------------------------
The Sum of Numbers Using While Loop 425
---------------------------------------------------------------------
The Sum of Number using For Loop 425
---------------------------------------------------------------------
The Sum of Numbers Using While Loop 330
---------------------------------------------------------------------
The Sum of Numbers Using for Loop 330
---------------------------------------------------------------------
Sum of values using reduce method 425
---------------------------------------------------------------------
Total marks of Student Using reduce method
[ 410, 435, 376, 388, 392 ]
---------------------------------------------------------------------
Total Class Student Marks Using reduce method
[ 410, 435, 376, 388, 392 ]
---------------------------------------------------------------------
---------------------------------------------------------------------
Student Marks Using reduce method:
[ 410, 435, 376, 388, 392 ]
[
  68.33333333333333,
  72.5,
  62.66666666666667,
  64.66666666666666,
  65.33333333333333
]
---------------------------------------------------------------------
[
  68.33333333333333,
  72.5,
  62.66666666666667,
  64.66666666666666,
  65.33333333333333
]
---------------------------------------------------------------------
[
  68.33333333333333,
  72.5,
  62.66666666666667,
  64.66666666666666,
  65.33333333333333
]
---------------------------------------------------------------------
[
  68.33333333333333,
  72.5,
  62.66666666666667,
  64.66666666666666,
  65.33333333333333
]
---------------------------------------------------------------------
[
  68.33333333333333,
  72.5,
  62.66666666666667,
  64.66666666666666,
  65.33333333333333
]
---------------------------------------------------------------------
Using With parseInt---------------------------------------------------
[ '68%', '72%', '62%', '64%', '65%' ]
Using With parseInt---------------------------------------------------
[ '68%', '72%', '62%', '64%', '65%' ]
Using With parseInt---------------------------------------------------
[ '68%', '72%', '62%', '64%', '65%' ]
Using with parseInt---------------------------------------------------
[ '68%', '72%', '62%', '64%', '65%' ]
Using with .filter-----------------------------------------------------
[ 68.33333333333333, 72.5 ]
[ 68.33333333333333, 72.5 ]
[ 68.33333333333333, 72.5 ]
[ 68.33333333333333, 72.5 ]
[ 68.33333333333333, 72.5 ]
[ 68.33333333333333, 72.5 ]

 */









 console.log("------------------------------CLASS_NOTES------------------------------");
           
 
 /*

const marks = [
  45,
  66,
  37,
  97,
  56,
  45,
  79
];

// 45 + 66 + 37 + 97 + 56 + 45 + 79; --------------------------------------> No Need


let total = 0;
let index = 0;
while (index < marks.length) {
  const currentValue = marks[index];
  total = total + currentValue;
  index++;
}

console.log(`Sum of numbers using WHILE LOOP`, total);

let totalValue = 0;
for (let index = 0; index < marks.length; index++) {
  const currentValue = marks[index];
  totalValue = totalValue + currentValue;
}

console.log(`Sum of numbers using FOR LOOP`, totalValue);



/* --------------------------------------> No Need

[
  45,  66,  37,  97,  56,  45,  79
]; --------------------------------------> No Need



console.log(marks);
const sumOfValues = marks.reduce(function (
  previousValue,
  currentValue,
  // currentIndex,
  // originalArray
) {
 

 --------------------------------------------------------------------------------------> No Need

  // console.log(`Previous Value = `, previousValue);
  // console.log(`Current Value = `, currentValue);
  // console.log(`Current Index = `, currentIndex);
  // console.log(`Original Array = `, originalArray);

--------------------------------------------------------------------------------------> No Need


  return previousValue + currentValue;

})

console.log(`Sum of values using reduce method`, sumOfValues);


const studentsMarks = [
  [45, 89, 76, 56, 45, 99], // 410
  [89, 78, 90, 45, 77, 56], // 435
  [87, 47, 38, 65, 88, 51], // 376
  [45, 77, 56, 45, 89, 76], // 388
  [78, 90, 45, 76, 38, 65], // 392
];

--------------------------------------------------------------------------------------> No Need
// const totalMarksOfStudents = [
//   410,
//   435,
//   376,
//   388,
//   392
// ]
--------------------------------------------------------------------------------------> No Need

const totalMarks = studentsMarks.map(function (arrayValue) {
  return arrayValue.reduce((prev, curr) => prev + curr);
});

console.log("-----------------------")
console.log("Total Marks of Student")
console.log("-----------------------")
console.log(totalMarks);

console.log("-----------------------")
console.log("Average Marks of Students")
console.log("-----------------------")

const averageMarks = totalMarks.map((value) => (value / 600) * 100);
console.log(averageMarks)            

const convertToInteger = averageMarks.map(value => parseInt(value) + "%");
console.log(convertToInteger);

const markAbove65Percentage = averageMarks.filter((value) => {
  const valueInInterger = parseInt(value);
  return valueInInterger > 65;
});
console.log(markAbove65Percentage);

 */