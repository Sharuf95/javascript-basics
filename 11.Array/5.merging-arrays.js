const SchoolFriends = [
    'Deva',
    'Gowtham',
    'David',
    'Vamsi'
];

const CollegeFriends = [
    'Sai',
    'Affroze',
    'Bujji',
    'Mani'
];

// Merge / Combine multiple array into single array 


// Using .concat method
const friends = SchoolFriends.concat(CollegeFriends);
console.log(friends); // This is One method for ( .concat )


 // using es6 spread operator (...) (es6 feature)
const friendslist = [...SchoolFriends , ...CollegeFriends];
console.log(friendslist); // This method is Simple


 // Generic/Lecacy tech
 const schoolFriends = []// declaring with for loop
 for (let i = 0; i < schoolFriends.length; i++) {
   const friend = schoolFriends[i];
   schoolFriends.push(friend);
 }
 console.log(schoolFriends);


 const combineFriends = []
 for (let j = 0; j < combineFriends.length; j++) {
    combineFriends.push(combineFriends[j]); // declaring with for loop
  }
  console.log(combineFriends);
  
