const fullname = 'Shaik_Sharuf';
const physical_activities = "cricket ,Chess,Ragbi,Running";
const Favourite_person = "My Mother";

function printuserdetails1 () {
    const city = 'Guntur' ;
    const designation = 'Full_Stack_Dev'
    console.log({
        name : fullname,
        city : city,
        designation : designation
    })

}
printuserdetails1 ();
console.log (`fullname = ${fullname}`);
console.log (`physical_activities = ${physical_activities}`);
console.log (`Favourite_person = ${Favourite_person}`);



console.log("Class__Notes");

/*

const TAX_AMOUNT = 30;


// Function expression define
const shopping = function(amount) { // amount = 100

  const DISCOUNT_AMOUNT = 40;

  // Arrow function
  const calculateTax = () => {
    return amount + TAX_AMOUNT; // 100+30 = 130; (TAX_AMOUNT is global variable)
  }
  // function declaration
  function getDiscountAmount() {
    return DISCOUNT_AMOUNT;
  }  
              // 130        -     40               = 90
  const total = calculateTax() - getDiscountAmount();
  return total;
}

// Invoking the function
const billAmount = shopping(100); // ? 
console.log(`Bill Amount = ${billAmount}`);

// Points to be note
// 1. We can't access any values from the function
// 2. We can access outer variable in the function



function shoppingDetails(amount) {
  const DISCOUNT_AMOUNT = 25;

  function calculateTaxAmount() {
    const taxAmount = amount + TAX_AMOUNT;
    return taxAmount;
  }

  function getDiscountAmount() {
    const total = calculateTaxAmount();
    const amountWithDiscount = total - DISCOUNT_AMOUNT;
    return amountWithDiscount;
  }

  const actualBill = getDiscountAmount();
  return {
    amount: amount,
    billAmount: actualBill,
    discount: DISCOUNT_AMOUNT,
    amountWithTax: calculateTaxAmount() // here we invoked the function
  }
}

const userAmount = 456;// 
const details = shoppingDetails(userAmount);
console.log(details);

*/