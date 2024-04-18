#! /urs/bin/env node 

import inquirer from "inquirer";

const answers: { sentence :string }  = await inquirer.prompt({
    name:"sentence",
    type:"input",
    message:"Enter your sentence"
}) ;

const words = answers.sentence.trim().split(" ");

console.log(words);
console.log(`your total sentence is : ${words.length}`);