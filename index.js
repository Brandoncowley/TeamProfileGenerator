//Operational dependencies
const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');
const path = require('path');

//variables for the employee input
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//Add Inquirer input to HTML page
const DIST_DIR = path.resolve(__dirname, 'dist')
const outputPath = path.join(DIST_DIR, 'index.html');

//Array to add employees to
const employees = [];

//Need to grab template for output
const render = require('./src/page-template.js');


//Add employees
function addNewEmployee() {
    inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Who are you adding to your team?",
            choices: ["Manager", "Engineer", "Intern", "Nobody else"],
        },

    ]).then(val => {
        if (val.role === "Manager") {
            addManager();
        } if (val.role === "Engineer") {
            addEngineer();
        } if (val.role === "Intern") {
            addIntern();
        } if (val.role === "Nobody else") {
            generateHTML(outputPath, render(employees));
        };
    });
}

// - ADD TEAM MEMBERS -

//Add manager
function addManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the name of the manager?",
        },
        {
            type: "input",
            name: "managerID",
            message: "What is the manager's ID?",
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's email?",
        },
        {
            type: "input",
            name: "managerPhone",
            message: "What is the manager's phone number?",
        },
    ]).then(function(answer) {
        let manager = new Manager(answer.managerName, answer.managerID, answer.managerEmail, answer.managerPhone)
        employees.push(manager);
        addNewEmployee();
    });

}
//Add engineer
function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the name of the engineer?",
        },
        {
            type: "input",
            name: "engineerID",
            message: "What is the engineer's ID?",
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's email?",
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What is the engineer's GitHub name?",
        },
    ]).then(function(answer) {
        let engineer = new Engineer(answer.engineerName, answer.engineerID, answer.engineerEmail, answer.engineerGithub)
        employees.push(engineer);
        addNewEmployee();
    });

}
//Add engineer
function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the name of the intern?",
        },
        {
            type: "input",
            name: "internID",
            message: "What is the intern's ID?",
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is the interns's email?",
        },
        {
            type: "input",
            name: "internSchool",
            message: "What is the intern's school?",
        },
    ]).then(function(answer) {
        let intern = new Intern(answer.internName, answer.internID, answer.internEmail, answer.internSchool)
        employees.push(intern);
        addNewEmployee();
    });

}
//Generate HTML sheet
function generateHTML() {
    fs.writeFile(outputPath, render(employees), "utf-8");
}

addNewEmployee();