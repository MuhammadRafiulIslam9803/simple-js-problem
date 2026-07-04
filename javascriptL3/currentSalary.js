let startingSalary = 30000;
let experienceYears = 20;
let increment = 5;

const currentSalary = startingSalary * (1 + increment / 100) ** experienceYears;

console.log(`The current salary  is: $ ${currentSalary.toFixed(2)}`);