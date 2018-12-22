var KendaniEak = require("./class.KendaniEak.js");
var item = items[Math.floor(Math.random()*items.length)];

module.exports = class Grass extends KendaniEak {
    mult() {
        var empty = random(this.chooseCell(0))
        this.multiply++
        if (empty && this.multiply > 2) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 1
            var newGr = new Grass(newX, newY)
            grassArr.push(newGr)
        }
    }
}

