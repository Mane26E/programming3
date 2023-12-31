let LivingCreature = require('./livingCreature');

module.exports = class  AntiVenom extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        this.energy = 8;
       
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(char1, char2) {
        this.getNewCoordinates();
        let found = [];
        for (let i = 0; i < this.directions.length; i++) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == char1 || matrix[y][x] == char2) {
                    found.push(this.directions[i])
                }

            }
        }

        return found;
    }

    mul() {
        let emptyCell = this.chooseCell(4);
        let newCell = emptyCell[Math.floor(Math.random() * emptyCell.length)]

        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];

            matrix[newY][newX] = 6;

            let antven = new AntiVenom (newX, newY);
            antiVenomArr.push(antven);

            this.energy = 8;

        }
    }


    eat() {
        let foods = this.chooseCell(5)
        let food = foods[Math.floor(Math.random() * foods.length)]

        if (food) {
            this.energy += 5
            let newX = food[0]
            let newY = food[1]

            matrix[newY][newX] = 6
            matrix[this.y][this.x] = 0

            for (let i in poisonArr) {
                if (newX == poisonArr[i].x && newY == poisonArr[i].y) {
                    poisonArr.splice(i, 1)

                    break;
                }
            }

            this.x = newX
            this.y = newY
            if (this.energy >= 27) {
                this.mul()
            }

        } else {
            this.move()
        }

    }



    move() {
        let emptyCell = this.chooseCell(0,1)
        let newCell = emptyCell[Math.floor(Math.random() * emptyCell.length)]

        if (newCell) {

            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 6
            matrix[this.y][this.x] = 0


            this.x = newX
            this.y = newY
           



               
        }

    }

   

}