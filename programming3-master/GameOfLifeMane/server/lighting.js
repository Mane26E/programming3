let LivingCreature = require('./livingCreature');

module.exports = class Lighting extends LivingCreature {
    constructor(x, y) {
        super(x, y)


    }
    eat() {
        let foods = this.chooseCell(1, 2, 3, 4, 5)
        let ar = []
        if (foods) {

            for(i in ar){
                newX=ar[i][0]
                newY=ar[i][1]

            }

            matrix[newY][newX] = 0
            matrix[this.y][this.x] = 0

            for (let i in poisonArr) {
                if (newX == poisonArr[i].x && newY == poisonArr[i].y) {
                    poisonArr.splice(i, 1)

                    break;
                }
            } for (let i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1)

                    break;
                }
            }
            for (let i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1)

                    break;
                }
            }
            for (let i in predatorArr) {
                if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
                    predatorArr.splice(i, 1)

                    break;
                }
            }

            for (let i in personArr) {
                if (newX == personArr[i].x && newY == personArr[i].y) {
                    personArr.splice(i, 1)

                    break;
                }
            }
            for (let i in antiVenomArr) {
                if (newX == antiVenomArr[i].x && newY == antiVenomArr[i].y) {
                    antiVenomArr.splice(i, 1)

                    break;
                }
            }
            this.x = newX
            this.y = newY
        }
    }

}