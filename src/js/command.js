var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
})

function showSwiper() {
    let close = document.getElementById("swiper-container");
    let lefbar = document.getElementById("menu");
    function f() {
        close.style.zIndex = 1;
        lefbar.style.zIndex = 2;
    }
    setTimeout(f, 500);
}