let LivingCreature = require('./livingCreature');

module.exports = class Lighting extends LivingCreature {
    constructor(x, y) {
        super(x, y)
    }
    eat() {
        let foods = super.chooseCell(1, 2, 3, 4, 5);
        let newX = null;
        let newY = null;
        if (foods) {
            for(let i in foods){
                newX = foods[i][0]
                newY = foods[i][1]
            
            }
       

             if(newX == 0 && newY == 0) {
                 matrix[newY + 1][newX + 1] = 0
                 matrix[newY + 1][newX] = 0
                 matrix[newY][newX + 1] = 0
             } else if(newX == 0) {
                 matrix[newY + 1][newX] = 0
                 matrix[newY + 1][newX + 1] = 0
                 matrix[newY + 1][newX] = 0
                 matrix[newY - 1][newX + 1] = 0
                 matrix[newY - 1][newX] = 0
             } else if(newY == 0) {
                 matrix[newY][newX + 1] = 0
                 matrix[newY][newX - 1] = 0
                 matrix[newY + 1][newX] = 0
                 matrix[newY + 1][newX + 1] = 0
                 matrix[newY + 1][newX - 1] = 0
             } else {
               
                 matrix[newY - 1][newX] = 0
                 matrix[newY + 1][newX] = 0
                 matrix[newY - 1][newX - 1] = 0
                 matrix[newY + 1][newX - 1] = 0
                 matrix[newY - 1][newX + 1] = 0
                 matrix[newY + 1][newX + 1] = 0
                 matrix[newY][newX - 1] = 0
                 matrix[newY][newX + 1] = 0
             }
 
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
         }else{
            matrix[this.y][this.x] = 0;

            for (let i in lightingArr) {
                if (this.x == lightingArr[i].x && this.y == lightingArr[i].y) {
                    lightingArr.splice(i, 1);
                    break;
                }
            }
         }
       

  
    }

}