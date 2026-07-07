

function findLargest(numbers){
    let largest = numbers[0];
    for (let number of numbers) {
        if (number > largest) {
            largest = number;
        }
    }
    return largest;
}

const largest = findLargest([10, 20, 5, 30]);
console.log(largest);