var express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("."));

app.get("/", function (req, res) {
    res.redirect('index.html');
});

app.listen(3000);
io.on('conection', function (socket) {
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


function matrica(m, n) {
    var matrix = [];
    for (var i = 0; i < m; i++) {
        matrix.push([]);
        for (var k = 0; k < n; k++) {
            matrix[i].push(getRandomInt(0, 5));
        }
    }
    return matrix;

}

matrix = matrica(10, 10);

// var matrix = [
//     [1, 1, 4, 1, 1],
//     [1, 1, 1, 1, 1],
//     [1, 4, 1, 1, 1],
//     [1, 1, 4, 1, 1],
//     [4, 4, 1, 1, 1],
//     [4, 4, 1, 1, 1],
//     [4, 4, 1, 1, 1]
//  ];

grassArr = [];
xotakerArr = [];
gishatichArr = [];
mardArr = [];
fermerArr = [];

Weather = "Summer";
Weatherinit = 1;

var Grass = require("./class.Grass.js");
var Xotaker = require("./class.Xotaker.js");
var Gishatich = require("./class.Gishatich.js");
var Mard = require("./class.Mard.js");
var Fermer = require("./class.Fermer.js");

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

function drawserver() {
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
        // mardArr[i].die()
    }

    for (var i in fermerArr) {
        fermerArr[i].move()
        fermerArr[i].mult()
        fermerArr[i].die()
    }
    io.sockets.emit("matrix", matrix);
}

function draw_weather() {
    Weatherinit++;
    if (Weatherinit == 5) {
        Weatherinit == 1;
    }
    if (Weatherinit == 4) {
        Weatherinit == "Autumn";
    }
    if (Weatherinit == 3) {
        Weatherinit == "Winter";
    }
    if (Weatherinit == 2) {
        Weatherinit == "Spring";
    }
    if (Weatherinit == 1) {
        Weatherinit == "Summer";
    }
    io.sockets.emit("exanak", Weather);
}
setInterval(drawserver, 3000);
setInterval(draw_weather, 3000);      