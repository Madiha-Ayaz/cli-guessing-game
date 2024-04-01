#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 5 + 1);
console.log("welcome ");
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please Guess a number between 1 to 5):",
    },
]);
console.log(answers);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! you guess a right number .");
}
else {
    console.log("you guess a wrong number");
}
