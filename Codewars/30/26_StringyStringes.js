function string(size) {
    return((size % 2 === 0) ? "10".repeat(size / 2) : "1" + "01".repeat(size / 2))
}

console.log(string(3))