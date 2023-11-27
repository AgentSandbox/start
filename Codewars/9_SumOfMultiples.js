function sumMul(n, m) {
    if (n>=m) {return "INVALID"}
    let resault = 0
    for (i=n; i<m; i+=n){
        resault = resault + i
    }
    return resault
}

console.log(sumMul(49,5537))