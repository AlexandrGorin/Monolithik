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

$(".burger__menu-link.scroll-to").on("click", function(e) {
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 350
    }, 800);
});

$(".main__content-link.scroll-to").on("click", function(e) {
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 60
    }, 800);
});




$(document).ready(function() {
    $('.slider__container-big').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        infinite: false,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnFocus: true,
        lazyLoad: 'ondemand',
        pauseOnHover: true,
        pauseOnDotsHover: true,
        centerMode: false,
        variableWidth: false,
        centerPadding: false,
        rows: 1,
        slidesPerRow: 1,
        asNavFor: ".slider__container-mini",
        appendArrows: $('.hero__slider-arrow'),
        appendDots: $('.hero__slider-dots'),
        responsive: [{
            breakpoint: 900,
            settings: {
                arrows: false,
                dots: false,
                infinite: true,
            },
        }, ],

    });

    $('.slider__container-mini').slick({
        arrows: false,
        dots: false,
        adaptiveHeight: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        speed: 500,
        infinite: false,
        centerPadding: false,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        centerMode: false,
        variableWidth: false,
        rows: 1,
        slidesPerRow: 1,
        asNavFor: ".slider__container-big",
        responsive: [{
            breakpoint: 900,
            settings: 'unslick',
        }, ],

    });
});


$('.slider__container-big').on(`init reInit`, function(event, slick) {
    $('.hero__slider-dots').text(1 + ' / ' + slick.slideCount);
})
$('.slider__container-big').on(`afterChange`, function(event, slick, currentSlide, nextSlide) {
    $('.hero__slider-dots').text(currentSlide + 1 + ' / ' + slick.slideCount);
})


let btnModal = $('.descr__content-btn'),
    modalWindow = $('.hero__modal-window'),
    modalSvg = $('.hero__modal-content svg'),
    modalBod = $('body');

btnModal.on('click', function() {
    modalWindow.toggleClass("open");
    if (modalWindow.hasClass('open')) {
        $('body').css('overflow', 'hidden');
    } else {
        $('body').css('overflow', 'visible');
    }

    modalSvg.on('click', function() {
        modalWindow.removeClass("open");
        if (modalWindow.removeClass('open')) {
            $('body').css('overflow', 'visible');
        }
    })


})

$(".main__content-item").hover(
    function() {
        $('.main__content-item').removeClass('active')
        $(this).addClass('active');
    }

);


function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        }
    });
}

let options = {
    threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
    observer.observe(elm);
}


$(document).ready(function() {
    $('.advantages__slider-contaner ').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        infinite: true,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        centerMode: true,
        variableWidth: false,
        centerPadding: false,
        rows: 1,
        slidesPerRow: 1,
        appendDots: $('.advantages__slider-pag'),

    });
});

$(document).ready(function() {
    $('.formwork__slider-contaner').slick({
        arrows: true,
        adaptiveHeight: false,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        lazyLoad: 'ondemand',
        infinite: true,
        initialSlide: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        centerMode: true,
        centerPadding: '10',
        variableWidth: false,
        appendArrows: $('.formwork__slider-arrow'),
        appendDots: $('.formwork__slider-pag'),
        responsive: [{

            breakpoint: 650,
            settings: {
                dots: true,
                slidesToShow: 1,
                centerMode: false,
            },

        }, ],

    });
});

$(document).ready(function() {
    $('.main__content-list').slick({
        arrows: false,
        adaptiveHeight: false,
        slidesToScroll: 1,
        dots: true,
        speed: 500,
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        variableWidth: false,
        centerMode: true,
        mobileFirst: true,
        centerPadding: '40',
        appendDots: $('.main__content-pag'),
        responsive: [{
                breakpoint: 1024,
                settings: 'unslick',
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    initialSlide: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    initialSlide: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 630,
                settings: {
                    slidesToShow: 2,
                    initialSlide: 1,
                    infinite: true,
                },
            },

            {
                breakpoint: 320,
                settings: 'Getslick',
                slidesToShow: 1,
                initialSlide: 1,
                infinite: true,
            },
        ],

    });
});

$(document).ready(function() {
    $('.sizes__list').slick({
        arrows: false,
        adaptiveHeight: false,
        slidesToShow: 1,
        dots: true,
        slidesToScroll: 1,
        speed: 500,
        infinite: true,
        initialSlide: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        centerMode: true,
        centerPadding: '0',
        variableWidth: false,
        mobileFirst: true,
        appendDots: $('.sizes__slider-pag'),
        rows: 3,
        responsive: [{
                breakpoint: 1024,
                settings: 'unslick',

            },

            {
                breakpoint: 320,
                settings: 'Getslick',

            },
        ],

    });
});






$(document).ready(function() {
    $('.production__slider-contaner').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 500,
        initialSlide: 1,
        infinite: true,
        autoplay: false,
        lazyLoad: 'ondemand',
        autoplaySpeed: 3000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        centerMode: true,
        centerPadding: '0',
        variableWidth: true,
        rows: 2,
        slidesPerRow: 1,
        appendArrows: $('.production__slider-arrow'),
        appendDots: $('.production__slider-pag'),

    });
});




ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("contact__map", {
        center: [45.013390, 38.996612],
        zoom: 17,
    });
    myMap.behaviors.disable('scrollZoom');

    var myPlacemark = new ymaps.Placemark([45.013390, 38.996612], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'images/location.svg',
        iconImageSize: [58, 83],
        iconImageOffset: [-3, -50]
    });
    myMap.geoObjects.add(myPlacemark);

    if ($(window).width() < '1150') {
        myMap.setCenter([45.014498, 38.994411]);
        myMap.behaviors.disable('drag');
    }

    if ($(window).width() <= '650') {
        myMap.setCenter([45.013390, 38.996612]);
        myMap.behaviors.disable('drag');
    }

}





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