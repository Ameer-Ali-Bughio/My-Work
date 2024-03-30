#! /usr/bin/env node
// make todo list
import inquire from "inquirer";
let todoList = [];
let condition = true;
while (condition) {
    let answer = await inquire.prompt([
        { name: "todo",
            type: "input",
            message: "What do you Want to in your todoList" },
        { name: "addmore",
            type: "confirm",
            message: "Do you want to add more?",
            default: "false" },
    ]);
    todoList.push(answer.todo);
    condition = answer.addmore;
    console.log(todoList);
}
