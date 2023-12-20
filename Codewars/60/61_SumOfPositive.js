function positiveSum(arr) {
    let result = 0
    arr.map((t)=> (t>0) ? result += t : "")
    return result
}

console.log(positiveSum([1, -4, 7, 12, -3, 4]))