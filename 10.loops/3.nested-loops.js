const TableNumber = 2;
let StartNumber = 1;
const EndNumber = 10;

while(StartNumber <= EndNumber) {
// Statement
console.log (`${TableNumber} x ${StartNumber} = ${TableNumber * StartNumber}`);
StartNumber++ // StartNumber = StartNumber + 1
};
console.log(`End of loop - Start_Number Value = ${StartNumber}`);

console.log("TASK-------------------------------------------------------------------------------------");
// rEVERSE TABLE 
const Table = 3;
let Start = 10;
let End = 1;

while( End  <= Start) {
// Statement
console.log (`${Table} x ${Start} = ${Table * Start}`);
Start--
};
console.log(`End of loop - Start Value = ${Start}`);

/*
Task 
3 x 10 = 30
3 x 9 = 27
3 x 8 = 24
3 x 7 = 21
3 x 6 = 18
3 x 5 = 15
3 x 4 = 12
3 x 3 = 9
3 x 2 = 6
3 x 1 = 3
*/

// Multiple Tables for 1 to 10
let StartTable = 1;
let EndTable = 10
while (StartTable <= EndTable ) {
console.log (`Current Table is ${StartTable}`);


let StartNumber = 1;
let EndNumber = 10
while (StartNumber <= EndNumber) {
    console.log(`${StartTable} x ${StartNumber} = ${StartTable * StartNumber}`)
    StartNumber++;
};
console.log(`${StartTable} x ${StartNumber} = ${StartTable * StartNumber }`)
StartTable++;
};


console.log("TABLES FROM 11 TO 20-----------------------------------------------------------------------");
let TableNo = 11;
let EndTables = 20;
while (TableNo <= EndTables )  {
console.log (`Current Value = ${TableNo}`);

let CountNumber = 1;
const End_Number = 10;
while (CountNumber <= End_Number) {
    console.log (`${TableNo} x ${CountNumber} = ${TableNo * CountNumber}`)
    CountNumber++;
};
console.log(`${TableNo} x ${CountNumber} = ${ TableNo * CountNumber}`);
TableNo++;
}


