   import readline from 'readline-sync';
   import chalk from 'chalk';

   const TRAFFIC_LIGHTS = [
    'Red',     // 0
    'Green',  // 1
    'Yellow' // 2
   ]

   const usercolorindex = readline.keyInSelect(TRAFFIC_LIGHTS);
  /*
  [1] Red     0
  [2] Green   1
  [3] Yellow  2
  [0] CANCEL  -1
  */
 const userselectedlight = TRAFFIC_LIGHTS[usercolorindex];
 console.log(`User selected Traffic light = ${userselectedlight}`);


 const Red_index    = 0;
 const Green_index  = 1;
 const Yellow_index = 2;

 
 switch (usercolorindex) {

 case Red_index :
    console.log(chalk.bgRed("STOP"));
 break;

 case Green_index :
    console.log(chalk.bgGreen("GO..."));
    break;


    case Yellow_index :
        console.log(chalk.bgYellow("Move Slow"));
        break;


        default :
        console.log("Unknown Light");
 }

 /* 
 without switch Operation

 if (colorindex === Green) {
    console.log(chalk.bgGreen("GO"))
 }else if (colorindex === Red) {
    console.log(chalk.bgRed("STOP"))
 }else if (colorindex === Yellow) {
    console.log(chalk.bgYellow("Move slow"))
 }
 */


 
 const Ongole_foods = [
    'K B',
    'Mouraya',
    'Ismail'
 ]

 const Best_taste = readline.keyInSelect(Ongole_foods);
 const availabe_items = Ongole_foods[Best_taste]
 console.log(`available items in hotel = ${availabe_items}`)

 const RANKING_KB_HOTEL      = 0
 const RANKING_Mouraya_HOTEL = 1
 const RANKING_Ismail_HOTEL  = 2

 // Switch_statements

 switch (Best_taste) {
    case RANKING_KB_HOTEL :
        console.log(chalk.bgCyan(`Chicken_Dum_Biryani_1st_Place`));
        break ;
        case RANKING_Mouraya_HOTEL :
            console.log(chalk.bgRed(`Chicken_fry_1st_Place`));
            break ;
            case RANKING_Ismail_HOTEL :
                console.log(chalk.bgYellow(`Cova_1st_Place`));
                break;
                
                default : 
                console.log ("NO OTHER FOODS")
 }
 
 








