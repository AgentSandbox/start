const arrbeast = ("garlic naan");
const arrdish = ("great blue heron");

function feast(beast, dish) {
    if (beast[0] === dish[0] && beast[beast.length-1] === dish[dish.length-1]){
        return "true"
    } else {
        return "false"
    }
}

console.log(feast(arrbeast, arrdish))