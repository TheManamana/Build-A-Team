const inquirer = require('inquirer');

const fs = require('fs');

const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const generateHtml = require('./src/generateHtml');

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
        name: 'engineerGithub',
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

            managerData.push(new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOffice));
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
            engineerData.push(new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub));
        })

    askToAdd();


}
async function addIntern() {
    await inquirer
        .prompt(questionsIntern)
        .then((data) => {
            internData.push(new Intern(data.internName, data.internId, data.internEmail, data.internSchool));
        })
    askToAdd();

}
function finishBuilding() {

    // generateHtml(managerData, engineerData, internData);
    fs.writeFile(`Team.html`, generateHtml(managerData, engineerData, internData), (err) =>
        err ? console.error(err) : console.log('Success!')
    );
    
    // fs.writeFile(`manager.txt`, JSON.stringify(managerData), (err) =>
    //     err ? console.error(err) : console.log('Success!')
    // );
    // fs.writeFile(`engineer.txt`, JSON.stringify(engineerData), (err) =>
    //     err ? console.error(err) : console.log('Success!')
    // );
    // fs.writeFile(`intern.txt`, JSON.stringify(internData), (err) =>
    //     err ? console.error(err) : console.log('Success!')
    // );

    // console.log(managerData[0].getName());
    // console.log(managerData[0].getId());
    // console.log(managerData[0].getEmail());
    // console.log(managerData[0].getRole());
    // console.log(managerData[0].getOfficeNumber());
    
}

// Function call to initialize app
init();




