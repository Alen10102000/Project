var socket = io();
var weather = "Summer";
var side = 50;
var m = 50;
var n = 50;



function setup() {

    frameRate(1);
    createCanvas(m * side, n * side);
    background('#acacac');
}


function drawMatrix(matrix) {
    var p = document.getElementById("seasons");
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                if (weather == "Summer") {
                    fill("#1FC513");
                }
                else if (weather == "Autumn") {
                    fill("#76C513");
                }
                else if (weather == "Spring") {
                    fill("#16950A");
                }
                else if (weather == "Winter") {
                    fill("#96C70C");
                }
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("orange");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("red");
                rect(x * side, y * side, side, side);
            }

        }
    }
}
socket.on("matrix", drawMatrix);
socket.on("exanak", drawWeather);
socket.on("exanak", function (w) {
    weather = w;
});

