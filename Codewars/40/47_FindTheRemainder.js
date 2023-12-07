function remainder(n, m) {
    if (n < m) {
        [m, n] = [n, m]
    }
    return m =0 ? NaN : n % m
}

console.log(remainder(1, 3))
