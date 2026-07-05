let numbers = [12, 98, 5, 41, 23, 78, 46];

// WAY1

let newNumbers = [... numbers];
console.log(newNumbers); 

// WAY2
let newNumbers2 = [].concat(numbers);
console.log(newNumbers2); 

// WAY3
let newNumbers3 = Array.from(numbers);
console.log(newNumbers3);

// chnage array value of copied array
newNumbers.push(100);
console.log(newNumbers);