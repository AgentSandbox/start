let numbers = [5, 3, 2, 1, 4]

function removeSmallest(numbers) {
    let arr = [...numbers]
    if (!numbers) {return arr}
    let result = numbers.indexOf(Math.min(...numbers))
    arr.splice(result,1)
    return arr
}

removeSmallest(numbers)