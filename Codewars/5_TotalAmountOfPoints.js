const games = [('3:4'), ('2:3'), ('1:1'),('4:1'), ('2:0'), ('1:1'),('0:4'), ('2:0'), ('1:0'), ('4:0')]

function points(games) {
    let result = 0
    for (let i = 0; i < 10; i++) {
        igra = games[i];
        let n = igra.split(":", 2)

        let x = n[0]
        let y = n[1]

        if (x > y) {
            result = result + 3
        } else if (x === y) {
            result++
        }
    }
    return (result)
}


console.log(points(games))