let LivingCreature = require('./livingCreature');

module.exports = class Grass extends LivingCreature {
    mull() {
        this.multiple++;
        let emptyCell = this.chooseCell(0);
        //let newCell = random(emptyCell);
        let newCell = emptyCell[Math.floor(Math.random() * emptyCell.length)]
        if (newCell && this.multiple >= 8) {
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 1;
            let gr = new Grass(newX, newY);
            grassArr.push(gr);
            this.multiple = 0;
        }





    }
}