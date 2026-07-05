const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// way1
const reversedColors = colors.reverse()

console.log(reversedColors) // ['orange', 'yellow', 'green', 'blue', 'red']

// Way2
let reversedColors2 = []
for (let col of colors){
    reversedColors2.unshift(col)
}
console.log(reversedColors2) // ['orange', 'yellow', 'green', 'blue', 'red']
