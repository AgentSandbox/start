function tripleTrouble(one, two, three) {
    let result = ""
    for (let i = 0; i < one.length; i++) {
        console.log("2222222")
        result += one[i] + two[i] + three[i];
    }
    return result
}

console.log(tripleTrouble("aaa", "bbb", "ccc"))
