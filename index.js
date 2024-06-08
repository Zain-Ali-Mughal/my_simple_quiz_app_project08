#! /usr/bin/env node
// Making a simple Quiz Application.
import chalk from "chalk";
import inquirer from "inquirer";
// Title Message
console.log(chalk.bgWhiteBright.black("-".repeat(50)));
console.log(chalk.bgBlue.bold("\n\tWelcome to My Quiz App\n"));
console.log(chalk.bgWhiteBright.black("-".repeat(50)));
// Creating a list of quiz questions
const questions = [
    {
        question: chalk.yellow("What is TypeScript?"),
        choices: [
            chalk.cyan("A programming language"),
            chalk.cyan("A CSS framework"),
            chalk.cyan("A JavaScript library"),
            chalk.cyan("A database"),
        ],
        correctAnswer: chalk.cyan("A programming language"),
    },
    {
        question: chalk.yellow("Which keyword is used to declare a variable in TypeScript?"),
        choices: [
            chalk.cyan("var"),
            chalk.cyan("let"),
            chalk.cyan("const"),
            chalk.cyan("All of the above"),
        ],
        correctAnswer: chalk.cyan("All of the above"),
    },
    {
        question: chalk.yellow("How do you define an interface in TypeScript?"),
        choices: [
            chalk.cyan("interface MyInterface {}"),
            chalk.cyan("class MyInterface {}"),
            chalk.cyan("struct MyInterface {}"),
            chalk.cyan("module MyInterface {}"),
        ],
        correctAnswer: chalk.cyan("interface MyInterface {}"),
    },
    {
        question: chalk.yellow("What is the extension for a TypeScript file?"),
        choices: [
            chalk.cyan(".ts"),
            chalk.cyan(".tsx"),
            chalk.cyan(".js"),
            chalk.cyan(".jsx"),
        ],
        correctAnswer: chalk.cyan(".ts"),
    },
    {
        question: chalk.yellow("How do you compile a TypeScript file to JavaScript?"),
        choices: [
            chalk.cyan("tsc filename.ts"),
            chalk.cyan("ts-compile filename.ts"),
            chalk.cyan("tsbuild filename.ts"),
            chalk.cyan("typescript filename.ts"),
        ],
        correctAnswer: chalk.cyan("tsc filename.ts"),
    },
];
// Making a Function to run the quiz
async function runQuiz() {
    let correctAnswersCount = 0; // Initializing the count of correct answers
    // Iterating through each question using for---of
    for (const questionObj of questions) {
        console.log(chalk.bgWhiteBright.black("-".repeat(50)));
        // Prompting the user for an answer
        const answer = await inquirer.prompt([
            {
                type: "list", // Prompt type is a list
                name: "userAnswer", // The name of the response key
                message: questionObj.question, // The question text
                choices: questionObj.choices, // The choices for the question
            },
        ]);
        // Checking if the user's answer is correct
        if (answer.userAnswer === questionObj.correctAnswer) {
            correctAnswersCount++; // Increment the count of correct answers
            console.log(chalk.green("\nCorrect!\n")); // Informing the user they are correct
        }
        else {
            console.log(chalk.red(`\nWrong! The correct answer is ${questionObj.correctAnswer}\n`)); // Informing the user they are incorrect
        }
        console.log(chalk.bgWhiteBright.black("-".repeat(50)));
    }
    console.log(chalk.bgWhiteBright.black("-".repeat(50)));
    console.log(chalk.yellow(`Quiz completed! You got ${correctAnswersCount} out of ${questions.length} correct.`)); // Displaying the result
    console.log(chalk.bgWhiteBright.black("-".repeat(50)));
}
// Calling the runQuiz function to start the quiz
runQuiz();
