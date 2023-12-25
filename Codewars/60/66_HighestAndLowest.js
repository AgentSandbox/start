function highAndLow(numbers){
    const arr=numbers.split(" ")
    let min = arr[0]
    let max = arr[0]
    for (let i = 0; i < arr.length-1; i++) {
        if (min>Number(arr[i+1])) {min=arr[i+1]}
        if (max<Number(arr[i+1])) {max=arr[i+1]}
    }
    return max+" "+min
}

console.log(highAndLow("3 5 7 2 3 -3 9 0 67 9 2 "))