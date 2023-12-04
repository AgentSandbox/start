function hotpo(n) {
    let res = 0
    if (n === 0) {
        return 0
    }
    while (n-1) {
        n % 2 === 0 ? n = n / 2 : n = n * 3 + 1
        res++
    }
    return res
}

console.log("ИТОГО: ", hotpo(6))