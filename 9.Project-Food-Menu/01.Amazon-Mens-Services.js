import readline from 'readline-sync'
import chalk from 'chalk';

const SHIRTS     = 'Shirts';
const JEANS      = 'Jeans';
const TSHIRTS    = 'Tshirt';
const NIGHTTRACK = 'Nighttrack';

const Mens_wear = [
    SHIRTS,
    JEANS,
    TSHIRTS,
    NIGHTTRACK
];

const Mens_Shirt_Items = [
    'Mens Half Hands shirt    = 480',
    'Mens Full Hands Shirt    = 680',
    'Mens Jerkin              = 550',
    'Mens Sleve Less Coat     = 330'
];

const Mens_Jeans_Items = [
    'Mens Pencil Cut Blue Jeans  = 880  ',
    'Mens Blue Shaded Jeans      = 1080 ',
    'Mens Blue Short Jeans       = 980 ',
    'Mens Black Jeans            = 1200 '
];


const Mens_TShirt_Items = [
        'Mens White Tshirt = 330',
        'Mens Full Hands Tshirt = 420',
        'Mens White Neck Tshirt = 220',
        'Mens Half Hand Tshirt  = 280'
];


const Mens_Night_Tracks = [
    'Mens Night Track     = 320',
    'Mens Night Short     = 250 ',
];

const Mens_Items = {
    'Shirt'     : Mens_Shirt_Items,
    'Jeans'     : Mens_Jeans_Items,
    'Tshirt'    : Mens_TShirt_Items,
    'Nighttrack': Mens_Night_Tracks
};


console.log(chalk.bgRed("We Are Happy To Welcome You Amazon Mens Services"));
console.log(chalk.bgYellow("Please Select any Option"));


const Selected_Mens_Items = readline.keyInSelect(Mens_wear)
const Selected_list_index = Mens_wear [Selected_Mens_Items];
console.log(`Selected list index   ${Selected_list_index}`);


function Showing_Means_wear(Selected_list_index) {
   const Mens_Branded_wear =  Mens_Items[Selected_list_index]
        if (Mens_Branded_wear) {
        const Selected_Mens_items = readline.keyInSelect[Mens_Branded_wear];
        const Selected_Pure_Gents_Items = Mens_Branded_wear[Selected_Mens_items];

        if (Selected_list_index) {
        console.log(chalk.bgGreen(`Thank you purchasing in Amazon ${Selected_Pure_Gents_Items}`)) 
        } else {
            ShowNotSelectMessage() 
        }
        } else {
        ShowNotSelectMessage() 
    }
}   
        function ShowNotSelectMessage() {
     console.log(chalk.bgRed(`Not Selected Any Items,Please select`));
}
     Showing_Means_wear (Selected_list_index);