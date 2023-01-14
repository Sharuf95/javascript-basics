/*
Here is normal if /else flow 
if (condition) {

} else {

} 
*/

import readline from 'readline-sync';
const TicketsAvailable = 20;

let message = "";

const userinput= readline.question (`No of required tickets? `)

/*
if (userinput <=TicketsAvailable) {
message = 'Tickets Booked'
}else {
message = 'Tickets Closed'
}
console.log(message);
*/

// condition ? userinput : falseblock

message = userinput <= TicketsAvailable ? `Tickets are booked` : `Tickets are not booked`;

const condition = userinput <= TicketsAvailable;
const truemessage = 'Tickets are booked';
const falsemessage = 'Tickets are not Booked';

const anothermessage = condition ? truemessage : falsemessage;
console.log(`Message value = ${message}`);
console.log(`Message value = ${anothermessage}`);