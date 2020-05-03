//user functions
let swiperActive = false;
let numb = 6;
let activeLink = 0;
let aboutUs = 0;

function showInfoDrink() { //функция открытия экрана с информацией о напитке
    if (!swiperActive) {
        let welcome = document.getElementById("content_welcome");
        welcome.style.display = "none";
        let loading_coctail_title = document.getElementById("loading_coctail_title");
        let card_page = document.getElementById("loaded_block");
        let useless_div = document.getElementById("about_title");
        useless_div.style.display = "none";
        function waiting1() {
            loading_coctail_title.style.display = "inline";
        }
        function waiting2() {
            loading_coctail_title.style.display = "none";
            card_page.style.display = "block";
            card_page.classList.add("animatione");
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
    while (true) {
        let n = randomInteger();
        if (numb == n) continue;
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
        let card_page = document.getElementById("drink_content");
        card_page.style.display = "none";
        let welcome = document.getElementById("content_welcome");
        welcome.style.display = "inline";
    }
    setTimeout(f, 900);
}

function randomInteger(min = 0, max = 4) {// случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function openRandomCoctail() {
    if (activeLink != 0) {
        let listNode = document.getElementsByTagName("li");
        listNode[activeLink].style.fontWeight = 100;
        listNode[0].style.fontWeight = 1000;
        listNode[0].classList.add("max_text");
        setTimeout(() => {listNode[0].classList.add("max_text");}, 700);
        listNode[activeLink].classList.add("min_text");
        activeLink = 0;
        listNode[activeLink].classList.remove("max_text");
        listNode[activeLink].classList.remove("min_text");
        let drinkInfo = document.getElementsByClassName("paper_drink_info");
        let leftArrow = document.getElementsByClassName("swiper-button-prev");
        let rightArrow = document.getElementsByClassName("swiper-button-next");
        drinkInfo[0].classList.remove("anim_paper_off");
        drinkInfo[0].classList.add("anim_paper_on");
        leftArrow[0].classList.remove("anim_arrows_off");
        leftArrow[0].classList.add("anim_arrows_on");
        rightArrow[0].classList.remove("anim_arrows_off");
        rightArrow[0].classList.add("anim_arrows_on");
    }
}

function openListCoctails() {
    if (activeLink != 1) {
        let listNode = document.getElementsByTagName("li");
        listNode[activeLink].style.fontWeight = 100;
        listNode[1].style.fontWeight = 1000;
        setTimeout(() => {listNode[1].classList.add("max_text");}, 700);
        listNode[activeLink].classList.add("min_text");
        activeLink = 1;
        listNode[activeLink].classList.remove("max_text");
        listNode[activeLink].classList.remove("min_text");
        let drinkInfo = document.getElementsByClassName("paper_drink_info");
        let leftArrow = document.getElementsByClassName("swiper-button-prev");
        let rightArrow = document.getElementsByClassName("swiper-button-next");
        drinkInfo[0].classList.remove("anim_paper_on");
        drinkInfo[0].classList.add("anim_paper_off");
        leftArrow[0].classList.remove("anim_arrows_on");
        leftArrow[0].classList.add("anim_arrows_off");
        rightArrow[0].classList.remove("anim_arrows_on");
        rightArrow[0].classList.add("anim_arrows_off");
    }
}

function showAboutUs() { //функция открытия экрана с информацией о нас
    if (aboutUs != 1) {
        let welcome = document.getElementById("content_welcome");
        welcome.style.display = "none";
        let loading_card_title = document.getElementById("loading_card_title");
        let card_page = document.getElementById("loaded_block");
        let useless_div = document.getElementById("coctail_info");
        useless_div.style.display = "none";
        function waiting1() {
            loading_card_title.style.display = "inline";
        }
        
        function waiting2() {
            loading_card_title.style.display = "none";
            card_page.style.display = "block";
            card_page.classList.add("animatione");
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