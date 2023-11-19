function countBy(x, n) {

    let z = [];
    let c = x;
    for (let i=0; i<n; i++) {
        z[i] = c;
        c = c + x;
    }
    return z;
}

console.log(countBy(2,5))