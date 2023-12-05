cubeChecker = (volume, side) => volume !== Math.pow(side, 3) ? false : (volume > 0 && side > 0) ? true : false

console.log( cubeChecker(-8, -2))