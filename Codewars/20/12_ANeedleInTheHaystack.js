const array = ["hay", "junk", "hay", "hay", "needle", "moreJunk", "randomJunk"]

function findNeedle(haystack) {
    let result = "NO DATA!!!"
    for (i = 0; i < haystack.length; i++) {
        if (haystack[i] === "needle") {
            return result = "found the needle at position " + i
        }
    }
    return result
}

console.log(findNeedle(array))