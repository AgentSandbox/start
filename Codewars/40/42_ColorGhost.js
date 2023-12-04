function Ghost(){
    const arr = ["hite","yellow","purple","red"]
    let num = Math.floor( Math.random()*arr.length)
    return arr[num]
}

console.log(Ghost())

