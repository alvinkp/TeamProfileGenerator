// Include dependencies
const fs = require('fs/promises');
const inquirer = require('inquirer');
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

// Variables
let currentID = 0;
let myManager;

// Use Inquirer to ask questions so HTML Generator can be called
const introQuestions = [
    { type: 'input', message: 'What is your name?', name: 'mName'},
    { type: 'input', message: `What is your email address?`, name: 'mEmail'},
    { type: 'input', message: 'What is your Office Number?', name: 'mOffice'},
];

const engineerQuestions = [
    { type: 'input', message: 'What is the Engineer\'s name?', name: 'eName'},
    { type: 'input', message: `What is their email address?`, name: 'eEmail'},
    { type: 'input', message: 'What is their Github Username?', name: 'eGithub'},
];

const internQuestions = [
    { type: 'input', message: 'What is the Intern\'s name?', name: 'iName'},
    { type: 'input', message: `What is their email address?`, name: 'iEmail'},
    { type: 'input', message: 'What is their School?', name: 'iSchool'},
];

// Return Current ID 
function getCurrentID(){
    return currentID += 1;
}

// Call Generate HTML function from external file

// Write File to Dist folder

// Init Function
function Init(){
    inquirer
    .prompt(introQuestions)
    .then((answers) => {
        myManager = new Manager(answers.mName, getCurrentID(), answers.mOffice, answers.mEmail);
        console.log(myManager);
    })
}

// Init Call
Init();