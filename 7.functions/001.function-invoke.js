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