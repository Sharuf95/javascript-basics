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

const Valueone = havingreturnvalue(); // It will return value 
const ValueTwo = fnwithoutreturn(); // It will return undefined because no return statement

console.log(`Value One WithReturn  ${Valueone}`);
console.log(`Value Two WithoutRetun ${ValueTwo}`);

[].forEach;
/*
(method) Array<never>.forEach(
  callbackfn : (value : never, index : number, array : never []) => void
  thisArg?: any) : void
  .forEach yapudu return chesayedi undefined
*/


[].map;
/*
(method) Array<never>.map<U>(
 callbackfn : (value : never, index : number, array : never []) => U,
 thisArg?: any) : U[]
 Calls a defined callback function on each element of an array and returns an array that 
 contains the results
*/
student[student.length] = 'Sharu'
const welcome_students_using_forEach = student.forEach((student) => {
const message = `Welcome ${student}`;
console.log(message);
return message;
});
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
  return messagee; // .forEach method yapudu em return cheyadhu [ undefined ] chupisthundi
});
console.log(`Values Using forEach2`,WelcomeStudents_map);

console.log('First time-------------------------------------------------------------------');

const ShoppingPrices = [50,100,150,200,250] // Apply Discount of 10%
const discountPrices = [];
const DISCOUNT_PERCENTAGE = 10;

for (let index = 0; index < ShoppingPrices.length; index++){
  const value = ShoppingPrices[index];
  // Discount formula : (value * discount ) / 100
  const discount = (value * DISCOUNT_PERCENTAGE)/100
  const discountamount = value - discount
  discountPrices.push(discountamount)
};


const discount_values_using_map = ShoppingPrices.map((amount) => {
const discount_amount = (amount,DISCOUNT_PERCENTAGE);
return discount_amount
});

const map_using_single_Statement = ShoppingPrices.map(amount => {
  return amount - 10 ;
})

const map_using_single_statement =  ShoppingPrices.map(amount => amount - 10);






console.log('Second time-------------------------------------------------------------------');
const CMR_Shopping = [300,350,400,450,500]
const CMR_Discount_Prices = [];
const CMR_DISCOUNT_PERCENTAGE = 10
// for loop
for (let index = 0; index < CMR_Shopping.length;index++) {
const value = CMR_Shopping[index];
const CMR_Discount = ( value * CMR_DISCOUNT_PERCENTAGE ) / 100
const CMR_DISCOUNT_AMOUNT = value - CMR_Discount
CMR_Discount_Prices.push(CMR_DISCOUNT_AMOUNT)
};


console.log(ShoppingPrices);
console.log(discountPrices);
console.log(CMR_Shopping);
console.log(CMR_Discount_Prices);
console.log(discount_values_using_map);
console.log(map_using_single_Statement);
console.log(map_using_single_statement);

/*
console.log('with function-------------------------------------------------------------------');
applyDiscount();
const KLM_SHOPPING = [550,600,650,700,750]
const KLM_DISCOUNT_PRICES = [];
const KLM_PERCENTAGE = 10;


function applyDiscount (amount,KLM_PERCENTAGE = 10) {
  const KLM_Discount = (amount * KLM_PERCENTAGE) / 100
  return amount -  KLM_Discount;
}
for (let i = 0;i < KLM_SHOPPING.length;i++){
  const value = KLM_SHOPPING[i];
  const discountamount = applyDiscount(value,KLM_PERCENTAGE);
  discountPrices.push(discountamount)

}
console.log(ShoppingPrices);
console.log(discountPrices);
applyDiscount();


*/