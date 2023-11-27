var arr = ['codewars', 'flick', 'code', 'wars']

function flickSwitch(arr){
    check = true
    for (i=0; i<arr.length; i++){
        if (arr[i]==='flick'){check=!check}
        arr[i] = check
    }
    return arr
}

console.log(flickSwitch(arr))
