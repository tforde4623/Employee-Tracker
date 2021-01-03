USE employees;

INSERT INTO department(name)
VALUES
("Legal"),
("Production"),
("Marketing");

INSERT INTO role(title, salary, department_id)
VALUES
("Lawyer", 100000, 1),
("Legal Team Head", 150000, 2),
("Marketing Analyst", 70000, 3);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
("John", "Doe", 1, 2),
("Crystal", "Abby", 2, null);