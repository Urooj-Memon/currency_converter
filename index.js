#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\tWELCOME TO CURRENCY CONVERTOR!\n");
const currency = {
    USD: 1,
    PKR: 280,
    CAD: 1.25,
    BHD: 0.38,
    AED: 3.67,
    EUR: 0.91,
    BDT: 109.60,
    INR: 74.57,
    JPY: 151.61,
    QAR: 3.64,
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from Currency",
        type: "list",
        choices: ["USD", "PKR", "CAD", "BHD", "AED", "EUR", "BDT", "INR", "JPY", "QAR"]
    },
    {
        name: "to",
        type: "list",
        message: "Enter to Currency",
        choices: ["USD", "PKR", "CAD", "BHD", "AED", "EUR", "BDT", "INR", "JPY", "QAR"]
    },
    {
        name: "amount",
        message: "Enter your Amount",
        type: "number"
    }
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
