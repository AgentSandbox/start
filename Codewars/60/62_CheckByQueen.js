function check(board) {
    let Qx = 0
    let Qy = 0
    let Kx = 0
    let Ky = 0
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === "q") {Qy=i; Qx=j}
            if (board[i][j] === "k") {Ky=i; Kx=j}
        }
    }
    if (Qx===Kx || Qy===Ky) {return true}
    Kx = Math.abs(Qx-Kx)
    Ky = Math.abs(Qy-Ky)

    return Kx - Ky === 0;

}

// console.log(check(['*', '*', 'q', 'k']))
// console.log((check([ [ '*', 'q', '*', '*', 'k' ], [ '*', '*', '*', '*', '*' ], [ '*', '*', '*', '*', '*' ], [ '*', '*', '*', '*', '*' ], [ '*', '*', '*', '*', '*' ] ])))
console.log(check([ [ '*', 'q', '*', '*', 'k' ], [ '*', '*', '*', '*', '*' ], [ '*', '*', '*', '*', '*' ], [ '*', '*', '*', '*', '*' ], [ '*', '*', '*', '*', '*' ] ]))