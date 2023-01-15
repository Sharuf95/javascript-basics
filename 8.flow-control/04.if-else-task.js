 // Traffic lights
 /*
 1.Green ---> (Vehicle can move / Go)
 2.Red   ---> (Vehicle should be stop)
 3.Yellow --> (Vehicle can move but need to go slow)
 */

 import readline from 'readline-sync'
 import chalk from 'chalk';

 console.log(`First Time Practice*********************************************************`);
 const GREEN_LIGHT = 'green';
 const RED_LIGHT = 'red';
 const YELLOW_LIGHT = 'yellow';

 let currentlight = readline.question(`currentlight :`);
 currentlight = currentlight.toLowerCase();
 // for lowercase we should enter --> let currentlight = readline.question(`currentlight :`)
 console.log (chalk.bgCyan(`current light value = ${currentlight}`));

 if (currentlight===GREEN_LIGHT ) {
    console.log(chalk.bgGreen ('GO.....'));
 }else if ( currentlight=== RED_LIGHT) {
    console.log(chalk.bgRed(`STOP....`))
 } else if (currentlight === YELLOW_LIGHT ) {
    console.log(chalk.bgYellow('GO SLOW....'))
 }else {
    console.log('Light values should be in GREEN,RED,YELLOW');
 }

 // FOOD COURT MENU ITEMS
 console.log(`Second Time Practice*********************************************************`);

const KFC_SMOOTHY = 'Chickenlegs';
const KFC_WINGS = 'Chickenminilegs';
const KFC_CHICKEN_BURGER = 'Chickenminiburger';
let Restaurant = readline.question(`Restaurant :`);
Restaurant = Restaurant.toLowerCase();
// for lowercase we should enter --> let currentlight = readline.question(`currentlight :`)
console.log(chalk.bgCyan(`Restaurant current items = ${Restaurant}`))

if ( Restaurant === KFC_SMOOTHY) {
    console.log (chalk.bgRed(`Chickenlegs `));
}else if (Restaurant === KFC_WINGS) {
console.log (chalk.bgYellow(`Chickenminilegs `))
}else if (Restaurant === KFC_CHICKEN_BURGER) {
console.log(chalk.bgGreen(`Chickenminiburger`))
}else {
    console.log (`Available items in our restaurant only chickenlegs,Chickenminilegs,Chickenminiburger`);
}







 