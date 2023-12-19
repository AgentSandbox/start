function eachCons(array, n) {
    let result = []
    for (let i = 0; i <  array.length-n+1; i++) {
        result.push(array.slice(i, i+n))
    }
    return result;
}

console.log(eachCons([1,2,3,4,5,6,7,8], 3))