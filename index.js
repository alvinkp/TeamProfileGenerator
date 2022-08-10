// Include dependencies
const fs = require('fs/promises');
const inquirer = require('inquirer');
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

// Variables
let currentID = 0;
let myTeam = [];

// Update Manager
function updateManager(answer){
    let myManager = new Manager(answer.mName, getCurrentID(), answer.mOffice, answer.mEmail);
    myTeam.push(myManager);
}

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

const addMoreQuestions = [
    { type: 'list', message: 'Which team member would you like to add?', name: 'selection', choices: ['An Engineer', 'An Intern', 'None, I am finished']},
];

// Return Current ID 
function getCurrentID(){
    return currentID += 1;
}

// Ask if the Manager wants to add an Engineer, Intern or if they are finished adding Team Members
function addMoreTeammates(){
    inquirer
    .prompt(addMoreQuestions)
    .then((answers) => {
        switch(answers.selection){
            
            case 'An Engineer': getAndStoreEngineers();
            break;

            case 'An Intern': getAndStoreInterns();
            break;

            case 'None, I am finished': generateHTML();
            break;

            default: console.log("Something Went Wrong");
        }
    })
} 

// Ask Engineer Questions and Store Engineers
function getAndStoreEngineers(){
    inquirer
    .prompt(engineerQuestions)
    .then((answers) => {
        let myEngineer = new Engineer(answers.eName, getCurrentID(), answers.eGithub, answers.eEmail);
        myTeam.push(myEngineer);
        addMoreTeammates();
    })
}

// Ask Intern Questions and Store Interns
function getAndStoreInterns(){
    inquirer
    .prompt(internQuestions)
    .then((answers) => {
        let myIntern = new Intern(answers.iName, getCurrentID(), answers.iSchool, answers.iEmail);
        myTeam.push(myIntern);
        addMoreTeammates();
    })
}

// Call Generate HTML function from external file
function generateHTML(){
    console.log("Generate HTML Please!");
    console.log(myTeam);
}

// Write File to Dist folder

// Init Function
function Init(){
    inquirer
    .prompt(introQuestions)
    .then((answers) => {
        updateManager(answers);
        addMoreTeammates();
    })
}

// Init Call
Init();