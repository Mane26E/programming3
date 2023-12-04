function matrixGenerator(matrixSize, grassCount, grassEaterCount, predatorCount, personCount, antiVenomCount) {
    let matrix = [];
    for (let i = 0; i < matrixSize; i++) {
        matrix.push([]);
        for (let j = 0; j < matrixSize; j++) {
            matrix[i].push(0);
        }

    }
    

    for (let j = 0; j < grassCount; j++) {

        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 1
        }
    }

    for (let j = 0; j < grassEaterCount; j++) {

        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 2
        }
    }

    for (let j = 0; j < predatorCount; j++) {

        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 3
        }
    }

    for (let j = 0; j < antiVenomCount; j++) {

        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 6
        }
    }

   

    for (let j = 0; j < personCount; j++) {

        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 4
        }
    }

    for (let i = 0; i < matrixSize; i++) {
        for (let j = 0; j < matrixSize; j++) {
            if (i == j || i + j == matrix.length - 1) {
                matrix[i][j] = 5
            }
        }
    }


    return matrix;


}

let matrix = matrixGenerator(35, 100, 50, 20, 20, 15);
let side = 20;

let grassArr = [];
let grassEaterArr = [];
let predatorArr = [];
let personArr = []
let poisonArr = []
let antiVenomArr = []

function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y);
                grassArr.push(gr);

            } else if (matrix[y][x] == 2) {
                let grEat = new GrassEater(x, y);
                grassEaterArr.push(grEat);
            } else if (matrix[y][x] == 3) {
                let pred = new Predator(x, y);
                predatorArr.push(pred);
            } else if (matrix[y][x] == 4) {
                let per = new Person(x, y);
                personArr.push(per);
            } else if (matrix[y][x] == 5) {
                let pois = new Poison(x, y);
                poisonArr.push(pois);

            } else if (matrix[y][x] == 6) {
                let antven = new AntiVenom(x, y);
                antiVenomArr.push(antven);
            }
        }

    }

}


function draw() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill('green');
                rect(x * side, y * side, side, side);
                text("🌱", x * side, y * side, side, side);
                textSize(side)
            } else if (matrix[y][x] == 2) {
                fill('yellow');
                rect(x * side, y * side, side, side);
                text("🐰", x * side, y * side, side, side);
                textSize(side)
            } else if (matrix[y][x] == 3) {
                fill('red');
                rect(x * side, y * side, side, side);
                text("🐻", x * side, y * side, side, side);
                textSize(side)
            } else if (matrix[y][x] == 4) {
                fill("#eab676")
                rect(x * side, y * side, side, side);
                text("👱🏼‍♂️", x * side, y * side, side, side);
                textSize(side)
            } else if (matrix[y][x] == 5) {
                fill('black');
                rect(x * side, y * side, side, side);
                text("🔻", x * side, y * side, side, side);
                textSize(side)

            } else if (matrix[y][x] == 6) {
                fill('purple');
                rect(x * side, y * side, side, side);
                text("💊", x * side, y * side, side, side);
                textSize(side)
            } else {
                fill('gray');
                rect(x * side, y * side, side, side);

            }

        }

    }

    for (let i in grassArr) {

        grassArr[i].mull()
    }

    for (let i in grassEaterArr) {

        grassEaterArr[i].eat()
    }

    for (let i in predatorArr) {
        predatorArr[i].eat()
    }

    for (let i in personArr) {
        personArr[i].eat()
    }

    for (let i in poisonArr) {
        poisonArr[i].eat()
    }
    for (let i in antiVenomArr) {
        antiVenomArr[i].eat()
    }
}