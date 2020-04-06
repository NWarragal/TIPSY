//user functions

function showInfoDrink(){ //функция открытия экрана с информацией о напитке
    anim.setDirection(1);
    anim.play();
    body.classList.remove("open");
    body.classList.remove("completed");

    let closebar = document.getElementById("swiper-container");
    let lefbar = document.getElementById("menu");
    closebar.style.zIndex = -1;
    lefbar.style.zIndex = -1;
}

function swiperMove(){ //функция нового свайпа с подменой информации под ним(не готово пока)
	showInfoDrink();	
	function waiting() {
        anim.setDirection(-1);
		anim.play();
		body.classList.add("completed");
    }
	setTimeout(waiting, 500);
	showSwiper();
}

function swiperMovePrev(){//обработчик свайпа влево
	swiperMove();
	//setProperties(2,1,0); //образец работы функции подставления звезд
}

function swiperMoveNext(){//обработчик свайпа вправо
	swiperMove();
	//setProperties(3,4,5); //образец работы функции подставления звезд
}

function setProperties(first, second, third){//функция подмена звезд
	function waiting() {
        putStars(1, first);
		putStars(2, second);
		putStars(3, third);
    }
	setTimeout(waiting, 500);
}

function putStars(numRow, numStars){//функция подмена звезд в колонке(желательно не использовать)
	for(let i = 1; i <= 5; i++){
		let num = "s" + numRow + "-" + i;
		if(i <= numStars){
			let img = document.getElementById(num);
			if(img) img.setAttribute('src', "img/star-png-yellow.png");
		} else {
			let img = document.getElementById(num);
			if(img) img.setAttribute('src', "img/star-png-gray.png");
		}
	}
}