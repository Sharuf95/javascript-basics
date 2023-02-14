import readline from 'readline-sync';
import chalk from 'chalk';

const calculateBill = function(mealamount,taxrate,tip) {
  const total = Number(customerMealAmount) + Number(taxRate) + Number(tip); 
  return total;
}

console.log("Addition*************************************");

const customerMealAmount = readline.question("Please enter meal amount: ");
const taxRate = readline.question("What is the tax Rate?: ");
const tipValue = readline.question("Any tip amount ?: ");

const totalBill = calculateBill(customerMealAmount, taxRate, tipValue);

console.log( chalk.bgRed("Total Bill Amount:") + chalk.bgGreen(totalBill) );




console.log("Subraction*************************************");

const Grocery = function (Milkpackets,SunflowerOil, Chicken) {

    const totalBill_1 = Milkpackets + SunflowerOil + Chicken ;
    return totalBill_1;
}

const Milkpackets = +readline.question("Please enter price of Milk packet: ");
const SunflowerOil = +readline.question("Please enter price of Sunflower Oil: ");
const Chicken = +readline.question("Please enter price of Chicken: ");

const totalBill_1 = Grocery (Milkpackets,SunflowerOil,Chicken);

console.log(chalk.bgRed ("Total Bill Amount") + chalk.bgGreen(totalBill_1));




console.log("Multiplication*************************************");
const Chattered_Accounts = function (TCS_Salary_Bill,Phone_Bill,Rent_Bill) {

  const total_Bill_2 = (TCS_Salary_Bill,Phone_Bill,Rent_Bill);
  return total_Bill_2;
}

const TCS_Salary_Bill = readline.question("Please enter Salary bill value:");
const Phone_Bill = readline.question("Please enter Phone bill:");
const Rent_Bill = readline.question("please enter Rent bill:");

const total_Bill_2 = Chattered_Accounts(TCS_Salary_Bill,Phone_Bill,Rent_Bill);
console.log (chalk.bgRed("Company_Bills") * chalk.bgBlue(total_Bill_2));


console.log("Module*************************************");
const Wipro = function(employee_salary,employee_bills,employee_expenses) {
    const total_bill_3 = (employee_salary,employee_bills,employee_expenses);
    return total_bill_3;
}
const employee_salary = readline.question("Please enter month salary:");
const employee_bills = readline.question("Please enter month bills:");
const employee_expenses = readline.question("Please enter expenses bill:");

const total_Bill_3 = Wipro(employee_salary,employee_bills,employee_expenses);

console.log(chalk.bgRed("Total Company Bills") % chalk.bgBlue(total_Bill_3));


console.log("Classs__Notes")

/*
// Expression function is a value or expression by assigning an anonymous function to a variable or parameter.

import readline from 'readline-sync';
import chalk from 'chalk';
                                           
const calculateBill = function(mealAmount, taxRate, tip) {
  const total = Number(mealAmount) + Number(taxRate) + Number(tip);
  return total;
}

const customerMealAmount = readline.question("Please enter meal amount: ");
const taxRate = readline.question("What is the Tax Rate?: ");
const tipValue = readline.question("Any tip amount ?: ");

const totalBill = calculateBill(customerMealAmount, taxRate, tipValue);

console.log( chalk.bgRed("Total Bill Amount:") + chalk.bgGreen(totalBill) );
*/