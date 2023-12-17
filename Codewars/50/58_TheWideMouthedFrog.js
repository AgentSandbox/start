function mouthSize(animal) {
    if (animal === "") {return "small"}
    if (animal === "alligator" || animal === "ALLIGATOR"){
        return "small"
    } else {
        return "wide"
    }
}

console.log(mouthSize("sdf"))