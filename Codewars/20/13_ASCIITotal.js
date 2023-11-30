let string = "Mary Had A Little Lamb"

function uniTotal(string) {
    let array = 0
    for (let i = 0; i < string.length; i++) {
        array += string.charCodeAt(i)
        console.log(array)
    }
    return array
}

console.log(uniTotal(string))
// console.log(str.charCodeAt(0))
