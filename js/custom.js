$(function () {
    const main_visual_slide = new Swiper('.main_visual_slide', {
        loop: true,
        parallax: true,
        speed: 1000,

        pagination: {
            el: '.main_visual .page',
            clickable: true,
        },
        navigation: {
            nextEl: '.main_visual .next',
            prevEl: '.main_visual .prev',
        },
    });




    $(function () {
        $(window).on('scroll', function () {
            let sct = $(window).scrollTop();
            if (sct > 0) {
                $('#header').addClass('on');
            } else {
                $('#header').removeClass('on');
            }
        });
    });


});



$(function () {
    const MMS = new Swiper('.main_info_slide', {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 80,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        speed: 5000,

    });

});

$(function () {
    const main_content_slide = new Swiper('.main_content_slide', {
        loop: true,
        slidesPerView: 3.5,
        spaceBetween: 30,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
        },
    });

});


$(function () {
    $('.to_top').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        })
    });
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop(); console.log(sct)

        if (sct > 400) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    });
});


$(function () {
    const lenis = new Lenis({
        autoRaf: true,
    });
});


$(function () {
    AOS.init();

});
