$(document).ready(function () {

    $('.projects-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1,
                margin: 0
            },
            700: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });

    $('.homeprograms').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            700: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    if ($(window).width() > 600) {
        $('.remove-programs-owl').click(function (e) {
            e.preventDefault();
            $('.homeprograms').trigger('destroy.owl.carousel');
            //$(this).removeClass('remove-programs-owl');
        });
    }


    $('.slider-team').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            700: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('.slider-homepeople').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 2
            },
            700: {
                items: 2
            },
            1000: {
                items: 10
            }
        }
    });

    $('#header-action').click(function (e) {
        e.preventDefault();
        var menu = $(this).closest('header');
        if (menu.hasClass('active')) {
            menu.removeClass('active');
        } else {
            menu.addClass('active');
        }
    });

    $('.project_prev_pic').click(function(e){
        e.preventDefault();
        var ruta = $(this).find('img').attr('data-path');
        $('#img_toshow').attr('src',ruta);
        $('#modal_prevpic').modal('show');


        setTimeout(function(){
            if ($('#img_toshow').height() > $('#img_toshow').width()){
                $('.modal-dialog').width('50%');
            } else {
                $('.modal-dialog').width('90%');
            }
        }, 400);
    });

});

AOS.init({
    once: true,
});