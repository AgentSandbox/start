const array = [4,3,9,7,2,1]

function squareOrSquareRoot(array) {
    for (i=0; i<array.length; i++){
        let a = Math.sqrt(array[i])
        if (a%1 !== 0) { a = array[i]**2 }
        array[i] = a
    }
    return array
}

console.log(squareOrSquareRoot(array))
