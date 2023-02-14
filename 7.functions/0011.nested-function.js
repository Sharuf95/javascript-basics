// Function expression define
// Input-program is at down please scroll down


console.log (`Type_One_Problem :-1**********************************************************`)
  
 const Shopping_Total_AMOUNT = 100;
 const TAX_AMOUNT = 30;
 const DISCOUNT_AMOUNT = 40;
 
 const shopping = function (amount) {
    
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
const billamountt = shopping(100);
console.log (`billamount = ${billamountt}`); 

// Points to be note
// 1. We can't access any values from the function
// 2. We can access outer variable in the function 





console.log (`Type_Two_Problem :-2***********************************************************`)


 const taxamountt = 30;
 const discountamount = 40;
 const shopping1 = function (amount) {
   function calculatetax () {
    return amount + taxamountt
   } 

   function getdiscountamount () {
    return discountamount;
   }
   const total = calculatetax() - getdiscountamount();
   return total;
 }
 const billamount = shopping(200);
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
    const CMRbillamount = cmr_sale(300);
    console.log (`CMRbillamount ${CMRbillamount}`);




     console.log (`Type_One_Problem :-4**********************************************************`)
     const JEWELLERY = function (amount) {
     const CALCULATE_JEWELLERY_TAX = () => {
     return amount + 30;
        }
        function togetdiscount () {
            return 40;
        }
         const total = CALCULATE_JEWELLERY_TAX () - togetdiscount();
         return total;
        
        }

        const JEWELLERY_TOTAL_BILL_AMOUNT = JEWELLERY(400);
        console.log (`JEWELLERY_TOTAL_BILL_AMOUNT = ${JEWELLERY_TOTAL_BILL_AMOUNT}`);



        console.log("Class_Notes");

        /*

        // Creating simple Javascript Object

  const user = {
  firstname: 'Syed',
  lastname: 'Zakeer',
  work: 'UI Dev',
  city: 'Guntur',
  wfh: true,
  skills: ['html', 'css', 'js'],
  company: {
    name: 'SAP',
    location: 'Bangalore'
  },

  details: function() {
    console.log(`User Details: Syed Zakeer`);
  }
}

console.log(user);
console.log(`Data type of variable user is ${typeof user}`);

// How to access object properties (keys)
// 1. DOT Notation `.`
// 2. Brackets Notation `[]`

// DOT Notation `.` object.propertyName
console.log(`User City info: ${user.city}`);

// Brackets Notation `[]` -> object['propertyName']
console.log(`User city info via bracket notation user['city'] = ${user['city']}`);

// Accessing nested object properties -> `.` or `[]`
const companyLocation = user.company.location;
console.log(`companyLocation by dot notation = ${companyLocation}`);

const companyLoc = user['company']['location'];
console.log(`Company Location by bracket notation = ${companyLoc}`)

const skills = user.skills;
console.log(skills);

user.details()

        */
