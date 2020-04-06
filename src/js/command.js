function showSwiper() {
    let close = document.getElementById("swiper-container");
    let lefbar = document.getElementById("menu");
    function f() {
        close.style.zIndex = 1;
        lefbar.style.zIndex = 2;
    }
    setTimeout(f, 500);
}