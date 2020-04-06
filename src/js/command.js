function showSwiper() {
    let closebar = document.getElementById("swiper-container");
    let lefbar = document.getElementById("menu");
    function f() {
        closebar.style.zIndex = 1;
        lefbar.style.zIndex = 2;
    }
    setTimeout(f, 900);
}