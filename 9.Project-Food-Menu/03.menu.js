import readline from 'readline-sync';
import chalk from 'chalk';

// Define the data for application

const SHIRTS      = 'Shirts';
const JEANS       = 'Jeans';
const TSHIRTS     = 'Tshirts';
const NIGHTTRACKS = 'Nighttracks';

const ITEM_CATEGORY = [
    SHIRTS,        //    0
    JEANS ,       //     1
    TSHIRTS,     //      2
    NIGHTTRACKS //       3
];
const SHIRTS_ITEMS = [
    '     = 120',
    'Veg fried rice  = 90',
    'Veg Goobi       = 55'
];


const NON_VEG_ITEMS = [
    'Chicken Biryani    = 240',
    'Mutton Biryani     = 330',
    'Chicken tikka      = 480',   
];


const DESERTS_ITEMS = [
    'Chocolates     = 80',
    'Ice_Cream      = 70',
    'Cadboury       = 60'
];


const BEVERAGES_ITEMS = [
    'Thumps         = 30',
    'Coke           = 35',
    'RED Bull       = 100'
];

const FOOD_ITEMS = {
    'Veg'       : VEG_ITEMS,
    'Non-Veg'   : NON_VEG_ITEMS,
    'Deserts'   : DESERTS_ITEMS,
    'Beverages' : BEVERAGES_ITEMS
}



console.log(chalk.bgRed(`Welcome to FOOD MENU CATEGORY...`));
console.log(chalk.bgGreen(`Please Select a Category...`));

// Show user a menu list 
const Selected_list_category = readline.keyInSelect(MENU_CATEGORY);
const Selected_Items = MENU_CATEGORY[Selected_list_category]
console.log (`Selected Category list ${Selected_Items}`);

display_Menu_Items (Selected_Items); // ---> function invoking or Calling

function display_Menu_Items (Selected_Items){
    const MENU_ITEMS = FOOD_ITEMS[Selected_Items];
    if (MENU_ITEMS) 
    {
     const Selected_list_Index = readline.keyInSelect(MENU_ITEMS) 
     const Selected_Category_Item = MENU_ITEMS[Selected_list_Index]
     

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