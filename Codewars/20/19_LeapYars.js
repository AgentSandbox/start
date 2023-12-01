function isLeapYears(year) {
    if (year % 4 !== 0) {
        return false
    } else if (year % 100 === 0 && year % 400 !== 0) {
        return false
    } else {
        return true
    }
}

for (let i = 1600; i <= 4000; i++) {
    console.log("год: ", i, isLeapYears(i))

}
