import readline from 'readline-sync';

 
// Function expression define
// Input-program is at down please scroll down



console.log (`Type_One_Problem :-1**********************************************************`)
  
const Shopping_Total_AMOUNT = +readline.question("Please enter Shopping_Total_AMOUNT:");
const TAX_AMOUNT = +readline.question("Please enter TAX_AMOUNT :");
const  DISCOUNT_AMOUNT = +readline.question("Please enter DISCOUNT_AMOUNT :");

 

 /*
 const Shopping_Total_AMOUNT = 100;
 const TAX_AMOUNT = 30;
 const DISCOUNT_AMOUNT = 40;
*/ 


 const shopping1 = function (amount) {
    
    // Arrow function
    const calculatetax = () => {
        return amount + TAX_AMOUNT ; 
    }
    // function declaration 
    function  getdiscountamount () {
        return  DISCOUNT_AMOUNT ;
    }
    
              // 130             -     40               = 90
    const total = calculatetax() - getdiscountamount();
    return total;
}
// invoking or calling the function 
const billamountt =shopping1(100);
console.log (`billamount = ${billamountt}`); 

// Points to be note
// 1. We can't access any values from the function
// 2. We can access outer variable in the function 





console.log (`Type_Two_Problem :-2***********************************************************`)

const Shopping = +readline.question("Please enter Shopping_Total_AMOUNTT:");
const Tax_Amount_2 = +readline.question("Please enter Tax_Amount_2 :");
const Discount_Amount_2 = +readline.question("Please enter Discount_Amount_2 :");


/*
 const  Shopping_2 = 190;
 const Tax_Amount_2 = 30;
 const Discount_Amount_2 = 40;
 */
 
 
  const Shopping_2 = function (amount) {
   function calculatetax () {
    return amount + Tax_Amount_2
   } 

   function getdiscountamount () {
    return Discount_Amount_2;
   }
   const total = calculatetax() - getdiscountamount();
   return total;
 }
 const billamount =Shopping_2(190);
 console.log (`billamount = ${billamount}`);


 console.log (`Type_One_Problem :-3**********************************************************`)

 
 const Shopping_Total_AMOUNTTT = +readline.question("Please enter Shopping_Total_AMOUNTTT:");
 const Tax_Amount_3 = +readline.question("Please enter Tax_Amount_3 :");
 const Discount_Amount_3 = +readline.question("Please enter Discount_Amount_3 :");
 
 /*
 const taxdiscountamount = 30;
 const salediscountamount = 40;
 */
 
   const Shopping_3 = function (amount) {
    function calculatetaxx () {
        return amount + Tax_Amount_3;
    }
    function offerdiscountamoount () {
        return Discount_Amount_3;
    }
    const total = calculatetaxx () - offerdiscountamoount ();
    return total;

    
}
    const CMRbillamount = Shopping_3(290);
    console.log (`CMRbillamount ${CMRbillamount}`);




console.log (`Type_One_Problem :-4**********************************************************`);

     
 const Shopping_Total_AMOUNTTTT = +readline.question("Please enter Shopping_Total_AMOUNTTT:");
 const Tax_Amount_4 = +readline.question("Please enter Tax_Amount_4 :");
 const Discount_Amount_4 = +readline.question("Please enter Discount_Amount_4 :");

/*
 const Tax_Amount_4 = 30;
 const Discount_Amount_4 = 40;

 Tax_Amount_4;
 Discount_Amount_4;
 */


     const JEWELLERY = function (amount) {
     const CALCULATE_JEWELLERY_TAX = () => {
     return amount + Tax_Amount_4;
        }
        function togetdiscount () {
            return Discount_Amount_4;
        }
         const total = CALCULATE_JEWELLERY_TAX () - togetdiscount();
         return total;
        
        }

        const JEWELLERY_TOTAL_BILL_AMOUNT = JEWELLERY(390);
        console.log (`JEWELLERY_TOTAL_BILL_AMOUNT = ${JEWELLERY_TOTAL_BILL_AMOUNT}`);


    