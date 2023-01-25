import readline from 'readline-sync';
import chalk from 'chalk';

const ADD_STUDENTS = 'Add Students';
const SHOW_STUDENTS = 'Show list of Students';

const USER_iNPUTS = [
    ADD_STUDENTS,
    SHOW_STUDENTS
];

let run_program = true;
let students = [];

while (run_program) {
const UserChoiceIndex = readline.keyInSelect(USER_iNPUTS);
const Userchoice = USER_iNPUTS[UserChoiceIndex];
console.log(`User Selected Choice is ${chalk.bgRed(Userchoice)}`)

if (Userchoice === ADD_STUDENTS) {

    const NewStudentsname = readline.question("Please enter new student name : ");
    if (NewStudentsname) {
        students.push(NewStudentsname);
    console.log(chalk.bgGreen(`${ NewStudentsname} added to student list`))
    }
     
    
}else if (Userchoice == SHOW_STUDENTS ) {
console.log ("List of Students");
console.log(students);
}else {
   run_program = false;
}
}

console.log("-----------------------------------------------------------------------------------------");
console.log("-----------------------------------------------------------------------------------------");

const ADD_ITEMS = 'Add items';
const SHOW_ITEMS = 'Show list of items';
const USER_ITEMS = [
    ADD_ITEMS,
    SHOW_ITEMS
];
let run_Input = true;
let Items = [];
while (run_Input) {
    const userinput = readline.keyInSelect(USER_ITEMS);
    const UserInputItem = USER_ITEMS[userinput];
    console.log(`User Input Choice is ${chalk.bgRed(UserInputItem)} `)
    if (UserInputItem === ADD_ITEMS) {
     const NewItem = readline.question('Please enter your item name : ');
     if (NewItem) {
        Items.push(NewItem);
        console.log(chalk.bgGreen(`${NewItem} added to Items list`))
     }
    }else if (UserInputItem == SHOW_ITEMS) {
        console.log(`Show list of items`)
        console.log(Items);
    }else{
        run_Input = false;
    }
    }
    