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

function getAllInfo(num){
    let ms = [];
    ms[1] = "";
    ms[2] = "";
    ms[0] = "  " + info[num][0]["Название"];
    for(let i = 0; i < info[num].length; i++){
        ms[1] += info[num][i]["Ингредиенты"] + ": ";
        ms[1] += info[num][i]["Обьем ингредиентов"];
        ms[1] += info[num][i]["мера ингредиентов"] + "\n";
    }
    ms[1] = ms[1].split("\n");
    ms[1] = ms[1].join("<br>");
    for(let i = 0; i < info[num].length; i++){
        ms[2] += info[num][i]["Приспособления"] + ": ";
        ms[2] += info[num][i]["количество приспособлений"] + "\n";
    }
    ms[2] = ms[2].split("\n");
    ms[2] = ms[2].join(" <br>");
    ms[3] = info[num][0]["Рецепт приготовления"];
    ms[3] = ms[3].split("\n");
    ms[3] = ms[3].join("<br>");
    ms[4] = info[num][0]["Категории"];
    ms[5] = info[num][0]["Описание"];
    return ms;
}

function getAllNames(){
    let ms = [];
    for(let i = 0; i < info.length; i++){
        ms[i] = info[i][0]["Название"];
    }
    return ms;
}