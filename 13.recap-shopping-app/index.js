import chalk from "chalk";
import { getCategory, displayProductInfo, getProduct } from "./utils.js"

console.log(chalk.bgGreen("Welcome to our shopping app"));
const selectedCategory = getCategory();
if (selectedCategory) {
  const product = getProduct(selectedCategory);
  displayProductInfo(product);
}









console.log("----------------------------------------CLASS__NOTES-----------------------------------------");

/*

import chalk from "chalk";
import { getCategory, displayProductInfo, getProduct } from "./utils.js"

console.log(chalk.bgGreen("Welcome to our shopping app"));
const selectedCategory = getCategory();
if (selectedCategory) {
  const product = getProduct(selectedCategory);
  displayProductInfo(product);
}

*/









/*

var Display_material = material.map( material => {
  const firstletterCapital = material[0].toUpperCase();
  const remainingLetters = material.substring(1).toLowerCase();
  return firstletterCapital + remainingLetters
})
console.log( Display_material)
const UserSelectedMaterial_Index = readline.keyInSelect( Display_material)
*/