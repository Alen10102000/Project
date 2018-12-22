function random(items) {
    var objResults = {}
    for (var i = 0; i < 1000000; i++) {
        var randomElement = items[Math.floor(Math.random() * items.length)]
        if (objResults[randomElement]) {
            objResults[randomElement]++
        }
        else {
            objResults[randomElement] = 1
        }
    }
    return objResults;
}