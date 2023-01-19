import readline from 'readline-sync';
import chalk from 'chalk';

// Define the data for application

const SHIRTS      = 'Shirts';
const JEANS       = 'Jeans';
const TSHIRTS     = 'Tshirts';
const NIGHTTRACKS = 'Nighttracks';

const MENS_ITEM_CATEGORY = [
    SHIRTS,        //    0
    JEANS ,       //     1
    TSHIRTS,     //      2
    NIGHTTRACKS //       3
];
const SHIRTS_ITEMS = [
    'Mens Half Hands shirt    = 480',
    'Mens Full Hands Shirt    = 680',
    'Mens Jerkin              = 550',
    'Mens Sleve Less Coat     = 330'
];


const JEANS_ITEMS = [
    'Chicken Biryani    = 240',
    'Mutton Biryani     = 330',
    'Chicken tikka      = 480',   
];


const TSHIRTS_ITEMS = [
    'Chocolates     = 80',
    'Ice_Cream      = 70',
    'Cadboury       = 60'
];


const NIGHTTRACKS_ITEMS = [
    'Thumps         = 30',
    'Coke           = 35',
    'RED Bull       = 100'
];

const MENS_BRANDED_CLOTHING = {
    'Shirts'      : SHIRTS_ITEMS,
    'Jeans'       : JEANS_ITEMS,
    'Tshirts'     : TSHIRTS_ITEMS,
    'Nighttracks' : NIGHTTRACKS_ITEMS
}



console.log(chalk.bgRed(`Welcome to FOOD MENU CATEGORY...`));
console.log(chalk.bgGreen(`Please Select a Category...`));

// Show user a menu list 
const Selected_list_category = readline.keyInSelect(MENS_ITEM_CATEGORY);
const Selected_Items = MENS_ITEM_CATEGORY[Selected_list_category]
console.log (`Selected Category list ${Selected_Items}`);

Showing_Means_wear (Selected_Items); // ---> function invoking or Calling

function Showing_Means_wear (Selected_Items){
    const MEN_ITEMS = MENS_BRANDED_CLOTHING[Selected_Items];
    if (MEN_ITEMS) 
    {
     const Selected_list_Index = readline.keyInSelect(MEN_ITEMS) 
     const Selected_Category_Item = MEN_ITEMS[Selected_list_Index]
     

    if (Selected_Items) {
        console.log (chalk.bgGreen(`Thanks for Buying ${Selected_Category_Item}`))
    } else {
        ShowNotSelectMessage()
    }
    } else {
        ShowNotSelectMessage()  
    } 

} 
function  ShowNotSelectMessage() {
    console.log (chalk.bgRedBright(`Not Selected Any Option,Please Select...`)) 
}