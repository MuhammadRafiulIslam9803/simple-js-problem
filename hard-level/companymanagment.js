const company = {
    departments: [
        {
            name: "IT",
            employees: [
                { id: 1, name: "Rahim", salary: 50000, bonus: 10 },
                { id: 2, name: "Karim", salary: 60000, bonus: 15 },
            ],
        },
        {
            name: "HR",
            employees: [
                { id: 3, name: "Jamal", salary: 45000, bonus: 20 },
                { id: 4, name: "Rasel", salary: 55000, bonus: 12 },
            ],
        },
        {
            name: "Marketing",
            employees: [
                { id: 5, name: "Sakib", salary: 70000, bonus: 18 },
            ],
        },
    ],
};
// console.log(company.departments[0])
let totalEmployee = 0;
let heightSalaryEmployee = company.departments[0].employees[0];
let lowestSalaryEmployee = company.departments[0].employees[0];

let totalSalary = 0;
let totalBonusAmount = 0;
let averageSalary = 0;

let departmentWiseSalary = {};

for (const department of company.departments) {
    // department name
    departmentWiseSalary[department.name] = 0;

    for (const employee of department.employees) {
        // total employee count
        totalEmployee = totalEmployee + 1;

        // total salary 
        totalSalary = totalSalary + employee.salary;

        // totalBonusAmount
        totalBonusAmount = totalBonusAmount + (employee.salary * employee.bonus / 100);

        // department wise salary 
        departmentWiseSalary[department.name] += employee.salary;

        // height salary employee
        if (employee.salary > heightSalaryEmployee.salary) {
            heightSalaryEmployee = employee;
        }
        // lowest salary employee 
        else if (employee.salary < lowestSalaryEmployee.salary) {
            lowestSalaryEmployee = employee;
        }
        console.log(employee)
    }
}
// average of the salary
if (totalSalary === true) {
    averageSalary = totalSalary / totalEmployee;
}
console.log(totalEmployee)
console.log(totalSalary)
console.log(totalBonusAmount)
console.log(averageSalary)
console.log(heightSalaryEmployee.name)
console.log(lowestSalaryEmployee.name)
console.log(departmentWiseSalary)