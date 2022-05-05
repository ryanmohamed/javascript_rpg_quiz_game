#!/usr/bin/env node
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import inquirer from 'inquirer';
import nanospinner from 'nanospinner';

let inventory = [];

//console.log(chalk.bgGreen('Hello!'));

//sleep function, I can provide this
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

const welcome = chalkAnimation.glitch('Welcome User!!!');
await sleep(); //top level await (no matching async, node 14 supports this, omit details 
welcome.stop(); //use a variable to access member functions


//ask a question!
let name;

let answers = await inquirer.prompt(
    {
        name: 'name',
        type: 'input',
        message: 'Who dares enter Coach Ryans code Realm?',
        default(){
            return 'Player';
        },
    }
);

name = answers.name;

const userMsg = chalkAnimation.rainbow(`Welcome ${name}...`);
await sleep();
userMsg.stop();

//multiple choice!!
answers = await inquirer.prompt(
    {
        name: 'q0',
        type: 'list',
        message: 'Are you brave enough to continue?',
        choices: [
            'Maybe...',
            'Yes..?',
            'Yes',
            "I'm not brave enough"
        ],
    }
);

//handle the answer!
let spinner = nanospinner.createSpinner('Checking bravery...').start();
await sleep();

if(answers.q0 === "I'm not brave enough"){
    spinner.error({ text: `💀💀💀 Bruh. Okay bye ${name}!`});
    process.exit(1);
}

else {
    spinner.success({ text: `Okay hotshot settle down...let's proceed!`});
    await sleep();
}

//multiple choice!!
console.log('\n');

answers = await inquirer.prompt(
    {
        name: 'q1',
        type: 'list',
        message: 'How do I declare the variable "chickenNugget"?',
        choices: [
            'declare chickeNugget;',
            'nugget chickenNugget;',
            'let chickenNugget;',
            'var chickenNugget;'
        ],
    }
);

spinner = nanospinner.createSpinner('Checking answer...').start();
await sleep();

if(answers.q1 !== "let chickenNugget;"){
    spinner.error({ text: `Gameover!! 💀💀💀 Bruh. You got it next time ${name}!`});
    process.exit(1);
}

else {
    spinner.success({ text: `Nice nice, you've gained an item!`});
    let loader = nanospinner.createSpinner('Loading item...').start();
    await sleep();
    loader.stop();

    let award = chalkAnimation.glitch("You've unlocked...");
    await sleep();
    award.stop();

    award = chalkAnimation.rainbow("The beginner's sword!");
    inventory.push("Beginner's Sword - Attack 12");
    await sleep();
    award.stop();
}

console.log(chalk.magentaBright(inventory));
console.log('\n');

//multiple choice!!
answers = await inquirer.prompt(
    {
        name: 'q2',
        type: 'list',
        message: 'How do I set chickenNugget to 1002?',
        choices: [
            'let chickenNugget = 1003;',
            'let chickenNugget = 1002;',
            'var chickennNugget = 1002;',
            'set chickenNugget = 1002;'
        ],
    }
);

spinner = nanospinner.createSpinner('Checking answer...').start();
await sleep();

if(answers.q2 !== 'let chickenNugget = 1002;'){
    spinner.error({ text: "Awwww man, next time " + name});
    process.exit(1);
}

else {
    spinner.success({ text: "Awesome!!"});
    await sleep();
}

console.log('\n');

let battle = chalkAnimation.glitch("You've encountered a wild missing SEMICOLON!! 😧😧😧");
await sleep();
battle.stop();

//multiple choice!!
answers = await inquirer.prompt(
    {
        name: 'q3',
        type: 'list',
        message: 'How do you engage?',
        choices: [
            'Attack using Inventory[0]',
            'Attack using Inventory[1]',
            'Run!!!',
            'Add the missing semi-colon'
        ],
    }
);

spinner = nanospinner.createSpinner('Checking response...').start();
await sleep();

if(answers.q3 === 'Attack using Inventory[1]'){
    spinner.error({ text: "Nothing in inventory[1]!!"});
    const death = await chalkAnimation.glitch("Semi-colon strikes, you died...💀💀💀");
    death.stop();
    process.exit(1);
}

else if (answers.q3 !== 'Add the missing semi-colon') {
    spinner.success({ text: "I guess that worked...for now. (Javascript will not always forgive you)"});
    await sleep();
    spinner.stop();
}

else {
    spinner.success({ text: "It worked!!! "});
}

const end = chalkAnimation.rainbow("That's it for now! Check back later for updates!");
await sleep();
end.stop();
process.exit(1);