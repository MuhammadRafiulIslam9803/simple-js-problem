//simple array practice for learning 

let numberArray = [];

for (let i = 1; i <= 100; i++) {
    numberArray.push(i);
}

console.log(numberArray);
let arrayLength = numberArray.length
console.log(`   The length of the array is: ${arrayLength}`)

//to get 47 number of elements of this array 
let get47 = numberArray[46]
let get26 = numberArray[25]
let get18 = numberArray[17]

console.log(`   The 47th element of the array is: ${get47}`)
console.log(`   The 26th element of the array is: ${get26}`)
console.log(`   The 18th element of the array is: ${get18}`)    
//replace 7 number of the element by index
let number7 = numberArray[6]
number7= 45;

console.log(`   The 7th element of the array is: ${number7}`)
//remove the last element of the array
numberArray.pop()

console.log(`   The last element of the array is removed, now the length of the array is: ${numberArray.length}`)

//added array element in the last of the array
numberArray.push(100)

console.log(`   The last element of the array is added, now the length of the array is: ${numberArray.length}`)

// showing all of the elements of the array by using for of 

console.log(`Index of 100 in the array is: ${numberArray.indexOf(26)}`)


for (let number of numberArray) {
    console.log(`Elements index number is : ${numberArray.indexOf(number)} and value the is: ${number}`)
}   
