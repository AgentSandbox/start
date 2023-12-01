function drawStairs(n) {
    let result = ""
    for (let i = 0; i < n; i++) {
        result += " ".repeat(i) + "I\n"
    }
    return result.trim()
}

console.log(drawStairs(5))
