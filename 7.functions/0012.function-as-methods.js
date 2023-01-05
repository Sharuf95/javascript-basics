// Creating simple javascript object

const user = {
    firstname : "Shaik",
    lastname  :  "Sharuf",
    work      : "Full_Stack_Dev",
    city      : "hyderabad",
    wfh       : true,
    skills    : ['html','css','js'],
    company   : {
    
         name : "Sap",
         location: "Hyderabad"
    },
    details   : function() {
        console.log(`User details: Shaik Sharuf`);
     },
     CustomerInfo : function () {
        console.log(`User CustomerInfo : Shaik Sharu`)
     },
     customer_id : function () {
        console.log(`User customer_id : 12345`)
     },
     customer_phone_number : function () {
        console.log (`User customer_phone_number : 98765`);
     }
} 

/*
user.details();
user.CustomerInfo();
user.customer_id();
user.customer_phone_number();
*/ 


console.log(user);
console.log(`Data type of variable user is ${typeof user}`);


// How to access object properties (keys)
// 1. DOT Notation `.`
// 2. Brackets Notation `[]`
// 3.DOT Notation `.` object.propertyName

// 1.Dot notation "."
// --------------------------------------------------------------------
console.log (`user name info : ${user.name}`); // A.Undefined // if u wont define it shown undefined 
console.log (`user firstname info : ${user.firstname}`);
console.log (`user lastname info : ${user.lastname}`);
console.log (`user work info : ${user.work}`);
console.log (`user city info : ${user.city}`);
console.log (`user wfh info : ${user.wfh}`);
console.log (`user skills info via DOT notation : ${user.skills}`);


// Bracket notation object [' ']
// Brackets Notation `[]` -> object['propertyName']
// --------------------------------------------------------------------
console.log (`user firstname info firstname = ${user['firstname']}`);
console.log (`user lastname info lastname = ${user[`lastname`]}`);
console.log (`user work info work = ${user[`work`]}`);
console.log(`user city info city = ${user[`city`]}`);
console.log (`user wfh info wfh = ${user[`wfh`]}`);
console.log(`user city info via BRACKET notation user['city'] = ${user['city']}`);

// Dot notation "." ,asking key from object.
console.log (`user comapny name info via DOT notation : ${user.company.name}`);
console.log (`user company location info via DOT notation : ${user.company.location}`);

// Bracket notation object [' '] ,asking key from object.
console.log(`user company name info via BRACKET notation company name = ${user['company']['name']}`);
console.log (`user company location info via BRACKET notation company location = ${user['company']['location']}`);

console.log (`user skills info via DOT NOTATION skills : ${user.skills}`); // Dot notation "."
console.log (`user skills info via Bracket Notation = ${user[`skills`]}`); // Bracket notation
user.details();
user.CustomerInfo();
user.customer_id();
user.customer_phone_number();