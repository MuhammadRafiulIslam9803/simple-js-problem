const company = {
    name: "TechNova",
    departments: [
        {
            name: "Frontend",
            employees: [
                {
                    id: 1,
                    name: "Rahim",
                    salary: 40000,
                    increment: 8,
                    years: 3,
                    skills: {
                        primary: ["HTML", "CSS"],
                        secondary: ["JavaScript", "React"]
                    }
                },
                {
                    id: 2,
                    name: "Karim",
                    salary: 50000,
                    increment: 6,
                    years: 5,
                    skills: {
                        primary: ["HTML"],
                        secondary: ["Vue", "JavaScript"]
                    }
                }
            ]
        },
        {
            name: "Backend",
            employees: [
                {
                    id: 3,
                    name: "Hasan",
                    salary: 60000,
                    increment: 7,
                    years: 2,
                    skills: {
                        primary: ["Node"],
                        secondary: ["MongoDB", "Express"]
                    }
                }
            ]
        }
    ]
};

// employee name

for (const department of company.departments) {

    for (const employee of department.employees) {
        console.log(employee.name);
    }

}
let employeeName1 = company.departments[0].employees[0].name;
let employeeName2 = company.departments[0].employees[1].name;
let employeeName3 = company.departments[1].employees[0].name;

let employeeNameArray = [employeeName1, employeeName2, employeeName3];

// for employee 1 details
let employee1Salary = company.departments[0].employees[0].salary;
let employee1Increment = company.departments[0].employees[0].increment;
let employee1Years = company.departments[0].employees[0].years;

// for employee 2 details
let employee2Salary = company.departments[0].employees[1].salary;
let employee2Increment = company.departments[0].employees[1].increment;
let employee2Years = company.departments[0].employees[1].years;

// for employee 3 details
let employee3Salary = company.departments[1].employees[0].salary;
let employee3Increment = company.departments[1].employees[0].increment;
let employee3Years = company.departments[1].employees[0].years;

// current salary calculation for employee 
for (const department of company.departments) {

    for (const employee of department.employees) {

        const currentSalary =
            employee.salary *
            (1 + employee.increment / 100) **
            employee.years;

        console.log(employee.name, currentSalary);

    }

}
let employee1CurrentSalary = (employee1Salary * (1 + employee1Increment / 100) ** employee1Years).toFixed(2);
let employee2CurrentSalary = (employee2Salary * (1 + employee2Increment / 100) ** employee2Years).toFixed(2);
let employee3CurrentSalary = (employee3Salary * (1 + employee3Increment / 100) ** employee3Years).toFixed(2);

let employeeDetailsArray = [
    { employeeName1, employee1CurrentSalary },
    { employeeName2, employee2CurrentSalary },
    { employeeName3, employee3CurrentSalary }
];
// console.log(` ${(employeeNameArray)} and ${employeeDetailsArray[0].employee1CurrentSalary}`);