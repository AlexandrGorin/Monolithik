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

$(".advantage__content-item").hover(
    function() {
        $('.advantage__content-item').removeClass('active')
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

$(document).ready(function() {
    $('.advantage__content-list').slick({
        arrows: false,
        adaptiveHeight: true,
        slidesToScroll: 1,
        dots: true,
        speed: 500,
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        variableWidth: false,
        centerMode: false,
        mobileFirst: true,
        appendDots: $('.advantage__slider-pag'),
        centerPadding: '0',
        responsive: [{
                breakpoint: 1024,
                settings: 'unslick',
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    initialSlide: 0,
                    infinite: false,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    initialSlide: 0,
                    infinite: false,
                },
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1,
                    initialSlide: 0,
                    infinite: false,
                },
            },

            {
                breakpoint: 320,
                settings: 'Getslick',
                slidesToShow: 1,
                initialSlide: 0,
                infinite: false,
            },
        ],

    });
});