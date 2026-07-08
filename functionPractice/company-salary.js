
const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

let totalSalary = 0;
let incrementTotal = 0;
for (let employee of employees ){
    let salary = employee.starting;
    let increment = employee.increment *employee.experience + employee.starting ;
    totalSalary = totalSalary + salary;
    incrementTotal = incrementTotal + increment;

}

let totalSalaryWithIncrement = totalSalary +incrementTotal;
console.log(totalSalaryWithIncrement)