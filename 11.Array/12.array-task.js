// 1
var friends = ['shaik','ShArUf','sHARu'];

var friends_Name = friends.map(friends => friends.toLowerCase());

var capitalize = friends_Name.map (friends => {
   const first_letter = friends[0].toUpperCase();
   const remaining_letters = friends.substring(1)
   return   first_letter + remaining_letters             
});
console.log (friends);
console.log(friends_Name);
console.log(capitalize);




// 2
var names = ['vISHNu','PRADeep','KIRan'];

var friends_names = names.map(names => names.toLowerCase());

var capitals = friends_names.map(names => {
   const firstletter = names[0].toUpperCase()
   const remainingletter= names.substring(1);   
   return firstletter + remainingletter             
})
console.log(names);
console.log(friends_names);
console.log(capitals);




// 3
let letters = ['SuRESh','maHeSH','RAmEsh'];

let To_lowerletter = letters.map( letters => letters.toLowerCase());

let Starting_Single_Upperletter = To_lowerletter.map( letters => {
  const first_letters = letters[0].toUpperCase();
  const small_letters = letters.substring(1);
  return first_letters + small_letters                  
})
console.log(letters);
console.log(To_lowerletter);
console.log(Starting_Single_Upperletter);






console.log("------------------------------CLASS_NOTES------------------------------");

/*

var friends = ['syed', 'ZaKeEr', 'hUSSaiN'];
// ['Syed', 'Zakeer', 'Hussain'];

var friendsName = friends.map( friend => friend.toLowerCase() );


var capitalize = friendsName.map(friend => {
  const firstLetter = friend[0].toUpperCase();
  const remainingLetters = friend.substring(1);
  return firstLetter + remainingLetters
});

console.log(friends);
console.log(friendsName);
console.log(capitalize);

// ['syed', 'zakeer', 'hussain'];

*/
