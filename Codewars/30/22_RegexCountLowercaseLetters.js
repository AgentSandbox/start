let arr = ""
function lowercaseCount(str){
    let a = str.match(/[a-z]/g)
    if(a === null) return 0
    return a.length
}


console.log(lowercaseCount(arr))