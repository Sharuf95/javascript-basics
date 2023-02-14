console.log("Question Number 1.......................................................................");

console.log ("Hello world........");
 console.log (10 * 2); // 20
 console.log (true === false); // Ans false ?? Why because '===' the value it takes strictly to consider 
                        
 var a = 10; // number
 let b = "20"; // String
 const c = true; // boolean 
 console.log (a+b+c);

 
 function mycustomerdetails(customerfirstName,lastName ,companyName,cityName) {

 const user = {
    firstName : customerfirstName,
    lastname  : lastName,
    company   : companyName,
    city      : cityName
}

    return user;
}

 const newuser = mycustomerdetails ("Shaik","Sharuf","TCS","Hyderabad");
console.log (newuser);




console.log("Question Number 2.......................................................................");

console.log ("Hey,Hi Welcome to our company.........")
console.log (393 * 2); // Number
console.log (true === false );

var d = "Shaik";
let e = "Sharuf";
const f = "Ash";

console.log (d + e + f);

function myemployeedata(userfirstName,lastName,previouscompany,cityName){

    const user = {
        fisrtname  : userfirstName,
        lastname   : lastName,
        ExCompany  : previouscompany,
        city       : cityName
    }
        return user ;

}
const newemployee = myemployeedata("Shaik","Sharu","wipro","Banglore")
console.log (newemployee) ;





console.log("Question Number 3........................................................................");

console.log ("Hello welcome to our website......" );
console.log (20 * 2);
console.log (false === false);

var g = "shaik";
let h = "Sharuf";
const i = "@gmail.com";

console.log (g + h + i );

function mycompanywebsite(userfirstName,lastName,mycompany,usercity) {
    const mycompanyuser = {
        firstName     : userfirstName,
        lastName      : lastName,
        company       : mycompany,
        city          : usercity,
}

return mycompanyuser ;

}
const newmycompanyuser = mycompanywebsite ("Shaik","Sharu","Capgemini","Chennai");
console.log (newmycompanyuser) ;

console.log("Class__Notes");

/*
console.log("Hello Functions....");
console.log( 56 * 99 );
console.log(true === false);

var a = 10; // number
let b = "20"; // string
const c = true; // boolean

console.log( a + b + c );


const user = {
  firstname: "Syed",
  lastname: "Hussain",
  company: "trangla",
  city: "guntur"
}

const friends = ['Harish', "Harsha", 'Mani'];

const adil = {
  firstname: 'Adil',
  lastname: 'Pathan',
  company: 'SAP',
  city: 'Ongole'
}

var name = "Adil";

            // name         parameters (total 4) 
function createUserDetails(userFirstName, lastName, companyName, cityName) {
  const user = {
    firstname: userFirstName,
    lastName: lastName,
    company: companyName,
    city: cityName
  }

  return user;
}

const salary = 10000;
const hike = salary + 5000; // 15000

const newUser = createUserDetails('Syed', "Hussain", 'SAP Labs', 'Hyderabad'); // it will return an user object (value)
console.log(newUser);

*/