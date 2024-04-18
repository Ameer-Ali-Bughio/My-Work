import inquirer from "inquirer";
const Currency = {
    usd: 1,
    pkr: 277.54,
    ind: 83.30,
    hkd: 7.83,
    oman: 0.38,
    euro: 0.92,
    iran: 42075.00,
    mexican: 16.45,
    qatar: 3.64,
};
let answer = await inquirer.prompt([
    {
        name: "from",
        message: "select from Currency ",
        type: "list",
        choices: ["usd", "pkr", "ind", "hkd", "oman", "euro", "iran", "mexican", "qatar"]
    },
    {
        name: "to",
        message: "select to  Currency ",
        type: "list",
        choices: ["usd", "pkr", "ind", "hkd", "oman", "euro", "iran", "mexican", "qatar"]
    },
    {
        name: "amount",
        message: "enter your Currency ",
        type: "number",
    }
]);
let fromAmount = Currency[answer.from];
let toAmount = Currency[answer.to];
let amount = answer.amount;
let besedAmount = amount / fromAmount;
let convertAmount = besedAmount * toAmount;
console.log(convertAmount);
