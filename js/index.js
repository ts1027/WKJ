$(function(){
    var box=$(".nav-middle");
    var btn=$(".navbar-toggle");
    btn.click(function(){
        box.slideToggle(300);
    })

    //    banner
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        spaceBetween: 0,
        loop: true
    });

})