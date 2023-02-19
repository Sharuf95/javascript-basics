// fs stands for filesystem
// Data lo unna categories.json nundi Utils ki tisukuntunam
// Data lo unna products.json nundi Utils ki tisukuntunam
// Utils lo unna data ni index.js ki tisukoni velthunam
// index.js ki velaye mundu console.logs remove cheyali
// And malli ee data ni, export nundi index.js ki, export chesthunam
import fileSystem from 'fs';
import readline from 'readline-sync'
import chalk from 'chalk';
// type one with same second method 
function getfileData(filepath) {
const fileBufferData = fileSystem.readFileSync("./data/categories.json");
const convertToJSON = JSON.parse(fileBufferData)
return convertToJSON
}
export const categories = getfileData('./data/categories.json')



function getfiledata() {
const productfilebufferdata = fileSystem.readFileSync("./data/products.json");
const ProductConverttojson = JSON.parse(productfilebufferdata);
return ProductConverttojson
}
export const products = getfiledata("./data/products.json")

// type to with same method
// const categoriesBufferData = fileSystem.readFileSync("./data/categories.json");
// const categoriess = JSON.parse(categoriesBufferData);
// console.log(categoriess);

// const productBufferData = fileSystem.readFileSync("./data/products.json");
// const products = JSON.parse(productBufferData);
// console.log(products);


  export function getCategory() {
  const displayCategories = categories.map((category) => {
  const firts_letter_capital = category[0].toUpperCase();
  const remaining_letters = category.substring(1).toLowerCase();
  return firts_letter_capital + remaining_letters
  })
  const UserSelectedOption_Index = readline.keyInSelect(displayCategories);
  console.log(`User Selected Option_Index = `, UserSelectedOption_Index);

  const User_Selected_Category = categories[UserSelectedOption_Index];
  console.log(chalk.green(`Selected Category : ${User_Selected_Category}`));
  return User_Selected_Category;
}



 export function getproduct(category) {
  if (category) { // if selected category untaye nay 
    const category_Products = products.filter(product => product.category === category);
    const productNames = category_Products.map (product => product.title);
    const selectedProduct_Index = readline.keyInSelect(productNames);
    const selectedproduct = category_Products[ selectedProduct_Index]
    return selectedproduct;
    }
    }

    export function display_product_Info(product) {
      if (product) {
        const title = product.title
        const price = product.price
        const category = product.category
      
        console.log(chalk.bgCyan(title ));
        console.log(chalk.bgGreen(`Price :$${price}`));
        console.log(chalk.bgRed(`Category : ${category}`));
      }
    }
    









console.log("----------------------------------------CLASS__NOTES-----------------------------------------");

/*
1.first class


import fileSystem from 'fs'
// type one with same second method 
function getfileData(filepath) {
const fileBufferData = fileSystem.readFileSync("./data/categories.json");
const convertToJSON = JSON.parse(fileBufferData)
return convertToJSON
}
const categories = getfileData("./data/categories.json")
console.log(categories);


function getfiledata(filerecord) {
const productfilebufferdata = fileSystem.readFileSync("./data/products.json");
const ProductConverttojson = JSON.parse(productfilebufferdata);
return ProductConverttojson
}
const products = getfiledata("./data/products.json")
console.log(products);


// type to with same method
// const categoriesBufferData = fileSystem.readFileSync("./data/categories.json");
// const categoriess = JSON.parse(categoriesBufferData);
// console.log(categoriess);

// const productBufferData = fileSystem.readFileSync("./data/products.json");
// const products = JSON.parse(productBufferData);
// console.log(products);


*/

console.log("----------------------------------Continution Second Class----------------------------------")

/*
2. Second class


import fileSystem from 'fs';
import readline from 'readline-sync';
import chalk from "chalk";

function getFileData(filePath) {
  const fileBufferData = fileSystem.readFileSync(filePath);
  const convertToJSON = JSON.parse(fileBufferData);
  return convertToJSON;
}

// const categoriesBuffer = fileSystem.readFileSync("./data/categories.json");
// const categories = JSON.parse(categoriesBuffer);
// console.log(categories);

// const productsBuffer = fileSystem.readFileSync('./data/products.json');
// const products = JSON.parse(productsBuffer);
// console.log(products)

export const categories = getFileData('./data/categories.json');
export const products = getFileData("./data/products.json");


export function getCategory() {
  const displayCategories = categories.map((category) => {
    const firstLetter = category[0].toUpperCase();
    const remainingLetter = category.substr(1).toLowerCase();
    return firstLetter + remainingLetter;
  });


  const userSelectedOptionIndex = readline.keyInSelect(displayCategories);
  console.log(`User Selected Category Index = `, userSelectedOptionIndex);

  const userSelectedCategory = categories[userSelectedOptionIndex];
  console.log(chalk.green(`Selected Category: ${userSelectedCategory}`));

  return userSelectedCategory;
}


export function getProduct(category) {
  if (category) {
    const categoryProducts = products.filter(product => product.category === category);
    const productNames = categoryProducts.map(product => product.title);
    const selectedProductIndex = readline.keyInSelect(productNames);
    const selectedProduct = categoryProducts[selectedProductIndex];
    return selectedProduct;
  }
}

export function displayProductInfo(product) {
  if (product) {
    const title = product.title;
    const price = product.price;
    const category = product.category;

    console.log(chalk.bgWhite(" " + chalk.green(title) + " "))
    console.log(chalk.bgGreen(` Price: $${price} `) + chalk.bgRed(` Category: ${category.toUpperCase()} `))
  }
}


  */