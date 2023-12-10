function nthFloyd(n) {
    let i = 1
    let j = 1
    let cont = 0
    while (i < 10**9) {
        if (n === 2 || n ===3) {return 2}
        cont ++
        // console.log("n=", n, " i=",i, " j=", j, " cont=", cont)
        if (n >= i && n < i+j){return cont}
        i += j
        j ++
    }
}

console.log(nthFloyd(11))