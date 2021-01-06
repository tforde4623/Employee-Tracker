const inquirer = require("inquirer");
const logo = require("asciiart-logo");
const config = require("./package.json");
const DbFuncs = require("./db/index.js");
const cTable = require("console.table");

// when start app display ascii art (text from package.json)
console.log(logo(config).render());

const test = [
  {
    name: "foo",
    age: 10,
  },
  {
    name: "bar",
    age: 20,
  },
];

const actions = [
  {
    name: "action",
    type: "list",
    message: "What would you like to do?",
    choices: [
      "View Departments",
      "View Employees",
      "View Roles",
      "Add Employee",
      "Add Department",
      "Add Role",
      "Update Employee Roles",
      "Quit",
    ],
  },
];

const nextAction = () => {
  let test = "";
  inquirer
    .prompt(actions)
    .then((res) => {
      switch (res.action) {
        case "View Departments":
          DbFuncs.viewDepartments();
          nextAction();
          break;
        case "View Employees":
          DbFuncs.viewEmployees();
          nextAction();
          break;
        case "View Roles":
          DbFuncs.viewRoles();
          nextAction();
          break;
        case "Add Employee":
          inquirer
            .prompt([
              {
                name: "first",
                message: "What is the employees first name?",
                type: "input",
                default: null,
              },
              {
                name: "last",
                message: "What is this employees last name?",
                type: "input",
                default: null
              },
              {
                name: "role",
                message: "What is the employees role ID?",
                type: "input",
                default: null
              },
              {
                name: "manager",
                message: "What is the employees manager ID?",
                type: "input",
                default: null
              },
            ])
            .then((res) => DbFuncs.addEmployee(res))
            .then(nextAction)
            .catch((err) => {
              if (err) throw err;
            });
          break;
        case "Add Department":
          inquirer
            .prompt({
              name: "department",
              message:
                "What is the name of the department you would like to add?",
              type: "input",
            })
            .then((res) => DbFuncs.addDepartment(res.department))
            .then(nextAction)
            .catch((err) => {
              if (err) throw err;
            });
          break;
        case "Add Role":
          inquirer
            .prompt([
              {
                name: "title",
                message: "What is the roles title?",
                type: "input",
                default: null
              },
              {
                name: "salary",
                message: "What is role's salary?",
                type: "input",
                default: null
              },
              {
                name: "depId",
                message: "What is the roles id?",
                type: "input",
                default: null
              },
            ])
            .then((res) => DbFuncs.addRole(res))
            .then(nextAction)
            .catch((err) => {
              if (err) throw err;
            });
          break;
        case "Update Employee Roles":
          inquirer
            .prompt([
              {
                name: "first",
                message: "What is the employees FIRST name?",
                type: "input",
                default: null
              },
              {
                name: "last",
                message: "What is the employees LAST name?",
                type: "input",
                default: null
              },
              {
                name: "newRole",
                message: "What is this employees NEW role?",
                type: "input",
                default: null
              },
            ])
            .then((res) => DbFuncs.updateEmployeeRole(res))
            .then(nextAction)
            .catch((err) => {
              if (err) throw err;
            });
          break;
        case "Quit":
          process.exit(0);
        default:
          console.log('You did something wrong.');
          process.exit(0);
      }
    })
    .catch((err) => {
      if (err) throw err;
    });
};

// start the app
nextAction();
