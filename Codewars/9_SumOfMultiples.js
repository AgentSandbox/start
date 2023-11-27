function sumMul(n, m) {
    if (n>=m) {return "INVALID"}
    let resault = 0
    for (i=0; i<Math.floor(m/n); i++){
        resault = resault + n*(i+1)
    }
    return resault
}

console.log(sumMul(4,123))