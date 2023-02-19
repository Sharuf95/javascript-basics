 // fs stands for filesystem
 // Utils lo unna data ni index.js ki tisukoni osthunam
 import chalk from 'chalk';
 import {getCategory,display_product_Info,getproduct} from "./Utils.js"

  console.log(chalk.bgGreen("Welcome To Our Shopping Mall App.........."));

 const Selected_Category = getCategory();
 if ( Selected_Category) {
 const product = getproduct(Selected_Category)
 display_product_Info(product);
}









console.log("----------------------------------------CLASS__NOTES-----------------------------------------");

/*
 1. first Class

 import chalk from 'chalk';
 import readline from 'readline-sync';

 import {categories} from "./Utils.js"

 console.log(chalk.bgGreen("Welcome To Our Shopping Mall App.........."));

 readline.keyInSelect(categories);

*/

console.log("----------------------------------Continution Second Class----------------------------------")

/*
2.Seocnd Class

import chalk from "chalk";
import { getCategory, displayProductInfo, getProduct } from "./utils.js"

console.log(chalk.bgGreen("Welcome to our shopping app"));
const selectedCategory = getCategory();
if (selectedCategory) {
  const product = getProduct(selectedCategory);
  displayProductInfo(product);
}

*/