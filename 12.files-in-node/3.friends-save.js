// Files (friends.json,friends.txt)
// Database (Sqlite / Mysql)


// friends-save.js is read file
// friends.json os write 

import readline from 'readline-sync';
import chalk from 'chalk';

// package (fs) => filesystem
import fs from 'fs';

const My_File_Data_Path = "./data/friends.json"
const filedata = fs.readFileSync(My_File_Data_Path); // readFileSync will return data as buffer
console.log("File Data Content Ad Buffer Data...........................................................")
console.log(filedata);
console.log("Converting buffer data to JSON by using JSON.parse method");
const friends = JSON.parse(filedata);

const Show_friends = "Show friends";
const Add_friends = "Add friends";

const actions = [
 Show_friends,
 Add_friends
];

let run_program = true;
while (run_program) {
const user_Selected_Index = readline.keyInSelect(actions);
console.log(user_Selected_Index)
if (user_Selected_Index === -1) { // user cancel press chesthaye -1 can program ni false chesthundi (Cheyali)
run_program = false;
}else { // / else condition lo actions lo user select chesina select index
   const Select_Action = actions[user_Selected_Index];
   if (Select_Action === Show_friends) {
 console.log(friends)
   } else {
 const friendName = readline.question("Please enter your name:")
 if (friendName) {
 friends.push(friendName )

  // Here we need to convert Object/Array to String for saving the file
 // By using JSON.stringify method

       const friends_Data = JSON.stringify(friends);
       fs.writeFileSync (My_File_Data_Path,friends_Data)

      }
    }               
  }
}






console.log("------------------------------CLASS_NOTES------------------------------");




/*

// Files (friends.json, friends.txt)
// Database (Sqlite / MySql)

import readline from 'readline-sync';
import chalk from 'chalk';

// package (fs) => filesystem
import fs from 'fs';

const FRIENDS_FILE_PATH = "./data/friends.json";

const fileData = fs.readFileSync(FRIENDS_FILE_PATH); // readFileSync will return data as buffer
console.log("FILE DATA CONTENT AS BUFFER DATA............")
console.log(fileData);
console.log("Converting Buffer data to JSON by using JSON.parse method");

const friends = JSON.parse(fileData);

const SHOW_FRIENDS = 'Display Friends List';
const ADD_FRIENDS = 'Add new friend';

const actions = [
  SHOW_FRIENDS,
  ADD_FRIENDS
];

let canRunProgram = true;
while (canRunProgram) {
  const selectedIndex = readline.keyInSelect(actions);
  if (selectedIndex === -1) {
    canRunProgram = false;
  } else {
    const SELECT_ACTION = actions[selectedIndex];
    if (SELECT_ACTION === SHOW_FRIENDS) {
      console.log(friends);
    } else {
      const friendName = readline.question('Please enter new friend name: ');
      if (friendName) {
        friends.push(friendName);
        // console.log("Type of friends is ", typeof friends)

        // Here we need to convert Object/Array to String for saving the file
        // By using JSON.stringify method
        const friendsData = JSON.stringify(friends)
        fs.writeFileSync(FRIENDS_FILE_PATH, friendsData);
      }
    }
  }
}

*/