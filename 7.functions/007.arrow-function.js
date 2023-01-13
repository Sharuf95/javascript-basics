// Arrow function 
const add = (a,b) => {
    return a + b ; 
} // formula 


const sumof2plus8 = add();
console.log(`sumof2plus8 is ${sumof2plus8}`); 

// Arrow function
const addwithdefault = (a = 0 , b = 0) => {
    return a + b;
}

const sumof20plus8 = addwithdefault();
console.log(`sum of 10 plus 8 is ${sumof20plus8}`);




/* const pluswithdefault = (a,b) => {
    return a + b;
}

const sumof101plus = pluswithdefault ();
console.log (`sum 1 plus 1 is ${sumof101plus} `);*/


