// Setup
const myArray = [];

// Only change code below this line
let d = 0
for (let i = 9; i > 0 ; i--) {
    if (i%2 !== 0) {
        myArray.push(i)
        d++
    }
}
console.log(myArray)