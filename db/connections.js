const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "46234623",
  database: "employees"
});

connection.connect(err => {
  if (err) throw err;
  console.log("Connected as ID: " + connection.threadId);
});


module.exports = connection;