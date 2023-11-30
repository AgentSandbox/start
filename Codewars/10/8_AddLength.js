const str = "Hello my little boy!"

function sort(str) {
    let erray = str.split(" ")
    for (i=0; i<erray.length; i++){
        erray[i] += " "+erray[i].length;
    }
    return(erray)
}

console.log(sort(str))