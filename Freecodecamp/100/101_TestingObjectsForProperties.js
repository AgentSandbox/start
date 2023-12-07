function checkObj(obj, checkProp) {
    return  obj.hasOwnProperty(checkProp)=== true ? obj[checkProp] : "Not Found"
}

let arr = {
    pet: "kitten",
    bed: "sleigh",
    gift: "pony"
}
console.log(checkObj(arr, "pet"))