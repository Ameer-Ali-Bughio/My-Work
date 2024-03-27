#! /usr/bin/env node
import inquirer from "inquirer";
let mypin = 1234;
let myBalance = 10000;
let answer = await inquirer.prompt([
    { name: "pin",
        message: "Please insert your Pin",
        type: "number",
    }
]);
if (answer.pin === mypin) {
    console.log("Pin is Correct");
    let ans = await inquirer.prompt([
        { name: "operation",
            message: "please select options ",
            type: "list",
            choices: ["withdraw", "check balance"] }
    ]);
    if (ans.operation === "withdraw") {
        let amount = await inquirer.prompt([
            { name: "amount",
                message: "please insert your amount",
                type: "number", }
        ]);
        if (amount.amount > myBalance) {
            console.log("Insufficient balance");
        }
        else {
            myBalance -= amount.amount;
            console.log("Your Remaining Balance is : " + myBalance);
        }
        ;
    }
    if (ans.operation === "check balance") {
        console.log("Your Balance is : " + myBalance);
    }
}
else {
    console.log("Your Pin is Incorrect");
}
;
