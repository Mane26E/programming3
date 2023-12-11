let socket = io()
let side = 20;

function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
}


function nkarel(matrix) {
    console.log(matrix);

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

}



setInterval(
    function () {
    socket.on('send matrix', nkarel)
    },1000
)