const inquirer = require('inquirer');

const fs = require('fs');

const managerData = [];
const engineerData = [];
const internData = [];

const questionsManager = [
    {
        type: 'input',
        name: 'managerName',
        message: 'What is the managers name?',

    },
    {
        type: 'input',
        name: 'managerId',
        message: 'What is the managers employee id?',

    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is the managers email address?',

    },
    {
        type: 'input',
        name: 'managerOffice',
        message: 'What is the managers office number?',

    },





];

const questionsNewMember = [

    {
        type: 'list',
        name: 'choice',
        message: "Add a new member to the team?",
        choices: ['Engineer', 'Intern', 'Finish Building Team'],

    },



];
const questionsEngineer = [
    {
        type: 'input',
        name: 'engineerName',
        message: 'What is the engineers name?',

    },
    {
        type: 'input',
        name: 'engineerId',
        message: 'What is the engineers employee id?',

    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: 'What is the engineers email address?',

    },
    {
        type: 'input',
        name: 'engineerOffice',
        message: 'What is the engineers GitHub username?',

    },





];

const questionsIntern = [
    {
        type: 'input',
        name: 'internName',
        message: 'What is the interns name?',

    },
    {
        type: 'input',
        name: 'internId',
        message: 'What is the interns employee id?',

    },
    {
        type: 'input',
        name: 'internEmail',
        message: 'What is the interns email address?',

    },
    {
        type: 'input',
        name: 'internSchool',
        message: 'What is the interns school name?',

    },





];

function init() {
    inquirer
        .prompt(questionsManager)
        .then((data) => {

            managerData.push(data);
            askToAdd();




        });
}
function askToAdd() {
    inquirer
        .prompt(questionsNewMember)
        .then((data) => {
            if (data.choice == 'Engineer') {
                addEngineer();

            } else if (data.choice == 'Intern') {
                addIntern();

            } else {
                finishBuilding();

            }
        });

}
async function addEngineer() {
    await inquirer
        .prompt(questionsEngineer)
        .then((data) => {
            engineerData.push(data);
        })

    askToAdd();


}
async function addIntern() {
    await inquirer
        .prompt(questionsIntern)
        .then((data) => {
            internData.push(data);
        })
    askToAdd();

}
function finishBuilding() {
    // fs.writeFile(`manager.txt`, JSON.stringify(managerData), (err) =>
    //     err ? console.error(err) : console.log('Success!')
    // );
    // fs.writeFile(`engineer.txt`, JSON.stringify(engineerData), (err) =>
    //     err ? console.error(err) : console.log('Success!')
    // );
    // fs.writeFile(`intern.txt`, JSON.stringify(internData), (err) =>
    //     err ? console.error(err) : console.log('Success!')
    // );
    
}

// Function call to initialize app
init();




