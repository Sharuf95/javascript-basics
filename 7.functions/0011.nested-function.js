 
// Function expression define
 console.log (`Type_One_Problem :-1**********************************************************`)
 const TAX_AMOUNT = 30;
 const DISCOUNT_AMOUNT = 40 ;
 const shoppingg = function (amount) {
    
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
const billamountt = shoppingg(100);
console.log (`billamount = ${billamountt}`);

// Points to be note
// 1. We can't access any values from the function
// 2. We can access outer variable in the function





console.log (`Type_Two_Problem :-2***********************************************************`)
 const taxamount = 30;
 const discountamount = 40;
 const shopping = function (amount) {
   function calculatetax () {
    return amount + taxamount
   } 

   function getdiscountamount () {
    return discountamount;
   }
   const total = calculatetax() - getdiscountamount();
   return total;
 }
 const billamount = shopping(100);
 console.log (`billamount = ${billamount}`);


 console.log (`Type_One_Problem :-3**********************************************************`)
const taxdiscountamount = 30;
const salediscountamount = 40;
const cmr_sale = function (amount) {
    function calculatetaxx () {
        return amount + taxdiscountamount;
    }
    function offerdiscountamoount () {
        return salediscountamount;
    }
    const total = calculatetaxx () - offerdiscountamoount ();
    return total;

    
}
    const CMRbillamount = cmr_sale(100);
    console.log (`CMRbillamount ${CMRbillamount}`);




    console.log (`Type_One_Problem :-4**********************************************************`)
        const JEWELLERY = function (amount) {
        const CALCULATE_JEWELLERY_TAX = () => {
        return amount + 40;
        }
        function togetdiscount () {
            return 30;
        }
         const total = CALCULATE_JEWELLERY_TAX () - togetdiscount();
         return total;
        
        }

        const JEWELLERY_TOTAL_BILL_AMOUNT = JEWELLERY(1000);
        console.log (`JEWELLERY_TOTAL_BILL_AMOUNT = ${JEWELLERY_TOTAL_BILL_AMOUNT}`);
