// Include dependencies
const fs = require('fs/promises');
const inquirer = require('inquirer');
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const genHTML = require("./src/generateHTML.js");

// Global Variable
let myTeam = [];

// Update Manager
function updateManager(answer) {
    let myManager = new Manager(answer.mName, answer.mID, answer.mOffice, answer.mEmail);
    myTeam.push(myManager);
}

// Questions for getting Manager information
const introQuestions = [
    { type: 'input', message: 'What is your name?', name: 'mName' },

    { type: 'input', message: 'What is your Employee ID#?', name: 'mID' },

    {
        type: 'input',
        message: `What is your email address?`,
        name: 'mEmail',
        validate: function (email) { // Validation based on Amitabh-K validation example https://gist.github.com/Amitabh-K/ae073eea3d5207efaddffde19b1618e8
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
            if (valid) {
                return true;
            } else {
                console.log(". Please enter a valid email address.");
                return false;
            }
        }
    },

    { type: 'input', message: 'What is your Office Number?', name: 'mOffice' },
];

// Questions for adding additional team members or exiting the app
const addMoreQuestions = [
    { type: 'list', message: 'Which team member would you like to add?', name: 'selection', choices: ['An Engineer', 'An Intern', 'None, I am finished'] },
];

// Questions for getting Engineer information
const engineerQuestions = [
    { type: 'input', message: 'What is the Engineer\'s name?', name: 'eName' },

    { type: 'input', message: 'What is their Employee ID#?', name: 'eID' },

    {
        type: 'input',
        message: `What is their email address?`,
        name: 'eEmail',
        validate: function (email) { // Validation based on Amitabh-K validation example https://gist.github.com/Amitabh-K/ae073eea3d5207efaddffde19b1618e8
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
            if (valid) {
                return true;
            } else {
                console.log(". Please enter a valid email address.");
                return false;
            }
        }
    },

    { type: 'input', message: 'What is their Github Username?', name: 'eGithub' },
];

// Questions for getting Intern information
const internQuestions = [
    { type: 'input', message: 'What is the Intern\'s name?', name: 'iName' },

    { type: 'input', message: 'What is their Employee ID#?', name: 'iID' },

    {
        type: 'input',
        message: `What is their email address?`,
        name: 'iEmail',
        validate: function (email) { // Validation based on Amitabh-K validation example https://gist.github.com/Amitabh-K/ae073eea3d5207efaddffde19b1618e8
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
            if (valid) {
                return true;
            } else {
                console.log(". Please enter a valid email address.");
                return false;
            }
        }
    },

    { type: 'input', message: 'What is their School?', name: 'iSchool' },
];



// Ask if the Manager wants to add an Engineer, Intern or if they are finished adding Team Members
function addMoreTeammates() {
    inquirer
        .prompt(addMoreQuestions)
        .then((answers) => {
            switch (answers.selection) {

                case 'An Engineer': getAndStoreEngineers();
                    break;

                case 'An Intern': getAndStoreInterns();
                    break;

                case 'None, I am finished': writeToFile('./dist/index.html', genHTML(myTeam));
                    break;

                default: console.log("Something Went Wrong");
            }
        })
}

// Ask Engineer Questions and Store Engineers
function getAndStoreEngineers() {
    inquirer
        .prompt(engineerQuestions)
        .then((answers) => {
            let myEngineer = new Engineer(answers.eName, answers.eID, answers.eGithub, answers.eEmail);
            myTeam.push(myEngineer);
            addMoreTeammates();
        })
}

// Ask Intern Questions and Store Interns
function getAndStoreInterns() {
    inquirer
        .prompt(internQuestions)
        .then((answers) => {
            let myIntern = new Intern(answers.iName, answers.iID, answers.iSchool, answers.iEmail);
            myTeam.push(myIntern);
            addMoreTeammates();
        })
}


// Write File to Dist folder
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data)
}

// Init Function
function Init() {
    inquirer
        .prompt(introQuestions)
        .then((answers) => {
            updateManager(answers);
            addMoreTeammates();
        })
}

// Init Call
Init();