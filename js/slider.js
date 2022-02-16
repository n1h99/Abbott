// slider
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 20,
    direction: "vertical",
    breakpoints: {
        640: {
            spaceBetween: 30,
            direction: "horizontal",
            slidesPerView: 'auto',
        }
    }
    // centeredSlides: true,
});
