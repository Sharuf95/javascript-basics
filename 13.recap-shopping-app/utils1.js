// type three with practice mode



import fileSystem from 'fs';
console.log("Welcome to my Own Shop");
function getfile (recordpath) {
 const materialBuffer = fileSystem.readFileSync("./data/material.json");
  const materialconvert = JSON.parse(materialBuffer);
   return materialconvert
  }
                   
 export const material = getfile("./data/material.json")
  console.log(material)



console.log("Welcome to my Own Shop");

// const materialBuffer = fileSystem.readFileSync("./data/material.json");
// const material = JSON.parse(materialBuffer);
// console.log( material);




                   