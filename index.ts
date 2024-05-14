#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const quiz :{
    question_1 : string,
    question_2 : string,
    question_3 : string,
    question_4 : string,
    question_5 : string
} = await inquirer.prompt([
    {
        type : "list",
        name : "question_1",
        message : "What keyword is used to declare a variable with a fixed type in TypeScript?",
        choices : ["(A)var","(B)let","(C)const","(D)type"]
    },
    {
        type : "list",
        name : "question_2",
        message : "Which symbol is used to denote type assertion in TypeScript?",
        choices : ["(A)<>","(B)()","(C)[]","(D){}"]
    },
    {
    type : "list",
    name : "question_3",
    message : "In TypeScript, what is the purpose of the interface keyword?",
    choices : ["(A)To define a new class","(B)To declare a variable","(C)To define a custom data type", "(D)To import modules"]
    },
    {
    type : "list",
    name : "question_4",
    message : "What does the readonly keyword do in TypeScript?",
    choices : ["(A)Marks a variable as constant","(B)Marks a property as immutable","(C)Declares a function as non-modifiable","(D)Restricts access to a class member"]
  },
  {
    type : "list",
    name : "question_5",
    message : "How can you define a tuple type in TypeScript?",
    choices : ["(A)By using the Tuple keyword","(B)By enclosing elements in square brackets []","(C)By using the Array keyword","(D)By using the tuple keyword"]
  }
]);


let score: number = 0;

    if (quiz.question_1 === "(C)const") {
        score++;
        console.log(chalk.green.bold("1. Correct!"));
    }

    if (quiz.question_2 === "(B)()") {
        score++;
        console.log(chalk.green.bold("2. Correct!"));
    } else {
        console.log(chalk.red.bold("2. In-Correct!"));
    }

    if (quiz.question_3 === "(C)To define a custom data type") {
        score++;
        console.log(chalk.green.bold("3. Correct!"));
    }

    if (quiz.question_4 === "(B)Marks a property as immutable") {
        score++;
        console.log(chalk.green.bold("4. Correct!"));
    }

    if (quiz.question_5 === "(B)By enclosing elements in square brackets []") {
        score++;
        console.log(chalk.green.bold("5. Correct!"));
    } else {
        console.log(chalk.red.bold("5. In-Correct!"));
    }

    console.log(chalk.yellow.bold("Your score is: " + score));
