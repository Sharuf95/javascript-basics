const friends = [
    'Sharuf',       // 0
    'Syed ',       // 1
    'Rajesh',     // 2
    'Sachin',    // 3
    'Harsha',   // 4
    'Gowtham', // 5
    'Ash'     // 6
]
const Total_friends = friends.length;
console.log(`Total length of friends is ${Total_friends}`)

for (let index = 0;index < Total_friends;index++) {
console.log(`Current friend is ${friends[index]} is at index of ${index}`)
};