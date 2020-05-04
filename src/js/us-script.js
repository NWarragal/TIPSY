//user functions
let swiperActive = false;
let numb = 6;
let activeLink = 0;
let aboutUs = 0;
let help = 0;
let msNumb;
let currentPos;
let chosenItem = -1;
let activeText;

function onStart() {
    msNumb = createRandMs();
    currentPos = randomInteger(0, msNumb.length - 1);
    setInfoDrink();
    fillDrinkList();
    let list = document.getElementsByClassName("list_drink");
    list[0].style.display = "none";
    list[0].style.width = "100%";
    list[0].style.height = "60%";

    for (let i = 0; i < 18; i++) {
        let but = document.getElementById(i + "");
        but.addEventListener('click', function () {
            activeText = i;
            let info = document.getElementsByClassName('scroll_info');
            let text = document.getElementsByClassName('info_help_text');
            let check = document.getElementById(i + "s");
            let img = document.getElementById("image_quest");
            let src = './img/' + (i + 1) + 's.jpg'
            info[0].classList.remove("anim_arrows_on");
            info[0].classList.add("anim_arrows_off");
            img.classList.remove("anim_arrows_on");
            img.classList.add("anim_arrows_off");
            function waiting2() {
                info[0].style.display = "none";
                check.style.display = "inline";
                img.setAttribute('src', src);
                text[0].classList.remove("anim_arrows_off");
                text[0].classList.add("anim_arrows_on");
                text[0].style.display = "block";
                img.classList.remove("anim_arrows_off");
                img.classList.add("anim_arrows_on");
            }
            setTimeout(waiting2, 500);
        });
    }
}

function showInfoDrink() { //функция открытия экрана с информацией о напитке
    if (activeLink == 0) {
        openWindowDrink();
        setFullInfoDrink(msNumb[currentPos]);
    }
    if (activeLink == 1) {
        if (chosenItem != -1) {
            openWindowDrink();
            setFullInfoDrink(chosenItem);
        }
    }
}

