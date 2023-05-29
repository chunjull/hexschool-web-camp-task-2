/* menu */
$(".navbar-btn").click(function () {
    $(".navbar-collapse").toggleClass("roll");
});

/* swiper */
var swiper = new Swiper (" mySwiper", {
    spaceBetween: 30,
    pagination: { el: " swiper-pagination",
    clickable: true,
    },
});