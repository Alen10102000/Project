function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}




function matrica(m, n) {
    var matrix = [];
    for (var i = 0; i < m; i++) {
        matrix.push([]);
        for (var k = 0; k < n; k++) {
            matrix[i].push(getRandomInt(0, 6));
        }
    }
    return matrix;

}



var matrix = matrica(10, 10);
var side = 50;
var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var mardArr = [];
var fermerArr = [];

function setup() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y)
                grassArr.push(gr)
            }
            else if (matrix[y][x] == 2) {
                var xt = new Xotaker(x, y)
                xotakerArr.push(xt)
            }
            else if (matrix[y][x] == 3) {
                var gsh = new Gishatich(x, y)
                gishatichArr.push(gsh)
            }
            else if (matrix[y][x] == 4) {
                var md = new Mard(x, y)
                mardArr.push(md)
            }
            else if (matrix[y][x] == 5) {
                var fr = new Fermer(x, y)
                fermerArr.push(fr)
            }
        }
    }

    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
}




function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 3) {
                fill("blue");
            }
            else if (matrix[y][x] == 4) {
                fill("orange");
            }
            else if (matrix[y][x] == 5) {
                fill("red");
            }

            rect(x * side, y * side, side, side)

        }
    }

    for (var i in grassArr) {
        grassArr[i].mult()
    }


    for (var i in xotakerArr) {
        xotakerArr[i].eat()
        xotakerArr[i].move()
        xotakerArr[i].mult()
        xotakerArr[i].die()
    }

    for (var i in gishatichArr) {
        gishatichArr[i].eat()
        gishatichArr[i].move()
        gishatichArr[i].mult()
        gishatichArr[i].die()
    }

    for (var i in mardArr) {
        mardArr[i].eat()
        mardArr[i].eat1()
        mardArr[i].eat2()
        mardArr[i].move()
        mardArr[i].mult()
        mardArr[i].die()
    }

    for (var i in fermerArr) {
        fermerArr[i].move()
        fermerArr[i].mult()
        fermerArr[i].die()
    }

}
