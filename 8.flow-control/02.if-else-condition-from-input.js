import readline from 'readline-sync';
import chalk from 'chalk';

// Movie tickets
console.log(`First time practice***********************************************************`);
const AVAILABLE_COLLEGE_SEATS = 100;
const REQUIRE_COLLEGE_STUDENTS_SEATS =readline.question('How Many Seats Required For College :');
if (REQUIRE_COLLEGE_STUDENTS_SEATS <= AVAILABLE_COLLEGE_SEATS) {
console.log(chalk.bgRed(`Seat are confirmed`));
} else {
console.log(chalk.bgGreen(`Seats Closed...`));
}



console.log(`Second time practice***********************************************************`);
// Airlines tickets
const CURRENT_AVAILABLE_TICKETS = 120;
const REQUIRED_TICKETS_FOR_PUBLIC = readline.question(`How Many Tickets Are Required :`);
if (REQUIRED_TICKETS_FOR_PUBLIC <= CURRENT_AVAILABLE_TICKETS) {
    console.log(chalk.bgGreen(`Tickets Requirement are confirm`))
} else {
console.log(chalk.bgRed(`Tickets Requirement are Closed`));
}


// Trains tickets
console.log(`Third time practice***********************************************************`);
const RESERVATION_TRAIN_TICKETS = 70;
const CURRENT_TICKETS = readline.question(`How many tickets are required : `);
if ( CURRENT_TICKETS <= RESERVATION_TRAIN_TICKETS) {
console.log(chalk.bgRed(`Your Train Tickets Are Confirm,Have A Nice Trip`));
}else {
console.log(chalk.bgYellow(`Booking Closed`));
}


// Bus tickets 
console.log(`Fourth time practice***********************************************************`);
const ABHI_BUS_SLEEPER_TICKETS = 50;
const CURRENT_ABHIBUS_AVAILABLE_SEATS = readline.question(`Present Available Seats Are Required :`);
if (CURRENT_ABHIBUS_AVAILABLE_SEATS <= ABHI_BUS_SLEEPER_TICKETS) {
    console.log(chalk.bgGreen(`Your Sleeper Seat Booked`))
}else {
console.log(chalk.bgYellow(`Tickets Closed`))
} 