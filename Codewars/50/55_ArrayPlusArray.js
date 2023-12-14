function arrayPlusArray(arr1, arr2) {
    let result1 = 0
    let result2 = 0
    for (let i = 0; i < arr1.length; i++) {
        result1 += arr1[i]
    }
    for (let i = 0; i < arr2.length; i++) {
        result2 += arr2[i]
    }
    return result1 + result2; //something went wrong
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))