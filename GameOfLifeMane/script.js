function matrixGenerator(matrixSize, grassCount, grassEaterCount, predatorCount, personCount, poisonCount) {
    let matrix = [];
    for (let i = 0; i < matrixSize; i++) {
        matrix.push([]);
        for (let j = 0; j < matrixSize; j++) {
            matrix[i].push(0);
        }

    }
    let x1 = 0;
    let y1 = 0;

    let x2 = 19
    let y2 = 0;

    matrix[0][0] = 5;
    matrix[matrix.length - 1][0] = 5
    matrix[0][matrix.length - 1] = 5
    matrix[matrix.length - 1][matrix.length - 1] = 5


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



    for (let j = 0; j < matrixSize; j++) {
        matrix[x1++][y1++] = 5
        matrix[x2--][y2++] = 5
    }



    for (let j = 0; j < personCount; j++) {

        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 4
        }
    }



    return matrix;
}

let matrix = matrixGenerator(20, 80, 9, 8, 10);
let side = 40;

let grassArr = [];
let grassEaterArr = [];
let predatorArr = [];
let personArr = []
let poisonArr = []

function setup() {
    frameRate(10);
    createCanvas(matrix[0].length * side, matrix.length * side);
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y);
                grassArr.push(gr);
                console.log(grassArr);

            } else if (matrix[y][x] == 2) {
                let grEat = new GrassEater(x, y);
                grassEaterArr.push(grEat);
            } else if (matrix[y][x] == 3) {
                let pred = new Predator(x, y);
                predatorArr.push(pred);
            } else if (matrix[y][x] == 4) {
                let per = new Person(x, y);
                personArr.push(per);
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

            } else if (matrix[y][x] == 2) {
                fill('yellow');
                rect(x * side, y * side, side, side);

            } else if (matrix[y][x] == 3) {
                fill('red');
                rect(x * side, y * side, side, side);

            } else if (matrix[y][x] == 4) {
                fill("#eab676")
                rect(x * side, y * side, side, side);
                text("👱🏼‍♂️", x * side, y * side, side, side);
                textSize(side)
            } else if (matrix[y][x] == 5) {
                fill('black');
                rect(x * side, y * side, side, side);
                text("🩸", x * side, y * side, side, side);
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
        poisonArr[i].mull()
    }
}

function addGrass() {
    for (let i = 0; i < 3; i++) {
        let x = Math.floor(Math.random() * matrix.length)
        let y = Math.floor(Math.random() * matrix.length)

        if (matrix[x][y] != 5) {
            matrix[x][y] = 1;
            var grass1 = new Grass(x, y)
            grassArr.push(grass1)
        }
    }
}



function addPredator() {
    for (let i = 0; i < 3; i++) {
        let x = Math.floor(Math.random() * matrix.length)
        let y = Math.floor(Math.random() * matrix.length)

        if (matrix[x][y] != 5) {
            matrix[x][y] = 1;
            var predator1 = new Predator(x, y)
            predatorArr.push(predator1)
        }
    }
}

function addPerson() {
    for (let i = 0; i < 3; i++) {
        let x = Math.floor(Math.random() * matrix.length)
        let y = Math.floor(Math.random() * matrix.length)

        if (matrix[x][y] != 5) {
            matrix[x][y] = 4;
            var person1 = new Person(x, y)
            personArr.push(person1)
        }
    }
}

function addGrassEater() {
    for (let i = 0; i < 3; i++) {
        let x = Math.floor(Math.random() * matrix.length)
        let y = Math.floor(Math.random() * matrix.length)

        if (matrix[x][y] != 5) {
            matrix[x][y] = 2;
            var grass1 = new GrassEater(x, y)
            grassEaterArr.push(grass1)
        }
    }
}