import inquirer from "inquirer"

const Random = Math.floor(Math.random()*6 + 1);

const answer = await inquirer.prompt([
{message: "Please Guess a Number 1-6",
type: "number",
name: "GuessedNumber"}
]);
if(answer.GuessedNumber == Random){
 
    console.log("Congratulation You Guessed Right Number")}
    else{console.log("You Guessed Wrong Number")};