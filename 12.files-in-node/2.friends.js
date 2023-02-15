 import readline from 'readline-sync';
 import chalk from 'chalk';


 const friends = ['Kumar','Naveen'];

 const Show_friends = "Display friends";
 const Add_friends = "Add friends";

 const User_Actions = [
      Show_friends, // 0
      Add_friends  // 1
];

 let run_program = true
 while (run_program) {
 const User_Action_Index = readline.keyInSelect(User_Actions)
 console.log(`User Selected Action Index :`,User_Action_Index)
  if (User_Action_Index === -1) {
 console.log("Stopping Application");
 run_program = false
  } else {

 const User_Selected_Action =   User_Actions[User_Action_Index]    
 console.log(User_Selected_Action);  
      
 if (User_Selected_Action === Show_friends) {
 console.log(friends);
 } else {
  const newfriendname = readline.question ("Please enter new friend name : ")
  friends.push(newfriendname)
 }

  }
 }
 
 console.log("--------------------------------------------------------------------------------------------");
 

 const friend = ['Mahesh','Munna'];
 const Show_friend = "Display friend";
 const Add_friend = "Add friend";
 const Users = [
       Show_friend,
       Add_friend
];
 let run_Program = true;
 while( run_Program) {
 const User_action_index = readline.keyInSelect(Users)
 console.log("User selected Index : ",User_action_index)
 if (User_action_index === -1) {
 console.log("Stopping Application")
 run_program = false
}else {
 const User_selected_action = Users[User_action_index];
 console.log(User_selected_action)
 if (User_selected_action === Show_friend) { 
 console.log(friend)
}else{
   const NewFriendName = readline.question("PLease enter your Name :")   
   friend.push( NewFriendName)              
}

}

}

console.log("--------------------------------------------------------------------------------------------");

const School_friends = ["Mani","Kanta"];
const Display_friend = "Display friends";
const Add_frnd = "Add friends"; 
const users = [
    Display_friend,
    Add_frnd 
];
const runn_program = true;
while(runn_program) {
const User_Selected_index = readline.keyInSelect(users);
console.log("User Selected Index :",User_Selected_index);
if (User_Selected_index === -1) {
console.log("Stopping Application");
runn_program = false
}else{
const User_Selected_Action = users[User_Selected_index];
console.log( User_Selected_Action);
if ( User_Selected_Action === Display_friend) {
console.log(School_friends)
}else {
const newfriendsname = readline.question("Please enter your name :")
School_friends.push(newfriendsname)
}
}
}







console.log("------------------------------------CLASS_NOTES--------------------------------------------");

/*

import readline from 'readline-sync';
import chalk from 'chalk';

const friends = ['Syed', 'Zakeer'];

const SHOW_FRIENDS = 'Display Friends';
const ADD_FRIEND = 'Add Friends';

const USER_ACTIONS = [
  SHOW_FRIENDS, // 0
  ADD_FRIEND    // 1
]

let canRunProgram = true

while (canRunProgram) {
  const userActionIndex = readline.keyInSelect(USER_ACTIONS);
  console.log(chalk.bgRed(`User Selected Action Index: `), chalk.red(userActionIndex));

  if (userActionIndex === -1) {
    console.log(chalk.bgRed("Stoping Application...."));
    canRunProgram = false;
  } else {
    const USER_SELECTED_ACTION = USER_ACTIONS[userActionIndex];
    console.log(chalk.bgGreen(`User Selected Action: `), chalk.green(USER_SELECTED_ACTION));

    if (USER_SELECTED_ACTION === SHOW_FRIENDS) {
      console.log(friends);
    } else {
      const newFriendName = readline.question("Please enter new friend name: ");
      friends.push(newFriendName);
    }
  }


}

*/