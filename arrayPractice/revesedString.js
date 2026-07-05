const statement = 'I am a hard working person'

let sliceStatement = statement.split(' ');

let reversedSliceStatement = [];

for (let word of sliceStatement) {
    reversedSliceStatement.unshift(word);
}
console.log(Array.isArray(sliceStatement))

console.log(reversedSliceStatement) 