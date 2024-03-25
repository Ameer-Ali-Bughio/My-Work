import inquirer from "inquirer";

const answer = await inquirer.prompt([
{message: "Enter Value ", type: "number", name: "value1"},
{message:"Select Option to perform Action",
type:"list",
name: "Operators",
choices: ["+","-","*","/",],
},
{message: "Enter Value ", type: "number", name: "value2"},

]);

if(answer.Operators === "+"){
    console.log(answer.value1 + answer.value2);
} else if(answer.Operators === "-"){
    console.log(answer.value1 - answer.value2);
} else if(answer.Operators === "*"){
    console.log(answer.value1 * answer.value2);
} else if(answer.Operators === "/"){
    console.log(answer.value1 / answer.value2);
} else{console.log("Invalid Data")}