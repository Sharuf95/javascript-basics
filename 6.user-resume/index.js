const readline = require("readline-sync");

        //"name": "Shaik Sharuf",
		/*
        "label": "Full_Stack_Dev",
		"email": "Shaiksharuf95@gmail.com",
		"phone": "+91 9908996571",
		"url": "https://registry.jsonresume.org/Sharuf95",
        */
console.log(`*****Resume Maker*****`);
const name     = readline.question(`Name :`);
const label    = readline.question(`Designation :`);
const email    = readline.question(`email :`);
const phone    = readline.question(`phone :`);
const url      = readline.question(`Website:`);

const resume = {

    basics : {
    name:  name,
    label: label ,
    email: email,
    phone: phone,
    url  : url
   }
   };

   console.log('User details');
   console.log (resume);



