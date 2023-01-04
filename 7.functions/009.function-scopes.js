// Global scope 
// Manam global scope lo unna variable ni console.log veyagalam kani
// functional scople lo unna IT MEANS (function lopala create chesina 
// const city = "Ongole" ni console.log veyalemu) vesthaye error osthundi


 /* const fullname = 'Shaik_Sharuf';
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
*/

const fullname = "Shaik Sharuf";
//  define a function
const culture = "Islam";
// Expression function formula  --->> [   `function printdetails() {}`   ]
function printdetails () {
    const city = "Ongole";
    const Mylife = "My_Mother"; //  functional scope
    console.log ({
        name : fullname,
        city : city,
        Mylife : Mylife
    })
}
// invoking or calling function => printdetails ();
 printdetails ();
 console.log (`fullname = ${fullname}`);
 console.log (`culture = ${culture}`);