const inquirer = require('inquirer');
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
          viewDepartments();
          break;
        case "View Employees":
          // prompt function
          break;
        case "View Roles":
          // prompt function
          break;
        case "Add Employee":
          // prompt function
          break;
        case "Add Department":
          // prompt function
          break;
        case "Add Role":
          // prompt function
          break;
        case "Update Employee Roles":
          // prompt function
          break;
        case "Quit":
          // exit function
          break;
        default:
          //something went wrong
      };
    })
    .catch(err => { if (err) throw err; });
};
  
// action functions (maybe move some of the functionality into db/)
const viewDepartments = () => {
  
};


nextAction();