function openWindowDrink() {
    if (!swiperActive) {
        let welcome = document.getElementById("content_welcome");
        welcome.style.display = "none";
        let loading_coctail_title = document.getElementById("loading_coctail_title");
        let card_page = document.getElementById("loaded_block");
        let about_div = document.getElementById("about_title");
        let coctail_info = document.getElementById("coctail_info");
        let help = document.getElementById("help");
        function waiting1() {
            loading_coctail_title.style.display = "inline";
        }
        function waiting2() {
            help.style.display = "none";
            about_div.style.display = "none";
            coctail_info.style.display = "block";
            loading_coctail_title.style.display = "none";
            card_page.style.display = "block";
            card_page.classList.add("animatione");
        }
        setTimeout(waiting1, 200);
        setTimeout(waiting2, randomInteger(10, 30) * 100);
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
    currentPos--;
    setInfoDrink();
}

function swiperMoveNext() {//обработчик свайпа вправо
    swiperActive = true;
    swiperMove();
    putRandomGlass();
    currentPos++;
    setInfoDrink();
}

function setInfoDrink() {
    if (!msNumb) msNumb = createRandMs();
    if (!currentPos) currentPos = randomInteger(0, msNumb.length - 1);
    let information = getNameAndRating(msNumb[currentPos]);
    let name = document.getElementById("name_drink");
    function waiting1() {
        name.textContent = information[0];
        setStarProperties(information[1], information[2], information[3]);
    }
    setTimeout(waiting1, 200);
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
    let welcome = document.getElementById("content_welcome");
    function f() {
        closebar.style.zIndex = 1;
        lefbar.style.zIndex = 2;
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
        listNode[0].classList.add("max_text");
        setTimeout(() => { listNode[0].classList.add("max_text"); }, 700);
        listNode[activeLink].classList.add("min_text");
        activeLink = 0;
        listNode[activeLink].classList.remove("max_text");
        listNode[activeLink].classList.remove("min_text");
        let drinkInfo = document.getElementsByClassName("paper_drink_info");
        let leftArrow = document.getElementsByClassName("swiper-button-prev");
        let rightArrow = document.getElementsByClassName("swiper-button-next");
        let first_property = document.getElementsByClassName("first_property");
        let second_property = document.getElementsByClassName("second_property");
        let third_property = document.getElementsByClassName("third_property");
        let list = document.getElementsByClassName("list_drink");
        let name = document.getElementById("name_drink");
        let but = document.getElementById("find_drink");
        drinkInfo[0].classList.remove("anim_paper_off");
        drinkInfo[0].classList.add("anim_paper_on");
        leftArrow[0].classList.remove("anim_arrows_off");
        leftArrow[0].classList.add("anim_arrows_on");
        rightArrow[0].classList.remove("anim_arrows_off");
        rightArrow[0].classList.add("anim_arrows_on");
        list[0].classList.remove("anim_arrows_on");
        list[0].classList.add("anim_arrows_off");
        name.classList.remove("anim_arrows_on");
        name.classList.add("anim_arrows_off");
        function waiting2() {
            first_property[0].classList.remove("anim_arrows_off");
            first_property[0].classList.add("anim_arrows_on");
            second_property[0].classList.remove("anim_arrows_off");
            second_property[0].classList.add("anim_arrows_on");
            third_property[0].classList.remove("anim_arrows_off");
            third_property[0].classList.add("anim_arrows_on");
            first_property[0].style.display = "flex";
            second_property[0].style.display = "flex";
            third_property[0].style.display = "flex";
            but.textContent = "Узнать больше";
            list[0].style.display = "none";
            name.classList.remove("anim_arrows_off");
            name.classList.add("anim_arrows_on");
            let ms = getNameAndRating(msNumb[currentPos]);
            name.textContent = ms[0];
        }
        setTimeout(waiting2, 500);
    }
}

function openListCoctails() {
    if (activeLink != 1) {
        let listNode = document.getElementsByTagName("li");
        setTimeout(() => { listNode[1].classList.add("max_text"); }, 700);
        listNode[activeLink].classList.add("min_text");
        activeLink = 1;
        listNode[activeLink].classList.remove("max_text");
        listNode[activeLink].classList.remove("min_text");
        let drinkInfo = document.getElementsByClassName("paper_drink_info");
        let leftArrow = document.getElementsByClassName("swiper-button-prev");
        let rightArrow = document.getElementsByClassName("swiper-button-next");
        let first_property = document.getElementsByClassName("first_property");
        let second_property = document.getElementsByClassName("second_property");
        let third_property = document.getElementsByClassName("third_property");
        let list = document.getElementsByClassName("list_drink");
        let name = document.getElementById("name_drink");
        let but = document.getElementById("find_drink");
        drinkInfo[0].classList.remove("anim_paper_on");
        drinkInfo[0].classList.add("anim_paper_off");
        leftArrow[0].classList.remove("anim_arrows_on");
        leftArrow[0].classList.add("anim_arrows_off");
        rightArrow[0].classList.remove("anim_arrows_on");
        rightArrow[0].classList.add("anim_arrows_off");
        first_property[0].classList.remove("anim_arrows_on");
        first_property[0].classList.add("anim_arrows_off");
        second_property[0].classList.remove("anim_arrows_on");
        second_property[0].classList.add("anim_arrows_off");
        third_property[0].classList.remove("anim_arrows_on");
        third_property[0].classList.add("anim_arrows_off");
        name.classList.remove("anim_arrows_on");
        name.classList.add("anim_arrows_off");
        function waiting2() {
            list[0].classList.remove("anim_arrows_off");
            list[0].classList.add("anim_arrows_on");
            but.textContent = "Подробнее";
            first_property[0].style.display = "none";
            second_property[0].style.display = "none";
            third_property[0].style.display = "none";
            list[0].style.display = "block";
            name.textContent = "Выберите коктейль";
            name.classList.remove("anim_arrows_off");
            name.classList.add("anim_arrows_on");
        }
        setTimeout(waiting2, 500);
    }
}

function showAboutUs() { //функция открытия экрана с информацией о нас
    if (aboutUs != 1) {
        let welcome = document.getElementById("content_welcome");
        welcome.style.display = "none";
        let loading_card_title = document.getElementById("loading_card_title");
        let card_page = document.getElementById("loaded_block");
        let useless_div = document.getElementById("coctail_info");
        let about_div = document.getElementById("about_title");
        let help = document.getElementById("help");
        function waiting1() {
            loading_card_title.style.display = "inline";
        }
        function waiting2() {
            help.style.display = "none";
            about_div.style.display = "block";
            useless_div.style.display = "none";
            loading_card_title.style.display = "none";
            card_page.style.display = "block";
            card_page.classList.add("animatione");
        }
        setTimeout(waiting1, 200);
        setTimeout(waiting2, randomInteger(3, 15) * 100);
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

function showHelp() { //функция открытия экрана с экраном помощи
    if (help != 1) {
        let welcome = document.getElementById("content_welcome");
        welcome.style.display = "none";
        let loading_card_title = document.getElementById("loading_card_title");
        let card_page = document.getElementById("loaded_block");
        let useless_div = document.getElementById("coctail_info");
        let about_div = document.getElementById("about_title");
        let help = document.getElementById("help");
        function waiting1() {
            loading_card_title.style.display = "inline";
        }
        function waiting2() {
            help.style.display = "block";
            about_div.style.display = "none";
            useless_div.style.display = "none";
            loading_card_title.style.display = "none";
            card_page.style.display = "block";
            card_page.classList.add("animatione");
        }
        setTimeout(waiting1, 200);
        setTimeout(waiting2, randomInteger(3, 15) * 100);
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

function setFullInfoDrink(curr) {
    let information = getAllInfo(curr);
    let drink_info_name = document.getElementById("drink_info_name");
    drink_info_name.textContent = information[0];
    let drink_info_ingredients = document.getElementById("drink_info_ingredients");
    let ms = information[1].split("<br>");
    drink_info_ingredients.textContent = ms[0];
    for (let i = 1; i < ms.length; i++) {
        let p = document.createElement('p');
        p.textContent = ms[i];
        drink_info_ingredients.appendChild(p);
    }
    let drink_info_fixtures = document.getElementById("drink_info_fixtures");
    ms = information[2].split("<br>");
    drink_info_fixtures.textContent = ms[0];
    for (let i = 1; i < ms.length; i++) {
        let p = document.createElement('p');
        p.textContent = ms[i];
        drink_info_fixtures.appendChild(p);
    }
    let drink_info_recipe = document.getElementById("drink_info_recipe");
    ms = information[3].split("<br>");
    drink_info_recipe.textContent = ms[0];
    for (let i = 1; i < ms.length; i++) {
        let p = document.createElement('p');
        p.textContent = ms[i];
        drink_info_recipe.appendChild(p);
    }
    let drink_info_category = document.getElementById("drink_info_category");
    drink_info_category.textContent = information[4];
    let drink_info_description = document.getElementById("drink_info_description");
    drink_info_description.textContent = information[5];
    let image_cocktail = document.getElementById("image_cocktail");
    let photoname = './db/cockt/' + (curr + 1) + '.jpg'
    image_cocktail.setAttribute('src', photoname);
    image_cocktail.style.width = "30%";
}

function fillDrinkList() {
    let list = document.getElementsByClassName("list_drink");
    let ms = getAllNames();
    for (let i = 0; i < ms.length; i++) {
        let p = document.createElement("p");
        p.textContent = ms[i];
        p.addEventListener("click", function () {
            let pms = p.parentNode.parentNode.getElementsByTagName('p');
            for (let i = 0; i < pms.length; i++) {
                pms[i].classList.remove("active_list");
            }
            p.classList.add("active_list");
            let num = p.parentNode.getAttribute('name');
            chosenItem = parseInt(num.match(/\d+/));
        });
        let div = document.createElement("div");
        div.setAttribute('name', 's' + i);
        div.appendChild(p);
        list[0].appendChild(div);
    }
}

function getBack() {
    let info = document.getElementsByClassName('scroll_info');
    let text = document.getElementsByClassName('info_help_text');
    let check = document.getElementById(activeText + "s");
    let img = document.getElementById("image_quest");
    text[0].classList.remove("anim_arrows_on");
    text[0].classList.add("anim_arrows_off");
    img.classList.remove("anim_arrows_on");
    img.classList.add("anim_arrows_off");
    function waiting2() {
        img.setAttribute('src', './img/question.jpg');
        info[0].style.display = "block";
        check.style.display = "none";
        info[0].classList.remove("anim_arrows_off");
        info[0].classList.add("anim_arrows_on");
        img.classList.remove("anim_arrows_off");
        img.classList.add("anim_arrows_on");
        text[0].style.display = "none";
    }
    setTimeout(waiting2, 500);
    activeText = 0;
}