import readline from 'readline-sync';
import chalk from 'chalk';
import {categories} from "./Utils.js" 
import {material} from "./utils1.js"

console.log(chalk.bgGreen("Welcome to our Shopping App"));


readline.keyInSelect(categories)
readline.keyInSelect(material)


/*

var capitals = categories.map(capitals => capitals.toLowerCase());

var capitalize = categories.map (categories => {
const first_letter_Capital = categories[0].toUppercase()
// const remaining_letters = categories.substring(1)toLowercase;
return first_letter_Capital 
});
console.log(capitals);
console.log( capitalize)

*/



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