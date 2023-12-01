function noonerize(numbers) {
    if (typeof numbers[0] === "number" && typeof numbers[1] === "number") {
        let a = String(numbers[0])
        let b = String(numbers[1])
        return Math.abs(Number(a.replace(/^\d/, b[0]) - b.replace(/^\d/, a[0])))
    } else return "invalid array"
}

console.log(noonerize([1257, 3554]))