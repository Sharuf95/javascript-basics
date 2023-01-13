console.log(`First time practicing*************************************************************`)
 function execute (paramOne,paramTwo) {
    const valueone = paramOne();
    const valuetwo = paramTwo();
    return {
        valueone : valueone,
        valuetwo : valuetwo
    }
  }
    function addition() {
        return 100 + 50;
    }
    function multiplication() {
        return 25 * 7;
    }

const result = execute (addition,multiplication);
console.log(result);

const anotherresult = execute(  
    
    () => {
    return 10 + 90; } ,

    () => {
    return 100 + 10
    }
    );  
    console.log(anotherresult);



console.log(`Second time practicing*************************************************************`)
function evaluate (phaseone,phasetwo){
    const valueone = phaseone();
    const valuetwo = phasetwo();
    return {
        valueone : valueone,
        valuetwo : valuetwo
    }
}

function division() {
    return 1000 / 10;
}

function subraction () {
    return 120 - 10;
}
const remains = evaluate (division,subraction);
console.log(remains);



const Thirdresults = execution(

() => {
    return 10 + 10;
},
() => {
    return 11 + 10;
}
);
console.log(Thirdresults);

