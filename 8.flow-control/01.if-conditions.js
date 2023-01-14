// Movie tickets booking
// const readline = require(`readline-sync`);

import readline from 'readline-Sync';
console.log(`First time practice***********************************************************`);
// Movie tickets
const AVAILABLE_MOVIE_TICKETS = 12;
console.log(`Current tickets avaible = ${AVAILABLE_MOVIE_TICKETS}`);

const numberofticketsrequired = 11; 
const canbuytickets = numberofticketsrequired <= AVAILABLE_MOVIE_TICKETS;   

console.log(`can you buy tickets ${canbuytickets}`); 

 let message = '';

if ( canbuytickets ) {
  message = "your tickets are confirm "
} else {
    message = "your tickets are not confirmed"
}
console.log(message);


console.log(`Second time practice***********************************************************`);
// Airlines tickets
const AVAILABLE_AIRLINES_TICKETS = 20;
console.log(`Current tickets available for flight journey = ${AVAILABLE_AIRLINES_TICKETS}`);
const NUMBER_TICKETS_NEEDED = 15;
const REQUIRED_TICKETS = NUMBER_TICKETS_NEEDED <= AVAILABLE_AIRLINES_TICKETS;
console.log(`Tickets for flight journey ${REQUIRED_TICKETS}`);

let messagee = "";

if (REQUIRED_TICKETS) {
   messagee =  "Your flight journey tickets confirmed" 
} else {
    messagee =  "Your flight journey tickets are not confirmed" 
};
console.log(messagee);

// Trains tickets
console.log(`Third time practice***********************************************************`);
const CURRENT_TICKETS_AVAILABLE = 50;
console.log(`Current tickets available = ${CURRENT_TICKETS_AVAILABLE}`);
const PUBLIC_REQUIRED_TICKETS = 40;
const CURRENT_AVAILABLE_SEATS =  PUBLIC_REQUIRED_TICKETS <= CURRENT_TICKETS_AVAILABLE;
console.log (`Current available seats ${CURRENT_AVAILABLE_SEATS}`);

let require = ""; // <-- This Variable

if (CURRENT_AVAILABLE_SEATS) {
require = "Your Train tickets are confirmed"
} else {
require = "Your Train tickets are not confirmed "
}
console.log (require);


// Bus tickets 
console.log(`Fourth time practice***********************************************************`);
const ABHI_BUS_TICKETS = 100;
console.log(`Available Abhi bus tickets = ${ABHI_BUS_TICKETS}`);
const SLEEPER_AVAILABLE_TICKETS = 99;
const CURRENT_SLEEPER_AVAILABLE_TICKETS = SLEEPER_AVAILABLE_TICKETS <= ABHI_BUS_TICKETS;
console.log (`sleeper seating available requirement ${CURRENT_SLEEPER_AVAILABLE_TICKETS}`);

let sitting = "";
if (CURRENT_SLEEPER_AVAILABLE_TICKETS) {
    sitting = "Your sleeper sitting available and confirmed"
} else { " Your sleeper sitting available and confirmed"
}
console.log(sitting);




