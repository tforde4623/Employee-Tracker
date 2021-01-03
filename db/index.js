const mysql = require("mysql");
const cTable = require("console.table");

const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "46234623",
  database: "employees",
});

connection.connect(err => {
  if (err) throw err;
  console.log("Connected as ID: " + connection.threadId);
});

module.exports = {
  viewDepartments: () => {
    connection.query("SELECT * FROM department", (err, res) => {
      if (err) throw err;
      console.log("\n");
      console.table(res);
    });
  },
  addDepartment: department => {
    connection.query(
      "INSERT INTO department(name) VALUES (?)",
      [department],
      err => {
        if (err) throw err;
      }
    );
  },
  viewEmployees: () => {
    connection.query("SELECT * FROM employee", (err, res) => {
      if (err) throw err;
      console.log("\n");
      console.table(res);
    });
  },
  addEmployee: employee => {
    connection.query(
      "INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
      [employee.first, employee.last, employee.role, employee.manager], // maybe check on the exact values we need to put in here
      err => {
        if (err) throw err;
      }
    );
  },
  viewRoles: () => {
    connection.query("SELECT * FROM role", (err, res) => {
      if (err) throw err;
      console.log("\n");
      console.table(res);
    });
  },
  addRole: role => {
    connection.query(
      "INSERT INTO role(title, salary, department_id) VALUES (?, ?, ?)",
      [role.title, role.salary, role.depId],
      err => {
        if (err) throw err;
      }
    );
  },
  updateEmployeeRole: data => {
    // query to get id of wanted role
    connection.query(
      "SELECT id FROM role WHERE title = ?",
      [data.newRole],
      (err, res) => {
        if (err) throw err;
        // query to set new role in employee table
        connection.query(
          "UPDATE employee SET role_id = ? WHERE first_name = ? AND last_name = ?",
          [res[0].id, data.first, data.last],
          err => {
            if (err) throw err;
          }
        );
      }
    );
  },
};

// might need to check and see if they are supposed to enter role_id or role title
