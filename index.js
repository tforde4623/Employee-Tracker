const inquirer = require('inquirer');
const mysql = require('mysql'); // maybe just put this in connections.js
const logo = require('asciiart-logo');
const config = require('./package.json');


// when start app display ascii art (text from package.json)
console.log(logo(config).render());

const actions = [
  {
    name: 'action',
    type: 'list',
    message: 'What would you like to do?',
    choices: [
      "View Departments",
      "View Employees",
      "View Roles",
      "Add Employee",
      "Add Department",
      "Add Role",
      "Update Employee Roles",
      "Quit"
    ]
  }
];

// function for calling desired action
const nextAction = () => {
  inquirer
    .prompt(actions)
    .then(res => {
      switch (res.action) {
        case "View Departments":
          console.log('worked');
          break;
        case "View Employees":
          // prompt function
          break;
        default:
          //something went wrong
      };
    })
    .catch(err => { if (err) throw err; });
  };

nextAction();

