function createRandMs() {
    let ms = [];
    for (let i = 0; i < info.length; i++) {
        ms[i] = i;
    }
    for(let i = 0; i < 1000; i++){
        let o = randomInteger(0, info.length - 1);
        let u = randomInteger(0, info.length - 1);
        [ms[o], ms[u]] = [ms[u], ms[o]];
    }
    return ms;
}

function getNameAndRating(num) {
    let ms = [];
    ms[0] = info[num][0]["Название"];
    ms[1] = info[num][0]["Рейтинг"];
    ms[2] = info[num][0]["Крепкость"];
    ms[3] = info[num][0]["Простота приготовления"];
    return ms;
}