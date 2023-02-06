const students = [];

// Add value to array ( below code will add value as a last item in array )
const value_return_from_push_method = students.push('Shaik');
console.log (value_return_from_push_method);

students[students.length] = 'Sharuf'
console.log(students);

// Add value at the begining of array
const students_count = students.unshift('yesh') 
const student_count  = students.unshift('Ram') 
console.log(students_count); // when we enter the value using .unshift method the value,
console.log(students);      //  which we enter it will be in first or begining


// Merge multiple array with .concat() method
const Old_batch_students = ['Kiran','Sai','Manoj','Viswananth']
const all_students = students.concat(Old_batch_students);
console.log(students);
console.log(Old_batch_students);
console.log(all_students);


// Convert Array values to String with separator by using .join();
const students_joined = all_students.join("|") // when we use .join() operator joins means nothing but 
console.log(students_joined); // we have to use operators like ==> /,|,[],&&,**
// Answer :- Ram|yesh|Shaik|Sharuf|Kiran|Sai|Manoj|Viswananth
console.log(typeof students_joined);


const students_joinedd = all_students.join("**");
// Answer :- Ram**yesh**Shaik**Sharuf**Kiran**Sai**Manoj**Viswananth
console.log(students_joinedd);


//    0      1      2        3        4       5       6        7
// ['Ram','yesh','Shaik', 'Sharuf','Kiran', 'Sai','Manoj', 'Viswananth']

const first_two_students = all_students.slice(0,3); // Manam for example (0,3) tisukunapudu manaki index lo unna 0,1,2 ==> ['Ram','yesh','Shaik'] matramaye tisukuntundi,endukantaye manaki kavalsindi 0 to 2 but oka value ekkuva tisukovali so ( 0 to 3 )  but mana original array ni yapudu modify cheyadhu ==> It will shows only students from 0 to 2 but we have to enter from (0,3) 
console.log(first_two_students); 
// Answer :- [ 'Ram', 'yesh', 'Shaik' ]

const js_students = all_students.slice(0); // It will shows all students bcoz index value is 0 from all 
console.log(js_students)
// Answer:- ['Ram','yesh','Shaik', 'Sharuf','Kiran','Sai','Manoj', 'Viswananth']

const last_three_students = all_students.slice(4); // why we enter (4)??, bcoz after entering 4 onwards  
console.log(last_three_students); // it will shows value after from 4 values
// Answer :- [ 'Kiran', 'Sai', 'Manoj', 'Viswananth' ]


const users_list = [
    "Kaden Kuvalis",
    "Raphaelle Abernathy",
    "Elfrieda VonRueden",
    "Keon Pacocha DDS",
    "Aryanna Thiel",
    "Sonya Lind",
    "Armand Rodriguez",
    "Shaun Keeling",
    "Margarita Rodriguez Jr.",
    "Jasper Dach",
    "Karina Doyle",
    "Dr. Christophe Harvey",
    "Vernon Spinka",
    "Zakary Lueilwitz PhD",
    "Deion Hills",
    "Thomas White",
    "Lauriane Turner",
    "Mabelle Volkman",
    "Domingo Rohan",
    "Antonina Rolfson",
    "Darrin Zboncak",
    "Joyce Wunsch III",
    "Krystel Hermiston",
    "Mrs. Annabelle Prohaska",
    "Breanna Tremblay",
    "Peter Lakin",
    "Gregorio Wiegand",
    "Emmalee Pacocha",
    "Mrs. Eldon Klocko",
    "Herman Toy",
    "Garland Mraz",
    "Miss Opal Runolfsdottir",
    "Martine Olson",
    "Gladyce Kilback V",
    "Rae Bechtelar",
    "Jacky Hammes",
    "Neha Bergstrom",
    "Connie Hessel",
    "Krystel Ankunding",
    "Ruth Haag",
    "Hayden Kuhlman PhD",
    "Guillermo Koelpin",
    "Abigayle Casper",
    "Karlie Borer",
    "Nils Williamson",
    "Morris Renner",
    "Buford Tillman PhD",
    "Elouise Waters MD",
    "Sofia Larson",
    "Alexandre Gleason"
  ];
 
  const Total_Users = users_list.length;
  console.log (Total_Users);

  const last_ten_users_list = users_list.slice(-10);
  console.log(last_ten_users_list);

  const last_ten_users_listt = users_list.slice(users_list.length -5);
  console.log(last_ten_users_listt);

  console.log(all_students);

 
  //   0      1      2        3       4      5      6         7
 // ['Ram','yesh','Shaik','Sharuf','Kiran','Sai','Manoj','Viswananth']
 // Find 'Ram' values index in array 
 const indexValueOfRam = all_students.indexOf('Ram')
 console.log(indexValueOfRam) // 0

 const indexvalueofyesh = all_students.indexOf('yesh')
 console.log(indexvalueofyesh); // 1 

 console.log(all_students.indexOf('Shaik')); // 2

 console.log(all_students.indexOf('Sharuf')); // 3

 console.log(all_students.indexOf('sharuf')); //-1 ==> leni value ni enter chesthaye -1 chupisthundi

  //                0    1    2    3    4    5    6    7    8
  const letters = ['a', 'b', 'c', 'z', 'y', 'x', 'a', 'z', 'm'];
  console.log( letters.indexOf('a') ); // 0
  console.log( letters.indexOf('z') ); // 3
  console.log( letters.lastIndexOf('a') ); // 6
  console.log( letters.lastIndexOf('c')); // 2
  console.log( letters.lastIndexOf('C') ); // -1 leni value ni enter chesthaye -1 chupisthundi
  console.log(letters.lastIndexOf('z')); // 7_double value unnapudu reverse nundi value index chupisthundi
   
    // Remove values from array (THese methods will modify original array);
   // .shift()   // return removed Value
  // .pop()     // return removed Value
 // .splice()  // return removed array of values

 console.log(all_students);
 const first_student = all_students.shift();
 // .shift(); ==> .shift() antaye edi aithe starting name or number untundo adi .shift() remove chesthundi
 console.log(first_student); // Ram remove chesthundi
 console.log(all_students)

 const last_student = all_students.pop();
 // .pop(); ==> .pop(); antaye edi aithe last lo  name or number untundo adi .pop(); remove chesthundi
 console.log(last_student); // Viswananth remove chesthundi
 console.log(all_students);

 const delete_students = all_students.splice(2,1);
 // for example .splice lo (2) ani enter chesthaye 2 tharvatha nundi unna prathi okka value ending daka delete avthundi and (2) ki mundu unna value matramaye array lo chupisthundi, alagai manam just oka single value delete cheyali antaye for example (2,1) ani enter chestaye index value lo unna 2-value matramaye delete chestundi 2,1 ani pedithaye 2 anaye value okataye delete avalani ardam.....
 console.log(delete_students); // Shaik delete chesthundi....migatha array lo values chupisthundi
 console.log(all_students); 


   








