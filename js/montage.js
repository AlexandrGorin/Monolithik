$(document).ready(function() {
    $('.burger__menu').click(function(event) {
        $('.menu__header-burger').toggleClass('active');
        $('.burger__menu-nav').slideToggle(300);
    })
})


$(document).on('click', 'img', function() {
    $('img').removeClass('active');
    $(this).addClass('active');
});




$(".country__content-link").hover(
    function() {
        $('.country__content-link').removeClass('active')
        $(this).addClass('active');

    }

);

$(".elemen__content-item").hover(
    function() {
        $('.elemen__content-item').removeClass('active')
        $(this).addClass('active');
    }

);


let btnModal1 = $('.footer__btn'),
    modalWindow1 = $('.footer__modal-window'),
    modalSvg1 = $('.footer__modal-content svg'),
    modalBod1 = $('body');

btnModal1.on('click', function() {
    modalWindow1.toggleClass("open");
    if (modalWindow1.hasClass('open')) {
        $('body').css('overflow', 'hidden');
    } else {
        $('body').css('overflow', 'visible');
    }

    modalSvg1.on('click', function() {
        modalWindow1.removeClass("open");
        if (modalWindow1.removeClass('open')) {
            $('body').css('overflow', 'visible');
        }
    })

})