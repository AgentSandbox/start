const arr = 42

function makeNegative(num) {
    num > 0 ? num = num * (-1) : "";
    return num
}

console.log(makeNegative(arr))