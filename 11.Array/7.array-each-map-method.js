// .methodName (?input)

const student = [];

// Add value to array by using .push ( NEW_VALUE ) method
student.push('shaik');

// Add value using length property ARRAY [ ARRAY.length ] = NEW_VALUE 
student[student.length] = 'Sharuf';
console.log(student.length); // 2
console.log(student);

function havingreturnvalue () {
    return 100+200
};

function fnwithoutreturn() {
const total = 100 +10
};

function fnwithreturnvalue() {
  const total_value = 100+1
  return total_value
};

const Valueone = havingreturnvalue(); // It will return value 
const ValueTwo = fnwithoutreturn(); // It will return undefined because no return statement
const ValueThree = fnwithreturnvalue(); // Now It will return value 

console.log(`Value One WithReturn = ${Valueone}`);
console.log(`Value Two WithoutRetun ${ValueTwo}`);
console.log(`Value Third fnwithreturnvalue = ${ValueThree} `);



[].forEach;
/*
(method) Array<never>.forEach(
  callbackfn : (value : never, index : number, array : never []) => void
  thisArg?: any) : void
  .forEach yapudu return chesayedi undefined

  values.forEach (() => {}) ==> Undefined
  [1,2,3,4].forEach((value) => {return value + 100 }); ==> Undefined
*/


[].map;
/*
(method) Array<never>.map<U>(
 callbackfn : (value : never, index : number, array : never []) => U,
 thisArg?: any) : U[]
 Calls a defined callback function on each element of an array and returns an array that 
 contains the results

 values.map (() => {}) ==> [ Undefined ,Undefined, Undefined, Undefined ] it shows Array
  [1,2,3,4].map((value) => {return value + 100 }); ==> [ 101 , 102 , 103 , 104 ]   
   //                           1,2,3,4    + 100

*/
student[student.length] = 'Sharu'

const welcome_students_using_forEach = student.forEach((student) => {
const message = `Welcome ${student}`;
console.log(message);
return message;
});// .forEach method yapudu em return cheyadhu [ undefined ] chupisthundi
console.log(`Values using forEach`,welcome_students_using_forEach); 

console.log('-------------------------------------------------------------------------------------');
const WelcomeStudents_forEach = student.forEach ( (student) => {
  const messagee = `Welcome ${student}`
  console.log (messagee);
  return messagee; // .forEach method yapudu em return cheyadhu [ undefined ] chupisthundi
});
console.log(`Values Using forEach2`,WelcomeStudents_forEach);


console.log('_____________________________________________________________________________________');
console.log('.map method');
console.log('-------------------------------------------------------------------------------------');

const WelcomeStudents_map = student.map ( (student) => {
  const messagee = `Welcome ${student}`
  console.log (messagee);
  return messagee; 
});
console.log(`Values Using map`,WelcomeStudents_map);





console.log('First time-------------------------------------------------------------------');
                    //   0  1   2   3   4
const ShoppingPrices = [56,450,329,458] // Apply Discount of 10%
const discountPrices = [];
const DISCOUNT_PERCENTAGE = 10;

function applyDiscount(amount,discountPercentage = 10 ) {
  // Discount formula : ( value *  DISCOUNT_PERCENTAGE ) / 100
  const discount = (amount * discountPercentage) /  100; // ex :- 2000 x 10 = 200
  const discountamount = amount - discount ; //  here 2000 - 200 = 1800
  return discountamount;
  // return  amount - discount; ==> we can ( invoke r call ) like this also line 112 & 113
}

for (let index = 0; index < ShoppingPrices.length; index++){
  const value = ShoppingPrices[index];
  // Discount formula : ( value *  DISCOUNT_PERCENTAGE ) / 100
  // const discount = (value * DISCOUNT_PERCENTAGE) / 100
  // const discountamount = value - discount; we can ( call r invoke ) enter like 120 and 121 line also.
  const discountamount = applyDiscount(value,DISCOUNT_PERCENTAGE);
  discountPrices.push(discountamount)
};


const discount_values_using_map = ShoppingPrices.map((amount) => {
  const discountAmount = applyDiscount(amount,DISCOUNT_PERCENTAGE)
  return discountAmount
});

const map_using_single_statement = ShoppingPrices.map(amount => {
  return amount - 10
}); // Answer [ 46, 440, 319, 448 ]

const map_using_single_statement1 = ShoppingPrices.map(amount => amount + 1);
// we can write like this also in single statement Answer  [ 57, 451, 330, 459 ]

const map_using_single_statement2 = ShoppingPrices.map(amount => amount - 1); // [ 55, 449, 328, 457 ] 

console.log(ShoppingPrices);
console.log(discountPrices);
console.log(discount_values_using_map);
console.log(map_using_single_statement);
console.log(map_using_single_statement1);
console.log(map_using_single_statement2);




console.log("Practicing Second time----------------------------------------------------------------");

const Cmr_shopping_prices = [200,300,400,599];
const Cmr_discount_prices = [];
const Cmr_Discount_Percentage = 10

function apply_cmr_amount (amount,discountpercentage = 10){
  // Discount formula : ( value *  Cmr_discount_prices ) / 100
  const discount = (amount * discountpercentage) / 100 ;
  const discount_amount = amount - discount;
  return discount_amount;
};

 for (let index = 0;index < Cmr_shopping_prices.length;index++){
  const value = Cmr_shopping_prices[index]
  // Discount formula : ( value *  Cmr_Discount_Percentage ) / 100
  // const  discount = ( value *  Cmr_Discount_Percentage ) / 100
  // const discountamount = value - discount;
  const discountamount =  apply_cmr_amount(value,Cmr_Discount_Percentage);
  Cmr_discount_prices.push(discountamount);
};

  const cmr_discount_values_using_map = Cmr_shopping_prices.map((amount) =>{
  const discountamount = apply_cmr_amount(amount,Cmr_Discount_Percentage)
  return discountamount
});

  const cmr_map_using_single_statement = Cmr_shopping_prices.map(amount => {
  return amount - 1});

 const cmr_map_using_single_statement1 = Cmr_shopping_prices.map(amount => amount + 2); 
  
 const cmr_map_using_single_statement2 =  Cmr_shopping_prices.map(amount => amount + 3);
  
  

 console.log(Cmr_shopping_prices);
 console.log(Cmr_discount_prices);
 console.log(cmr_discount_values_using_map);
 console.log(cmr_map_using_single_statement);
 console.log(cmr_map_using_single_statement1);
 console.log(cmr_map_using_single_statement2);

 /*
 [].push(123); // [123]

 [100, 200].push(300); // [100, 200, 300]; 

 [].forEach( () => {} );

 [].forEach( function() {} );

 ['Syed', 'Zakeer', 'Hussain'].forEach( (value) => { console.log(`Welcome {value}`) } );

 // 'Syed' => ('Syed') => { console.log(`Welcome Syed') }

 // 'Zakeer' => ('Zakeer') => { console.log(`Welcome Zakeer`) }

 // 'Hussain'

 ['A', 'B', 'C'].map(char => char.toLowerCase());

 // A => A => A.toLowerCase() ===> a

 // B => B => B.toLowerCase() ===> b

 // C => C => C.toLowerCase() ===> c

 */

