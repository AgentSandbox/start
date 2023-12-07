function sumOfDifferences(arr) {
    arr.sort(function (a, b) {
        return (b - a)
    })
    if (!arr || arr.length === 1) {
        return 0
    }
    let result = 0
    for (let i = 0; i < arr.length - 1; i++) {
        result += arr[i] - arr[i + 1]
    }
    return result
}

console.log(sumOfDifferences([-3, -2, -1]))