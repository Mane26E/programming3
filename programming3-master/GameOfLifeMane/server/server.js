let express = require('express');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);
let fs = require("fs");
//const Lighting = require('./lighting');

app.use(express.static("../client"));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000, () => {
    console.log('connected');
});


function matrixGenerator(matrixSize, grassCount, grassEaterCount, predatorCount, personCount, antiVenomCount, lightingCount) {
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


};
matrix = matrixGenerator(35, 100, 50, 20, 20, 15);

io.sockets.emit('send matrix', matrix);

grassArr = [];
grassEaterArr = [];
predatorArr = [];
personArr = [];
poisonArr = [];
antiVenomArr = [];
lightingArr = []


Grass = require("./grass");
GrassEater = require("./grassEater");
Predator = require("./predator");
Person = require("./person");
Poison = require("./poison");
AntiVenom = require("./antiVenom");
Lighting = require("./lighting")


function createObject(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y);
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                var grEater = new GrassEater(x, y);
                grassEaterArr.push(grEater)
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
            }else if (matrix[y][x] == 7) {
                let lig = new Lighting(x, y);
                lightingArr.push(lig);
            }
        }
    }

    io.sockets.emit('send matrix', matrix)

}




function methods() {
    for (var i in grassArr) {
        grassArr[i].mul()
    } for (let i in grassEaterArr) {

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
    for(let i in lightingArr){
        lightingArr[i].eat()
    }
    io.sockets.emit("send matrix", matrix);
}
setInterval(methods, 1000)

io.on('connection', function () {
    createObject(matrix)
})


function lighting() {
    for (let j = 0; j < 4; j++) {

        let x = Math.floor(Math.random() * matrix.length)
        let y = Math.floor(Math.random() * matrix.length)

            matrix[y][x] = 7
    }

    io.sockets.emit("send matrix", matrix)
  
}

io.on('connection',function(socket){
    createObject(matrix)
    socket.on("lighting", lighting)
})

let statistic = {


}


setInterval(function(){
    statistic.grass = grassArr.length;
    statistic.grassEater = grassEaterArr.length;
    statistic.predator = predatorArr.length;
    statistic.poison = poisonArr.length;
    statistic.person = personArr.length;
    statistic.antiVenom = antiVenomArr.length;
   

    fs.writeFile("statistics.json", JSON.stringify(statistic),()=>{
        console.log("Writed statistic to file !!!");
    })


}, 1000)