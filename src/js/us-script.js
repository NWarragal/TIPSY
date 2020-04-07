//user functions
let swiperActive = false;
let numb = 6;

function showInfoDrink() { //функция открытия экрана с информацией о напитке
    if (!swiperActive) {
        let welcome = document.getElementById("content_welcome");
        welcome.style.display = "none";
        let loading = document.getElementById("loading");
        let drinkContent = document.getElementById("drink_content");
        function waiting1() {
            loading.style.display = "inline";
        }
        function waiting2() {
            loading.style.display = "none";
            drinkContent.style.display = "block";
            drinkContent.classList.add("animatione");
        }
        setTimeout(waiting1, 200);
        setTimeout(waiting2, 2000);
    }
    anim.setDirection(1);
    anim.play();
    body.classList.remove("open");
    body.classList.remove("completed");

    let closebar = document.getElementById("swiper-container");
    let lefbar = document.getElementById("menu");
    closebar.style.zIndex = -1;
    lefbar.style.zIndex = -1;
    swiperActive = false;
}

function swiperMove() { //функция нового свайпа с подменой информации под ним(не готово пока)
    showInfoDrink();
    function waiting() {
        anim.setDirection(-1);
        anim.play();
        body.classList.add("completed");
        body.classList.remove("open");
    }
    setTimeout(waiting, 500);
    showSwiper();
}

function swiperMovePrev() {//обработчик свайпа влево
    swiperActive = true;
    swiperMove();
    putRandomGlass();
    setStarProperties(randomInteger(), randomInteger(), randomInteger()); //образец работы функции подставления звезд
}

function swiperMoveNext() {//обработчик свайпа вправо
    swiperActive = true;
    swiperMove();
    putRandomGlass();
    setStarProperties(randomInteger(), randomInteger(), randomInteger()); //образец работы функции подставления звезд
}

function setStarProperties(first, second, third) {//функция подмена звезд
    function waiting() {
        putStars(1, first);
        putStars(2, second);
        putStars(3, third);
    }
    setTimeout(waiting, 500);
}

function putRandomGlass() {//рандомное изменение картинки стакана
    while(true){
        let n = randomInteger();
        if(numb == n) continue;
        numb = n;
        break;
    };
    let filename;
    switch (numb) {
        case 0:
            filename = "img/coct_blue.png";
            break;
        case 1:
            filename = "img/coct_cyan.png";
            break;
        case 2:
            filename = "img/coct_darkred.png";
            break;
        case 3:
            filename = "img/coct_green.png";
            break;
        case 4:
            filename = "img/coct_orange.png";
            break;
        case 5:
            filename = "img/coct_pink.png";
            break;
        case 6:
            filename = "img/coct_red.png";
            break;
        case 7:
            filename = "img/coct_white.png";
            break;
        case 8:
            filename = "img/coct_yellow.png";
            break;
        default:
            filename = "img/coct_cyan.png";
            break;
    }
    function waiting() {
        let image_glass = document.getElementById("coctail_left");
        if (image_glass) image_glass.setAttribute('src', filename);
    }
    setTimeout(waiting, 500);
}

function putStars(numRow, numStars) {//функция подмена звезд в колонке(желательно не использовать)
    for (let i = 1; i <= 5; i++) {
        let num = "s" + numRow + "-" + i;
        if (i <= numStars) {
            let img = document.getElementById(num);
            if (img) img.setAttribute('src', "img/star-png-yellow.png");
        } else {
            let img = document.getElementById(num);
            if (img) img.setAttribute('src', "img/star-png-gray.png");
        }
    }
}

//функция сдвига левого сайдбара и блока информации о напитке вперед
//при закрытии окна
function showSwiper() {
    let closebar = document.getElementById("swiper-container");
    let lefbar = document.getElementById("menu");
    function f() {
        closebar.style.zIndex = 1;
        lefbar.style.zIndex = 2;
        let drinkContent = document.getElementById("drink_content");
        drinkContent.style.display = "none";
        let welcome = document.getElementById("content_welcome");
        welcome.style.display = "inline";
    }
    setTimeout(f, 900);
}

function randomInteger(min = 0, max = 4) {// случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}