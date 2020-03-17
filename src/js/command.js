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
    function f(){
      close.style.zIndex = 1;
    }
    setTimeout(f, 700);
  }