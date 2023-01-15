// We should restrict user to enter only Green Red Yellow;
import readline from 'readline-sync';
import chalk from 'chalk';

console.log(`Practicing first time*********************************************************`);
const GREEN  =  0;
const RED    =  1;
const YELLOW =  2;

/*
const userinput = readline.questionInt(`Select any one option for current light
1.Green
2.Red
3.Yellow :
`);
*/
// Array index value      0       1       2
const COLOUR_OPTIONS = ['GREEN','RED','YELLOW']; 

console.log(`colour value index  0 => ${COLOUR_OPTIONS[0]}`)
console.log(`colour value index  1 => ${COLOUR_OPTIONS[1]}`)
console.log(`colour value index  2 => ${COLOUR_OPTIONS[2]}`)
console.log(`colour value index -1 => ${COLOUR_OPTIONS[-1]}`)


const colorindex = readline.keyInSelect(COLOUR_OPTIONS);

console.log(`User Input Value ${colorindex} = ${COLOUR_OPTIONS[colorindex]}`);
// console.log(typeof userinput);


if (colorindex === GREEN ) {
    console.log(chalk.bgGreen(`GO..`))
}else if (colorindex === RED) {
    console.log(chalk.bgRed('STOP..'))
}else if (colorindex === YELLOW) {
    console.log(chalk.bgYellow(`MOVE SLOW..`))
}

console.log(`Practicing Second time*********************************************************`);
// five Star hotel

const chicken =  0;
const mutton  =  1;
const prawns  =  2;

const hotel_menu = ['chicken','mutton','prawns'];

console.log(`available order index value 0 => ${hotel_menu[0]}`);
console.log(`available order index value 1 => ${hotel_menu[1]}`);
console.log(`available order index value 2 => ${hotel_menu[2]}`);
console.log(`available order index value -1=> ${hotel_menu[-1]}`);

const menu_order = readline.keyInSelect(hotel_menu);
console.log (`User input Value ${menu_order} = ${hotel_menu[menu_order]}`);

if (menu_order === chicken) {
    console.log(chalk.bgGreen(`chicken`))
}else if (menu_order === mutton) {
    console.log(chalk.bgRed(`mutton`))
}else if (menu_order === prawns) {
    console.log(chalk.bgYellow(`prawns`))
}

console.log(`Practicing Third time*********************************************************`);
// traffic signals

const Green1 = 0;
const Red1   = 1;
const Yellow1= 2;

const traffic_rules_color_index = ['Green1','Red1','Yellow1']

console.log(`traffic rules color index 0 => ${traffic_rules_color_index[0]}`);
console.log(`traffic rules color index 1 => ${traffic_rules_color_index[1]}`);
console.log(`traffic rules color index 2 => ${traffic_rules_color_index[2]}`);
console.log(`traffic rules color index-1=>  ${traffic_rules_color_index[-1]}`);

const traffic_siganls = readline.keyInSelect(traffic_rules_color_index);
console.log(`Userinput value ${traffic_siganls} = ${traffic_rules_color_index[traffic_siganls]}`);

if (traffic_siganls === Green1) {
    console.log(chalk.bgGreen(`GO....`))
}else if (traffic_siganls === Red1) {
    console.log(chalk.bgRed(`STOP....`))
}else if (traffic_siganls === Yellow1) {
    console.log(chalk.bgYellow(`MOVE SLOW...`))
}