import readline from 'readline-sync';

console.log (`Practicing First Time*******************************************************************`);
let CurrentTable1 = readline.questionInt('Please Enter your Table Number1 =');
let Start1 = 1;
let End_Number1 = readline.questionInt('Please Enter your End Number1 =');

while (Start1 <= End_Number1) {
const total1 = CurrentTable1 * Start1;
const Statement1  = `${CurrentTable1} * ${Start1} = ${total1}`
console.log (Statement1);
Start1 = Start1 + 1 // Start1++
};



console.log (`Practicing Second Time*******************************************************************`);
let CurrentTable2 = readline.questionInt('Please Enter Your Table Number2 = ');
let Start2 = 1;
let EndNumber2 = readline.questionInt(`Please Enter Your End Number2 =  `);

while(Start2 <= EndNumber2) {
    const total2 = CurrentTable2 * Start2
    const Statement2 = `${CurrentTable2} * ${Start2} = ${total2}`
    console.log (Statement2);
    Start2++; // Start2 = Start2 + 1 
};



console.log (`Practicing Third Time*******************************************************************`);

let Currenttable3 = 4;
let Start3 = 1;
let End_Number3 = 10;

while (Start3 <= End_Number3) {
    const total3 = Currenttable3 * Start3
    const Statement3 = `${Currenttable3} * ${Start3} = ${total3}`;
    console.log (Statement3)
    Start3++; // Start3 = Start3 + 1 
};

console.log (`Practicing Fourth Time*******************************************************************`);

let CurrentTable4 = 5;
let Start4 = 1;
let End_Number4 = readline.questionInt("Please enter your End Number4 = ");

while(Start4 <= End_Number4) {
const total4 = CurrentTable4 * Start4;
const Statement4 = `${CurrentTable4} * ${Start4} = ${total4}`
console.log(Statement4);
Start4 = Start4 + 1; // Start4++;
};

console.log (`Practicing Fifth Time*******************************************************************`);

let CurrentTable5 = readline.questionInt(`'Please Enter Your Table Number5 = `);
let Start5 = 1;
let End_Number5 = readline.questionInt("Please enter your End Number4 = ");

while(Start5 <= End_Number5) {
const total5 = CurrentTable5 * Start5;
const Statement5 = `${CurrentTable5} * ${Start5} = ${total5}`
console.log(Statement5);
Start5 = Start5 + 1; // Start5++;
};


