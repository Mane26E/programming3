let socket = io();
let weather = "";

let lightingButton = document.getElementById("lighting");
lightingButton.addEventListener("click", function () {
    weather = "lighting"
    socket.emit("lighting", 2)
})



let winterButton = document.getElementById("winter");
winterButton.addEventListener("click", function () {
    weather = "winter"
})

let springButton = document.getElementById("spring");
springButton.addEventListener("click", function () {
    weather = "spring"
})

let summerButton = document.getElementById("summer");
summerButton.addEventListener("click", function () {
    weather = "summer"
})

let autumnButton = document.getElementById("autumn");
autumnButton.addEventListener("click", function () {
    weather = "autumn"
})
let side = 20;
function setup() {
    frameRate(5);
    createCanvas(35 * side, 35 * side);
}


function nkarel(matrix) {

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill('green')
                rect(x * side, y * side, side, side);

                textSize(side)
                if (weather == "winter") {
                    fill('#F2F7FD')
                    rect(x * side, y * side, side, side);
                    text("❄️", x * side, y * side, side, side);
                    textSize(side)

                } else if (weather == "spring") {
                    fill('#487800');
                    rect(x * side, y * side, side, side);
                    text("🌷", x * side, y * side, side, side);
                    textSize(side)
                } else if (weather == "summer") {
                    fill('green');
                    rect(x * side, y * side, side, side);
                    text("🌿", x * side, y * side, side, side);
                    textSize(side)
                } else if (weather == "autumn") {
                    fill('#996515');
                    rect(x * side, y * side, side, side);
                    text("🍂", x * side, y * side, side, side);
                    textSize(side)
                }

            } else if (matrix[y][x] == 2) {
                fill('#989898');
                rect(x * side, y * side, side, side);
                text("🐰", x * side, y * side, side, side);
                textSize(side)
            } else if (matrix[y][x] == 3) {
                fill('#6F4E37');
                rect(x * side, y * side, side, side);
                text("🐻", x * side, y * side, side, side);
                textSize(side)
            } else if (matrix[y][x] == 4) {
                fill("#BDA55D")
                rect(x * side, y * side, side, side);
                text("👨🏻", x * side, y * side, side, side);
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
            } else if (matrix[y][x] == 7) {
                fill('#ADADC9');
                rect(x * side, y * side, side, side);
                text("⚡️", x * side, y * side, side, side);
                textSize(side)
            } else {
                fill('gray');
                rect(x * side, y * side, side, side);

            }

        }

    }

}


function lighting() {
    socket.emit("lighting")
}



socket.on("send matrix", nkarel)

