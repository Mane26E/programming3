let LivingCreature = require('./livingCreature');

module.exports = class Poison extends LivingCreature {


    constructor(x, y) {
        super(x, y)

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



    eat() {
        let foods = this.chooseCell(4, 2, 3, 1)


        if (foods) {
            for (const i in foods) {
                let newX = foods[i][0]
                let newY = foods[i][1]

                matrix[newY][newX] = 31






                for (let i in grassEaterArr) {
                    if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                        grassEaterArr.splice(i, 1)

                        break;
                    }
                }
                for (let i in personArr) {
                    if (newX == personArr[i].x && newY == personArr[i].y) {
                        personArr.splice(i, 1)

                        break;
                    }
                }
                for (let i in predatorArr) {
                    if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
                        predatorArr.splice(i, 1)
                        break;
                    }
                }
                for (let i in grassArr) {
                    if (newX == grassArr[i].x && newY == grassArr[i].y) {
                        grassArr.splice(i, 1)

                        break;
                    }
                }


            }
        }




    }

}