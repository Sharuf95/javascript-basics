const friends = [
    'Sharuf',      // 0
    'Ash',        // 1
    'Rajesh',    // 2
    'Sachin',   // 3
    'Harsha',  // 4
    'Gowtham' // 5
];
console.log (friends);
const index = 5;
console.log(friends[index]);
console.log(`Access array value of Static Index`);
console.log (friends [0]);
console.log (friends [1]);
console.log (friends [2]);
console.log (friends [3]);
console.log (friends [4]);
console.log (friends [5]);

console.log("___________________________________________________________________________________________");

let current_Index = 0;
const last_index = 5;
while (current_Index <= last_index) {
console.log (friends[current_Index]);
current_Index++;
};