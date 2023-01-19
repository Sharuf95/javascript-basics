import readline from 'readline-sync'
import chalk from 'chalk';

const MENS      = 'Mens';
const LADIES    = 'Ladies';
const CHILDRENS = 'Childrens';
const GROCERY   = 'Grocery';

const HOUSE_NEEDS = [
    MENS,
    LADIES,
    CHILDRENS,
    GROCERY 
];

const MENS_SHIRT_SUITING = [
    'Mens Shirts        = 500',
    'Mens Formal Pant   = 600',
    'Mens Shirts        = 700',
    'Mens Jeans         = 550'
];

const LADIES_DRESS = [
    'Ladies Dress Size M   = 400',
    'Ladies Dress Size L   = 500',
    'Ladies Dress Size XL  = 600',
    'Ladies Dress Size XXL = 700'
];

const CHILDREN_DRESS = [
     'Children Mini Dress A _5y = 300',
     'Children Dress A_7y       = 400 ',
     'Children Dress A_10y      = 500',
     'Children Dress A_12Y      = 600'
];


const GROCERY_ITEMS = [
    'Dal     = 30',
    'Peanuts = 130',
    'Chana   = 80'
];

const HOME_NEEDS = {
    'Mens'      : MENS_SHIRT_SUITING,
    'Ladies'    : LADIES_DRESS,
    'Childrens' : CHILDREN_DRESS,
    'Grocery'   : GROCERY_ITEMS
};


console.log (chalk.bgRed(`Welcome To Our Flipkart Shopping`));
console.log (chalk.bgGreen(`Please Select Any Option`));
const Selected_Items = readline.keyInSelect(HOUSE_NEEDS);
const Selected_Home_Items = HOUSE_NEEDS[Selected_Items];
console.log (`Selected Home Items ${Selected_Home_Items}`);

    Showing_Mens_Items(Selected_Home_Items);

function Showing_Mens_Items (Selected_Home_Items) {
    const Total_Shopping = HOME_NEEDS[Selected_Home_Items];
    if (Total_Shopping) {
        const Selected_Needs = readline.keyInSelect(Total_Shopping);
        const All_HOME_NEEDS = Total_Shopping[Selected_Needs];
        
        if (Selected_Home_Items) {
            console.log (chalk.bgCyan(`Thank for Purchasing ${All_HOME_NEEDS}`));
        } else{
            ShowNotSelectMessage()
        }
    
    } 
         else  {
            ShowNotSelectMessage()
        }
    }



function ShowNotSelectMessage() {
    console.log(`Not Selected any Option,Please Select...?`)
}

