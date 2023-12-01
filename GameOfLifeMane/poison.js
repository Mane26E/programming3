class Poison {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.directions = [];

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

    chooseCell(char, char1, char2, char3) {
        this.getNewCoordinates();
        let found = [];
        for (let i = 0; i < this.directions.length; i++) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == char || matrix[y][x] == char1 || matrix[y][x] == char2 || matrix[y][x] == char3) {
                    console.log("inside if");
                    found.push(this.directions[i])
                }

            }
        }

        return found;
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