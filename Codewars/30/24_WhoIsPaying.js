function whoIsPaying(name) {
    let result = [];
    (name.length > 2) ? result[1] = name : result[0] = name.slice(0, 2)
    if (name.length > 2) {
        result[0] = name;
        result[1] = name.slice(0, 2)
    } else {
        result[0] = name.slice(0, 2)
    }
    return result
}

console.log(whoIsPaying("Me"))

// function whoIsPaying(name){
//     return name.length > 2 ? [name, name.slice(0,2)] : [name]
// }